const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

const POLL_INTERVAL_MS = 2000
const MAX_POLLS = 300

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const headers = {
        ...(await credential.getHeaders()),
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    async function request(path, options = {}) {
        const response = await fetch(`${baseUrl}${path}`, { headers, ...options })
        const text = await response.text()
        let body = {}
        if (text) {
            try {
                body = JSON.parse(text)
            } catch (_) {
                body = { raw: text }
            }
        }
        if (!response.ok) throw new Error(`${options.method || 'GET'} ${path} returned ${response.status}: ${text.slice(0, 1000)}`)
        return body.result || body
    }

    async function tableQuery(table, query, fields) {
        const params = new URLSearchParams({
            sysparm_query: query,
            sysparm_fields: fields,
            sysparm_limit: '20',
            sysparm_display_value: 'false',
        })
        return request(`/api/now/table/${table}?${params}`)
    }

    const suiteRecords = await tableQuery('sys_atf_test_suite', 'name=SSS - Full Regression Suite^active=true', 'sys_id,name')
    if (suiteRecords.length !== 1) throw new Error(`Expected one active SSS regression suite; found ${suiteRecords.length}`)

    const propertyNames = ['sn_atf.runner.enabled', 'sn_atf.schedule.enabled']
    const propertyRecords = await tableQuery('sys_properties', `nameIN${propertyNames.join(',')}`, 'sys_id,name,value')
    if (propertyRecords.length !== propertyNames.length) throw new Error(`Expected ${propertyNames.length} ATF properties; found ${propertyRecords.length}`)

    const disabledProperties = propertyRecords.filter((property) => property.value !== 'true').map((property) => property.name)
    if (disabledProperties.length) throw new Error(`ATF execution is disabled: ${disabledProperties.join(', ')}`)

        const params = new URLSearchParams({ test_suite_sys_id: suiteRecords[0].sys_id })
        const start = await request(`/api/sn_cicd/testsuite/run?${params}`, { method: 'POST', body: '{}' })
        if (String(start.status) === '3') throw new Error(start.error || start.status_detail || 'ATF suite failed to start')
        const progressId = start.links && start.links.progress && start.links.progress.id
        if (!progressId) throw new Error(`ATF suite did not return a progress ID: ${JSON.stringify(start)}`)
        console.log(`Started ${suiteRecords[0].name}: ${progressId}`)

        let progress
        for (let poll = 0; poll < MAX_POLLS; poll += 1) {
            progress = await request(`/api/sn_cicd/progress/${progressId}`)
            console.log(`ATF ${progress.percent_complete || 0}% - ${progress.status_label || 'Pending'}${progress.status_message ? `: ${progress.status_message}` : ''}`)
            if (['2', '3', '4'].includes(String(progress.status))) break
            await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS))
        }
        if (!progress || !['2', '3', '4'].includes(String(progress.status))) throw new Error('ATF suite did not finish within ten minutes')

        const resultId = progress.links && progress.links.results && progress.links.results.id
        if (!resultId) throw new Error(`ATF completion did not include a result ID: ${JSON.stringify(progress)}`)
        const result = await request(`/api/sn_cicd/testsuite/results/${resultId}`)
        console.log(JSON.stringify({
            result_id: resultId,
            suite: result.test_suite_name,
            status: result.test_suite_status || result.status_label,
            duration: result.test_suite_duration,
            passed: result.rolledup_test_success_count,
            failed: result.rolledup_test_failure_count,
            errors: result.rolledup_test_error_count,
            skipped: result.rolledup_test_skip_count,
            result_url: result.links && result.links.results && result.links.results.url,
        }, null, 2))
        if (String(result.status) !== '2' || Number(result.rolledup_test_failure_count) || Number(result.rolledup_test_error_count)) process.exitCode = 1
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
