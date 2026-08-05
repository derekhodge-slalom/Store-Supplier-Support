import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// The Workspace plugin normally attaches each generated experience to the shared
// Polaris parent app. A dedicated parent app keeps Slalom styling scoped to this
// experience instead of changing the entire instance.
export const slalomWorkspaceTheme = Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee501',
    table: 'sys_ux_theme',
    data: {
        name: 'Slalom Store Supplier Support',
        description: 'Accessible Slalom visual theme for the Store Supplier Support Workspace and supplier portal.',
        parent: '31bf91ae07203010e03948f78ad30095',
        active: true,
        theme: JSON.stringify({
            '--now-color_brand--primary': '9, 43, 65',
            '--now-color_brand--secondary': '244, 190, 47',
            '--now-color--primary-0': '235, 245, 249',
            '--now-color--primary-1': '200, 225, 235',
            '--now-color--primary-2': '155, 202, 219',
            '--now-color--primary-3': '105, 173, 198',
            '--now-color--primary-4': '53, 127, 157',
            '--now-color--primary-5': '9, 90, 125',
            '--now-color--primary-6': '9, 68, 96',
            '--now-color--primary-7': '9, 43, 65',
            '--now-canvas-header-container--background-color': 'now-color_brand--primary',
            '--now-canvas-nav-item--default--color': '--now-color--neutral-0',
            '--now-canvas-nav-item--default--color--hover': '--now-color--neutral-0',
            '--now-canvas-nav-item--default--color--active': '--now-color--neutral-0',
        }),
    },
})

export const slalomWorkspaceParentApp = Record({
    $id: 'b6d1e06c5a1b4a8c91a9e7f0f01ee502',
    table: 'sys_ux_app',
    data: {
        name: 'Slalom Store Supplier Support App Shell',
        active: true,
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
