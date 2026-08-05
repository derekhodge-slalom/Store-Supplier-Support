import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { supportGroup } from './configuration.now'
import {
    demoStore101, demoStore205, demoStore310, demoStore415, demoStore520, demoStore625,
    demoStoreAssociate, demoStoreAssociate205, demoStoreAssociate310, demoStoreAssociate415,
    demoStoreAssociate520, demoStoreAssociate625, demoSupplierA, demoSupplierB, demoSupplierC, demoSupplierD,
    demoStockroom415, demoStockroom520, demoSupplierContactA, demoSupplierContactB, demoSupplierContactD,
    demoSupportAgent, demoSupportManager,
} from './demo.now'
import {
    demoCarrier, demoColdCup24, demoDecaf, demoEspresso, demoHotCup16,
    demoLabel, demoOat, demoPaperModel, demoSanitizer, demoSleeve,
} from './demo-models.now'

const demo = { installMethod: 'demo' as const }

// Fictional coffeehouse cases provide a complete operational story without
// representing Starbucks Corporation or any real supplier relationship.
export const demoRequestUrgentCups = Record({
    $id: Now.ID['demo_request_urgent_cups'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000001',
        short_description: 'Urgent replenishment of 16 oz hot cups',
        description: 'Morning commuter volume depleted the final reserve case. Replenishment is needed before Thursday opening.',
        store: demoStore101, requested_by: demoStoreAssociate, originating_supplier: demoSupplierA,
        category: 'replenishment', subtype: 'urgent', needed_by: '2026-08-06',
        business_justification: 'The store cannot serve its highest-volume hot beverage size without this item.',
        intake_channel: 'portal', priority: '2', supply_state: 'new', approval_status: 'not_requested',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-05 09:12:00', last_customer_update: '2026-08-05 09:12:00', active: true, demo_data: true,
    } as any,
})

export const demoRequestPromotionCups = Record({
    $id: Now.ID['demo_request_promotion_cups'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000002',
        short_description: 'Cold cup inventory for weekend beverage promotion',
        description: 'The Lakeside drive-thru expects a sharp increase in 24 oz cold beverage demand during the weekend promotion.',
        store: demoStore205, requested_by: demoStoreAssociate205, originating_supplier: demoSupplierA,
        category: 'planned_demand', subtype: 'promotion_event', needed_by: '2026-08-07',
        business_justification: 'Promotion forecast is 35 percent above the normal weekend volume.',
        intake_channel: 'portal', priority: '3', supply_state: 'hold', hold_reason: 'awaiting_dm_approval',
        approval_status: 'requested', prior_active_state: 'open', assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-04 14:20:00', first_response_at: '2026-08-04 15:05:00', last_customer_update: '2026-08-04 15:05:00',
        active: true, demo_data: true,
    } as any,
})

export const demoRequestReserveEspresso = Record({
    $id: Now.ID['demo_request_reserve_espresso'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000003',
        short_description: 'Expedite espresso roast for Reserve tasting event',
        description: 'Two additional cases of espresso roast are required for the scheduled tasting bar activation.',
        store: demoStore415, requested_by: demoStoreAssociate415, originating_supplier: demoSupplierB,
        category: 'planned_demand', subtype: 'promotion_event', needed_by: '2026-08-08',
        business_justification: 'The tasting event has confirmed reservations and approved local marketing.',
        intake_channel: 'phone', priority: '2', supply_state: 'work_in_progress', approval_status: 'approved',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-03 10:40:00', first_response_at: '2026-08-03 11:05:00', last_customer_update: '2026-08-05 10:10:00',
        active: true, demo_data: true,
    } as any,
})

export const demoRequestLabels = Record({
    $id: Now.ID['demo_request_labels'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000004',
        short_description: 'Replenish mobile order label rolls',
        description: 'The pickup-only location is down to two label rolls and requires its standard replenishment quantity.',
        store: demoStore310, requested_by: demoStoreAssociate310, originating_supplier: demoSupplierD,
        category: 'replenishment', subtype: 'low_stock', needed_by: '2026-08-07',
        business_justification: 'Labels are required for order staging and handoff accuracy.',
        intake_channel: 'email', priority: '3', supply_state: 'open', approval_status: 'not_requested',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-04 08:35:00', first_response_at: '2026-08-04 09:10:00', last_customer_update: '2026-08-04 09:10:00',
        active: true, demo_data: true,
    } as any,
})

