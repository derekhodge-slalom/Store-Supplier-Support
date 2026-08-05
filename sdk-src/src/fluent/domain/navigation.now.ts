import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import {
    applicationAdminRole,
    allApplicationRoles,
    districtManagerRole,
    internalNavigationRoles,
    storeAssociateRole,
    supplierAgentRole,
    supportAgentRole,
    supportManagerRole,
} from './security.now'

const internalPortalRoles = [storeAssociateRole, districtManagerRole, supportAgentRole, supportManagerRole, applicationAdminRole]
const supplierPortalRoles = [supplierAgentRole, supportAgentRole, supportManagerRole, applicationAdminRole]

export const storeSupplierSupportMenu = ApplicationMenu({
    $id: Now.ID['store_supplier_support_menu'], title: 'Store Supplier Support',
    hint: 'Manage store supply cases, suppliers, inventory receipts, and service performance.',
    description: 'Customer Service Management for store supply requests and issues.',
    roles: allApplicationRoles, active: true, order: 100,
})

Record({ $id: Now.ID['module_experiences_separator'], table: 'sys_app_module', data: { title: 'Experiences', application: storeSupplierSupportMenu, link_type: 'SEPARATOR', roles: allApplicationRoles, active: true, order: 10 } })
Record({ $id: Now.ID['module_workspace'], table: 'sys_app_module', data: { title: 'Store Supplier Support Workspace', application: storeSupplierSupportMenu, link_type: 'DIRECT', query: '/x/sln/store-supplier-support/home', roles: internalNavigationRoles, active: true, order: 20 } })
Record({ $id: Now.ID['module_internal_portal'], table: 'sys_app_module', data: { title: 'Store Team Portal', application: storeSupplierSupportMenu, link_type: 'DIRECT', query: '/esc?id=store-supply-internal', roles: internalPortalRoles, active: true, order: 30 } })
Record({ $id: Now.ID['module_supplier_portal'], table: 'sys_app_module', data: { title: 'Supplier Portal', application: storeSupplierSupportMenu, link_type: 'DIRECT', query: '/store_suppliers', roles: supplierPortalRoles, active: true, order: 40 } })
Record({ $id: Now.ID['module_requests'], table: 'sys_app_module', data: { title: 'Store Supply Requests', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_request', query: '', roles: internalNavigationRoles, active: true, order: 100 } })
Record({ $id: Now.ID['module_issues'], table: 'sys_app_module', data: { title: 'Store Supply Issues', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_issue', query: '', roles: internalNavigationRoles, active: true, order: 110 } })
Record({ $id: Now.ID['module_active_cases'], table: 'sys_app_module', data: { title: 'Active Cases', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_case', query: 'supply_stateNOT INclosed,cancelled', roles: internalNavigationRoles, active: true, order: 120 } })
Record({ $id: Now.ID['module_escalated_cases'], table: 'sys_app_module', data: { title: 'Escalated Cases', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_case', query: 'escalated=true^supply_stateNOT INclosed,cancelled', roles: internalNavigationRoles, active: true, order: 130 } })
Record({ $id: Now.ID['module_supplier_tasks'], table: 'sys_app_module', data: { title: 'Supplier Tasks', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supplier_task', query: '', roles: internalNavigationRoles, active: true, order: 200 } })
Record({ $id: Now.ID['module_receipts'], table: 'sys_app_module', data: { title: 'Receipts', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_receipt', query: '', roles: internalNavigationRoles, active: true, order: 210 } })
Record({ $id: Now.ID['module_stores'], table: 'sys_app_module', data: { title: 'Stores', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_store', query: '', roles: internalNavigationRoles, active: true, order: 300 } })
Record({ $id: Now.ID['module_store_suppliers'], table: 'sys_app_module', data: { title: 'Store Suppliers', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_store_supplier', query: '', roles: internalNavigationRoles, active: true, order: 310 } })
Record({ $id: Now.ID['module_supply_suppliers'], table: 'sys_app_module', data: { title: 'Supply Supplier Map', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_supply_supplier', query: '', roles: internalNavigationRoles, active: true, order: 320 } })
Record({ $id: Now.ID['module_store_supply_models'], table: 'sys_app_module', data: { title: 'Store Supply Models', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_store_supply_model', query: 'active_for_ordering=true', roles: internalNavigationRoles, active: true, order: 330 } })
Record({ $id: Now.ID['module_store_supply_model_categories'], table: 'sys_app_module', data: { title: 'Store Supply Model Categories', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'cmdb_model_category', query: 'nameSTARTSWITHStore Supply - ', roles: internalNavigationRoles, active: true, order: 340 } })
Record({ $id: Now.ID['module_consumables'], table: 'sys_app_module', data: { title: 'Store Supply Inventory', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'alm_consumable', query: 'model.sys_class_name=x_sln_store_suppli_store_supply_model', roles: internalNavigationRoles, active: true, order: 350 } })
Record({ $id: Now.ID['module_survey_ledger'], table: 'sys_app_module', data: { title: 'Survey Invitation Ledger', application: storeSupplierSupportMenu, link_type: 'LIST', name: 'x_sln_store_suppli_survey_ledger', query: '', roles: internalNavigationRoles, active: true, order: 400 } })
