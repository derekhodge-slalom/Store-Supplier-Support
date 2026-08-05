import '@servicenow/sdk/global'
import { Property, Record } from '@servicenow/sdk/core'
import { applicationAdminRole, supportManagerRole } from './security.now'

const propertyRoles = { read: [supportManagerRole, applicationAdminRole], write: [applicationAdminRole] }

export const supportGroup = Record({
    $id: 'a1000000000000000000000000000001',
    table: 'sys_user_group',
    data: {
        name: 'Store Supplier Support',
        description: 'Owns Store Supply parent cases, draft supplier tasks, escalations, and weekly operations review.',
        active: true,
    },
})

Property({
    $id: Now.ID['support_group_property'],
    name: 'x_sln_store_suppli.support_group',
    type: 'string',
    value: 'a1000000000000000000000000000001',
    description: 'Sys ID of the group that owns Store Supply parent cases and draft supplier tasks.',
    roles: propertyRoles,
})

export const businessSchedule = Record({
    $id: 'a1000000000000000000000000000002',
    table: 'cmn_schedule',
    data: {
        name: 'Store Supplier Support 8-5 Eastern',
        label: 'Store Supplier Support Schedule',
        plural_label: 'Store Supplier Support Schedules',
        calendar_name: 'Store Supplier Support Calendar',
        description: 'Monday-Friday 08:00-17:00 America/New_York. Configure US holiday exclusions as child schedules.',
        time_zone: 'America/New_York',
    },
})

Property({
    $id: Now.ID['sla_schedule_property'],
    name: 'x_sln_store_suppli.sla_schedule',
    type: 'string',
    value: 'a1000000000000000000000000000002',
    description: 'Business schedule used by response, resolution, stale-update, and unresolved-case timers.',
    roles: propertyRoles,
})
Property({
    $id: Now.ID['reopen_window_property'],
    name: 'x_sln_store_suppli.reopen_window_days',
    type: 'integer',
    value: 7,
    description: 'Calendar days after closure during which support may reopen a case.',
    roles: propertyRoles,
})
Property({
    $id: Now.ID['weekly_digest_property'],
    name: 'x_sln_store_suppli.weekly_digest_schedule',
    type: 'string',
    value: 'Monday 09:00 America/New_York',
    description: 'Documented weekly digest schedule; execution is controlled by the scheduled script record.',
    roles: propertyRoles,
})
Property({
    $id: Now.ID['stale_threshold_property'],
    name: 'x_sln_store_suppli.stale_business_hours',
    type: 'integer',
    value: 27,
    description: 'Three business days at nine hours per configured business day without a customer-visible update.',
    roles: propertyRoles,
})
Property({
    $id: Now.ID['unresolved_threshold_property'],
    name: 'x_sln_store_suppli.unresolved_business_hours',
    type: 'integer',
    value: 45,
    description: 'Five business days at nine hours per configured business day before unresolved escalation.',
    roles: propertyRoles,
})

Record({ $id: Now.ID['monday_schedule_span'], table: 'cmn_schedule_span', data: { name: 'Monday 08:00-17:00', schedule: businessSchedule, type: 'include', start_date_time: '2010-01-04 08:00:00', end_date_time: '2010-01-04 17:00:00', repeat_type: 'weekly' } })
Record({ $id: Now.ID['tuesday_schedule_span'], table: 'cmn_schedule_span', data: { name: 'Tuesday 08:00-17:00', schedule: businessSchedule, type: 'include', start_date_time: '2010-01-05 08:00:00', end_date_time: '2010-01-05 17:00:00', repeat_type: 'weekly' } })
Record({ $id: Now.ID['wednesday_schedule_span'], table: 'cmn_schedule_span', data: { name: 'Wednesday 08:00-17:00', schedule: businessSchedule, type: 'include', start_date_time: '2010-01-06 08:00:00', end_date_time: '2010-01-06 17:00:00', repeat_type: 'weekly' } })
Record({ $id: Now.ID['thursday_schedule_span'], table: 'cmn_schedule_span', data: { name: 'Thursday 08:00-17:00', schedule: businessSchedule, type: 'include', start_date_time: '2010-01-07 08:00:00', end_date_time: '2010-01-07 17:00:00', repeat_type: 'weekly' } })
Record({ $id: Now.ID['friday_schedule_span'], table: 'cmn_schedule_span', data: { name: 'Friday 08:00-17:00', schedule: businessSchedule, type: 'include', start_date_time: '2010-01-08 08:00:00', end_date_time: '2010-01-08 17:00:00', repeat_type: 'weekly' } })