export const demoRequestReceiptPaperClosed = Record({
    $id: Now.ID['demo_request_receipt_paper_closed'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000005',
        short_description: 'Receipt paper replenishment completed',
        description: 'Airport kiosk requested a standard carton of thermal receipt paper.',
        store: demoStore520, requested_by: demoStoreAssociate520, originating_supplier: demoSupplierD,
        category: 'replenishment', subtype: 'standard', needed_by: '2026-08-03',
        business_justification: 'Required for printed customer receipts and end-of-day controls.',
        intake_channel: 'portal', priority: '4', supply_state: 'closed', approval_status: 'not_requested',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-07-30 11:20:00', first_response_at: '2026-07-30 12:05:00', last_customer_update: '2026-08-03 15:22:00',
        resolution_code: 'fulfilled', resolution_notes: 'Twelve rolls were received and verified in the Airport Kiosk stockroom.',
        service_rating: '5', service_feedback: 'Fast response and clear delivery updates.', active: false, demo_data: true,
    } as any,
})

export const demoRequestCarrierCancelled = Record({
    $id: Now.ID['demo_request_carrier_cancelled'], table: 'x_sln_store_suppli_supply_request', $meta: demo,
    data: {
        number: 'SSR9000006',
        short_description: 'One-time beverage carrier order cancelled',
        description: 'A local office delivery event was cancelled before supplier work was released.',
        store: demoStore625, requested_by: demoStoreAssociate625, originating_supplier: demoSupplierA,
        category: 'special_order', subtype: 'one_time', needed_by: '2026-08-04',
        business_justification: 'Original request supported a one-time bulk beverage order.',
        intake_channel: 'phone', priority: '4', supply_state: 'cancelled', approval_status: 'not_requested',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-01 13:15:00', first_response_at: '2026-08-01 13:40:00', last_customer_update: '2026-08-01 15:00:00',
        resolution_code: 'cancelled', resolution_notes: 'Requester confirmed the underlying event was cancelled before release.',
        active: false, demo_data: true,
    } as any,
})

export const demoIssueOatOutage = Record({
    $id: Now.ID['demo_issue_oat_outage'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000001',
        short_description: 'Oat beverage out of stock during morning peak',
        description: 'The supplier-originated case confirms the next scheduled oat beverage delivery will miss the store order window.',
        store: demoStore101, requested_by: demoSupplierContactB, contact: demoSupplierContactB, account: demoSupplierB,
        originating_supplier: demoSupplierB, category: 'availability', subtype: 'out_of_stock', detected_at: '2026-08-01 07:30:00',
        business_impact: 'Popular non-dairy beverages are unavailable during the highest-volume daypart.',
        intake_channel: 'portal', priority: '1', supply_state: 'work_in_progress', assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-08-01 07:40:00', first_response_at: '2026-08-01 08:10:00', last_customer_update: '2026-08-01 08:10:00',
        escalated: true, escalation_reasons: 'stale_update', active: true, demo_data: true,
    } as any,
})

export const demoIssueLateHotCups = Record({
    $id: Now.ID['demo_issue_late_hot_cups'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000002',
        short_description: 'Hot cup delivery missed airport receiving window',
        description: 'Carrier arrival occurred after the secured receiving dock closed and delivery was not completed.',
        store: demoStore520, requested_by: demoSupplierContactA, contact: demoSupplierContactA, account: demoSupplierA,
        originating_supplier: demoSupplierA, category: 'delivery', subtype: 'late', detected_at: '2026-07-31 16:45:00',
        business_impact: 'Airport kiosk is borrowing cups from a neighboring concession and has less than one day of supply.',
        intake_channel: 'email', priority: '2', supply_state: 'open', assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-07-31 17:05:00', first_response_at: '2026-08-03 08:15:00', last_customer_update: '2026-08-03 08:15:00',
        escalated: true, escalation_reasons: 'resolution_sla', active: true, demo_data: true,
    } as any,
})

