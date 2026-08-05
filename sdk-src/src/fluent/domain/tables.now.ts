import '@servicenow/sdk/global'
import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    GenericColumn,
    IntegerColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_sln_store_suppli_store = Table({
    name: 'x_sln_store_suppli_store',
    label: 'Store',
    display: 'name',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        name: StringColumn({ label: 'Store Name', mandatory: true, maxLength: 160 }),
        store_number: StringColumn({ label: 'Store Number', mandatory: true, maxLength: 40 }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location', cascadeRule: 'clear' }),
        district_manager: ReferenceColumn({ label: 'District Manager', referenceTable: 'sys_user', cascadeRule: 'clear' }),
        primary_contact: ReferenceColumn({ label: 'Primary Contact', referenceTable: 'sys_user', cascadeRule: 'clear' }),
        stockroom: ReferenceColumn({ label: 'Stockroom', referenceTable: 'alm_stockroom', mandatory: true, cascadeRule: 'restrict' }),
        store_format: ChoiceColumn({
            label: 'Store Format',
            mandatory: true,
            default: 'cafe',
            dropdown: 'dropdown_without_none',
            choices: {
                cafe: { label: 'Neighborhood Café', sequence: 10 },
                drive_thru: { label: 'Drive-Thru', sequence: 20 },
                pickup_only: { label: 'Pickup Only', sequence: 30 },
                reserve: { label: 'Reserve / Flagship', sequence: 40 },
                licensed_kiosk: { label: 'Licensed Kiosk', sequence: 50 },
            },
        }),
        market: StringColumn({ label: 'Market', maxLength: 80 }),
        volume_band: ChoiceColumn({
            label: 'Daily Volume Band',
            default: 'moderate',
            dropdown: 'dropdown_without_none',
            choices: {
                low: { label: 'Low', sequence: 10 },
                moderate: { label: 'Moderate', sequence: 20 },
                high: { label: 'High', sequence: 30 },
                very_high: { label: 'Very High', sequence: 40 },
            },
        }),
        district: StringColumn({ label: 'District', maxLength: 80 }),
        region: StringColumn({ label: 'Region', default: 'US', maxLength: 80 }),
        active: BooleanColumn({ label: 'Active', default: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [
        { name: 'store_number_unique', unique: true, element: ['store_number'] },
        { name: 'store_dm_active', unique: false, element: ['district_manager', 'active'] },
    ],
})

export const x_sln_store_suppli_store_supply_model = Table({
    name: 'x_sln_store_suppli_store_supply_model',
    label: 'Store Supply Model',
    extends: 'cmdb_consumable_product_model',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        store_category: ChoiceColumn({
            label: 'Store Supply Category',
            mandatory: true,
            default: 'operations',
            dropdown: 'dropdown_without_none',
            choices: {
                operations: { label: 'Store Operations', sequence: 10 },
                packaging: { label: 'Packaging', sequence: 20 },
                beverage_service: { label: 'Beverage Service', sequence: 30 },
                ingredients: { label: 'Beverage Ingredients', sequence: 40 },
                cleaning: { label: 'Cleaning and Sanitation', sequence: 50 },
                safety: { label: 'Safety', sequence: 60 },
                fixtures: { label: 'Fixtures', sequence: 70 },
                other: { label: 'Other', sequence: 90 },
            },
        }),
        unit_of_measure: StringColumn({ label: 'Unit of Measure', default: 'each', maxLength: 40 }),
        active_for_ordering: BooleanColumn({ label: 'Active for Ordering', default: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [{ name: 'store_supply_ordering_category', unique: false, element: ['active_for_ordering', 'store_category'] }],
})

export const x_sln_store_suppli_store_member = Table({
    name: 'x_sln_store_suppli_store_member',
    label: 'Store Member',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        store: ReferenceColumn({ label: 'Store', referenceTable: 'x_sln_store_suppli_store', mandatory: true, cascadeRule: 'delete' }),
        user: ReferenceColumn({ label: 'User', referenceTable: 'sys_user', mandatory: true, cascadeRule: 'delete' }),
        member_type: ChoiceColumn({
            label: 'Member Type',
            mandatory: true,
            default: 'associate',
            dropdown: 'dropdown_without_none',
            choices: {
                associate: { label: 'Store Associate', sequence: 10 },
                district_manager: { label: 'District Manager', sequence: 20 },
            },
        }),
        active: BooleanColumn({ label: 'Active', default: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [{ name: 'store_member_unique', unique: true, element: ['store', 'user', 'member_type'] }],
})

export const x_sln_store_suppli_store_supplier = Table({
    name: 'x_sln_store_suppli_store_supplier',
    label: 'Store Supplier',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        store: ReferenceColumn({ label: 'Store', referenceTable: 'x_sln_store_suppli_store', mandatory: true, cascadeRule: 'delete' }),
        supplier_account: ReferenceColumn({ label: 'Supplier Account', referenceTable: 'customer_account', mandatory: true, cascadeRule: 'restrict' }),
        primary_contact: ReferenceColumn({ label: 'Primary Supplier Contact', referenceTable: 'customer_contact', cascadeRule: 'clear' }),
        active: BooleanColumn({ label: 'Active', default: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [{ name: 'store_supplier_unique', unique: true, element: ['store', 'supplier_account'] }],
})

export const x_sln_store_suppli_supply_supplier = Table({
    name: 'x_sln_store_suppli_supply_supplier',
    label: 'Supply Supplier',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        supply_model: ReferenceColumn({
            label: 'Store Supply',
            referenceTable: 'x_sln_store_suppli_store_supply_model',
            mandatory: true,
            cascadeRule: 'restrict',
        }),
        supplier_account: ReferenceColumn({ label: 'Supplier Account', referenceTable: 'customer_account', mandatory: true, cascadeRule: 'restrict' }),
        preferred: BooleanColumn({ label: 'Preferred Supplier', default: false }),
        lead_time_days: IntegerColumn({ label: 'Lead Time (Business Days)', default: 3, min: 0 }),
        active: BooleanColumn({ label: 'Active', default: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [{ name: 'supply_supplier_unique', unique: true, element: ['supply_model', 'supplier_account'] }],
})

export const x_sln_store_suppli_supply_case = Table({
    name: 'x_sln_store_suppli_supply_case',
    label: 'Store Supply Case',
    extends: 'sn_customerservice_case',
    extensible: true,
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    autoNumber: { prefix: 'SSC', number: 1000, numberOfDigits: 7 },
    schema: {
        store: ReferenceColumn({ label: 'Store', referenceTable: 'x_sln_store_suppli_store', mandatory: true, cascadeRule: 'restrict' }),
        requested_by: ReferenceColumn({ label: 'Requested By', referenceTable: 'sys_user', cascadeRule: 'clear' }),
        originating_supplier: ReferenceColumn({ label: 'Originating Supplier', referenceTable: 'customer_account', cascadeRule: 'clear' }),
        supply_state: ChoiceColumn({
            label: 'State',
            mandatory: true,
            default: 'new',
            dropdown: 'dropdown_without_none',
            choices: {
                new: { label: 'New', sequence: 10 },
                open: { label: 'Open', sequence: 20 },
                work_in_progress: { label: 'Work in Progress', sequence: 30 },
                hold: { label: 'Hold', sequence: 40 },
                closed: { label: 'Closed', sequence: 50 },
                cancelled: { label: 'Cancelled', sequence: 60 },
            },
        }),
        hold_reason: ChoiceColumn({
            label: 'Hold Reason',
            dropdown: 'dropdown_with_none',
            choices: {
                awaiting_dm_approval: { label: 'Awaiting District Manager Approval', sequence: 10 },
                awaiting_store: { label: 'Awaiting Store Information', sequence: 20 },
                awaiting_supplier: { label: 'Awaiting Supplier', sequence: 30 },
                awaiting_stock: { label: 'Awaiting Stock', sequence: 40 },
                other: { label: 'Other', sequence: 90 },
            },
        }),
        intake_channel: ChoiceColumn({
            label: 'Intake Channel',
            mandatory: true,
            default: 'portal',
            dropdown: 'dropdown_without_none',
            choices: {
                portal: { label: 'Portal', sequence: 10 },
                email: { label: 'Email', sequence: 20 },
                phone: { label: 'Phone', sequence: 30 },
                agent: { label: 'Agent', sequence: 40 },
            },
        }),
        approval_status: ChoiceColumn({
            label: 'DM Approval',
            default: 'not_requested',
            dropdown: 'dropdown_without_none',
            choices: {
                not_requested: { label: 'Not Requested', sequence: 10 },
                requested: { label: 'Requested', sequence: 20 },
                approved: { label: 'Approved', sequence: 30 },
                rejected: { label: 'Rejected', sequence: 40 },
            },
        }),
        prior_active_state: StringColumn({ label: 'Prior Active State', maxLength: 40, readOnly: true }),
        escalated: BooleanColumn({ label: 'Escalated', default: false }),
        escalation_reasons: StringColumn({ label: 'Escalation Reasons', maxLength: 255, readOnly: true }),
        last_customer_update: DateTimeColumn({ label: 'Last Customer-visible Update', readOnly: true }),
        first_response_at: DateTimeColumn({ label: 'First Response At', readOnly: true }),
        reopened_at: DateTimeColumn({ label: 'Reopened At', readOnly: true }),
        reopen_count: IntegerColumn({ label: 'Reopen Count', default: 0, min: 0, readOnly: true }),
        resolution_code: ChoiceColumn({
            label: 'Resolution Code',
            dropdown: 'dropdown_with_none',
            choices: {
                fulfilled: { label: 'Fulfilled', sequence: 10 },
                issue_corrected: { label: 'Issue Corrected', sequence: 20 },
                duplicate: { label: 'Duplicate', sequence: 30 },
                no_action: { label: 'No Action Required', sequence: 40 },
                cancelled: { label: 'Cancelled', sequence: 50 },
            },
        }),
        resolution_notes: MultiLineTextColumn({ label: 'Resolution Notes', maxLength: 4000 }),
        knowledge_recommended: BooleanColumn({ label: 'Knowledge Recommended', default: false }),
        service_rating: ChoiceColumn({
            label: 'Quality of Service', dropdown: 'dropdown_with_none',
            choices: {
                '1': { label: '1 - Poor', sequence: 10 },
                '2': { label: '2', sequence: 20 },
                '3': { label: '3', sequence: 30 },
                '4': { label: '4', sequence: 40 },
                '5': { label: '5 - Excellent', sequence: 50 },
            },
        }),
        service_feedback: MultiLineTextColumn({ label: 'Service Feedback', maxLength: 4000 }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [
        { name: 'supply_case_store_state', unique: false, element: ['store', 'supply_state'] },
        { name: 'supply_case_supplier_state', unique: false, element: ['originating_supplier', 'supply_state'] },
        { name: 'supply_case_escalated', unique: false, element: ['escalated', 'supply_state'] },
    ],
})

export const x_sln_store_suppli_supply_request = Table({
    name: 'x_sln_store_suppli_supply_request',
    label: 'Store Supply Request',
    extends: 'x_sln_store_suppli_supply_case',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    autoNumber: { prefix: 'SSR', number: 1000, numberOfDigits: 7 },
    schema: {
        category: ChoiceColumn({
            label: 'Category', mandatory: true, dropdown: 'dropdown_without_none',
            choices: {
                replenishment: { label: 'Replenishment', sequence: 10 },
                planned_demand: { label: 'Planned Demand', sequence: 20 },
                special_order: { label: 'Special Order', sequence: 30 },
                other: { label: 'Other', sequence: 90 },
            },
        }),
        subtype: ChoiceColumn({
            label: 'Subtype', mandatory: true, dropdown: 'dropdown_without_none',
            choices: {
                standard: { label: 'Standard', sequence: 10 },
                urgent: { label: 'Urgent', sequence: 20 },
                low_stock: { label: 'Low Stock', sequence: 30 },
                seasonal: { label: 'Seasonal', sequence: 40 },
                promotion_event: { label: 'Promotion / Event', sequence: 50 },
                new_store_remodel: { label: 'New Store / Remodel', sequence: 60 },
                new_item: { label: 'New Item', sequence: 70 },
                replacement: { label: 'Replacement', sequence: 80 },
                one_time: { label: 'One-time', sequence: 90 },
                general: { label: 'General', sequence: 100 },
            },
        }),
        needed_by: DateColumn({ label: 'Needed By' }),
        business_justification: MultiLineTextColumn({ label: 'Business Justification', maxLength: 4000 }),
    },
})

export const x_sln_store_suppli_supply_issue = Table({
    name: 'x_sln_store_suppli_supply_issue',
    label: 'Store Supply Issue',
    extends: 'x_sln_store_suppli_supply_case',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    autoNumber: { prefix: 'SSI', number: 1000, numberOfDigits: 7 },
    schema: {
        category: ChoiceColumn({
            label: 'Category', mandatory: true, dropdown: 'dropdown_without_none',
            choices: {
                availability: { label: 'Availability', sequence: 10 },
                delivery: { label: 'Delivery', sequence: 20 },
                accuracy: { label: 'Accuracy', sequence: 30 },
                quality: { label: 'Quality', sequence: 40 },
                other: { label: 'Other', sequence: 90 },
            },
        }),
        subtype: ChoiceColumn({
            label: 'Subtype', mandatory: true, dropdown: 'dropdown_without_none',
            choices: {
                out_of_stock: { label: 'Out of Stock', sequence: 10 },
                backordered: { label: 'Backordered', sequence: 20 },
                discontinued: { label: 'Discontinued', sequence: 30 },
                late: { label: 'Late Delivery', sequence: 40 },
                missing: { label: 'Missing Delivery', sequence: 50 },
                partial: { label: 'Partial Delivery', sequence: 60 },
                wrong_item: { label: 'Wrong Item', sequence: 70 },
                wrong_quantity: { label: 'Wrong Quantity', sequence: 80 },
                damaged: { label: 'Damaged', sequence: 90 },
                defective: { label: 'Defective', sequence: 100 },
                expired_unsafe: { label: 'Expired / Unsafe', sequence: 110 },
                general: { label: 'General', sequence: 120 },
            },
        }),
        detected_at: DateTimeColumn({ label: 'Detected At' }),
        business_impact: MultiLineTextColumn({ label: 'Business Impact', maxLength: 4000 }),
    },
})

export const x_sln_store_suppli_supply_line = Table({
    name: 'x_sln_store_suppli_supply_line',
    label: 'Supply Line',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        parent_case: ReferenceColumn({ label: 'Store Supply Case', referenceTable: 'x_sln_store_suppli_supply_case', mandatory: true, cascadeRule: 'delete' }),
        supply_model: ReferenceColumn({ label: 'Store Supply', referenceTable: 'x_sln_store_suppli_store_supply_model', mandatory: true, cascadeRule: 'restrict' }),
        supplier_account: ReferenceColumn({ label: 'Supplier', referenceTable: 'customer_account', cascadeRule: 'clear' }),
        requested_quantity: IntegerColumn({ label: 'Requested / Affected Quantity', mandatory: true, default: 1, min: 1 }),
        fulfilled_quantity: IntegerColumn({ label: 'Fulfilled Quantity', default: 0, min: 0 }),
        received_quantity: IntegerColumn({ label: 'Received Quantity', default: 0, min: 0, readOnly: true }),
        on_hand_snapshot: IntegerColumn({ label: 'On-hand at Submission', default: 0, min: 0, readOnly: true }),
        needed_by: DateColumn({ label: 'Needed By' }),
        line_state: ChoiceColumn({
            label: 'Line State', default: 'draft', dropdown: 'dropdown_without_none',
            choices: {
                draft: { label: 'Draft', sequence: 10 },
                routed: { label: 'Routed', sequence: 20 },
                fulfilled: { label: 'Fulfilled', sequence: 30 },
                partially_received: { label: 'Partially Received', sequence: 40 },
                received: { label: 'Received', sequence: 50 },
                cancelled: { label: 'Cancelled', sequence: 60 },
            },
        }),
        notes: MultiLineTextColumn({ label: 'Line Notes', maxLength: 4000 }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [
        { name: 'supply_line_case_supplier', unique: false, element: ['parent_case', 'supplier_account'] },
        { name: 'supply_line_model', unique: false, element: ['supply_model'] },
    ],
})

export const x_sln_store_suppli_supplier_task = Table({
    name: 'x_sln_store_suppli_supplier_task',
    label: 'Supplier Fulfillment Task',
    extends: 'sn_customerservice_task',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    autoNumber: { prefix: 'SST', number: 1000, numberOfDigits: 7 },
    schema: {
        parent_case: ReferenceColumn({ label: 'Store Supply Case', referenceTable: 'x_sln_store_suppli_supply_case', mandatory: true, cascadeRule: 'restrict' }),
        supplier_account: ReferenceColumn({ label: 'Supplier Account', referenceTable: 'customer_account', mandatory: true, cascadeRule: 'restrict' }),
        supplier_contact: ReferenceColumn({ label: 'Supplier Contact', referenceTable: 'customer_contact', cascadeRule: 'clear' }),
        task_state: ChoiceColumn({
            label: 'Task State', default: 'draft', dropdown: 'dropdown_without_none',
            choices: {
                draft: { label: 'Draft', sequence: 10 },
                open: { label: 'Open', sequence: 20 },
                work_in_progress: { label: 'Work in Progress', sequence: 30 },
                hold: { label: 'Hold', sequence: 40 },
                complete: { label: 'Complete', sequence: 50 },
                cancelled: { label: 'Cancelled', sequence: 60 },
            },
        }),
        released: BooleanColumn({ label: 'Released to Supplier', default: false }),
        released_on: DateTimeColumn({ label: 'Released On', readOnly: true }),
        completed_on: DateTimeColumn({ label: 'Completed On', readOnly: true }),
        supplier_notes: GenericColumn({ label: 'Supplier Notes', columnType: 'journal_input', maxLength: 4000 }),
        completion_summary: MultiLineTextColumn({ label: 'Completion Summary', maxLength: 4000 }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [
        { name: 'supplier_task_account_state', unique: false, element: ['supplier_account', 'task_state'] },
        { name: 'supplier_task_parent', unique: false, element: ['parent_case'] },
    ],
})

export const x_sln_store_suppli_task_line = Table({
    name: 'x_sln_store_suppli_task_line',
    label: 'Supplier Task Line',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        supplier_task: ReferenceColumn({ label: 'Supplier Task', referenceTable: 'x_sln_store_suppli_supplier_task', mandatory: true, cascadeRule: 'delete' }),
        supply_line: ReferenceColumn({ label: 'Supply Line', referenceTable: 'x_sln_store_suppli_supply_line', mandatory: true, cascadeRule: 'delete' }),
        assigned_quantity: IntegerColumn({ label: 'Assigned Quantity', mandatory: true, default: 1, min: 1 }),
        fulfilled_quantity: IntegerColumn({ label: 'Fulfilled Quantity', default: 0, min: 0 }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
    index: [{ name: 'supplier_task_line_unique', unique: true, element: ['supplier_task', 'supply_line'] }],
})

export const x_sln_store_suppli_supply_receipt = Table({
    name: 'x_sln_store_suppli_supply_receipt',
    label: 'Supply Receipt',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        parent_case: ReferenceColumn({ label: 'Store Supply Case', referenceTable: 'x_sln_store_suppli_supply_case', mandatory: true, cascadeRule: 'restrict' }),
        supplier_task: ReferenceColumn({ label: 'Supplier Task', referenceTable: 'x_sln_store_suppli_supplier_task', cascadeRule: 'clear' }),
        supply_line: ReferenceColumn({ label: 'Supply Line', referenceTable: 'x_sln_store_suppli_supply_line', mandatory: true, cascadeRule: 'restrict' }),
        store: ReferenceColumn({ label: 'Store', referenceTable: 'x_sln_store_suppli_store', mandatory: true, cascadeRule: 'restrict' }),
        stockroom: ReferenceColumn({ label: 'Stockroom', referenceTable: 'alm_stockroom', mandatory: true, cascadeRule: 'restrict' }),
        supply_model: ReferenceColumn({ label: 'Store Supply', referenceTable: 'x_sln_store_suppli_store_supply_model', mandatory: true, cascadeRule: 'restrict' }),
        quantity: IntegerColumn({ label: 'Quantity Received', mandatory: true, min: 1 }),
        received_by: ReferenceColumn({ label: 'Received By', referenceTable: 'sys_user', mandatory: true, cascadeRule: 'restrict' }),
        received_on: DateTimeColumn({ label: 'Received On', mandatory: true }),
        source_key: StringColumn({ label: 'Idempotency Key', mandatory: true, maxLength: 80, unique: true, readOnly: true }),
        inventory_applied: BooleanColumn({ label: 'Inventory Applied', default: false, readOnly: true }),
        demo_data: BooleanColumn({ label: 'Demo Data', default: false }),
    },
})

export const x_sln_store_suppli_case_escalation = Table({
    name: 'x_sln_store_suppli_case_escalation',
    label: 'Case Escalation',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        parent_case: ReferenceColumn({ label: 'Store Supply Case', referenceTable: 'x_sln_store_suppli_supply_case', mandatory: true, cascadeRule: 'delete' }),
        reason: ChoiceColumn({
            label: 'Reason', mandatory: true, dropdown: 'dropdown_without_none',
            choices: {
                manual: { label: 'Manual', sequence: 10 },
                stale_update: { label: 'No Customer-visible Update', sequence: 20 },
                resolution_sla: { label: 'Resolution SLA Breach', sequence: 30 },
                unresolved_five_days: { label: 'Unresolved After Five Business Days', sequence: 40 },
            },
        }),
        triggered_on: DateTimeColumn({ label: 'Triggered On', mandatory: true }),
        triggered_by: ReferenceColumn({ label: 'Triggered By', referenceTable: 'sys_user', cascadeRule: 'clear' }),
        notification_sent: BooleanColumn({ label: 'Notification Sent', default: false }),
        details: MultiLineTextColumn({ label: 'Details', maxLength: 4000 }),
    },
    index: [{ name: 'case_escalation_dedupe', unique: true, element: ['parent_case', 'reason'] }],
})

export const x_sln_store_suppli_survey_ledger = Table({
    name: 'x_sln_store_suppli_survey_ledger',
    label: 'Supplier Survey Ledger',
    audit: true, allowWebServiceAccess: false, accessibleFrom: 'public', callerAccess: 'tracking',
    schema: {
        supplier_account: ReferenceColumn({ label: 'Supplier Account', referenceTable: 'customer_account', mandatory: true, cascadeRule: 'restrict' }),
        calendar_month: StringColumn({ label: 'Calendar Month', mandatory: true, maxLength: 7 }),
        parent_case: ReferenceColumn({ label: 'Store Supply Case', referenceTable: 'x_sln_store_suppli_supply_case', mandatory: true, cascadeRule: 'restrict' }),
        recipient: ReferenceColumn({ label: 'Survey Recipient', referenceTable: 'sys_user', mandatory: true, cascadeRule: 'restrict' }),
        assessment_instance: ReferenceColumn({ label: 'Assessment Instance', referenceTable: 'asmt_assessment_instance', cascadeRule: 'clear' }),
        sent_on: DateTimeColumn({ label: 'Sent On', mandatory: true }),
    },
    index: [{ name: 'supplier_survey_month_unique', unique: true, element: ['supplier_account', 'calendar_month'] }],
})
