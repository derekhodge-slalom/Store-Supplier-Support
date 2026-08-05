const { credentialProvider } = require('@servicenow/sdk-cli/dist/auth')

const cases = [
    {
        table: 'x_sln_store_suppli_supply_request', key: 'urgent_cups', store: 'DEMO-101', requester: 'sss.demo.associate', supplier: 'Demo Coffeehouse Packaging Co - CSM Account',
        data: { number: 'SSR9000001', short_description: 'Urgent replenishment of 16 oz hot cups', description: 'Morning commuter volume depleted the final reserve case. Replenishment is needed before Thursday opening.', category: 'replenishment', subtype: 'urgent', needed_by: '2026-08-06', business_justification: 'The store cannot serve its highest-volume hot beverage size without this item.', intake_channel: 'portal', priority: '2', supply_state: 'new', approval_status: 'not_requested', opened_at: '2026-08-05 09:12:00', last_customer_update: '2026-08-05 09:12:00', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_request', key: 'promotion_cups', store: 'DEMO-205', requester: 'sss.demo.associate.205', supplier: 'Demo Coffeehouse Packaging Co - CSM Account',
        data: { number: 'SSR9000002', short_description: 'Cold cup inventory for weekend beverage promotion', description: 'The Lakeside drive-thru expects a sharp increase in 24 oz cold beverage demand during the weekend promotion.', category: 'planned_demand', subtype: 'promotion_event', needed_by: '2026-08-07', business_justification: 'Promotion forecast is 35 percent above the normal weekend volume.', intake_channel: 'portal', priority: '3', supply_state: 'hold', hold_reason: 'awaiting_dm_approval', approval_status: 'requested', prior_active_state: 'open', opened_at: '2026-08-04 14:20:00', first_response_at: '2026-08-04 15:05:00', last_customer_update: '2026-08-04 15:05:00', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_request', key: 'reserve_espresso', store: 'DEMO-415', requester: 'sss.demo.associate.415', supplier: 'Demo Beverage Ingredients Co - CSM Account',
        data: { number: 'SSR9000003', short_description: 'Expedite espresso roast for Reserve tasting event', description: 'Two additional cases of espresso roast are required for the scheduled tasting bar activation.', category: 'planned_demand', subtype: 'promotion_event', needed_by: '2026-08-08', business_justification: 'The tasting event has confirmed reservations and approved local marketing.', intake_channel: 'phone', priority: '2', supply_state: 'work_in_progress', approval_status: 'approved', opened_at: '2026-08-03 10:40:00', first_response_at: '2026-08-03 11:05:00', last_customer_update: '2026-08-05 10:10:00', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_request', key: 'labels', store: 'DEMO-310', requester: 'sss.demo.associate.310', supplier: 'Demo Retail Operations Supply Co - CSM Account',
        data: { number: 'SSR9000004', short_description: 'Replenish mobile order label rolls', description: 'The pickup-only location is down to two label rolls and requires its standard replenishment quantity.', category: 'replenishment', subtype: 'low_stock', needed_by: '2026-08-07', business_justification: 'Labels are required for order staging and handoff accuracy.', intake_channel: 'email', priority: '3', supply_state: 'open', approval_status: 'not_requested', opened_at: '2026-08-04 08:35:00', first_response_at: '2026-08-04 09:10:00', last_customer_update: '2026-08-04 09:10:00', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_request', key: 'receipt_paper_closed', store: 'DEMO-520', requester: 'sss.demo.associate.520', supplier: 'Demo Retail Operations Supply Co - CSM Account',
        data: { number: 'SSR9000005', short_description: 'Receipt paper replenishment completed', description: 'Airport kiosk requested a standard carton of thermal receipt paper.', category: 'replenishment', subtype: 'standard', needed_by: '2026-08-03', business_justification: 'Required for printed customer receipts and end-of-day controls.', intake_channel: 'portal', priority: '4', supply_state: 'closed', approval_status: 'not_requested', opened_at: '2026-07-30 11:20:00', first_response_at: '2026-07-30 12:05:00', last_customer_update: '2026-08-03 15:22:00', resolution_code: 'fulfilled', resolution_notes: 'Twelve rolls were received and verified in the Airport Kiosk stockroom.', service_rating: '5', service_feedback: 'Fast response and clear delivery updates.', active: false },
    },
    {
        table: 'x_sln_store_suppli_supply_request', key: 'carrier_cancelled', store: 'DEMO-625', requester: 'sss.demo.associate.625', supplier: 'Demo Coffeehouse Packaging Co - CSM Account',
        data: { number: 'SSR9000006', short_description: 'One-time beverage carrier order cancelled', description: 'A local office delivery event was cancelled before supplier work was released.', category: 'special_order', subtype: 'one_time', needed_by: '2026-08-04', business_justification: 'Original request supported a one-time bulk beverage order.', intake_channel: 'phone', priority: '4', supply_state: 'cancelled', approval_status: 'not_requested', opened_at: '2026-08-01 13:15:00', first_response_at: '2026-08-01 13:40:00', last_customer_update: '2026-08-01 15:00:00', resolution_code: 'cancelled', resolution_notes: 'Requester confirmed the underlying event was cancelled before release.', active: false },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'oat_outage', store: 'DEMO-101', requester: 'sss.demo.supplier.b', supplier: 'Demo Beverage Ingredients Co - CSM Account', supplierOriginated: true,
        data: { number: 'SSI9000001', short_description: 'Oat beverage out of stock during morning peak', description: 'The supplier-originated case confirms the next scheduled oat beverage delivery will miss the store order window.', category: 'availability', subtype: 'out_of_stock', detected_at: '2026-08-01 07:30:00', business_impact: 'Popular non-dairy beverages are unavailable during the highest-volume daypart.', intake_channel: 'portal', priority: '1', supply_state: 'work_in_progress', opened_at: '2026-08-01 07:40:00', first_response_at: '2026-08-01 08:10:00', last_customer_update: '2026-08-01 08:10:00', escalated: true, escalation_reasons: 'stale_update', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'late_hot_cups', store: 'DEMO-520', requester: 'sss.demo.supplier.a', supplier: 'Demo Coffeehouse Packaging Co - CSM Account', supplierOriginated: true,
        data: { number: 'SSI9000002', short_description: 'Hot cup delivery missed airport receiving window', description: 'Carrier arrival occurred after the secured receiving dock closed and delivery was not completed.', category: 'delivery', subtype: 'late', detected_at: '2026-07-31 16:45:00', business_impact: 'Airport kiosk is borrowing cups from a neighboring concession and has less than one day of supply.', intake_channel: 'email', priority: '2', supply_state: 'open', opened_at: '2026-07-31 17:05:00', first_response_at: '2026-08-03 08:15:00', last_customer_update: '2026-08-03 08:15:00', escalated: true, escalation_reasons: 'resolution_sla', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'damaged_sanitizer', store: 'DEMO-625', requester: 'sss.demo.associate.625', supplier: 'Demo Sanitation & Safety Co - CSM Account', assignedTo: 'sss.demo.manager',
        data: { number: 'SSI9000003', short_description: 'Sanitizer case arrived leaking', description: 'Two bottles were punctured in transit. The store isolated the carton and provided photographs.', category: 'quality', subtype: 'damaged', detected_at: '2026-08-05 06:55:00', business_impact: 'The store has one sealed backup bottle and needs a safe replacement before close.', intake_channel: 'phone', priority: '1', supply_state: 'work_in_progress', opened_at: '2026-08-05 07:10:00', first_response_at: '2026-08-05 07:22:00', last_customer_update: '2026-08-05 08:05:00', escalated: true, escalation_reasons: 'manual', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'partial_labels', store: 'DEMO-205', requester: 'sss.demo.associate.205', supplier: 'Demo Retail Operations Supply Co - CSM Account',
        data: { number: 'SSI9000004', short_description: 'Partial shipment of mobile order labels', description: 'The store received four of twelve ordered label rolls. The packing slip lists all twelve as shipped.', category: 'delivery', subtype: 'partial', detected_at: '2026-07-28 13:25:00', business_impact: 'The drive-thru has enough labels for approximately two business days.', intake_channel: 'portal', priority: '2', supply_state: 'hold', hold_reason: 'awaiting_supplier', prior_active_state: 'work_in_progress', opened_at: '2026-07-28 13:40:00', first_response_at: '2026-07-28 14:05:00', last_customer_update: '2026-07-29 10:00:00', escalated: true, escalation_reasons: 'unresolved_five_days', active: true },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'wrong_decaf_closed', store: 'DEMO-415', requester: 'sss.demo.associate.415', supplier: 'Demo Beverage Ingredients Co - CSM Account',
        data: { number: 'SSI9000005', short_description: 'Decaf shipment contained regular espresso roast', description: 'The outer carton was labeled decaf but the sealed bags contained the regular espresso SKU.', category: 'accuracy', subtype: 'wrong_item', detected_at: '2026-07-29 09:10:00', business_impact: 'Decaf beverage availability was reduced until replacement product arrived.', intake_channel: 'portal', priority: '2', supply_state: 'closed', opened_at: '2026-07-29 09:22:00', first_response_at: '2026-07-29 09:50:00', last_customer_update: '2026-08-03 12:30:00', resolution_code: 'issue_corrected', resolution_notes: 'Supplier replaced the mislabeled carton and collected the incorrect product.', service_rating: '4', service_feedback: 'Replacement was correct and communication was consistent.', active: false },
    },
    {
        table: 'x_sln_store_suppli_supply_issue', key: 'sleeves_closed', store: 'DEMO-310', requester: 'sss.demo.associate.310', supplier: 'Demo Coffeehouse Packaging Co - CSM Account',
        data: { number: 'SSI9000006', short_description: 'Cup sleeves separating at glued seam', description: 'One production lot separated during normal use. The store quarantined the affected case.', category: 'quality', subtype: 'defective', detected_at: '2026-07-30 15:15:00', business_impact: 'Baristas temporarily double-cupped hot beverages, increasing cup consumption.', intake_channel: 'agent', priority: '3', supply_state: 'closed', opened_at: '2026-07-30 15:30:00', first_response_at: '2026-07-30 15:55:00', last_customer_update: '2026-08-04 11:18:00', resolution_code: 'issue_corrected', resolution_notes: 'Affected lot was replaced and supplier quality review was opened.', knowledge_recommended: true, service_rating: '5', active: false },
    },
]

const lines = [
    ['urgent_cups', 'DEMO-COFFEE-PKG-016', 8, 0, 'routed', '2026-08-06'],
    ['promotion_cups', 'DEMO-COFFEE-PKG-C24', 20, 0, 'draft', '2026-08-07'],
    ['reserve_espresso', 'DEMO-COFFEE-ING-ESP', 2, 1, 'partially_received', '2026-08-08', 1],
    ['labels', 'DEMO-COFFEE-OPS-LBL', 12, 0, 'routed', '2026-08-07'],
    ['receipt_paper_closed', 'DEMO-COFFEE-OPS-001', 12, 12, 'received', '2026-08-03', 12],
    ['carrier_cancelled', 'DEMO-COFFEE-PKG-CAR', 5, 0, 'cancelled', '2026-08-04'],
    ['oat_outage', 'DEMO-COFFEE-ING-OAT', 10, 0, 'routed'],
    ['late_hot_cups', 'DEMO-COFFEE-PKG-016', 6, 0, 'routed'],
    ['damaged_sanitizer', 'DEMO-COFFEE-CLN-SAN', 2, 0, 'routed'],
    ['partial_labels', 'DEMO-COFFEE-OPS-LBL', 12, 4, 'routed'],
    ['wrong_decaf_closed', 'DEMO-COFFEE-ING-DCF', 1, 1, 'fulfilled'],
    ['sleeves_closed', 'DEMO-COFFEE-PKG-SLV', 1, 1, 'fulfilled'],
]

const escalations = [
    ['oat_outage', 'stale_update', '2026-08-05 08:15:00', 'sss.demo.manager', 'No customer-visible support update was posted within three business days.'],
    ['late_hot_cups', 'resolution_sla', '2026-08-05 09:00:00', 'sss.demo.manager', 'The three-business-day resolution target was breached while redelivery remained unconfirmed.'],
    ['damaged_sanitizer', 'manual', '2026-08-05 07:35:00', 'sss.demo.agent', 'Support escalated immediately because the damaged chemical packaging presented a safety concern.'],
    ['partial_labels', 'unresolved_five_days', '2026-08-04 10:05:00', 'sss.demo.manager', 'The missing shipment quantity remained unresolved after five business days.'],
]

const supplierTasks = [
    {
        key: 'draft_promotion_cups', caseKey: 'promotion_cups', lineKey: 'promotion_cups', number: 'SST9000001',
        supplier: 'Demo Coffeehouse Packaging Co - CSM Account', contact: 'sss.demo.supplier.a', assignedTo: 'sss.demo.agent',
        data: { short_description: 'Draft fulfillment plan for promotional cold cups', description: 'Support is holding this task in Draft until district manager approval is completed.', task_state: 'draft', released: false, active: true },
        assignedQuantity: 20, fulfilledQuantity: 0,
    },
    {
        key: 'active_urgent_cups', caseKey: 'urgent_cups', lineKey: 'urgent_cups', number: 'SST9000002',
        supplier: 'Demo Coffeehouse Packaging Co - CSM Account', contact: 'sss.demo.supplier.a', assignedTo: 'sss.demo.supplier.a',
        data: { short_description: 'Fulfill urgent 16 oz hot cup replenishment', description: 'Confirm allocation and expedited delivery for the Midtown café.', task_state: 'open', released: true, released_on: '2026-08-05 09:35:00', active: true },
        assignedQuantity: 8, fulfilledQuantity: 0,
    },
    {
        key: 'wip_reserve_espresso', caseKey: 'reserve_espresso', lineKey: 'reserve_espresso', number: 'SST9000003',
        supplier: 'Demo Beverage Ingredients Co - CSM Account', contact: 'sss.demo.supplier.b', assignedTo: 'sss.demo.supplier.b',
        data: { short_description: 'Complete Reserve event espresso allocation', description: 'One case was received; confirm the second case and final delivery window.', task_state: 'work_in_progress', released: true, released_on: '2026-08-03 11:20:00', completion_summary: '', active: true },
        assignedQuantity: 2, fulfilledQuantity: 1,
    },
    {
        key: 'complete_receipt_paper', caseKey: 'receipt_paper_closed', lineKey: 'receipt_paper_closed', number: 'SST9000004',
        supplier: 'Demo Retail Operations Supply Co - CSM Account', contact: 'sss.demo.supplier.d', assignedTo: 'sss.demo.supplier.d',
        data: { short_description: 'Deliver thermal receipt paper to airport kiosk', description: 'Standard replenishment of twelve thermal receipt paper rolls.', task_state: 'complete', released: true, released_on: '2026-07-30 12:20:00', completed_on: '2026-08-03 15:10:00', completion_summary: 'All twelve rolls delivered and signed for by the store.', active: false },
        assignedQuantity: 12, fulfilledQuantity: 12,
    },
]

const receipts = [
    { key: 'DEMO-RECEIPT-ESPRESSO-001', caseKey: 'reserve_espresso', taskKey: 'wip_reserve_espresso', lineKey: 'reserve_espresso', quantity: 1, receivedBy: 'sss.demo.associate.415', receivedOn: '2026-08-05 08:25:00' },
    { key: 'DEMO-RECEIPT-PAPER-001', caseKey: 'receipt_paper_closed', taskKey: 'complete_receipt_paper', lineKey: 'receipt_paper_closed', quantity: 12, receivedBy: 'sss.demo.associate.520', receivedOn: '2026-08-03 15:18:00' },
]

const surveyLedgers = [
    { supplier: 'Demo Coffeehouse Packaging Co - CSM Account', month: '2026-08', caseKey: 'sleeves_closed', recipient: 'sss.demo.associate.310', sentOn: '2026-08-04 11:30:00' },
    { supplier: 'Demo Retail Operations Supply Co - CSM Account', month: '2026-08', caseKey: 'receipt_paper_closed', recipient: 'sss.demo.associate.520', sentOn: '2026-08-03 15:30:00' },
]

async function main() {
    const credential = await credentialProvider('demo5')
    const baseUrl = credential.getUrl().origin
    const headers = { ...(await credential.getHeaders()), Accept: 'application/json', 'Content-Type': 'application/json' }

    async function query(table, encodedQuery, fields = 'sys_id') {
        const params = new URLSearchParams({ sysparm_query: encodedQuery, sysparm_fields: fields, sysparm_limit: '10', sysparm_display_value: 'false' })
        const response = await fetch(`${baseUrl}/api/now/table/${table}?${params}`, { headers })
        const body = await response.text()
        if (!response.ok) throw new Error(`${table} query returned ${response.status}: ${body.slice(0, 500)}`)
        return JSON.parse(body).result || []
    }

    async function resolve(table, encodedQuery) {
        const records = await query(table, encodedQuery)
        if (records.length !== 1) throw new Error(`Expected one ${table} for ${encodedQuery}; found ${records.length}`)
        return records[0].sys_id
    }

    async function upsert(table, encodedQuery, data) {
        const existing = await query(table, encodedQuery)
        const url = existing.length ? `${baseUrl}/api/now/table/${table}/${existing[0].sys_id}` : `${baseUrl}/api/now/table/${table}`
        const response = await fetch(url, { method: existing.length ? 'PATCH' : 'POST', headers, body: JSON.stringify(data) })
        const body = await response.text()
        if (!response.ok) throw new Error(`${table} ${existing.length ? 'update' : 'insert'} returned ${response.status}: ${body.slice(0, 800)}`)
        return { sys_id: JSON.parse(body).result.sys_id, created: !existing.length }
    }

    async function updateById(table, sysId, data) {
        const response = await fetch(`${baseUrl}/api/now/table/${table}/${sysId}`, { method: 'PATCH', headers, body: JSON.stringify(data) })
        const body = await response.text()
        if (!response.ok) throw new Error(`${table} update returned ${response.status}: ${body.slice(0, 800)}`)
        return JSON.parse(body).result
    }

    function referenceValue(value) {
        return value && typeof value === 'object' ? value.value : value
    }

    const supportGroup = await resolve('sys_user_group', 'name=Store Supplier Support')
    const supportAgent = await resolve('sys_user', 'user_name=sss.demo.agent')
    const storeIds = {}
    const userIds = {}
    const supplierIds = {}
    const caseIds = {}
    const lineIds = {}
    const taskIds = {}
    let createdCases = 0

    for (const item of cases) {
        if (!storeIds[item.store]) storeIds[item.store] = await resolve('x_sln_store_suppli_store', `store_number=${item.store}`)
        if (!userIds[item.requester]) userIds[item.requester] = await resolve('sys_user', `user_name=${item.requester}`)
        if (!supplierIds[item.supplier]) supplierIds[item.supplier] = await resolve('customer_account', `name=${item.supplier}`)
        const assignedUser = item.assignedTo ? await resolve('sys_user', `user_name=${item.assignedTo}`) : supportAgent
        const payload = {
            ...item.data,
            store: storeIds[item.store], requested_by: userIds[item.requester], originating_supplier: supplierIds[item.supplier],
            assignment_group: supportGroup, assigned_to: assignedUser, demo_data: true,
        }
        if (item.supplierOriginated) {
            payload.contact = userIds[item.requester]
            payload.account = supplierIds[item.supplier]
        }
        const result = await upsert(item.table, `demo_data=true^short_description=${item.data.short_description}`, payload)
        caseIds[item.key] = result.sys_id
        if (result.created) createdCases++
    }

    let createdLines = 0
    for (const [caseKey, modelNumber, requested, fulfilled, state, neededBy, received = 0] of lines) {
        const model = await resolve('x_sln_store_suppli_store_supply_model', `model_number=${modelNumber}`)
        const item = cases.find((candidate) => candidate.key === caseKey)
        const supplier = supplierIds[item.supplier]
        const result = await upsert('x_sln_store_suppli_supply_line', `parent_case=${caseIds[caseKey]}^supply_model=${model}^demo_data=true`, {
            parent_case: caseIds[caseKey], supply_model: model, supplier_account: supplier,
            requested_quantity: requested, fulfilled_quantity: fulfilled, received_quantity: received,
            line_state: state, needed_by: neededBy || '', demo_data: true,
        })
        lineIds[caseKey] = result.sys_id
        if (result.created) createdLines++
    }

    let createdTasks = 0
    let createdTaskLines = 0
    for (const item of supplierTasks) {
        if (!supplierIds[item.supplier]) supplierIds[item.supplier] = await resolve('customer_account', `name=${item.supplier}`)
        const contact = await resolve('customer_contact', `user_name=${item.contact}`)
        const assignedTo = await resolve('sys_user', `user_name=${item.assignedTo}`)
        const result = await upsert('x_sln_store_suppli_supplier_task', `number=${item.number}^demo_data=true`, {
            ...item.data,
            number: item.number, parent_case: caseIds[item.caseKey], supplier_account: supplierIds[item.supplier],
            supplier_contact: contact, assignment_group: supportGroup, assigned_to: assignedTo, demo_data: true,
        })
        taskIds[item.key] = result.sys_id
        if (result.created) createdTasks++

        const taskLine = await upsert('x_sln_store_suppli_task_line', `supplier_task=${result.sys_id}^supply_line=${lineIds[item.lineKey]}`, {
            supplier_task: result.sys_id, supply_line: lineIds[item.lineKey],
            assigned_quantity: item.assignedQuantity, fulfilled_quantity: item.fulfilledQuantity, demo_data: true,
        })
        if (taskLine.created) createdTaskLines++
    }

    let createdReceipts = 0
    for (const item of receipts) {
        const caseDefinition = cases.find((candidate) => candidate.key === item.caseKey)
        const storeId = storeIds[caseDefinition.store]
        const [storeRecord] = await query('x_sln_store_suppli_store', `sys_id=${storeId}`, 'sys_id,stockroom')
        const [lineRecord] = await query('x_sln_store_suppli_supply_line', `sys_id=${lineIds[item.lineKey]}`, 'sys_id,supply_model')
        const receivedBy = await resolve('sys_user', `user_name=${item.receivedBy}`)
        const existing = await query('x_sln_store_suppli_supply_receipt', `source_key=${item.key}`, 'sys_id')
        const payload = {
            parent_case: caseIds[item.caseKey], supplier_task: taskIds[item.taskKey], supply_line: lineIds[item.lineKey],
            store: storeId, stockroom: referenceValue(storeRecord.stockroom), supply_model: referenceValue(lineRecord.supply_model),
            quantity: item.quantity, received_by: receivedBy, received_on: item.receivedOn,
            source_key: item.key, demo_data: true,
        }
        if (existing.length) {
            await updateById('x_sln_store_suppli_supply_receipt', existing[0].sys_id, payload)
        } else {
            // Demo records inserted by the application already contain their
            // story-state quantities. Reset only this line before using the
            // normal receipt workflow so validation and inventory apply once.
            await updateById('x_sln_store_suppli_supply_line', lineIds[item.lineKey], { received_quantity: 0, line_state: 'routed' })
            const created = await upsert('x_sln_store_suppli_supply_receipt', `source_key=${item.key}`, payload)
            await updateById('x_sln_store_suppli_supply_receipt', created.sys_id, { received_by: receivedBy, received_on: item.receivedOn, demo_data: true })
            createdReceipts++
        }
    }

    let createdSurveyLedgers = 0
    for (const item of surveyLedgers) {
        if (!supplierIds[item.supplier]) supplierIds[item.supplier] = await resolve('customer_account', `name=${item.supplier}`)
        const recipient = await resolve('sys_user', `user_name=${item.recipient}`)
        const result = await upsert('x_sln_store_suppli_survey_ledger', `supplier_account=${supplierIds[item.supplier]}^calendar_month=${item.month}`, {
            supplier_account: supplierIds[item.supplier], calendar_month: item.month, parent_case: caseIds[item.caseKey],
            recipient, sent_on: item.sentOn, demo_data: true,
        })
        if (result.created) createdSurveyLedgers++
    }

    let createdEscalations = 0
    for (const [caseKey, reason, triggeredOn, userName, details] of escalations) {
        const triggeredBy = await resolve('sys_user', `user_name=${userName}`)
        const result = await upsert('x_sln_store_suppli_case_escalation', `parent_case=${caseIds[caseKey]}^reason=${reason}`, {
            parent_case: caseIds[caseKey], reason, triggered_on: triggeredOn, triggered_by: triggeredBy,
            notification_sent: true, details, demo_data: true,
        })
        if (result.created) createdEscalations++
    }

    console.log(`Demo seed complete: ${createdCases} cases, ${createdLines} lines, ${createdTasks} supplier tasks, ${createdTaskLines} task lines, ${createdReceipts} receipts, ${createdEscalations} escalations, and ${createdSurveyLedgers} survey ledger rows created; existing records updated idempotently.`)
}

main().catch((error) => {
    console.error(error.stack || error.message)
    process.exit(1)
})
