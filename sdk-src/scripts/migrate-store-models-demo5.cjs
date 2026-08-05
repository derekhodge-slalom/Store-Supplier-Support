const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

const legacyModelIds = [
    '824953bc0dd347cd97fb24655814c003',
    'ff445d67da494258bc873d5dcbcd8b49',
    'f3b49069a9764bc69f85b860f60fcc33',
]

const referenceChecks = [
    { table: 'alm_consumable', field: 'model' },
    { table: 'x_sln_store_suppli_supply_supplier', field: 'supply_model' },
    { table: 'x_sln_store_suppli_supply_line', field: 'supply_model' },
    { table: 'x_sln_store_suppli_supply_receipt', field: 'supply_model' },
]

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const headers = { ...(await credential.getHeaders()), Accept: 'application/json' }
    const idQuery = legacyModelIds.join(',')

    for (const { table, field } of referenceChecks) {
        const params = new URLSearchParams({
            sysparm_query: `${field}IN${idQuery}`,
            sysparm_fields: 'sys_id',
            sysparm_limit: '1',
        })
        const response = await fetch(`${baseUrl}/api/now/table/${table}?${params}`, { headers })
        const body = await response.text()
        if (!response.ok) throw new Error(`${table} reference check returned ${response.status}: ${body.slice(0, 300)}`)
        if ((JSON.parse(body).result || []).length) throw new Error(`Refusing cleanup: ${table}.${field} still references a legacy model`)
    }

    let removed = 0
    for (const sysId of legacyModelIds) {
        const response = await fetch(`${baseUrl}/api/now/table/cmdb_consumable_product_model/${sysId}`, {
            method: 'DELETE', headers,
        })
        if (response.status === 204 || response.status === 200) removed++
        else if (response.status !== 404) throw new Error(`Delete ${sysId} returned ${response.status}: ${(await response.text()).slice(0, 300)}`)
    }

    console.log(`Legacy model migration complete: ${removed} removed, ${legacyModelIds.length - removed} already absent`)
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
