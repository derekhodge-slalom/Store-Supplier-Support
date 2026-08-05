import '@servicenow/sdk/global'
import { Acl, Applicability, Dashboard, UxListMenuConfig, Workspace } from '@servicenow/sdk/core'
import { internalNavigationRoles } from '../domain/security.now'

export const storeSupplyWorkspaceApplicability = Applicability({
    $id: Now.ID['store_supply_workspace_applicability'], name: 'Store Supplier Support Workspace Users',
    description: 'Support agents and managers who own Store Supply cases.', roles: internalNavigationRoles, active: true,
})

export const storeSupplyWorkspaceListConfig = UxListMenuConfig({
    $id: Now.ID['store_supply_workspace_list_config'], name: 'Store Supplier Support Lists',
    description: 'CSM case, task, approval, escalation, receipt, and configuration queues.', active: true,
    categories: [
        {
            $id: Now.ID['workspace_cases_category'], title: 'Cases', order: 100,
            lists: [
                {
                    $id: Now.ID['workspace_active_cases'], title: 'Active Cases', table: 'x_sln_store_suppli_supply_case',
                    columns: 'number,short_description,store,priority,supply_state,approval_status,escalated,assigned_to,sys_updated_on',
                    condition: 'supply_stateNOT INclosed,cancelled', order: 100,
                    applicabilities: [{ $id: Now.ID['workspace_active_cases_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_requests'], title: 'Requests Awaiting Approval', table: 'x_sln_store_suppli_supply_request',
                    columns: 'number,short_description,store,category,subtype,priority,approval_status,assigned_to,sys_updated_on',
                    condition: 'approval_status=requested', order: 110,
                    applicabilities: [{ $id: Now.ID['workspace_requests_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_escalated'], title: 'Escalated Cases', table: 'x_sln_store_suppli_supply_case',
                    columns: 'number,short_description,store,priority,supply_state,escalation_reasons,assigned_to,sys_updated_on',
                    condition: 'escalated=true^supply_stateNOT INclosed,cancelled', order: 120,
                    applicabilities: [{ $id: Now.ID['workspace_escalated_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['workspace_fulfillment_category'], title: 'Fulfillment', order: 200,
            lists: [
                {
                    $id: Now.ID['workspace_draft_tasks'], title: 'Draft Supplier Tasks', table: 'x_sln_store_suppli_supplier_task',
                    columns: 'number,parent_case,supplier_account,supplier_contact,task_state,released,sys_updated_on', condition: 'task_state=draft', order: 200,
                    applicabilities: [{ $id: Now.ID['workspace_draft_tasks_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_active_tasks'], title: 'Active Supplier Tasks', table: 'x_sln_store_suppli_supplier_task',
                    columns: 'number,parent_case,supplier_account,supplier_contact,task_state,released_on,sys_updated_on',
                    condition: 'released=true^task_stateNOT INcomplete,cancelled', order: 210,
                    applicabilities: [{ $id: Now.ID['workspace_active_tasks_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_receipts'], title: 'Receipts', table: 'x_sln_store_suppli_supply_receipt',
                    columns: 'parent_case,supply_model,quantity,store,stockroom,received_by,received_on,inventory_applied', condition: '', order: 220,
                    applicabilities: [{ $id: Now.ID['workspace_receipts_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['workspace_configuration_category'], title: 'Stores and Suppliers', order: 300,
            lists: [
                {
                    $id: Now.ID['workspace_stores'], title: 'Stores', table: 'x_sln_store_suppli_store',
                    columns: 'store_number,name,store_format,market,volume_band,district,district_manager,stockroom,active', condition: '', order: 300,
                    applicabilities: [{ $id: Now.ID['workspace_stores_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_store_suppliers'], title: 'Store Suppliers', table: 'x_sln_store_suppli_store_supplier',
                    columns: 'store,supplier_account,primary_contact,active', condition: '', order: 310,
                    applicabilities: [{ $id: Now.ID['workspace_store_suppliers_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_store_supply_models'], title: 'Store Supply Models', table: 'x_sln_store_suppli_store_supply_model',
                    columns: 'name,model_number,store_category,unit_of_measure,active_for_ordering,manufacturer', condition: 'active_for_ordering=true', order: 320,
                    applicabilities: [{ $id: Now.ID['workspace_store_supply_models_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
                {
                    $id: Now.ID['workspace_store_supply_inventory'], title: 'Store Supply Inventory', table: 'alm_consumable',
                    columns: 'display_name,model,stockroom,quantity,install_status,substatus', condition: 'model.sys_class_name=x_sln_store_suppli_store_supply_model', order: 330,
                    applicabilities: [{ $id: Now.ID['workspace_store_supply_inventory_app'], applicability: storeSupplyWorkspaceApplicability }],
                },
            ],
        },
    ],
})

export const storeSupplyWorkspace = Workspace({
    $id: Now.ID['store_supply_workspace'], title: 'Store Supplier Support', path: 'store-supplier-support', landingPath: 'home',
    active: true, order: 100, listConfig: storeSupplyWorkspaceListConfig,
    tables: [
        'x_sln_store_suppli_supply_case', 'x_sln_store_suppli_supply_request', 'x_sln_store_suppli_supply_issue',
        'x_sln_store_suppli_supplier_task', 'x_sln_store_suppli_supply_line', 'x_sln_store_suppli_supply_receipt',
        'x_sln_store_suppli_case_escalation', 'x_sln_store_suppli_store', 'x_sln_store_suppli_store_supplier',
        'x_sln_store_suppli_supply_supplier', 'x_sln_store_suppli_store_supply_model', 'alm_consumable',
        'interaction', 'sysapproval_approver',
    ],
})

Acl({
    $id: Now.ID['store_supply_workspace_route_acl'], localOrExisting: 'Existing', type: 'ux_route', operation: 'read',
    name: 'store-supplier-support.*', roles: internalNavigationRoles, adminOverrides: true, decisionType: 'allow',
})

export const storeSupplyWorkspaceDashboard = Dashboard({
    $id: Now.ID['store_supply_workspace_dashboard'], name: 'Store Supplier Support Operations', active: true,
    tabs: [{
        $id: Now.ID['store_supply_dashboard_overview_tab'], name: 'Overview',
        widgets: [
            {
                $id: Now.ID['dashboard_active_cases'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Active Cases', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: 'supply_stateNOT INclosed,cancelled', id: 'active_cases' }],
                    headerTitle: 'Backlog', metrics: [{ dataSource: 'active_cases', id: 'active_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                },
                height: 10, width: 8, position: { x: 0, y: 0 },
            },
            {
                $id: Now.ID['dashboard_escalated_cases'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Escalated', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: 'escalated=true^supply_stateNOT INclosed,cancelled', id: 'escalated' }],
                    headerTitle: 'Escalated', metrics: [{ dataSource: 'escalated', id: 'escalated_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                },
                height: 10, width: 8, position: { x: 8, y: 0 },
            },
            {
                $id: Now.ID['dashboard_sla_breaches'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Breached SLAs', sourceType: 'table', tableOrViewName: 'task_sla', filterQuery: 'task.sys_class_nameINSTANCEOFx_sln_store_suppli_supply_case^has_breached=true', id: 'breached_sla' }],
                    headerTitle: 'SLA Breaches', metrics: [{ dataSource: 'breached_sla', id: 'breach_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                },
                height: 10, width: 8, position: { x: 16, y: 0 },
            },
            {
                $id: Now.ID['dashboard_reopen_rate'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Reopened', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: 'reopen_count>0', id: 'reopened' }],
                    headerTitle: 'Reopened Cases', metrics: [{ dataSource: 'reopened', id: 'reopened_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                },
                height: 10, width: 8, position: { x: 24, y: 0 },
            },
            {
                $id: Now.ID['dashboard_cases_by_type'], component: 'donut',
                componentProps: {
                    dataSources: [{ label: 'Cases by Type', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: '', id: 'cases_by_type' }],
                    headerTitle: 'Volume by Case Type', metrics: [{ dataSource: 'cases_by_type', id: 'case_type_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'cases_by_type', groupByField: 'sys_class_name' }], maxNumberOfGroups: 10, showOthers: false }], sortBy: 'value',
                },
                height: 14, width: 16, position: { x: 0, y: 10 },
            },
            {
                $id: Now.ID['dashboard_cases_by_supplier'], component: 'donut',
                componentProps: {
                    dataSources: [{ label: 'Cases by Supplier', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: '', id: 'cases_by_supplier' }],
                    headerTitle: 'Backlog by Supplier', metrics: [{ dataSource: 'cases_by_supplier', id: 'supplier_count', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'cases_by_supplier', groupByField: 'originating_supplier' }], maxNumberOfGroups: 10, showOthers: true }], sortBy: 'value',
                },
                height: 14, width: 16, position: { x: 16, y: 10 },
            },
            {
                $id: Now.ID['dashboard_requested_quantity'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Supply Lines', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_line', filterQuery: '', id: 'supply_lines' }],
                    headerTitle: 'Requested Quantity', metrics: [{ dataSource: 'supply_lines', id: 'requested_sum', aggregateFunction: 'SUM', aggregateField: 'requested_quantity', axisId: 'primary' }],
                },
                height: 10, width: 12, position: { x: 0, y: 24 },
            },
            {
                $id: Now.ID['dashboard_received_quantity'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Received Lines', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_line', filterQuery: '', id: 'received_lines' }],
                    headerTitle: 'Received Quantity', metrics: [{ dataSource: 'received_lines', id: 'received_sum', aggregateFunction: 'SUM', aggregateField: 'received_quantity', axisId: 'primary' }],
                },
                height: 10, width: 12, position: { x: 12, y: 24 },
            },
            {
                $id: Now.ID['dashboard_csat'], component: 'single-score',
                componentProps: {
                    dataSources: [{ label: 'Store Supply CSAT', sourceType: 'table', tableOrViewName: 'x_sln_store_suppli_supply_case', filterQuery: 'service_ratingISNOTEMPTY', id: 'csat' }],
                    headerTitle: 'Average CSAT', metrics: [{ dataSource: 'csat', id: 'csat_avg', aggregateFunction: 'AVG', aggregateField: 'service_rating', axisId: 'primary' }],
                },
                height: 10, width: 12, position: { x: 24, y: 24 },
            },
        ],
    }],
    visibilities: [{ $id: Now.ID['store_supply_dashboard_visibility'], experience: storeSupplyWorkspace }],
    permissions: [
        { $id: Now.ID['store_supply_dashboard_agent_permission'], role: 'x_sln_store_suppli.support_agent', canRead: true },
        { $id: Now.ID['store_supply_dashboard_manager_permission'], role: 'x_sln_store_suppli.support_manager', canRead: true, canWrite: true },
    ],
})
