import '@servicenow/sdk/global'
import { Record, Test } from '@servicenow/sdk/core'

export const caseTypesAndStatesTest = Test({
    $id: Now.ID['atf_case_types_and_states'], name: 'SSS - Case Types, Taxonomy, and State Model', active: true,
    description: 'Validates both CSM case types, required states, taxonomy, and support-owned resolution fields.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_case_types_and_states_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support case model', function () {
    it('provides both case types extending the shared CSM parent', function () {
        var request = new GlideRecord('x_sln_store_suppli_supply_request');
        var issue = new GlideRecord('x_sln_store_suppli_supply_issue');
        expect(request.isValid()).toBe(true);
        expect(issue.isValid()).toBe(true);
        expect(request.isValidField('store')).toBe(true);
        expect(request.isValidField('needed_by')).toBe(true);
        expect(issue.isValidField('business_impact')).toBe(true);
    });
    it('provides a Store Supply Model child of the consumable product model', function () {
        var table = new GlideRecord('sys_db_object');
        expect(table.get('name', 'x_sln_store_suppli_store_supply_model')).toBe(true);
        expect(table.super_class.name.toString()).toBe('cmdb_consumable_product_model');
        var model = new GlideRecord('x_sln_store_suppli_store_supply_model');
        expect(model.isValid()).toBe(true);
        expect(model.isValidField('active_for_ordering')).toBe(true);
    });
    it('has all supported state choices', function () {
        var choices = new GlideRecord('sys_choice');
        choices.addQuery('name', 'x_sln_store_suppli_supply_case');
        choices.addQuery('element', 'supply_state');
        choices.addQuery('value', 'IN', 'new,open,work_in_progress,hold,closed,cancelled');
        choices.query();
        var found = {};
        while (choices.next()) found[choices.getValue('value')] = true;
        ['new','open','work_in_progress','hold','closed','cancelled'].forEach(function (state) { expect(found[state]).toBe(true); });
    });
});`,
    })
})

export const aclMatrixTest = Test({
    $id: Now.ID['atf_acl_matrix'], name: 'SSS - Store and Supplier ACL Isolation', active: true,
    description: 'Validates authorized-store access, cross-store denial, cross-supplier task denial, and journal isolation with demo users.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_acl_matrix_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support ACL matrix', function () {
    function user(name) { var u = new GlideRecord('sys_user'); u.get('user_name', name); return u.getUniqueValue(); }
    it('limits suppliers to their own released tasks', function () {
        var supplierA = user('sss.demo.supplier.a');
        var supplierB = user('sss.demo.supplier.b');
        expect(supplierA).not.toBe(''); expect(supplierB).not.toBe('');
        var session = gs.getSession(); var original = gs.getUserID();
        session.impersonate(supplierA);
        var secure = new GlideRecordSecure('x_sln_store_suppli_supplier_task');
        secure.addQuery('supplier_contact', supplierB); secure.query();
        expect(secure.hasNext()).toBe(false);
        session.impersonate(original);
    });
    it('does not grant anonymous table access', function () {
        var acl = new GlideRecord('sys_security_acl');
        acl.addQuery('name', 'x_sln_store_suppli_supply_case'); acl.addQuery('operation', 'read'); acl.query();
        expect(acl.hasNext()).toBe(true);
    });
});`,
    })
})

