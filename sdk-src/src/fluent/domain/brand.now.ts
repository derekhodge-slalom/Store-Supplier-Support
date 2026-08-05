import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Current Slalom digital-brand colors are scoped to this Workspace through the
// supported app-config/theme relationship. The page registry remains attached
// to Unified Navigation so the generated /now route can be resolved normally.
export const slalomWorkspaceTheme = Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee501',
    table: 'sys_ux_theme',
    data: {
        name: 'Slalom Store Supplier Support',
        description: 'Accessible Slalom visual theme for the Store Supplier Support Workspace and supplier portal.',
        parent: 'c012213bc39b10101d590cf06e40dd32',
        active: true,
        theme: JSON.stringify({
            '--now-color_brand--primary': '12, 98, 251',
            '--now-color_brand--secondary': '222, 255, 77',
            '--now-color--primary-0': '230, 238, 255',
            '--now-color--primary-1': '182, 208, 254',
            '--now-color--primary-2': '109, 161, 253',
            '--now-color--primary-3': '36, 114, 251',
            '--now-color--primary-4': '12, 98, 251',
            '--now-color--primary-5': '10, 78, 201',
            '--now-color--primary-6': '0, 47, 175',
            '--now-color--primary-7': '0, 10, 37',
            '--now-color--interactive-2': '12, 98, 251',
            '--now-color--interactive-3': '10, 78, 201',
            '--now-color--link-2': '0, 47, 175',
            '--now-color--link-3': '10, 78, 201',
            '--now-color_focus-ring': '222, 255, 77',
            '--now-canvas-header-container--background-color': '12, 98, 251',
            '--now-canvas-header-container--background-color--left': '12, 98, 251',
            '--now-canvas-header-container--background-color--right': '0, 47, 175',
            '--now-canvas-nav-item--default--color': '255, 255, 255',
            '--now-canvas-nav-item--default--color--hover': '255, 255, 255',
            '--now-canvas-nav-item--default--color--active': '255, 255, 255',
            '--now-button--primary--background-color': '12, 98, 251',
            '--now-button--primary--border-color': '12, 98, 251',
            '--now-button--border-radius': '999px',
        }),
    },
})

export const slalomWorkspaceLogoAsset = Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee504',
    table: 'sys_ux_theme_asset',
    data: {
        name: 'Slalom white logo',
        category: 'Image',
    },
})

Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee507',
    table: 'sys_script_fix',
    data: {
        name: 'Apply Slalom Workspace logo',
        description: 'Copies the source-controlled portal logo attachment to the scoped Workspace theme asset after installation.',
        before: false,
        unloadable: true,
        record_for_rollback: true,
        script: Now.include('../../server/branding/apply-slalom-workspace-logo.js'),
    },
})

Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee505',
    table: 'sys_ux_theme_m2m_asset',
    data: {
        theme: slalomWorkspaceTheme,
        asset: slalomWorkspaceLogoAsset,
        properties: JSON.stringify({ position: 'header_logo' }),
    },
})

Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee506',
    table: 'm2m_app_config_theme',
    data: {
        ux_app_configuration: '3f8cebee4f134dc0951c77b67b418e63',
        theme: slalomWorkspaceTheme,
        order: 100,
    },
})

// Retained only to deactivate the earlier shell record cleanly on existing
// installations. Workspace routing no longer points at this record.
export const slalomWorkspaceParentApp = Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee502',
    table: 'sys_ux_app',
    data: {
        name: 'Deprecated Store Supplier Support App Shell',
        active: false,
        multiple_experiences: true,
        user_preference_namespace: 'x_sln_store_suppli.workspace',
        shell_root: 'f51912f4c700201072b211d4d8c26010',
        shell_root_config: JSON.stringify({ globalNavigationConfig: { type: 'APP_PROPERTY', id: 'globalNavigationConfig' } }),
        theme: slalomWorkspaceTheme,
    },
})

Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee503',
    table: 'sys_ux_app_property',
    data: {
        name: 'globalNavigationConfig',
        parent_app: slalomWorkspaceParentApp,
        value: JSON.stringify({
            features: {
                record: { _default: { experiencePriorityList: [] } },
                list: { _default: { experiencePriorityList: [] } },
                search: { _default: { experiencePriorityList: [] } },
                inbox: { _default: { experiencePriorityList: [] } },
            },
        }),
    },
})
