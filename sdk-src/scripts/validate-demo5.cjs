const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const headers = { ...(await credential.getHeaders()), Accept: 'application/json' }

    async function query(table, encodedQuery, fields = 'sys_id', limit = 1000) {
        const params = new URLSearchParams({
            sysparm_query: encodedQuery,
            sysparm_fields: fields,
            sysparm_limit: String(limit),
            sysparm_display_value: 'false',
        })
        const response = await fetch(`${baseUrl}/api/now/table/${table}?${params}`, { headers })
        const body = await response.text()
        if (!response.ok) throw new Error(`${table} returned ${response.status}: ${body.slice(0, 300)}`)
        return JSON.parse(body).result || []
    }

    const results = []
    async function check(label, table, encodedQuery, expected, fields = 'sys_id') {
        try {
            const records = await query(table, encodedQuery, fields)
            const ok = typeof expected === 'number' ? records.length === expected : records.length >= expected.min
            results.push({ label, ok, actual: records.length, expected })
            return records
        } catch (error) {
            results.push({ label, ok: false, actual: 'ERROR', expected, error: error.message })
            return []
        }
    }

    const tableNames = [
        'x_sln_store_suppli_store',
        'x_sln_store_suppli_store_member',
        'x_sln_store_suppli_store_supplier',
        'x_sln_store_suppli_supply_supplier',
        'x_sln_store_suppli_supply_case',
        'x_sln_store_suppli_supply_request',
        'x_sln_store_suppli_supply_issue',
        'x_sln_store_suppli_supply_line',
        'x_sln_store_suppli_supplier_task',
        'x_sln_store_suppli_task_line',
        'x_sln_store_suppli_supply_receipt',
        'x_sln_store_suppli_case_escalation',
        'x_sln_store_suppli_survey_ledger',
    ]
    const roleNames = [
        'x_sln_store_suppli.store_associate',
        'x_sln_store_suppli.district_manager',
        'x_sln_store_suppli.supplier_agent',
        'x_sln_store_suppli.support_agent',
        'x_sln_store_suppli.support_manager',
        'x_sln_store_suppli.admin',
    ]
    const producerNames = ['Submit Store Supply Request', 'Report Store Supply Issue']

    await check('Application version 1.0.0', 'sys_app', 'sys_id=ee4e977887264b907c2dfdd5dabb354b^version=1.0.0', 1)
    await check('Customer Service plugin active', 'v_plugin', 'id=com.sn_customerservice^active=active', 1)
    await check('Employee Center capability', 'sp_portal', 'url_suffix=esc', 1)
    await check('Email Interaction for CSM active', 'sys_store_app', 'scope=sn_eaai_csm^active=true', 1)
    await check('Thirteen application tables', 'sys_db_object', `nameIN${tableNames.join(',')}`, 13)
    await check('Six application roles', 'sys_user_role', `nameIN${roleNames.join(',')}`, 6)
    await check('Application ACLs', 'sys_security_acl', 'nameSTARTSWITHx_sln_store_suppli_', { min: 25 })
    await check('Request and Issue record producers', 'sc_cat_item_producer', `nameIN${producerNames.join(',')}`, 2)
    await check('Response and resolution SLAs', 'contract_sla', 'collection=x_sln_store_suppli_supply_case^active=true', 2)
    await check('Registered application events', 'sysevent_register', 'event_nameSTARTSWITHx_sln_store_suppli.', 10)
    await check('Application email notifications', 'sysevent_email_action', 'nameSTARTSWITHStore Supply^ORnameSTARTSWITHSupplier Task^ORnameSTARTSWITHDistrict Manager', { min: 10 })
    await check('Inbound email actions', 'sysevent_in_email_action', 'nameSTARTSWITHCreate Store Supply^ORnameSTARTSWITHUpdate Store Supply', 2)
    await check('Application properties', 'sys_properties', 'nameSTARTSWITHx_sln_store_suppli.', 6)
    await check('Business schedule spans', 'cmn_schedule_span', 'schedule=a1000000000000000000000000000002', 5)
    await check('CSM Case Types capability table', 'sys_db_object', 'name=sn_case_type', 1)
    await check('Supplier Service Portal', 'sp_portal', 'url_suffix=store_suppliers', 1)
    await check('Internal and supplier portal pages', 'sp_page', 'idINstore-supply-internal,store-supply-supplier', 2)
    await check('Configurable Workspace', 'sys_ux_page_registry', 'title=Store Supplier Support', 1)
    await check('Automated Test Framework tests', 'sys_atf_test', 'nameSTARTSWITHSSS -', 6)
    await check('Automated Test Framework regression suite', 'sys_atf_test_suite', 'name=SSS - Full Regression Suite^active=true', 1)
    await check('Workspace dashboard', 'par_dashboard', 'name=Store Supplier Support Operations', 1)

    await check('Demo stores', 'x_sln_store_suppli_store', 'store_numberSTARTSWITHDEMO-', 2)
    await check('Demo stockrooms', 'alm_stockroom', 'nameSTARTSWITHDEMO ', 2)
    await check('Demo supplier accounts', 'customer_account', 'nameSTARTSWITHDemo ', 2)
    await check('Demo supplier contacts', 'customer_contact', 'user_nameSTARTSWITHsss.demo.supplier.', 2)
    await check('Demo consumable models', 'cmdb_consumable_product_model', 'model_numberSTARTSWITHDEMO-', 3)
    await check('Demo consumable inventory', 'alm_consumable', 'display_nameSTARTSWITHDEMO ', 3)
    await check('Demo store-supplier relationships', 'x_sln_store_suppli_store_supplier', 'demo_data=true', 3)

    await check('Old Incident business rule deleted', 'sys_script', 'sys_id=cf361fda6b5c4524864125f1b534b589', 0)
    await check('Old Incident client script deleted', 'sys_script_client', 'sys_id=29c6decf27be437f8c3656f235ac84e9', 0)
    await check('Old generated server module deleted', 'sys_module', 'sys_id=eb41889642b643d98e2f7ffee2b6a6ec', 0)
    await check('Old generated package module deleted', 'sys_module', 'sys_id=c331017de83947bdb4872cc8647827be', 0)
    await check('Old generated BOM module deleted', 'sys_module', 'sys_id=1b09be7557a24209be1a7c827c172f3d', 0)

    const failures = results.filter((result) => !result.ok)
    for (const result of results) {
        const expectation = typeof result.expected === 'number' ? result.expected : `>=${result.expected.min}`
        console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.label}: ${result.actual} (expected ${expectation})${result.error ? ` - ${result.error}` : ''}`)
    }
    console.log(`SUMMARY ${results.length - failures.length}/${results.length} checks passed`)
    if (failures.length) process.exitCode = 1
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
