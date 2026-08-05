import '@servicenow/sdk/global'
import { BusinessRule, ScheduledScript, Sla, UiAction } from '@servicenow/sdk/core'
import {
    applyReceiptToInventory,
    cancelCase,
    closeCase,
    completeSupplierTask,
    escalateCurrentCase,
    inviteMonthlySupplierSurvey,
    markCustomerVisibleUpdate,
    openReceiptForm,
    prepareReceipt,
    recommendKnowledge,
    releaseSupplierTask,
    reopenCase,
    requestDistrictManagerApproval,
    routeSupplyLines,
    runCaseEscalationMonitor,
    sendWeeklyDigest,
    stampCaseDefaults,
    stampSupplyLine,
    syncDistrictManagerApproval,
    validateCaseTransition,
    verifyRequiredCapabilities,
} from '../../server/script'
import { businessSchedule } from './configuration.now'
import { applicationAdminRole, districtManagerRole, storeAssociateRole, supplierAgentRole, supportAgentRole, supportManagerRole } from './security.now'

const supportRoles = [supportAgentRole, supportManagerRole, applicationAdminRole]
const receiptRoles = [storeAssociateRole, districtManagerRole, supportAgentRole, supportManagerRole, applicationAdminRole]

BusinessRule({
    $id: Now.ID['case_defaults_br'], name: 'Set Store Supply Case Defaults', table: 'x_sln_store_suppli_supply_case',
    when: 'before', action: ['insert'], order: 50, active: true, script: stampCaseDefaults,
})
BusinessRule({
    $id: Now.ID['case_transition_br'], name: 'Validate Store Supply Case Transition', table: 'x_sln_store_suppli_supply_case',
    when: 'before', action: ['update'], order: 50, active: true, filterCondition: 'supply_stateCHANGES', script: validateCaseTransition,
})
BusinessRule({
    $id: Now.ID['customer_update_br'], name: 'Track Customer-visible Store Supply Update', table: 'x_sln_store_suppli_supply_case',
    when: 'after', action: ['update'], order: 100, active: true, filterCondition: 'commentsCHANGES', script: markCustomerVisibleUpdate,
})
BusinessRule({
    $id: Now.ID['case_survey_br'], name: 'Apply Monthly Supplier Survey Cap', table: 'x_sln_store_suppli_supply_case',
    when: 'after', action: ['update'], order: 200, active: true,
    filterCondition: 'supply_stateCHANGESTOclosed^originating_supplierISNOTEMPTY', script: inviteMonthlySupplierSurvey,
})
BusinessRule({
    $id: Now.ID['supply_line_defaults_br'], name: 'Resolve Supply Line Supplier and Stock Snapshot', table: 'x_sln_store_suppli_supply_line',
    when: 'before', action: ['insert', 'update'], order: 100, active: true,
    filterCondition: 'supply_modelISNOTEMPTY^parent_caseISNOTEMPTY', script: stampSupplyLine,
})
BusinessRule({
    $id: Now.ID['prepare_receipt_br'], name: 'Validate and Prepare Store Supply Receipt', table: 'x_sln_store_suppli_supply_receipt',
    when: 'before', action: ['insert'], order: 50, active: true, script: prepareReceipt,
})
BusinessRule({
    $id: Now.ID['apply_receipt_br'], name: 'Apply Store Supply Receipt to Inventory', table: 'x_sln_store_suppli_supply_receipt',
    when: 'after', action: ['insert'], order: 100, active: true, script: applyReceiptToInventory,
})
BusinessRule({
    $id: Now.ID['approval_sync_br'], name: 'Sync Store Supply District Manager Approval', table: 'sysapproval_approver',
    when: 'after', action: ['update'], order: 100, active: true,
    filterCondition: 'source_table=x_sln_store_suppli_supply_request^stateCHANGES', script: syncDistrictManagerApproval,
})

