import '@servicenow/sdk/global'
import { Acl, Role } from '@servicenow/sdk/core'

export const storeAssociateRole = Role({
    $id: Now.ID['store_associate_role'],
    name: 'x_sln_store_suppli.store_associate',
    description: 'Internal store associate access to submit and track cases for authorized stores.',
})

export const districtManagerRole = Role({
    $id: Now.ID['district_manager_role'],
    name: 'x_sln_store_suppli.district_manager',
    description: 'District manager access to managed stores and Store Supply Request approvals.',
    containsRoles: [storeAssociateRole, 'approver_user'],
})

export const supplierAgentRole = Role({
    $id: Now.ID['supplier_agent_role'],
    name: 'x_sln_store_suppli.supplier_agent',
    description: 'Supplier contact access to authorized intake and released supplier tasks.',
    containsRoles: ['sn_customerservice.customer'],
})

export const supportAgentRole = Role({
    $id: Now.ID['support_agent_role'],
    name: 'x_sln_store_suppli.support_agent',
    description: 'Store Supplier Support agent access to cases, routing, receipts, and collaboration.',
    containsRoles: ['sn_customerservice_agent', 'sn_customerservice.csm_workspace_user', 'knowledge'],
})

export const supportManagerRole = Role({
    $id: Now.ID['support_manager_role'],
    name: 'x_sln_store_suppli.support_manager',
    description: 'Store Supplier Support manager access to escalations, approvals, and analytics.',
    containsRoles: [supportAgentRole, 'sn_customerservice_manager', 'report_admin'],
})

export const applicationAdminRole = Role({
    $id: Now.ID['application_admin_role'],
    name: 'x_sln_store_suppli.admin',
    description: 'Application administrator for Store Supplier Support.',
    containsRoles: [supportManagerRole],
    scopedAdmin: true,
})

export const internalNavigationRoles = [supportAgentRole, supportManagerRole, applicationAdminRole]
export const allApplicationRoles = [storeAssociateRole, districtManagerRole, supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole]
const supportRoles = [supportAgentRole, supportManagerRole, applicationAdminRole]

const caseReadScript = `
answer = (function () {
    if (gs.hasRole('x_sln_store_suppli.support_agent')) return true;
    var userId = gs.getUserID();
    var storeId = current.getValue('store');
    if (gs.hasRole('x_sln_store_suppli.store_associate')) {
        var member = new GlideRecord('x_sln_store_suppli_store_member');
        member.addQuery('store', storeId);
        member.addQuery('user', userId);
        member.addQuery('active', true);
        member.setLimit(1);
        member.query();
        if (member.hasNext()) return true;
        var store = new GlideRecord('x_sln_store_suppli_store');
        if (store.get(storeId) && store.getValue('district_manager') === userId) return true;
    }
    if (gs.hasRole('x_sln_store_suppli.supplier_agent')) {
        var account = '';
        var contact = new GlideRecord('customer_contact');
        if (contact.get(userId) && contact.isValidField('account')) account = contact.getValue('account');
        if (!account) {
            var user = new GlideRecord('sys_user');
            if (user.get(userId)) account = user.getValue('company');
        }
        if (!account) return false;
        var relationship = new GlideRecord('x_sln_store_suppli_store_supplier');
        relationship.addQuery('store', storeId);
        relationship.addQuery('supplier_account', account);
        relationship.addQuery('active', true);
        relationship.setLimit(1);
        relationship.query();
        return relationship.hasNext() && current.getValue('originating_supplier') === account;
    }
    return false;
})();`

const storeReadScript = `
answer = (function () {
    if (gs.hasRole('x_sln_store_suppli.support_agent')) return true;
    var userId = gs.getUserID();
    if (gs.hasRole('x_sln_store_suppli.store_associate')) {
        if (current.getValue('district_manager') === userId) return true;
        var member = new GlideRecord('x_sln_store_suppli_store_member');
        member.addQuery('store', current.getUniqueValue());
        member.addQuery('user', userId);
        member.addQuery('active', true);
        member.setLimit(1);
        member.query();
        if (member.hasNext()) return true;
    }
    if (gs.hasRole('x_sln_store_suppli.supplier_agent')) {
        var account = '';
        var contact = new GlideRecord('customer_contact');
        if (contact.get(userId)) account = contact.getValue('account');
        if (!account) {
            var user = new GlideRecord('sys_user');
            if (user.get(userId)) account = user.getValue('company');
        }
        var relationship = new GlideRecord('x_sln_store_suppli_store_supplier');
        relationship.addQuery('store', current.getUniqueValue());
        relationship.addQuery('supplier_account', account);
        relationship.addQuery('active', true);
        relationship.setLimit(1);
        relationship.query();
        return relationship.hasNext();
    }
    return false;
})();`

const childReadScript = `
answer = (function () {
    if (gs.hasRole('x_sln_store_suppli.support_agent')) return true;
    var caseId = current.getValue('parent_case');
    if (!caseId && current.isValidField('supply_line')) {
        var line = new GlideRecord('x_sln_store_suppli_supply_line');
        if (line.get(current.getValue('supply_line'))) caseId = line.getValue('parent_case');
    }
    if (!caseId) return false;
    var parent = new GlideRecord('x_sln_store_suppli_supply_case');
    if (!parent.get(caseId)) return false;
    var userId = gs.getUserID();
    if (gs.hasRole('x_sln_store_suppli.store_associate')) {
        var member = new GlideRecord('x_sln_store_suppli_store_member');
        member.addQuery('store', parent.getValue('store'));
        member.addQuery('user', userId);
        member.addQuery('active', true);
        member.setLimit(1);
        member.query();
        return member.hasNext() || parent.store.district_manager.toString() === userId;
    }
    if (gs.hasRole('x_sln_store_suppli.supplier_agent')) {
        var account = '';
        var contact = new GlideRecord('customer_contact');
        if (contact.get(userId)) account = contact.getValue('account');
        if (!account) return false;
        return parent.getValue('originating_supplier') === account;
    }
    return false;
})();`