export const eventNames = {
    caseEscalated: 'x_sln_store_suppli.case.escalated',
    caseReopened: 'x_sln_store_suppli.case.reopened',
    caseUpdate: 'x_sln_store_suppli.case.update',
    supplierReleased: 'x_sln_store_suppli.supplier.released',
    supplierCompleted: 'x_sln_store_suppli.supplier.completed',
    approvalRequested: 'x_sln_store_suppli.approval.requested',
    approvalCompleted: 'x_sln_store_suppli.approval.completed',
    receiptRecorded: 'x_sln_store_suppli.receipt.recorded',
    weeklyDigest: 'x_sln_store_suppli.weekly_digest',
    surveyInvite: 'x_sln_store_suppli.survey.invite',
}

Record({ $id: Now.ID['case_escalated_event'], table: 'sysevent_register', data: { suffix: 'case.escalated', event_name: 'x_sln_store_suppli.case.escalated', description: 'Case escalated', table: 'x_sln_store_suppli_supply_case', fired_by: 'Escalation monitor and UI action', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['case_reopened_event'], table: 'sysevent_register', data: { suffix: 'case.reopened', event_name: 'x_sln_store_suppli.case.reopened', description: 'Case reopened', table: 'x_sln_store_suppli_supply_case', fired_by: 'Reopen UI action', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['case_update_event'], table: 'sysevent_register', data: { suffix: 'case.update', event_name: 'x_sln_store_suppli.case.update', description: 'Customer-visible update', table: 'x_sln_store_suppli_supply_case', fired_by: 'Comment business rule', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['supplier_released_event'], table: 'sysevent_register', data: { suffix: 'supplier.released', event_name: 'x_sln_store_suppli.supplier.released', description: 'Supplier task released', table: 'x_sln_store_suppli_supplier_task', fired_by: 'Release UI action', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['supplier_completed_event'], table: 'sysevent_register', data: { suffix: 'supplier.completed', event_name: 'x_sln_store_suppli.supplier.completed', description: 'Supplier task completed', table: 'x_sln_store_suppli_supplier_task', fired_by: 'Complete UI action', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['approval_requested_event'], table: 'sysevent_register', data: { suffix: 'approval.requested', event_name: 'x_sln_store_suppli.approval.requested', description: 'DM approval requested', table: 'x_sln_store_suppli_supply_request', fired_by: 'Request approval UI action', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['approval_completed_event'], table: 'sysevent_register', data: { suffix: 'approval.completed', event_name: 'x_sln_store_suppli.approval.completed', description: 'DM approval completed', table: 'x_sln_store_suppli_supply_request', fired_by: 'Approval business rule', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['receipt_recorded_event'], table: 'sysevent_register', data: { suffix: 'receipt.recorded', event_name: 'x_sln_store_suppli.receipt.recorded', description: 'Receipt recorded', table: 'x_sln_store_suppli_supply_receipt', fired_by: 'Receipt business rule', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['weekly_digest_event'], table: 'sysevent_register', data: { suffix: 'weekly_digest', event_name: 'x_sln_store_suppli.weekly_digest', description: 'Weekly digest', table: 'x_sln_store_suppli_supply_case', fired_by: 'Weekly digest scheduled script', priority: 100, caller_access: '1' } })
Record({ $id: Now.ID['survey_invite_event'], table: 'sysevent_register', data: { suffix: 'survey.invite', event_name: 'x_sln_store_suppli.survey.invite', description: 'Survey invite', table: 'x_sln_store_suppli_supply_case', fired_by: 'Survey cap business rule', priority: 100, caller_access: '1' } })

Record({
    $id: Now.ID['request_case_type_registration'],
    table: 'sn_case_type',
    data: {
        name: 'Store Supply Request',
        table: 'x_sln_store_suppli_supply_request',
        active: true,
        description: 'Requests for replenishment, planned demand, special orders, and other store supplies.',
    },
})

Record({
    $id: Now.ID['issue_case_type_registration'],
    table: 'sn_case_type',
    data: {
        name: 'Store Supply Issue',
        table: 'x_sln_store_suppli_supply_issue',
        active: true,
        description: 'Availability, delivery, accuracy, quality, and other store supply issues.',
    },
})