UiAction({
    $id: Now.ID['route_supply_lines_action'], name: 'Create Draft Supplier Tasks', actionName: 'route_store_supply_lines',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 100, showUpdate: true, roles: supportRoles,
    condition: "current.supply_state != 'closed' && current.supply_state != 'cancelled' && current.approval_status != 'requested'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: routeSupplyLines,
})
UiAction({
    $id: Now.ID['close_case_action'], name: 'Close Case', actionName: 'close_store_supply_case',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 145, showUpdate: true, roles: supportRoles,
    condition: "current.supply_state != 'closed' && current.supply_state != 'cancelled'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: closeCase,
})
UiAction({
    $id: Now.ID['cancel_case_action'], name: 'Cancel Case', actionName: 'cancel_store_supply_case',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 146, showUpdate: true, roles: supportRoles,
    condition: "current.supply_state != 'closed' && current.supply_state != 'cancelled'",
    form: { showButton: false, showContextMenu: true, showLink: false, style: 'destructive' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: cancelCase,
})
UiAction({
    $id: Now.ID['release_supplier_task_action'], name: 'Release to Supplier', actionName: 'release_store_supplier_task',
    table: 'x_sln_store_suppli_supplier_task', active: true, order: 100, showUpdate: true, roles: supportRoles,
    condition: "current.task_state == 'draft' && current.released == false",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: releaseSupplierTask,
})
UiAction({
    $id: Now.ID['complete_supplier_task_action'], name: 'Complete Supplier Task', actionName: 'complete_store_supplier_task',
    table: 'x_sln_store_suppli_supplier_task', active: true, order: 110, showUpdate: true,
    roles: [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole],
    condition: "current.released == true && current.task_state != 'complete' && current.task_state != 'cancelled'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: completeSupplierTask,
})
UiAction({
    $id: Now.ID['request_dm_approval_action'], name: 'Request DM Approval', actionName: 'request_store_supply_dm_approval',
    table: 'x_sln_store_suppli_supply_request', active: true, order: 120, showUpdate: true, roles: supportRoles,
    condition: "current.approval_status != 'requested' && current.supply_state != 'closed' && current.supply_state != 'cancelled'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'unstyled' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: requestDistrictManagerApproval,
})
UiAction({
    $id: Now.ID['record_receipt_action'], name: 'Record Receipt', actionName: 'record_store_supply_receipt',
    table: 'x_sln_store_suppli_supply_request', active: true, order: 130, showUpdate: true, roles: receiptRoles,
    condition: "current.supply_state != 'closed' && current.supply_state != 'cancelled'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: openReceiptForm,
})
UiAction({
    $id: Now.ID['escalate_case_action'], name: 'Escalate', actionName: 'escalate_store_supply_case',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 140, showUpdate: true, roles: supportRoles,
    condition: "current.supply_state != 'closed' && current.supply_state != 'cancelled' && current.escalated == false",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'destructive' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: escalateCurrentCase,
})
UiAction({
    $id: Now.ID['reopen_case_action'], name: 'Reopen', actionName: 'reopen_store_supply_case',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 150, showUpdate: true, roles: supportRoles,
    condition: "current.supply_state == 'closed' || current.supply_state == 'cancelled'",
    form: { showButton: true, showContextMenu: true, showLink: false, style: 'unstyled' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: reopenCase,
})
UiAction({
    $id: Now.ID['recommend_knowledge_action'], name: 'Recommend Knowledge', actionName: 'recommend_store_supply_knowledge',
    table: 'x_sln_store_suppli_supply_case', active: true, order: 160, showUpdate: true, roles: supportRoles,
    condition: 'current.knowledge_recommended == false',
    form: { showButton: false, showContextMenu: true, showLink: false, style: 'unstyled' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, showFormMenuButtonV2: true }, script: recommendKnowledge,
})

Sla({
    $id: Now.ID['store_supply_response_sla'], name: 'Store Supply First Response - 3 Business Hours',
    table: 'x_sln_store_suppli_supply_case', type: 'SLA', target: 'response', active: true,
    duration: Duration({ hours: 3 }), schedule: businessSchedule, timezoneSource: 'sla.timezone', timezone: 'America/New_York',
    conditions: {
        start: 'active=true^first_response_atISEMPTY', stop: 'first_response_atISNOTEMPTY^ORsupply_stateINclosed,cancelled',
        pause: 'supply_state=hold', resume: 'supply_state!=hold^active=true', reset: 'reopen_countCHANGES',
    },
    resetAction: 'complete', whenTo: { resume: 'on_condition', cancel: 'never' },
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
})
Sla({
    $id: Now.ID['store_supply_resolution_sla'], name: 'Store Supply Resolution - 3 Business Days',
    table: 'x_sln_store_suppli_supply_case', type: 'SLA', target: 'resolution', active: true,
    duration: Duration({ hours: 27 }), schedule: businessSchedule, timezoneSource: 'sla.timezone', timezone: 'America/New_York',
    conditions: {
        start: 'active=true^supply_stateNOT INclosed,cancelled', stop: 'supply_stateINclosed,cancelled',
        pause: 'supply_state=hold', resume: 'supply_state!=hold^active=true', reset: 'reopen_countCHANGES',
    },
    resetAction: 'complete', whenTo: { resume: 'on_condition', cancel: 'never' },
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
})

ScheduledScript({
    $id: Now.ID['case_escalation_monitor_schedule'], name: 'Monitor Store Supply Escalations', active: true,
    frequency: 'periodically', executionInterval: Duration({ hours: 1 }), timeZone: 'America/New_York',
    script: runCaseEscalationMonitor,
})
ScheduledScript({
    $id: Now.ID['weekly_digest_schedule'], name: 'Send Store Supply Weekly Digest', active: true,
    frequency: 'weekly', dayOfWeek: 'monday', executionTime: { hours: 9, minutes: 0, seconds: 0 }, timeZone: 'America/New_York',
    script: sendWeeklyDigest,
})
ScheduledScript({
    $id: Now.ID['capability_check_schedule'], name: 'Verify Store Supplier Support Capabilities', active: true,
    frequency: 'weekly', dayOfWeek: 'sunday', executionTime: { hours: 2, minutes: 30, seconds: 0 }, timeZone: 'America/New_York',
    script: verifyRequiredCapabilities,
})