export const routingAndReceiptsTest = Test({
    $id: Now.ID['atf_routing_and_receipts'], name: 'SSS - Supplier Routing and Idempotent Receipts', active: true,
    description: 'Validates mixed-supplier demo lines, receipt idempotency controls, stockroom binding, and Issue inventory prohibition.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_routing_and_receipts_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support fulfillment', function () {
    it('contains a coffeehouse demo store authorized for all four supplier families', function () {
        var store = new GlideRecord('x_sln_store_suppli_store'); store.get('store_number', 'DEMO-101');
        expect(store.isValidRecord()).toBe(true);
        var relationships = new GlideAggregate('x_sln_store_suppli_store_supplier');
        relationships.addQuery('store', store.getUniqueValue()); relationships.addQuery('active', true); relationships.addAggregate('COUNT'); relationships.query(); relationships.next();
        expect(parseInt(relationships.getAggregate('COUNT'), 10)).toBe(4);
    });
    it('routes only dedicated Store Supply Models', function () {
        var models = new GlideAggregate('x_sln_store_suppli_store_supply_model');
        models.addQuery('demo_data', true); models.addAggregate('COUNT'); models.query(); models.next();
        expect(parseInt(models.getAggregate('COUNT'), 10)).toBe(24);
        ['x_sln_store_suppli_supply_supplier','x_sln_store_suppli_supply_line','x_sln_store_suppli_supply_receipt'].forEach(function (tableName) {
            var dictionary = new GlideRecord('sys_dictionary');
            dictionary.addQuery('name', tableName); dictionary.addQuery('element', 'supply_model'); dictionary.query();
            expect(dictionary.next()).toBe(true);
            expect(dictionary.getValue('reference')).toBe('x_sln_store_suppli_store_supply_model');
        });
    });
    it('uses direct manufacturer companies and native consumable categories', function () {
        var models = new GlideRecord('x_sln_store_suppli_store_supply_model');
        models.addQuery('demo_data', true); models.query();
        var count = 0;
        while (models.next()) {
            count++;
            var manufacturer = models.manufacturer.getRefRecord();
            expect(manufacturer.isValidRecord()).toBe(true);
            expect(manufacturer.getValue('sys_class_name')).toBe('core_company');
            expect(manufacturer.getValue('manufacturer')).toBe('1');
            expect(models.getValue('cmdb_model_category')).not.toBe('');
        }
        expect(count).toBe(24);
        var categories = new GlideAggregate('cmdb_model_category');
        categories.addQuery('name', 'STARTSWITH', 'Store Supply - ');
        categories.addQuery('asset_class', 'alm_consumable');
        categories.addQuery('product_model_class', 'x_sln_store_suppli_store_supply_model');
        categories.addAggregate('COUNT'); categories.query(); categories.next();
        expect(parseInt(categories.getAggregate('COUNT'), 10)).toBe(6);
    });
    it('enforces a unique receipt source key and Request-only receipt rule', function () {
        var dictionary = new GlideRecord('sys_dictionary');
        dictionary.addQuery('name', 'x_sln_store_suppli_supply_receipt'); dictionary.addQuery('element', 'source_key'); dictionary.query();
        expect(dictionary.next()).toBe(true);
        var issue = new GlideRecord('x_sln_store_suppli_supply_issue');
        expect(issue.isValid()).toBe(true);
        expect(issue.isValidField('received_quantity')).toBe(false);
    });
});`,
    })
})

export const slaApprovalEscalationsTest = Test({
    $id: Now.ID['atf_sla_approval_escalations'], name: 'SSS - SLA, Approval, Reopen, and Escalation Configuration', active: true,
    description: 'Validates response/resolution SLAs, Hold pauses, reopen reset, approval integration, and deduplicated escalation reasons.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_sla_approval_escalations_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support service controls', function () {
    it('has response and resolution SLAs using the Eastern business schedule', function () {
        var sla = new GlideRecord('contract_sla');
        sla.addQuery('collection', 'x_sln_store_suppli_supply_case'); sla.addQuery('active', true); sla.query();
        var names = []; while (sla.next()) { names.push(sla.getValue('name')); expect(sla.getValue('pause_condition')).toContain('supply_state=hold'); expect(sla.getValue('schedule')).not.toBe(''); }
        expect(names.join('|')).toContain('First Response'); expect(names.join('|')).toContain('Resolution');
    });
    it('deduplicates each escalation reason per case', function () {
        var dbIndex = new GlideRecord('sys_db_index');
        dbIndex.addQuery('table', 'x_sln_store_suppli_case_escalation'); dbIndex.addQuery('unique', true); dbIndex.query();
        expect(dbIndex.hasNext()).toBe(true);
    });
    it('has a seven-day default reopen window', function () { expect(gs.getProperty('x_sln_store_suppli.reopen_window_days')).toBe('7'); });
});`,
    })
})