export const demoIssueDamagedSanitizer = Record({
    $id: Now.ID['demo_issue_damaged_sanitizer'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000003',
        short_description: 'Sanitizer case arrived leaking',
        description: 'Two bottles were punctured in transit. The store isolated the carton and provided photographs.',
        store: demoStore625, requested_by: demoStoreAssociate625, originating_supplier: demoSupplierC,
        category: 'quality', subtype: 'damaged', detected_at: '2026-08-05 06:55:00',
        business_impact: 'The store has one sealed backup bottle and needs a safe replacement before close.',
        intake_channel: 'phone', priority: '1', supply_state: 'work_in_progress', assignment_group: supportGroup, assigned_to: demoSupportManager,
        opened_at: '2026-08-05 07:10:00', first_response_at: '2026-08-05 07:22:00', last_customer_update: '2026-08-05 08:05:00',
        escalated: true, escalation_reasons: 'manual', active: true, demo_data: true,
    } as any,
})

export const demoIssuePartialLabels = Record({
    $id: Now.ID['demo_issue_partial_labels'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000004',
        short_description: 'Partial shipment of mobile order labels',
        description: 'The store received four of twelve ordered label rolls. The packing slip lists all twelve as shipped.',
        store: demoStore205, requested_by: demoStoreAssociate205, originating_supplier: demoSupplierD,
        category: 'delivery', subtype: 'partial', detected_at: '2026-07-28 13:25:00',
        business_impact: 'The drive-thru has enough labels for approximately two business days.',
        intake_channel: 'portal', priority: '2', supply_state: 'hold', hold_reason: 'awaiting_supplier', prior_active_state: 'work_in_progress',
        assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-07-28 13:40:00', first_response_at: '2026-07-28 14:05:00', last_customer_update: '2026-07-29 10:00:00',
        escalated: true, escalation_reasons: 'unresolved_five_days', active: true, demo_data: true,
    } as any,
})

export const demoIssueWrongDecafClosed = Record({
    $id: Now.ID['demo_issue_wrong_decaf_closed'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000005',
        short_description: 'Decaf shipment contained regular espresso roast',
        description: 'The outer carton was labeled decaf but the sealed bags contained the regular espresso SKU.',
        store: demoStore415, requested_by: demoStoreAssociate415, originating_supplier: demoSupplierB,
        category: 'accuracy', subtype: 'wrong_item', detected_at: '2026-07-29 09:10:00',
        business_impact: 'Decaf beverage availability was reduced until replacement product arrived.',
        intake_channel: 'portal', priority: '2', supply_state: 'closed', assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-07-29 09:22:00', first_response_at: '2026-07-29 09:50:00', last_customer_update: '2026-08-03 12:30:00',
        resolution_code: 'issue_corrected', resolution_notes: 'Supplier replaced the mislabeled carton and collected the incorrect product.',
        service_rating: '4', service_feedback: 'Replacement was correct and communication was consistent.', active: false, demo_data: true,
    } as any,
})

export const demoIssueSleevesClosed = Record({
    $id: Now.ID['demo_issue_sleeves_closed'], table: 'x_sln_store_suppli_supply_issue', $meta: demo,
    data: {
        number: 'SSI9000006',
        short_description: 'Cup sleeves separating at glued seam',
        description: 'One production lot separated during normal use. The store quarantined the affected case.',
        store: demoStore310, requested_by: demoStoreAssociate310, originating_supplier: demoSupplierA,
        category: 'quality', subtype: 'defective', detected_at: '2026-07-30 15:15:00',
        business_impact: 'Baristas temporarily double-cupped hot beverages, increasing cup consumption.',
        intake_channel: 'agent', priority: '3', supply_state: 'closed', assignment_group: supportGroup, assigned_to: demoSupportAgent,
        opened_at: '2026-07-30 15:30:00', first_response_at: '2026-07-30 15:55:00', last_customer_update: '2026-08-04 11:18:00',
        resolution_code: 'issue_corrected', resolution_notes: 'Affected lot was replaced and supplier quality review was opened.',
        knowledge_recommended: true, service_rating: '5', active: false, demo_data: true,
    } as any,
})

