import '@servicenow/sdk/global'
import { EmailNotification, InboundEmailAction } from '@servicenow/sdk/core'
import { applyInboundCaseReply, createEmailInteraction } from '../../server/script'
import { eventNames } from './configuration.now'

EmailNotification({
    $id: Now.ID['case_opened_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Case Opened', active: true,
    triggerConditions: { generationType: 'engine', onRecordInsert: true },
    recipientDetails: { recipientFields: ['requested_by'], sendToCreator: true },
    emailContent: {
        subject: '${number} opened: ${short_description}',
        messageHtml: '<h2>Store Supplier Support</h2><p>Your case has been received. Our first-response target is three business hours.</p><p><a href="${URI}">View ${number}</a></p>',
    },
})
EmailNotification({
    $id: Now.ID['case_assigned_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Case Assigned', active: true,
    triggerConditions: { generationType: 'engine', onRecordUpdate: true, condition: 'assigned_toCHANGES^assigned_toISNOTEMPTY' },
    recipientDetails: { recipientFields: ['assigned_to'], sendToCreator: false },
    emailContent: { subject: '${number} assigned to you', messageHtml: '<h2>Store Supplier Support</h2><p>${short_description}</p><p><a href="${URI}">View ${number}</a></p>' },
})
EmailNotification({
    $id: Now.ID['case_update_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Meaningful Update', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.caseUpdate },
    recipientDetails: { recipientFields: ['requested_by'], sendToCreator: true },
    emailContent: { subject: '${number} has an update', messageHtml: '<h2>Store Supplier Support</h2><p>Store Supplier Support added a customer-visible update.</p><p><a href="${URI}">View ${number}</a></p>' },
})
EmailNotification({
    $id: Now.ID['case_escalated_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Case Escalated', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.caseEscalated },
    recipientDetails: { eventParm2WithRecipient: true, sendToCreator: false },
    emailContent: {
        subject: 'Escalated: ${number} - ${short_description}', importance: 'high',
        messageHtml: '<h2>Store Supplier Support</h2><p>Escalation reason: ${event.parm1}</p><p><a href="${URI}">View ${number}</a></p>',
    },
})
EmailNotification({
    $id: Now.ID['case_closed_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Case Closed', active: true,
    triggerConditions: { generationType: 'engine', onRecordUpdate: true, condition: 'supply_stateCHANGESTOclosed^ORsupply_stateCHANGESTOcancelled' },
    recipientDetails: { recipientFields: ['requested_by'], sendToCreator: true },
    emailContent: {
        subject: '${number} ${supply_state}: ${short_description}',
        messageHtml: '<h2>Store Supplier Support</h2><p>Resolution: ${resolution_notes}</p><p><a href="${URI}">View ${number}</a></p>',
    },
})
EmailNotification({
    $id: Now.ID['case_reopened_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Case Reopened', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.caseReopened },
    recipientDetails: { recipientFields: ['requested_by', 'assigned_to'], sendToCreator: true },
    emailContent: { subject: '${number} reopened', messageHtml: '<h2>Store Supplier Support</h2><p>A new response and resolution SLA cycle has started.</p><p><a href="${URI}">View ${number}</a></p>' },
})
EmailNotification({
    $id: Now.ID['supplier_task_released_notification'], table: 'x_sln_store_suppli_supplier_task', name: 'Supplier Task Released', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.supplierReleased },
    recipientDetails: { recipientFields: ['supplier_contact'], sendToCreator: false },
    emailContent: {
        subject: '${number} assigned: ${short_description}',
        messageHtml: '<h2>Store Supplier Support</h2><p>A supplier fulfillment task is ready. You can see only this supplier account’s released tasks.</p><p><a href="${URI}">View ${number}</a></p>',
    },
})
EmailNotification({
    $id: Now.ID['supplier_task_completed_notification'], table: 'x_sln_store_suppli_supplier_task', name: 'Supplier Task Completed', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.supplierCompleted },
    recipientDetails: { recipientFields: ['assigned_to'], sendToCreator: false },
    emailContent: { subject: '${number} completed', messageHtml: '<h2>Store Supplier Support</h2><p>${completion_summary}</p><p><a href="${URI}">View ${number}</a></p>' },
})
EmailNotification({
    $id: Now.ID['approval_requested_notification'], table: 'x_sln_store_suppli_supply_request', name: 'District Manager Approval Requested', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.approvalRequested },
    recipientDetails: { eventParm1WithRecipient: true, sendToCreator: false },
    emailContent: {
        subject: 'Approval required: ${number}', importance: 'high',
        messageHtml: '<h2>Store Supplier Support</h2><p>A Store Supply Request is on Hold awaiting your approval.</p><p><a href="${URI}">View ${number}</a></p>',
    },
})
EmailNotification({
    $id: Now.ID['approval_completed_notification'], table: 'x_sln_store_suppli_supply_request', name: 'District Manager Approval Completed', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.approvalCompleted },
    recipientDetails: { recipientFields: ['requested_by', 'assigned_to'], sendToCreator: true },
    emailContent: { subject: '${number} approval ${event.parm1}', messageHtml: '<h2>Store Supplier Support</h2><p>District Manager decision: ${event.parm1}.</p><p><a href="${URI}">View ${number}</a></p>' },
})
EmailNotification({
    $id: Now.ID['weekly_digest_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Weekly Digest', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.weeklyDigest },
    recipientDetails: { eventParm1WithRecipient: true, sendToCreator: false },
    emailContent: {
        subject: 'Weekly Store Supplier Support digest',
        messageHtml: '<h2>Store Supplier Support</h2><p>Active cases: ${event.parm2}</p><p>Open Configurable Workspace for backlog, SLA, escalation, and supplier-task aging detail.</p>',
    },
})
EmailNotification({
    $id: Now.ID['survey_invitation_notification'], table: 'x_sln_store_suppli_supply_case', name: 'Store Supply Quality Survey', active: true,
    triggerConditions: { generationType: 'event', eventName: eventNames.surveyInvite },
    recipientDetails: { eventParm1WithRecipient: true, sendToCreator: false },
    emailContent: {
        subject: 'How was the service for ${number}?',
        messageHtml: '<h2>Store Supplier Support</h2><p>Please rate Store Supplier Support from 1–5 and optionally add comments. Invitations are capped at one per supplier per month.</p><p><a href="${URI}">View ${number}</a></p>',
    },
})

InboundEmailAction({
    $id: Now.ID['new_store_supply_email_interaction'], name: 'Create Store Supply Email Interaction',
    description: 'Routes new store-supply emails to a CSM Email Interaction for agent classification into a Request or Issue.',
    table: 'interaction', type: 'new', action: 'record_action', active: true, order: 100,
    conditionScript: "answer = email.subject && /store|supply|supplier|delivery|stock/i.test(email.subject + ' ' + email.body_text);",
    script: createEmailInteraction, stopProcessing: true,
})
InboundEmailAction({
    $id: Now.ID['store_supply_email_reply'], name: 'Update Store Supply Case from Email Reply',
    description: 'Updates a watermark-correlated Store Supply case and preserves the inbound email attachment records.',
    table: 'x_sln_store_suppli_supply_case', type: 'reply', action: 'record_action', active: true, order: 90,
    script: applyInboundCaseReply, stopProcessing: true,
})
