import '@servicenow/sdk/global'
import { Form, List, default_view } from '@servicenow/sdk/core'
import { internalNavigationRoles } from './security.now'

Form({
    table: 'x_sln_store_suppli_supply_request', view: default_view, roles: internalNavigationRoles,
    sections: [
        { caption: 'Request Intake', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'originating_supplier' }],
            rightElements: [{ type: 'table_field', field: 'intake_channel' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'needed_by' }, { type: 'table_field', field: 'priority' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_justification' }] }] },
        { caption: 'Assignment and Progress', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'approval_status' }, { type: 'table_field', field: 'prior_active_state' }],
            rightElements: [{ type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }],
        }] },
        { caption: 'Activity', content: [{ layout: 'one-column', elements: [{ type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution, Escalation, and Feedback', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalated' }, { type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'reopen_count' }, { type: 'table_field', field: 'reopened_at' }],
        }] },
    ],
})

Form({
    table: 'x_sln_store_suppli_supply_request', view: 'workspace-3f8cebee4f134dc0951c77b67b418e63', roles: internalNavigationRoles,
    sections: [
        { caption: 'Request Intake', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'originating_supplier' }],
            rightElements: [{ type: 'table_field', field: 'intake_channel' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'needed_by' }, { type: 'table_field', field: 'priority' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_justification' }] }] },
        { caption: 'Assignment and Progress', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'approval_status' }, { type: 'table_field', field: 'prior_active_state' }],
            rightElements: [{ type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }],
        }] },
        { caption: 'Activity', content: [{ layout: 'one-column', elements: [{ type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution, Escalation, and Feedback', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalated' }, { type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'reopen_count' }, { type: 'table_field', field: 'reopened_at' }],
        }] },
    ],
})

Form({
    table: 'x_sln_store_suppli_supply_issue', view: default_view, roles: internalNavigationRoles,
    sections: [
        { caption: 'Issue Intake', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'originating_supplier' }],
            rightElements: [{ type: 'table_field', field: 'intake_channel' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'detected_at' }, { type: 'table_field', field: 'priority' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_impact' }] }] },
        { caption: 'Assignment and Progress', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'approval_status' }, { type: 'table_field', field: 'prior_active_state' }],
            rightElements: [{ type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }],
        }] },
        { caption: 'Activity', content: [{ layout: 'one-column', elements: [{ type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution, Escalation, and Feedback', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalated' }, { type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'reopen_count' }, { type: 'table_field', field: 'reopened_at' }],
        }] },
    ],
})

Form({
    table: 'x_sln_store_suppli_supply_issue', view: 'workspace-3f8cebee4f134dc0951c77b67b418e63', roles: internalNavigationRoles,
    sections: [
        { caption: 'Issue Intake', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'originating_supplier' }],
            rightElements: [{ type: 'table_field', field: 'intake_channel' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'detected_at' }, { type: 'table_field', field: 'priority' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_impact' }] }] },
        { caption: 'Assignment and Progress', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'approval_status' }, { type: 'table_field', field: 'prior_active_state' }],
            rightElements: [{ type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }],
        }] },
        { caption: 'Activity', content: [{ layout: 'one-column', elements: [{ type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution, Escalation, and Feedback', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalated' }, { type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'reopen_count' }, { type: 'table_field', field: 'reopened_at' }],
        }] },
    ],
})

