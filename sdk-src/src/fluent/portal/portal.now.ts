import '@servicenow/sdk/global'
import { Record, ServicePortal, SPHeaderFooter, SPPage, SPTheme, SPWidget } from '@servicenow/sdk/core'
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
    logo: Now.attach('../../server/branding/slalom-logo-white.svg'),
    logoAltText: 'Slalom',
    fixedHeader: false, fixedFooter: false,
    matchingNextExperienceTheme: slalomWorkspaceTheme,
})

// Employee Center keeps its native header, search, notifications, navigation,
// and footer behavior. This scoped theme changes only the visual system so the
// existing portal and the embedded Store Supplier Support page feel like one
// Slalom experience.
export const slalomEmployeeCenterTheme = SPTheme({
    $id: 'e1c0a4c2d6b6494f9a887a8f171bc3d2', name: 'Slalom Employee Center',
    customCss: Now.include('../../server/portal/slalom-employee-center-theme.scss'),
    header: 'd0009941eb103010ed7966d6475228c1',
    footer: 'ce046d5773603010c94f54eb7df6a7ec',
    logo: Now.attach('../../server/branding/slalom-logo-white.svg'),
    logoAltText: 'Slalom',
    fixedHeader: true, fixedFooter: false,
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

Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee50a',
    table: 'sp_rectangle_menu_item',
    data: {
        sp_rectangle_menu: '493d01365368301056c1ddeeff7b1207',
        label: 'Store supplier support',
        short_description: 'Request store supplies, report issues, and follow case updates.',
        type: 'page',
        sp_page: '1e1cff63c5e44c998829544255a7413f',
        glyph: 'shopping-cart',
        order: 250,
        condition: "gs.hasRole('x_sln_store_suppli.store_associate') || gs.hasRole('x_sln_store_suppli.district_manager') || gs.hasRole('x_sln_store_suppli.support_agent') || gs.hasRole('x_sln_store_suppli.support_manager') || gs.hasRole('x_sln_store_suppli.admin')",
        active: true,
    },
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
    $id: Now.ID['supplier_support_portal'], title: 'Store supplier support | Slalom', urlSuffix: 'store_suppliers',
    homePage: supplierStoreSupplyPage,
    catalogs: [{ catalog: storeSupplyCatalog, order: 100, active: true }],
    theme: slalomStoreSupplyPortalTheme,
    logo: Now.attach('../../server/branding/slalom-logo-white.svg'),
    logoAltText: 'Slalom',
    enableFavorites: true, hidePortalName: true,
})
