import '@servicenow/sdk/global'
import {
    AttachmentVariable,
    CatalogItemRecordProducer,
    DateVariable,
    MultiLineTextVariable,
    Record,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'
import { createProducerSupplyLine, prepareIssueProducer, prepareRequestProducer } from '../../server/script'
import { districtManagerRole, storeAssociateRole, supplierAgentRole } from './security.now'
import { x_sln_store_suppli_supply_issue, x_sln_store_suppli_supply_request } from './tables.now'

export const storeSupplyCatalog = Record({
    $id: Now.ID['store_supply_catalog'], table: 'sc_catalog',
    data: { title: 'Store Supplier Support', description: 'Store supply requests, issues, and fulfillment collaboration.', active: true },
})
export const storeSupplyCategory = Record({
    $id: Now.ID['store_supply_catalog_category'], table: 'sc_category',
    data: {
        title: 'Store Supplies', description: 'Request supplies or report an issue with availability, delivery, accuracy, or quality.',
        active: true, order: 100, sc_catalog: storeSupplyCatalog,
    },
})

const intakeRoles = [storeAssociateRole, districtManagerRole, supplierAgentRole]

export const supplyRequestProducer = CatalogItemRecordProducer({
    $id: Now.ID['supply_request_record_producer'], name: 'Submit Store Supply Request', table: x_sln_store_suppli_supply_request,
    active: true, availability: 'both', shortDescription: 'Request replenishment, planned demand, or a special-order store supply.',
    description: 'Creates a Store Supply Request owned by Store Supplier Support. Supplier work is released only after support review.',
    catalogs: [storeSupplyCatalog], categories: [storeSupplyCategory], roles: intakeRoles,
    hideAddToCart: true, hideAddToWishList: true, hideQuantitySelector: true, redirectUrl: 'generatedRecord',
    variables: {
        store: ReferenceVariable({
            question: 'Store', referenceTable: 'x_sln_store_suppli_store', order: 100, mandatory: true,
            referenceQualCondition: 'active=true',
        }),
        shortDescription: SingleLineTextVariable({
            question: 'What supplies do you need?', order: 110, mandatory: true, width: 100,
        }),
        description: MultiLineTextVariable({
            question: 'Request details', order: 120, mandatory: true,
        }),
        category: SelectBoxVariable({
            question: 'Category', order: 130, mandatory: true, includeNone: false, mapToField: true, field: 'category',
            choices: {
                replenishment: { label: 'Replenishment' }, planned_demand: { label: 'Planned Demand' },
                special_order: { label: 'Special Order' }, other: { label: 'Other' },
            },
        }),
        subtype: SelectBoxVariable({
            question: 'Subtype', order: 140, mandatory: true, includeNone: false, mapToField: true, field: 'subtype',
            choices: {
                standard: { label: 'Standard' }, urgent: { label: 'Urgent' }, low_stock: { label: 'Low Stock' },
                seasonal: { label: 'Seasonal' }, promotion_event: { label: 'Promotion / Event' },
                new_store_remodel: { label: 'New Store / Remodel' }, new_item: { label: 'New Item' },
                replacement: { label: 'Replacement' }, one_time: { label: 'One-time' }, general: { label: 'Other' },
            },
        }),
        supplyModel: ReferenceVariable({
            question: 'Supply item', referenceTable: 'cmdb_consumable_product_model', order: 150, mandatory: true,
            referenceQualCondition: 'status=In Production^ORstatusISEMPTY',
        }),
        quantity: SingleLineTextVariable({ question: 'Quantity', order: 160, mandatory: true, defaultValue: '1', width: 25 }),
        neededBy: DateVariable({ question: 'Needed by', order: 170, mapToField: true, field: 'needed_by', width: 50 }),
        businessJustification: MultiLineTextVariable({
            question: 'Business justification', order: 180, mapToField: true, field: 'business_justification',
        }),
        priority: SelectBoxVariable({
            question: 'Priority', order: 190, mandatory: true, includeNone: false, defaultValue: '3',
            choices: { '1': { label: 'Critical' }, '2': { label: 'High' }, '3': { label: 'Moderate' }, '4': { label: 'Low' } },
        }),
        lineNotes: MultiLineTextVariable({ question: 'Item notes', order: 200 }),
        attachments: AttachmentVariable({ question: 'Supporting attachment (optional)', order: 210, mandatory: false }),
    },
    script: prepareRequestProducer, postInsertScript: createProducerSupplyLine,
})

export const supplyIssueProducer = CatalogItemRecordProducer({
    $id: Now.ID['supply_issue_record_producer'], name: 'Report Store Supply Issue', table: x_sln_store_suppli_supply_issue,
    active: true, availability: 'both', shortDescription: 'Report an availability, delivery, accuracy, or quality problem.',
    description: 'Creates a Store Supply Issue owned by Store Supplier Support. Inventory is never adjusted automatically from an Issue.',
    catalogs: [storeSupplyCatalog], categories: [storeSupplyCategory], roles: intakeRoles,
    hideAddToCart: true, hideAddToWishList: true, hideQuantitySelector: true, redirectUrl: 'generatedRecord',
    variables: {
        store: ReferenceVariable({
            question: 'Store', referenceTable: 'x_sln_store_suppli_store', order: 100, mandatory: true,
            referenceQualCondition: 'active=true',
        }),
        shortDescription: SingleLineTextVariable({
            question: 'What went wrong?', order: 110, mandatory: true, width: 100,
        }),
        description: MultiLineTextVariable({
            question: 'Issue details', order: 120, mandatory: true,
        }),
        category: SelectBoxVariable({
            question: 'Category', order: 130, mandatory: true, includeNone: false, mapToField: true, field: 'category',
            choices: {
                availability: { label: 'Availability' }, delivery: { label: 'Delivery' }, accuracy: { label: 'Accuracy' },
                quality: { label: 'Quality' }, other: { label: 'Other' },
            },
        }),
        subtype: SelectBoxVariable({
            question: 'Subtype', order: 140, mandatory: true, includeNone: false, mapToField: true, field: 'subtype',
            choices: {
                out_of_stock: { label: 'Out of Stock' }, backordered: { label: 'Backordered' }, discontinued: { label: 'Discontinued' },
                late: { label: 'Late Delivery' }, missing: { label: 'Missing Delivery' }, partial: { label: 'Partial Delivery' },
                wrong_item: { label: 'Wrong Item' }, wrong_quantity: { label: 'Wrong Quantity' }, damaged: { label: 'Damaged' },
                defective: { label: 'Defective' }, expired_unsafe: { label: 'Expired / Unsafe' }, general: { label: 'Other' },
            },
        }),
        supplyModel: ReferenceVariable({
            question: 'Affected supply item', referenceTable: 'cmdb_consumable_product_model', order: 150, mandatory: true,
        }),
        quantity: SingleLineTextVariable({ question: 'Affected quantity', order: 160, mandatory: true, defaultValue: '1', width: 25 }),
        businessImpact: MultiLineTextVariable({
            question: 'Business impact', order: 170, mapToField: true, field: 'business_impact',
        }),
        priority: SelectBoxVariable({
            question: 'Priority', order: 180, mandatory: true, includeNone: false, defaultValue: '3',
            choices: { '1': { label: 'Critical' }, '2': { label: 'High' }, '3': { label: 'Moderate' }, '4': { label: 'Low' } },
        }),
        lineNotes: MultiLineTextVariable({ question: 'Item notes', order: 190 }),
        attachments: AttachmentVariable({ question: 'Photos or supporting attachment (optional)', order: 200, mandatory: false }),
    },
    script: prepareIssueProducer, postInsertScript: createProducerSupplyLine,
})
