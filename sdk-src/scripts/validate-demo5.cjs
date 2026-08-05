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
        'x_sln_store_suppli_store_supply_model',
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
    await check('Fourteen application tables', 'sys_db_object', `nameIN${tableNames.join(',')}`, 14)
    await check('Six application roles', 'sys_user_role', `nameIN${roleNames.join(',')}`, 6)
    await check('Application ACLs', 'sys_security_acl', 'nameSTARTSWITHx_sln_store_suppli_', { min: 29 })
    await check('Store Supply Model child table', 'sys_db_object', 'name=x_sln_store_suppli_store_supply_model^super_class.name=cmdb_consumable_product_model', 1)
    await check('Store supply reference isolation', 'sys_dictionary', 'nameINx_sln_store_suppli_supply_supplier,x_sln_store_suppli_supply_line,x_sln_store_suppli_supply_receipt^element=supply_model^reference=x_sln_store_suppli_store_supply_model', 3)
    await check('Request and Issue record producers', 'sc_cat_item_producer', `nameIN${producerNames.join(',')}`, 2)
    await check('Record producer supply picker isolation', 'item_option_new', `cat_item.nameIN${producerNames.join(',')}^name=supplyModel^reference=x_sln_store_suppli_store_supply_model`, 2)
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

    await check('Coffeehouse demo stores', 'x_sln_store_suppli_store', 'store_numberSTARTSWITHDEMO-^nameSTARTSWITHDEMO Coffeehouse', 6)
    await check('Coffeehouse store formats', 'sys_choice', 'name=x_sln_store_suppli_store^element=store_format^valueINcafe,drive_thru,pickup_only,reserve,licensed_kiosk^inactive=false', 5)
    await check('Demo stockrooms', 'alm_stockroom', 'nameSTARTSWITHDEMO Coffeehouse', 6)
    await check('Demo supplier accounts', 'customer_account', 'nameSTARTSWITHDemo ', 4)
    await check('Direct demo manufacturer companies', 'core_company', 'nameSTARTSWITHDemo ^sys_class_name=core_company^manufacturer=true', 4)
    await check('Demo supplier contacts', 'customer_contact', 'user_nameSTARTSWITHsss.demo.supplier.', 4)
    await check('Coffeehouse Store Supply Models', 'x_sln_store_suppli_store_supply_model', 'model_numberSTARTSWITHDEMO-COFFEE-^demo_data=true', 24)
    await check('Coffeehouse supply categories', 'x_sln_store_suppli_store_supply_model', 'store_categoryINoperations,packaging,beverage_service,ingredients,cleaning,safety^demo_data=true', 24)
    await check('Native Store Supply model categories', 'cmdb_model_category', 'nameSTARTSWITHStore Supply - ^asset_class=alm_consumable^product_model_class=x_sln_store_suppli_store_supply_model', 6)
    await check('Demo model manufacturer references', 'x_sln_store_suppli_store_supply_model', 'demo_data=true^manufacturer.manufacturer=true^manufacturer.sys_class_name=core_company', 24)
    await check('No customer accounts used as manufacturers', 'x_sln_store_suppli_store_supply_model', 'demo_data=true^manufacturer.sys_class_name=customer_account', 0)
    await check('Demo model category assignments', 'x_sln_store_suppli_store_supply_model', 'demo_data=true^cmdb_model_categoryISNOTEMPTY', 24)
    await check('Legacy base-table demo models removed', 'cmdb_consumable_product_model', 'sys_idIN824953bc0dd347cd97fb24655814c003,ff445d67da494258bc873d5dcbcd8b49,f3b49069a9764bc69f85b860f60fcc33', 0)
    await check('Demo store supply inventory', 'alm_consumable', 'display_nameSTARTSWITHDEMO ^model.sys_class_name=x_sln_store_suppli_store_supply_model', 51)
    await check('Filtered Store Supply application modules', 'sys_app_module', 'titleINStore Supply Models,Store Supply Inventory^nameINx_sln_store_suppli_store_supply_model,alm_consumable', 2)
    await check('Demo store-supplier relationships', 'x_sln_store_suppli_store_supplier', 'demo_data=true', 24)
    await check('Demo supply-supplier mappings', 'x_sln_store_suppli_supply_supplier', 'demo_data=true^active=true', 24)

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
