const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

const APP_SYS_ID = 'ee4e977887264b907c2dfdd5dabb354b'
const REPO_CONFIG_SYS_ID = '6cc454c9876a83d02cc4a9373cbb3552'

// Review the incoming Git diff before running this operation. ServiceNow reloads
// the repository's current application snapshot; redeploy the SDK package before
// exporting instance-generated metadata when the snapshot predates SDK changes.

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const authHeaders = await credential.getHeaders()
    const apiHeaders = { ...authHeaders, Accept: 'application/json', 'Content-Type': 'application/json' }
    const preferenceParams = new URLSearchParams({
        sysparm_query: 'name=apps.current_app^user=javascript:gs.getUserID()',
        sysparm_fields: 'sys_id,value',
        sysparm_limit: '2',
        sysparm_display_value: 'false',
    })
    const preferenceResponse = await fetch(`${baseUrl}/api/now/table/sys_user_preference?${preferenceParams}`, { headers: apiHeaders })
    const preferenceText = await preferenceResponse.text()
    if (!preferenceResponse.ok) throw new Error(`Application preference query returned ${preferenceResponse.status}: ${preferenceText.slice(0, 500)}`)
    const preferences = JSON.parse(preferenceText).result || []
    if (preferences.length !== 1) throw new Error(`Expected one apps.current_app preference; found ${preferences.length}`)
    const preference = preferences[0]
    const originalApplication = preference.value

    const switchResponse = await fetch(`${baseUrl}/api/now/table/sys_user_preference/${preference.sys_id}`, {
        method: 'PATCH', headers: apiHeaders, body: JSON.stringify({ value: APP_SYS_ID }),
    })
    if (!switchResponse.ok) throw new Error(`Could not switch application context: ${switchResponse.status} ${(await switchResponse.text()).slice(0, 500)}`)
    console.log(`Switched application context to ${APP_SYS_ID}`)

    try {
        const formResponse = await fetch(`${baseUrl}/sys_repo_config.do?sys_id=${REPO_CONFIG_SYS_ID}`, {
            headers: { ...authHeaders, Accept: 'text/html' },
        })
        const html = await formResponse.text()
        if (!formResponse.ok) throw new Error(`Source-control form returned ${formResponse.status}`)
        const tokenMatch = html.match(/name=["']sysparm_ck["'][^>]*value=["']([^"']+)/i)
            || html.match(/value=["']([^"']+)["'][^>]*name=["']sysparm_ck["']/i)
            || html.match(/(?:var\s+)?g_ck\s*=\s*["']([^"']+)/)
        if (!tokenMatch) throw new Error('Could not resolve the ServiceNow form token for source control')

        const body = new URLSearchParams({
            sysparm_processor: 'SourceControlAjax',
            sysparm_name: 'start',
            sysparm_ajax_processor_type: 'import',
            sysparm_ajax_processor_sys_app_id: APP_SYS_ID,
            sysparm_ajax_processor_sys_repo_config_id: REPO_CONFIG_SYS_ID,
            sysparm_ajax_processor_even_if_has_outgoing_changes: 'true',
            sysparm_ajax_processor_import_with_disk_diff: 'false',
            sysparm_scope: APP_SYS_ID,
            sysparm_transaction_scope: APP_SYS_ID,
            sysparm_ck: tokenMatch[1],
        })
        const response = await fetch(`${baseUrl}/xmlhttp.do`, {
            method: 'POST',
            headers: { ...authHeaders, Accept: 'application/xml,text/xml', 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        })
        const xml = await response.text()
        if (!response.ok) throw new Error(`SourceControlAjax returned ${response.status}: ${xml.slice(0, 1000)}`)
        const progressMatch = xml.match(/answer=["']([a-f0-9]{32})["']/i) || xml.match(/<answer>([a-f0-9]{32})<\/answer>/i)
        if (!progressMatch) throw new Error(`Source control did not return a progress ID: ${xml.slice(0, 1000)}`)
        const progressId = progressMatch[1]
        console.log(`Started ServiceNow Apply Remote Changes: ${progressId}`)

        let tracker
        for (let poll = 0; poll < 300; poll += 1) {
            const params = new URLSearchParams({
                sysparm_fields: 'sys_id,state,percent_complete,message,result,source,sys_updated_on',
                sysparm_display_value: 'false',
            })
            const trackerResponse = await fetch(`${baseUrl}/api/now/table/sys_execution_tracker/${progressId}?${params}`, { headers: apiHeaders })
            const text = await trackerResponse.text()
            if (!trackerResponse.ok) throw new Error(`Progress query returned ${trackerResponse.status}: ${text.slice(0, 1000)}`)
            tracker = JSON.parse(text).result
            console.log(`Source apply ${tracker.percent_complete || 0}% - ${tracker.state || 'pending'}${tracker.message ? `: ${tracker.message}` : ''}`)
            const state = String(tracker.state || '').toLowerCase()
            if (Number(tracker.percent_complete) >= 100 || ['2', '3', '4', 'complete', 'completed', 'success', 'successful', 'error', 'failed', 'cancelled', 'canceled'].includes(state)) break
            await new Promise((resolve) => setTimeout(resolve, 2000))
        }
        if (!tracker || Number(tracker.percent_complete) < 100) throw new Error(`Source apply did not complete: ${JSON.stringify(tracker)}`)
        const state = String(tracker.state || '').toLowerCase()
        if (['3', '4', 'error', 'failed', 'cancelled', 'canceled'].includes(state)) throw new Error(`Source apply failed: ${JSON.stringify(tracker)}`)
        console.log(JSON.stringify({ progress_id: progressId, state: tracker.state, message: tracker.message, result: tracker.result }, null, 2))
    } finally {
        const restoreResponse = await fetch(`${baseUrl}/api/now/table/sys_user_preference/${preference.sys_id}`, {
            method: 'PATCH', headers: apiHeaders, body: JSON.stringify({ value: originalApplication }),
        })
        if (!restoreResponse.ok) throw new Error(`Could not restore application context: ${restoreResponse.status} ${(await restoreResponse.text()).slice(0, 500)}`)
        console.log(`Restored application context to ${originalApplication}`)
    }
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