Form({
    table: 'x_sln_store_suppli_store', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Store', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'name' }, { type: 'table_field', field: 'store_number' }, { type: 'table_field', field: 'store_format' }, { type: 'table_field', field: 'market' }, { type: 'table_field', field: 'location' }, { type: 'table_field', field: 'stockroom' }],
        rightElements: [{ type: 'table_field', field: 'district_manager' }, { type: 'table_field', field: 'primary_contact' }, { type: 'table_field', field: 'district' }, { type: 'table_field', field: 'region' }, { type: 'table_field', field: 'volume_band' }, { type: 'table_field', field: 'active' }],
    }] }],
})
Form({
    table: 'x_sln_store_suppli_store_supply_model', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Store Supply Model', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'display_name' }, { type: 'table_field', field: 'name' }, { type: 'table_field', field: 'model_number' }, { type: 'table_field', field: 'manufacturer' }, { type: 'table_field', field: 'cmdb_model_category' }],
        rightElements: [{ type: 'table_field', field: 'store_category' }, { type: 'table_field', field: 'unit_of_measure' }, { type: 'table_field', field: 'active_for_ordering' }],
    }] }],
})
Form({
    table: 'x_sln_store_suppli_supplier_task', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Supplier Task', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'parent_case' }, { type: 'table_field', field: 'supplier_account' }, { type: 'table_field', field: 'supplier_contact' }],
        rightElements: [{ type: 'table_field', field: 'task_state' }, { type: 'table_field', field: 'released' }, { type: 'table_field', field: 'released_on' }, { type: 'table_field', field: 'completed_on' }],
    }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'supplier_notes' }, { type: 'table_field', field: 'completion_summary' }, { type: 'formatter', formatterRef: 'Activities_Filtered' }] }] }],
})
Form({
    table: 'x_sln_store_suppli_supply_line', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Supply Line', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'parent_case' }, { type: 'table_field', field: 'supply_model' }, { type: 'table_field', field: 'supplier_account' }, { type: 'table_field', field: 'needed_by' }],
        rightElements: [{ type: 'table_field', field: 'requested_quantity' }, { type: 'table_field', field: 'fulfilled_quantity' }, { type: 'table_field', field: 'received_quantity' }, { type: 'table_field', field: 'on_hand_snapshot' }, { type: 'table_field', field: 'line_state' }],
    }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'notes' }] }] }],
})
Form({
    table: 'x_sln_store_suppli_supply_receipt', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Receipt', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'supply_line' }, { type: 'table_field', field: 'parent_case' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'stockroom' }],
        rightElements: [{ type: 'table_field', field: 'supply_model' }, { type: 'table_field', field: 'quantity' }, { type: 'table_field', field: 'received_by' }, { type: 'table_field', field: 'received_on' }, { type: 'table_field', field: 'inventory_applied' }],
    }] }],
})

Form({
    table: 'x_sln_store_suppli_case_escalation', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Escalation', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'parent_case' }, { type: 'table_field', field: 'reason' }, { type: 'table_field', field: 'details' }],
        rightElements: [{ type: 'table_field', field: 'triggered_on' }, { type: 'table_field', field: 'triggered_by' }, { type: 'table_field', field: 'notification_sent' }],
    }] }],
})
Form({
    table: 'x_sln_store_suppli_case_escalation', view: 'workspace-3f8cebee4f134dc0951c77b67b418e63', roles: internalNavigationRoles,
    sections: [{ caption: 'Escalation', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'parent_case' }, { type: 'table_field', field: 'reason' }, { type: 'table_field', field: 'details' }],
        rightElements: [{ type: 'table_field', field: 'triggered_on' }, { type: 'table_field', field: 'triggered_by' }, { type: 'table_field', field: 'notification_sent' }],
    }] }],
})

List({ table: 'x_sln_store_suppli_supply_request', view: default_view, columns: ['number', 'short_description', 'store', 'category', 'subtype', 'priority', 'supply_state', 'assignment_group', 'assigned_to', 'sys_updated_on'] })
List({ table: 'x_sln_store_suppli_supply_issue', view: default_view, columns: ['number', 'short_description', 'store', 'category', 'subtype', 'priority', 'supply_state', 'escalated', 'assigned_to', 'sys_updated_on'] })
List({ table: 'x_sln_store_suppli_supplier_task', view: default_view, columns: ['number', 'parent_case', 'supplier_account', 'supplier_contact', 'task_state', 'released', 'released_on', 'completed_on'] })
List({ table: 'x_sln_store_suppli_supply_line', view: default_view, columns: ['parent_case', 'supply_model', 'supplier_account', 'requested_quantity', 'fulfilled_quantity', 'received_quantity', 'line_state'] })
List({ table: 'x_sln_store_suppli_store', view: default_view, columns: ['store_number', 'name', 'store_format', 'market', 'volume_band', 'district', 'district_manager', 'stockroom', 'active'] })
List({ table: 'x_sln_store_suppli_store_supply_model', view: default_view, columns: ['display_name', 'model_number', 'manufacturer', 'cmdb_model_category', 'store_category', 'unit_of_measure', 'active_for_ordering'] })
List({ table: 'x_sln_store_suppli_supply_receipt', view: default_view, columns: ['parent_case', 'supply_model', 'quantity', 'store', 'stockroom', 'received_by', 'received_on', 'inventory_applied'] })
List({ table: 'x_sln_store_suppli_case_escalation', view: default_view, columns: ['parent_case', 'reason', 'triggered_on', 'triggered_by', 'notification_sent'] })