const supplierTaskScript = `
answer = (function () {
    if (gs.hasRole('x_sln_store_suppli.support_agent')) return true;
    if (!gs.hasRole('x_sln_store_suppli.supplier_agent') || current.getValue('released') !== '1') return false;
    var userId = gs.getUserID();
    var account = '';
    var contact = new GlideRecord('customer_contact');
    if (contact.get(userId)) account = contact.getValue('account');
    if (!account) {
        var user = new GlideRecord('sys_user');
        if (user.get(userId)) account = user.getValue('company');
    }
    return !!account && current.getValue('supplier_account') === account;
})();`

Acl({
    $id: Now.ID['case_create_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', operation: 'create',
    roles: allApplicationRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_read_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', operation: 'read',
    roles: allApplicationRoles, script: caseReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_delete_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', operation: 'delete',
    roles: [applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_comments_external_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', field: 'comments', operation: 'write',
    roles: allApplicationRoles, script: caseReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_rating_external_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', field: 'service_rating', operation: 'write',
    roles: allApplicationRoles, script: caseReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_feedback_external_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', field: 'service_feedback', operation: 'write',
    roles: allApplicationRoles, script: caseReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_work_notes_support_read_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', field: 'work_notes', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['case_work_notes_support_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_case', field: 'work_notes', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['store_read_acl'], type: 'record', table: 'x_sln_store_suppli_store', operation: 'read',
    roles: allApplicationRoles, script: storeReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_create_acl'], type: 'record', table: 'x_sln_store_suppli_store', operation: 'create',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_write_acl'], type: 'record', table: 'x_sln_store_suppli_store', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_delete_acl'], type: 'record', table: 'x_sln_store_suppli_store', operation: 'delete',
    roles: [applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['store_supply_model_read_acl'], type: 'record', table: 'x_sln_store_suppli_store_supply_model', operation: 'read',
    roles: allApplicationRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_supply_model_create_acl'], type: 'record', table: 'x_sln_store_suppli_store_supply_model', operation: 'create',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_supply_model_write_acl'], type: 'record', table: 'x_sln_store_suppli_store_supply_model', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_supply_model_delete_acl'], type: 'record', table: 'x_sln_store_suppli_store_supply_model', operation: 'delete',
    roles: [applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['supply_line_read_acl'], type: 'record', table: 'x_sln_store_suppli_supply_line', operation: 'read',
    roles: allApplicationRoles, script: childReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supply_line_create_acl'], type: 'record', table: 'x_sln_store_suppli_supply_line', operation: 'create',
    roles: allApplicationRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supply_line_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_line', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['supplier_task_read_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', operation: 'read',
    roles: [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole], script: supplierTaskScript,
    adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supplier_task_create_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', operation: 'create',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supplier_task_write_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', operation: 'write',
    roles: [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole], script: supplierTaskScript,
    adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supplier_notes_read_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', field: 'supplier_notes', operation: 'read',
    roles: [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole], script: supplierTaskScript,
    adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supplier_notes_write_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', field: 'supplier_notes', operation: 'write',
    roles: [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole], script: supplierTaskScript,
    adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supplier_task_work_notes_acl'], type: 'record', table: 'x_sln_store_suppli_supplier_task', field: 'work_notes', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['receipt_read_acl'], type: 'record', table: 'x_sln_store_suppli_supply_receipt', operation: 'read',
    roles: [storeAssociateRole, districtManagerRole, supportAgentRole, supportManagerRole, applicationAdminRole], script: childReadScript, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['receipt_create_acl'], type: 'record', table: 'x_sln_store_suppli_supply_receipt', operation: 'create',
    roles: [storeAssociateRole, districtManagerRole, supportAgentRole, supportManagerRole, applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['receipt_write_acl'], type: 'record', table: 'x_sln_store_suppli_supply_receipt', operation: 'write',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['receipt_delete_acl'], type: 'record', table: 'x_sln_store_suppli_supply_receipt', operation: 'delete',
    roles: [applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})

Acl({
    $id: Now.ID['configuration_tables_acl'], type: 'record', table: 'x_sln_store_suppli_store_member', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['store_supplier_config_acl'], type: 'record', table: 'x_sln_store_suppli_store_supplier', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['supply_supplier_config_acl'], type: 'record', table: 'x_sln_store_suppli_supply_supplier', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['escalation_read_acl'], type: 'record', table: 'x_sln_store_suppli_case_escalation', operation: 'read',
    roles: supportRoles, adminOverrides: true, decisionType: 'allow',
})
Acl({
    $id: Now.ID['survey_ledger_read_acl'], type: 'record', table: 'x_sln_store_suppli_survey_ledger', operation: 'read',
    roles: [supportManagerRole, applicationAdminRole], adminOverrides: true, decisionType: 'allow',
})