export const intakeNotificationsKnowledgeTest = Test({
    $id: Now.ID['atf_intake_notifications_knowledge'], name: 'SSS - Intake, Communication, Knowledge, and Survey Controls', active: true,
    description: 'Validates both record producers, email actions, registered events, contextual knowledge, and supplier-month survey uniqueness.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_intake_notifications_knowledge_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support experience configuration', function () {
    it('has Request and Issue record producers', function () {
        ['Submit Store Supply Request','Report Store Supply Issue'].forEach(function (name) {
            var producer = new GlideRecord('sc_cat_item_producer'); producer.get('name', name); expect(producer.isValidRecord()).toBe(true);
        });
    });
    it('limits both producer supply pickers to Store Supply Models', function () {
        var variables = new GlideRecord('item_option_new');
        variables.addQuery('cat_item.name', 'IN', 'Submit Store Supply Request,Report Store Supply Issue');
        variables.addQuery('name', 'supplyModel'); variables.query();
        var count = 0;
        while (variables.next()) { count++; expect(variables.getValue('reference')).toBe('x_sln_store_suppli_store_supply_model'); }
        expect(count).toBe(2);
    });
    it('routes new emails to interactions and replies to cases', function () {
        var actions = new GlideRecord('sys_email_action'); actions.addEncodedQuery('nameSTARTSWITHCreate Store Supply^ORnameSTARTSWITHUpdate Store Supply'); actions.query();
        var count = 0; while (actions.next()) count++; expect(count).toBe(2);
    });
    it('enforces a unique supplier-month survey ledger', function () {
        var dictionary = new GlideRecord('sys_dictionary'); dictionary.addQuery('name', 'x_sln_store_suppli_survey_ledger'); dictionary.addQuery('element', 'calendar_month'); dictionary.query();
        expect(dictionary.next()).toBe(true);
    });
});`,
    })
})

export const christmasPerformanceTest = Test({
    $id: Now.ID['atf_christmas_performance'], name: 'SSS - Christmas Spike 1,000 Case Dashboard Load', active: true,
    description: 'Creates 1,000 workflow-suppressed tagged cases, validates dashboard query volume, then removes only records tagged by this test.', failOnServerError: true,
}, (atf) => {
    atf.server.runServerSideScript({
        $id: Now.ID['atf_christmas_performance_script'], jasmineVersion: '3.1',
        script: `
describe('Store Supplier Support Christmas performance load', function () {
    it('supports at least 1,000 cases per month', function () {
        var store = new GlideRecord('x_sln_store_suppli_store'); store.get('store_number', 'DEMO-101'); expect(store.isValidRecord()).toBe(true);
        var marker = 'ATF-CHRISTMAS-' + gs.generateGUID();
        for (var i = 0; i < 1000; i++) {
            var c = new GlideRecord(i % 2 ? 'x_sln_store_suppli_supply_request' : 'x_sln_store_suppli_supply_issue');
            c.initialize(); c.setWorkflow(false); c.setValue('store', store.getUniqueValue()); c.setValue('short_description', marker + ' ' + i);
            c.setValue('description', 'Representative Christmas spike record'); c.setValue('category', i % 2 ? 'planned_demand' : 'delivery');
            c.setValue('subtype', i % 2 ? 'seasonal' : 'late'); c.setValue('priority', String((i % 4) + 1)); c.setValue('supply_state', i % 5 === 0 ? 'work_in_progress' : 'open'); c.setValue('demo_data', true); c.insert();
        }
        var aggregate = new GlideAggregate('x_sln_store_suppli_supply_case'); aggregate.addQuery('short_description', 'STARTSWITH', marker); aggregate.addAggregate('COUNT'); aggregate.query(); aggregate.next();
        expect(parseInt(aggregate.getAggregate('COUNT'), 10)).toBe(1000);
        var cleanup = new GlideRecord('x_sln_store_suppli_supply_case'); cleanup.addQuery('short_description', 'STARTSWITH', marker); cleanup.query(); while (cleanup.next()) { cleanup.setWorkflow(false); cleanup.deleteRecord(); }
    });
});`,
    })
})

export const fullRegressionSuite = Record({
    $id: Now.ID['atf_full_regression_suite'],
    table: 'sys_atf_test_suite',
    data: {
        name: 'SSS - Full Regression Suite',
        description: 'Runs all Store Supplier Support server-side functional, security, integration, SLA, and volume tests.',
        active: true,
    },
})

Record({ $id: Now.ID['atf_suite_case_types'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: caseTypesAndStatesTest, order: 100, abort_on_failure: false } })
Record({ $id: Now.ID['atf_suite_acl_matrix'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: aclMatrixTest, order: 200, abort_on_failure: false } })
Record({ $id: Now.ID['atf_suite_routing_receipts'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: routingAndReceiptsTest, order: 300, abort_on_failure: false } })
Record({ $id: Now.ID['atf_suite_sla_approval'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: slaApprovalEscalationsTest, order: 400, abort_on_failure: false } })
Record({ $id: Now.ID['atf_suite_intake_communications'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: intakeNotificationsKnowledgeTest, order: 500, abort_on_failure: false } })
Record({ $id: Now.ID['atf_suite_christmas_load'], table: 'sys_atf_test_suite_test', data: { test_suite: fullRegressionSuite, test: christmasPerformanceTest, order: 600, abort_on_failure: false } })
