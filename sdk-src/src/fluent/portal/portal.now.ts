import '@servicenow/sdk/global'
import { ServicePortal, SPHeaderFooter, SPPage, SPTheme, SPWidget } from '@servicenow/sdk/core'
import { slalomWorkspaceTheme } from '../domain/brand.now'
import { storeSupplyCatalog } from '../domain/catalog.now'
import { districtManagerRole, storeAssociateRole, supplierAgentRole } from '../domain/security.now'

const internalRoles = [storeAssociateRole, districtManagerRole]

export const slalomPortalHeader = SPHeaderFooter({
    $id: Now.ID['slalom_store_supply_portal_header'], name: 'Slalom Store Supplier Support Header',
    id: 'slalom-store-supplier-support-header', static: true, hasPreview: true,
    htmlTemplate: Now.include('../../server/portal/slalom-header.html'),
    customCss: Now.include('../../server/portal/slalom-header.scss'),
})

export const slalomPortalFooter = SPHeaderFooter({
    $id: Now.ID['slalom_store_supply_portal_footer'], name: 'Slalom Store Supplier Support Footer',
    id: 'slalom-store-supplier-support-footer', static: true, hasPreview: true,
    htmlTemplate: Now.include('../../server/portal/slalom-footer.html'),
    customCss: Now.include('../../server/portal/slalom-footer.scss'),
})

export const slalomStoreSupplyPortalTheme = SPTheme({
    $id: Now.ID['slalom_store_supply_portal_theme'], name: 'Slalom Store Supplier Support',
    customCss: Now.include('../../server/portal/slalom-theme.scss'),
    header: slalomPortalHeader, footer: slalomPortalFooter,
    fixedHeader: false, fixedFooter: false,
    matchingNextExperienceTheme: slalomWorkspaceTheme,
})

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
    $id: Now.ID['supplier_support_portal'], title: 'slalom | Store Supplier Support', urlSuffix: 'store_suppliers',
    homePage: supplierStoreSupplyPage,
    catalogs: [{ catalog: storeSupplyCatalog, order: 100, active: true }],
    theme: slalomStoreSupplyPortalTheme,
    enableFavorites: true, hidePortalName: true,
})
