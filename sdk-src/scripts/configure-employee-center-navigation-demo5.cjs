const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

const EMPLOYEE_CENTER_PORTAL_ID = '70cd9f3b734b13001fdae9c54cf6a72f'
const EMPLOYEE_CENTER_NAV_ID = '5a8cfeff776031105d6a39bd1e5a9988'
const STORE_MENU_ITEM_ID = 'b6d1e06c5a1b4a8c91a9e7f0f01ee50a'
const EMPLOYEE_CENTER_MENU_ID = '493d01365368301056c1ddeeff7b1207'

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const authHeaders = await credential.getHeaders()

    const formResponse = await fetch(`${baseUrl}/sys.scripts.do`, {
        headers: { ...authHeaders, Accept: 'text/html' },
    })
    const html = await formResponse.text()
    if (!formResponse.ok) throw new Error(`Background Scripts form returned ${formResponse.status}`)
    const tokenMatch = html.match(/name=["']sysparm_ck["'][^>]*value=["']([^"']+)/i)
        || html.match(/value=["']([^"']+)["'][^>]*name=["']sysparm_ck["']/i)
    if (!tokenMatch) throw new Error('Could not resolve the ServiceNow form token')

    const script = `(function configureStoreSuppliesNavigation() {
    var item = new GlideRecord('sn_ex_sp_portal_extensible_navigation_item');
    item.addQuery('portal_extensible_navigation', '${EMPLOYEE_CENTER_NAV_ID}');
    item.addQuery('menu', '${STORE_MENU_ITEM_ID}');
    item.setLimit(1);
    item.query();
    var exists = item.next();
    if (!exists) {
        var excludedMenus = [];
        var menu = new GlideRecord('sp_rectangle_menu_item');
        menu.addQuery('sp_rectangle_menu', '${EMPLOYEE_CENTER_MENU_ID}');
        menu.addQuery('sys_id', '!=', '${STORE_MENU_ITEM_ID}');
        menu.query();
        while (menu.next())
            excludedMenus.push(menu.getUniqueValue());

        var inputs = {
            portalId: '${EMPLOYEE_CENTER_PORTAL_ID}',
            portalExtensibleNavigationId: '${EMPLOYEE_CENTER_NAV_ID}'
        };
        var added = new sn_ex_sp.PortalExtensibleNavigationUtil().fetchAndSyncMenuHierarchy(inputs, 1, 150, true, excludedMenus);
        gs.print('Store supplies navigation synchronized=' + added);

        item = new GlideRecord('sn_ex_sp_portal_extensible_navigation_item');
        item.addQuery('portal_extensible_navigation', '${EMPLOYEE_CENTER_NAV_ID}');
        item.addQuery('menu', '${STORE_MENU_ITEM_ID}');
        item.setLimit(1);
        item.query();
        if (!item.next())
            throw 'Employee Center did not create the Store supplies navigation item';
    }
    item.setValue('menu_title', 'Store supplies');
    item.setValue('render_as', 'menu');
    item.setValue('position', 'left');
    item.setValue('submenu_type', 'standard');
    item.setValue('browse_button', false);
    item.setValue('order', 150);
    item.setValue('active', true);
    var result = item.update();
    gs.print('Store supplies navigation result=' + result + '; error=' + (item.getLastErrorMessage() || 'none'));
})();`

    const body = new URLSearchParams({
        script,
        runscript: 'Run script',
        sys_scope: 'global',
        quota_managed_transaction: 'on',
        sysparm_ck: tokenMatch[1],
    })
    const runResponse = await fetch(`${baseUrl}/sys.scripts.do`, {
        method: 'POST',
        headers: {
            ...authHeaders,
            Accept: 'text/html',
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-UserToken': tokenMatch[1],
        },
        body,
    })
    const resultHtml = await runResponse.text()
    if (!runResponse.ok) throw new Error(`Background Scripts returned ${runResponse.status}`)
    if (resultHtml.includes('Script execution error')) {
        throw new Error(resultHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000))
    }
    const executionText = resultHtml.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')
    const executionMatch = executionText.match(/Store supplies navigation result=.*?(?=\[0:|$)/)
    if (executionMatch) console.log(executionMatch[0].trim())

    const params = new URLSearchParams({
        sysparm_query: `portal_extensible_navigation=${EMPLOYEE_CENTER_NAV_ID}^menu=${STORE_MENU_ITEM_ID}^active=true`,
        sysparm_fields: 'sys_id,menu_title,portal_extensible_navigation,menu,navigation_item_type,render_as,position,order,active,sys_scope',
        sysparm_display_value: 'false',
        sysparm_limit: '1',
    })
    const verifyResponse = await fetch(`${baseUrl}/api/now/table/sn_ex_sp_portal_extensible_navigation_item?${params}`, {
        headers: { ...authHeaders, Accept: 'application/json' },
    })
    const verifyText = await verifyResponse.text()
    if (!verifyResponse.ok) throw new Error(`Navigation verification returned ${verifyResponse.status}: ${verifyText.slice(0, 500)}`)
    const records = JSON.parse(verifyText).result || []
    if (records.length !== 1) throw new Error('Store supplies navigation item was not created')
    console.log(JSON.stringify(records[0], null, 2))
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
