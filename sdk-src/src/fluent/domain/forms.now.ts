import '@servicenow/sdk/global'
import { Form, List, default_view } from '@servicenow/sdk/core'
import { internalNavigationRoles } from './security.now'

Form({
    table: 'x_sln_store_suppli_supply_request', view: default_view, roles: internalNavigationRoles,
    sections: [
        { caption: 'Request', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'needed_by' }],
            rightElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'approval_status' }, { type: 'table_field', field: 'priority' }, { type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'originating_supplier' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_justification' }, { type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution and Escalation', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalated' }, { type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }, { type: 'table_field', field: 'reopen_count' }],
        }] },
    ],
})
Form({
    table: 'x_sln_store_suppli_supply_issue', view: default_view, roles: internalNavigationRoles,
    sections: [
        { caption: 'Issue', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'store' }, { type: 'table_field', field: 'requested_by' }, { type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'category' }, { type: 'table_field', field: 'subtype' }, { type: 'table_field', field: 'detected_at' }],
            rightElements: [{ type: 'table_field', field: 'supply_state' }, { type: 'table_field', field: 'hold_reason' }, { type: 'table_field', field: 'priority' }, { type: 'table_field', field: 'assignment_group' }, { type: 'table_field', field: 'assigned_to' }, { type: 'table_field', field: 'originating_supplier' }, { type: 'table_field', field: 'escalated' }],
        }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'description' }, { type: 'table_field', field: 'business_impact' }, { type: 'formatter', formatterRef: 'Activities_Filtered' }] }] },
        { caption: 'Resolution', content: [{
            layout: 'two-column',
            leftElements: [{ type: 'table_field', field: 'resolution_code' }, { type: 'table_field', field: 'resolution_notes' }, { type: 'table_field', field: 'knowledge_recommended' }, { type: 'table_field', field: 'service_rating' }, { type: 'table_field', field: 'service_feedback' }],
            rightElements: [{ type: 'table_field', field: 'escalation_reasons' }, { type: 'table_field', field: 'first_response_at' }, { type: 'table_field', field: 'last_customer_update' }, { type: 'table_field', field: 'reopen_count' }],
        }] },
    ],
})
Form({
    table: 'x_sln_store_suppli_store', view: default_view, roles: internalNavigationRoles,
    sections: [{ caption: 'Store', content: [{
        layout: 'two-column',
        leftElements: [{ type: 'table_field', field: 'name' }, { type: 'table_field', field: 'store_number' }, { type: 'table_field', field: 'location' }, { type: 'table_field', field: 'stockroom' }],
        rightElements: [{ type: 'table_field', field: 'district_manager' }, { type: 'table_field', field: 'primary_contact' }, { type: 'table_field', field: 'district' }, { type: 'table_field', field: 'region' }, { type: 'table_field', field: 'active' }],
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

List({ table: 'x_sln_store_suppli_supply_request', view: default_view, columns: ['number', 'short_description', 'store', 'category', 'subtype', 'priority', 'supply_state', 'assignment_group', 'assigned_to', 'sys_updated_on'] })
List({ table: 'x_sln_store_suppli_supply_issue', view: default_view, columns: ['number', 'short_description', 'store', 'category', 'subtype', 'priority', 'supply_state', 'escalated', 'assigned_to', 'sys_updated_on'] })
List({ table: 'x_sln_store_suppli_supplier_task', view: default_view, columns: ['number', 'parent_case', 'supplier_account', 'supplier_contact', 'task_state', 'released', 'released_on', 'completed_on'] })
List({ table: 'x_sln_store_suppli_supply_line', view: default_view, columns: ['parent_case', 'supply_model', 'supplier_account', 'requested_quantity', 'fulfilled_quantity', 'received_quantity', 'line_state'] })
List({ table: 'x_sln_store_suppli_store', view: default_view, columns: ['store_number', 'name', 'district', 'district_manager', 'stockroom', 'active'] })
List({ table: 'x_sln_store_suppli_supply_receipt', view: default_view, columns: ['parent_case', 'supply_model', 'quantity', 'store', 'stockroom', 'received_by', 'received_on', 'inventory_applied'] })
List({ table: 'x_sln_store_suppli_case_escalation', view: default_view, columns: ['parent_case', 'reason', 'triggered_on', 'triggered_by', 'notification_sent'] })
