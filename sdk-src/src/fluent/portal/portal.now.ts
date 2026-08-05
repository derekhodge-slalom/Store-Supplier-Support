import '@servicenow/sdk/global'
import { ServicePortal, SPPage, SPWidget } from '@servicenow/sdk/core'
import { storeSupplyCatalog } from '../domain/catalog.now'
import { districtManagerRole, storeAssociateRole, supplierAgentRole } from '../domain/security.now'

const internalRoles = [storeAssociateRole, districtManagerRole]

export const storeSupplyDashboardWidget = SPWidget({
    $id: Now.ID['store_supply_dashboard_widget'], name: 'Store Supplier Support Dashboard', id: 'store-supplier-support-dashboard',
    category: 'custom', roles: [storeAssociateRole, districtManagerRole, supplierAgentRole], hasPreview: true,
    serverScript: Now.include('../../server/portal/store-supply-dashboard.server.js'),
    clientScript: Now.include('../../server/portal/store-supply-dashboard.client.js'),
    htmlTemplate: Now.include('../../server/portal/store-supply-dashboard.html'),
    customCss: Now.include('../../server/portal/store-supply-dashboard.scss'),
})

export const employeeCenterStoreSupplyPage = SPPage({
    title: 'Store Supplier Support', pageId: 'store-supply-internal',
    shortDescription: 'Employee Center experience for store associates and district managers.', roles: internalRoles,
    containers: [{
        $id: Now.ID['employee_center_store_supply_container'], name: 'Store Supply Internal', parentClass: 'container', order: 100, semanticTag: 'main',
        rows: [{
            $id: Now.ID['employee_center_store_supply_row'], order: 100,
            columns: [{
                $id: Now.ID['employee_center_store_supply_column'], size: 12, sizeXs: 12, sizeSm: 12, sizeLg: 12, order: 100,
                instances: [{
                    $id: Now.ID['employee_center_store_supply_instance'], title: 'Store Supplier Support', id: 'store-supply-internal-instance',
                    widget: storeSupplyDashboardWidget, active: true, order: 100, roles: internalRoles,
                }],
            }],
        }],
    }],
})

export const supplierStoreSupplyPage = SPPage({
    title: 'Supplier Support', pageId: 'store-supply-supplier',
    shortDescription: 'Supplier-scoped intake and fulfillment collaboration.', roles: [supplierAgentRole],
    containers: [{
        $id: Now.ID['supplier_store_supply_container'], name: 'Supplier Support', parentClass: 'container', order: 100, semanticTag: 'main',
        rows: [{
            $id: Now.ID['supplier_store_supply_row'], order: 100,
            columns: [{
                $id: Now.ID['supplier_store_supply_column'], size: 12, sizeXs: 12, sizeSm: 12, sizeLg: 12, order: 100,
                instances: [{
                    $id: Now.ID['supplier_store_supply_instance'], title: 'Supplier Support', id: 'store-supply-supplier-instance',
                    widget: storeSupplyDashboardWidget, active: true, order: 100, roles: [supplierAgentRole],
                }],
            }],
        }],
    }],
})

export const supplierSupportPortal = ServicePortal({
    $id: Now.ID['supplier_support_portal'], title: 'Store Supplier Support', urlSuffix: 'store_suppliers',
    homePage: supplierStoreSupplyPage,
    catalogs: [{ catalog: storeSupplyCatalog, order: 100, active: true }],
    enableFavorites: true, hidePortalName: false,
})