export const demoLineRequestUrgentCups = Record({ $id: Now.ID['demo_line_request_urgent_cups'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestUrgentCups, supply_model: demoHotCup16, supplier_account: demoSupplierA, requested_quantity: 8, fulfilled_quantity: 0, needed_by: '2026-08-06', line_state: 'routed', notes: 'Deliver before store opening if possible.', demo_data: true } as any })
export const demoLineRequestPromotionCups = Record({ $id: Now.ID['demo_line_request_promotion_cups'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestPromotionCups, supply_model: demoColdCup24, supplier_account: demoSupplierA, requested_quantity: 20, fulfilled_quantity: 0, needed_by: '2026-08-07', line_state: 'draft', notes: 'Do not release until district manager approval.', demo_data: true } as any })
export const demoLineRequestReserveEspresso = Record({ $id: Now.ID['demo_line_request_reserve_espresso'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestReserveEspresso, supply_model: demoEspresso, supplier_account: demoSupplierB, requested_quantity: 2, fulfilled_quantity: 1, received_quantity: 1, needed_by: '2026-08-08', line_state: 'partially_received', notes: 'One case received; one case pending allocation.', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_request_labels'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestLabels, supply_model: demoLabel, supplier_account: demoSupplierD, requested_quantity: 12, fulfilled_quantity: 0, needed_by: '2026-08-07', line_state: 'routed', demo_data: true } as any })
export const demoLineRequestReceiptPaperClosed = Record({ $id: Now.ID['demo_line_request_receipt_paper_closed'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestReceiptPaperClosed, supply_model: demoPaperModel, supplier_account: demoSupplierD, requested_quantity: 12, fulfilled_quantity: 12, received_quantity: 12, needed_by: '2026-08-03', line_state: 'received', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_request_carrier_cancelled'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoRequestCarrierCancelled, supply_model: demoCarrier, supplier_account: demoSupplierA, requested_quantity: 5, fulfilled_quantity: 0, needed_by: '2026-08-04', line_state: 'cancelled', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_oat_outage'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssueOatOutage, supply_model: demoOat, supplier_account: demoSupplierB, requested_quantity: 10, fulfilled_quantity: 0, line_state: 'routed', notes: 'Affected quantity reflects forecast demand until next delivery.', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_late_hot_cups'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssueLateHotCups, supply_model: demoHotCup16, supplier_account: demoSupplierA, requested_quantity: 6, fulfilled_quantity: 0, line_state: 'routed', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_damaged_sanitizer'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssueDamagedSanitizer, supply_model: demoSanitizer, supplier_account: demoSupplierC, requested_quantity: 2, fulfilled_quantity: 0, line_state: 'routed', notes: 'Two damaged bottles isolated by the store.', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_partial_labels'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssuePartialLabels, supply_model: demoLabel, supplier_account: demoSupplierD, requested_quantity: 12, fulfilled_quantity: 4, line_state: 'routed', notes: 'Eight rolls remain missing.', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_wrong_decaf_closed'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssueWrongDecafClosed, supply_model: demoDecaf, supplier_account: demoSupplierB, requested_quantity: 1, fulfilled_quantity: 1, line_state: 'fulfilled', demo_data: true } as any })
Record({ $id: Now.ID['demo_line_issue_sleeves_closed'], table: 'x_sln_store_suppli_supply_line', $meta: demo, data: { parent_case: demoIssueSleevesClosed, supply_model: demoSleeve, supplier_account: demoSupplierA, requested_quantity: 1, fulfilled_quantity: 1, line_state: 'fulfilled', demo_data: true } as any })

export const demoDraftSupplierTask = Record({
    $id: Now.ID['demo_supplier_task_draft_promotion_cups'], table: 'x_sln_store_suppli_supplier_task', $meta: demo,
    data: {
        number: 'SST9000001', short_description: 'Draft fulfillment plan for promotional cold cups',
        description: 'Support is holding this task in Draft until district manager approval is completed.',
        parent_case: demoRequestPromotionCups, supplier_account: demoSupplierA, supplier_contact: demoSupplierContactA,
        task_state: 'draft', released: false, assignment_group: supportGroup, assigned_to: demoSupportAgent,
        active: true, demo_data: true,
    } as any,
})

export const demoActiveSupplierTask = Record({
    $id: Now.ID['demo_supplier_task_active_urgent_cups'], table: 'x_sln_store_suppli_supplier_task', $meta: demo,
    data: {
        number: 'SST9000002', short_description: 'Fulfill urgent 16 oz hot cup replenishment',
        description: 'Confirm allocation and expedited delivery for the Midtown café.',
        parent_case: demoRequestUrgentCups, supplier_account: demoSupplierA, supplier_contact: demoSupplierContactA,
        task_state: 'open', released: true, released_on: '2026-08-05 09:35:00',
        assignment_group: supportGroup, assigned_to: demoSupplierContactA, active: true, demo_data: true,
    } as any,
})

export const demoInProgressSupplierTask = Record({
    $id: Now.ID['demo_supplier_task_wip_reserve_espresso'], table: 'x_sln_store_suppli_supplier_task', $meta: demo,
    data: {
        number: 'SST9000003', short_description: 'Complete Reserve event espresso allocation',
        description: 'One case was received; confirm the second case and final delivery window.',
        parent_case: demoRequestReserveEspresso, supplier_account: demoSupplierB, supplier_contact: demoSupplierContactB,
        task_state: 'work_in_progress', released: true, released_on: '2026-08-03 11:20:00',
        supplier_notes: 'First case delivered. Second case is being transferred from the regional distribution center.',
        assignment_group: supportGroup, assigned_to: demoSupplierContactB, active: true, demo_data: true,
    } as any,
})

export const demoCompletedSupplierTask = Record({
    $id: Now.ID['demo_supplier_task_complete_receipt_paper'], table: 'x_sln_store_suppli_supplier_task', $meta: demo,
    data: {
        number: 'SST9000004', short_description: 'Deliver thermal receipt paper to airport kiosk',
        description: 'Standard replenishment of twelve thermal receipt paper rolls.',
        parent_case: demoRequestReceiptPaperClosed, supplier_account: demoSupplierD, supplier_contact: demoSupplierContactD,
        task_state: 'complete', released: true, released_on: '2026-07-30 12:20:00', completed_on: '2026-08-03 15:10:00',
        completion_summary: 'All twelve rolls delivered and signed for by the store.',
        assignment_group: supportGroup, assigned_to: demoSupplierContactD, active: false, demo_data: true,
    } as any,
})

Record({ $id: Now.ID['demo_task_line_draft_promotion_cups'], table: 'x_sln_store_suppli_task_line', $meta: demo, data: { supplier_task: demoDraftSupplierTask, supply_line: demoLineRequestPromotionCups, assigned_quantity: 20, fulfilled_quantity: 0, demo_data: true } })
Record({ $id: Now.ID['demo_task_line_active_urgent_cups'], table: 'x_sln_store_suppli_task_line', $meta: demo, data: { supplier_task: demoActiveSupplierTask, supply_line: demoLineRequestUrgentCups, assigned_quantity: 8, fulfilled_quantity: 0, demo_data: true } })
Record({ $id: Now.ID['demo_task_line_wip_reserve_espresso'], table: 'x_sln_store_suppli_task_line', $meta: demo, data: { supplier_task: demoInProgressSupplierTask, supply_line: demoLineRequestReserveEspresso, assigned_quantity: 2, fulfilled_quantity: 1, demo_data: true } })
Record({ $id: Now.ID['demo_task_line_complete_receipt_paper'], table: 'x_sln_store_suppli_task_line', $meta: demo, data: { supplier_task: demoCompletedSupplierTask, supply_line: demoLineRequestReceiptPaperClosed, assigned_quantity: 12, fulfilled_quantity: 12, demo_data: true } })

Record({
    $id: Now.ID['demo_receipt_partial_reserve_espresso'], table: 'x_sln_store_suppli_supply_receipt', $meta: demo,
    data: {
        parent_case: demoRequestReserveEspresso, supplier_task: demoInProgressSupplierTask, supply_line: demoLineRequestReserveEspresso,
        store: demoStore415, stockroom: demoStockroom415, supply_model: demoEspresso, quantity: 1,
        received_by: demoStoreAssociate415, received_on: '2026-08-05 08:25:00', source_key: 'DEMO-RECEIPT-ESPRESSO-001',
        inventory_applied: true, demo_data: true,
    } as any,
})

Record({
    $id: Now.ID['demo_receipt_final_receipt_paper'], table: 'x_sln_store_suppli_supply_receipt', $meta: demo,
    data: {
        parent_case: demoRequestReceiptPaperClosed, supplier_task: demoCompletedSupplierTask, supply_line: demoLineRequestReceiptPaperClosed,
        store: demoStore520, stockroom: demoStockroom520, supply_model: demoPaperModel, quantity: 12,
        received_by: demoStoreAssociate520, received_on: '2026-08-03 15:18:00', source_key: 'DEMO-RECEIPT-PAPER-001',
        inventory_applied: true, demo_data: true,
    } as any,
})

Record({
    $id: Now.ID['demo_survey_ledger_packaging_august'], table: 'x_sln_store_suppli_survey_ledger', $meta: demo,
    data: {
        supplier_account: demoSupplierA, calendar_month: '2026-08', parent_case: demoIssueSleevesClosed,
        recipient: demoStoreAssociate310, sent_on: '2026-08-04 11:30:00', demo_data: true,
    } as any,
})

Record({
    $id: Now.ID['demo_survey_ledger_operations_august'], table: 'x_sln_store_suppli_survey_ledger', $meta: demo,
    data: {
        supplier_account: demoSupplierD, calendar_month: '2026-08', parent_case: demoRequestReceiptPaperClosed,
        recipient: demoStoreAssociate520, sent_on: '2026-08-03 15:30:00', demo_data: true,
    } as any,
})

Record({ $id: Now.ID['demo_escalation_stale_update'], table: 'x_sln_store_suppli_case_escalation', $meta: demo, data: { parent_case: demoIssueOatOutage, reason: 'stale_update', triggered_on: '2026-08-05 08:15:00', triggered_by: demoSupportManager, notification_sent: true, details: 'No customer-visible support update was posted within three business days.', demo_data: true } as any })
Record({ $id: Now.ID['demo_escalation_resolution_sla'], table: 'x_sln_store_suppli_case_escalation', $meta: demo, data: { parent_case: demoIssueLateHotCups, reason: 'resolution_sla', triggered_on: '2026-08-05 09:00:00', triggered_by: demoSupportManager, notification_sent: true, details: 'The three-business-day resolution target was breached while redelivery remained unconfirmed.', demo_data: true } as any })
Record({ $id: Now.ID['demo_escalation_manual'], table: 'x_sln_store_suppli_case_escalation', $meta: demo, data: { parent_case: demoIssueDamagedSanitizer, reason: 'manual', triggered_on: '2026-08-05 07:35:00', triggered_by: demoSupportAgent, notification_sent: true, details: 'Support escalated immediately because the damaged chemical packaging presented a safety concern.', demo_data: true } as any })
Record({ $id: Now.ID['demo_escalation_five_days'], table: 'x_sln_store_suppli_case_escalation', $meta: demo, data: { parent_case: demoIssuePartialLabels, reason: 'unresolved_five_days', triggered_on: '2026-08-04 10:05:00', triggered_by: demoSupportManager, notification_sent: true, details: 'The missing shipment quantity remained unresolved after five business days.', demo_data: true } as any })
