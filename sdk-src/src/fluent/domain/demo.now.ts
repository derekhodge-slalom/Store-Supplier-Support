import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { supportGroup } from './configuration.now'
import { districtManagerRole, storeAssociateRole, supplierAgentRole, supportAgentRole, supportManagerRole } from './security.now'

const demo = { installMethod: 'demo' as const }

export const demoDistrictManager = Record({
    $id: Now.ID['demo_district_manager'], table: 'sys_user', $meta: demo,
    data: { user_name: 'sss.demo.dm', first_name: 'Dana', last_name: 'District', email: 'dana.district@example.com', active: true },
})
export const demoStoreAssociate = Record({
    $id: Now.ID['demo_store_associate'], table: 'sys_user', $meta: demo,
    data: { user_name: 'sss.demo.associate', first_name: 'Alex', last_name: 'Associate', email: 'alex.associate@example.com', active: true },
})
export const demoSupportAgent = Record({
    $id: Now.ID['demo_support_agent'], table: 'sys_user', $meta: demo,
    data: { user_name: 'sss.demo.agent', first_name: 'Sam', last_name: 'Support', email: 'sam.support@example.com', active: true },
})
export const demoSupportManager = Record({
    $id: Now.ID['demo_support_manager'], table: 'sys_user', $meta: demo,
    data: { user_name: 'sss.demo.manager', first_name: 'Morgan', last_name: 'Manager', email: 'morgan.manager@example.com', active: true },
})

export const demoSupplierA = Record({
    $id: Now.ID['demo_supplier_a'], table: 'customer_account', $meta: demo,
    data: { name: 'Demo Office Supply Co', active: true },
})
export const demoSupplierB = Record({
    $id: Now.ID['demo_supplier_b'], table: 'customer_account', $meta: demo,
    data: { name: 'Demo Safety & Fixtures Inc', active: true },
})
export const demoSupplierContactA = Record({
    $id: Now.ID['demo_supplier_contact_a'], table: 'customer_contact', $meta: demo,
    data: { user_name: 'sss.demo.supplier.a', first_name: 'Taylor', last_name: 'Office Supply', email: 'taylor.supplier@example.com', account: demoSupplierA, active: true },
})
export const demoSupplierContactB = Record({
    $id: Now.ID['demo_supplier_contact_b'], table: 'customer_contact', $meta: demo,
    data: { user_name: 'sss.demo.supplier.b', first_name: 'Jordan', last_name: 'Safety Supply', email: 'jordan.supplier@example.com', account: demoSupplierB, active: true },
})

export const demoStockroom101 = Record({
    $id: Now.ID['demo_stockroom_101'], table: 'alm_stockroom', $meta: demo,
    data: { name: 'DEMO Store 101 Stockroom', active: true },
})
export const demoStockroom205 = Record({
    $id: Now.ID['demo_stockroom_205'], table: 'alm_stockroom', $meta: demo,
    data: { name: 'DEMO Store 205 Stockroom', active: true },
})
export const demoStore101 = Record({
    $id: Now.ID['demo_store_101'], table: 'x_sln_store_suppli_store', $meta: demo,
    data: { name: 'DEMO Midtown Store', store_number: 'DEMO-101', district: 'D-01', region: 'US East', district_manager: demoDistrictManager, primary_contact: demoStoreAssociate, stockroom: demoStockroom101, active: true, demo_data: true },
})
export const demoStore205 = Record({
    $id: Now.ID['demo_store_205'], table: 'x_sln_store_suppli_store', $meta: demo,
    data: { name: 'DEMO Lakeside Store', store_number: 'DEMO-205', district: 'D-01', region: 'US East', district_manager: demoDistrictManager, primary_contact: demoStoreAssociate, stockroom: demoStockroom205, active: true, demo_data: true },
})

export const demoPaperModel = Record({
    $id: Now.ID['demo_store_paper_model'], table: 'x_sln_store_suppli_store_supply_model', $meta: demo,
    data: { name: 'DEMO Receipt Paper Roll', model_number: 'DEMO-STORE-PAPER-80', store_category: 'operations', unit_of_measure: 'roll', active_for_ordering: true, demo_data: true } as any,
})
export const demoBagModel = Record({
    $id: Now.ID['demo_store_bag_model'], table: 'x_sln_store_suppli_store_supply_model', $meta: demo,
    data: { name: 'DEMO Reusable Store Bag', model_number: 'DEMO-STORE-BAG-01', store_category: 'packaging', unit_of_measure: 'each', active_for_ordering: true, demo_data: true } as any,
})
export const demoGloveModel = Record({
    $id: Now.ID['demo_store_glove_model'], table: 'x_sln_store_suppli_store_supply_model', $meta: demo,
    data: { name: 'DEMO Safety Gloves', model_number: 'DEMO-STORE-SAFE-GLV', store_category: 'safety', unit_of_measure: 'pair', active_for_ordering: true, demo_data: true } as any,
})

Record({
    $id: Now.ID['demo_inventory_paper_101'], table: 'alm_consumable', $meta: demo,
    data: { display_name: 'DEMO Receipt Paper Store 101', model: demoPaperModel, stockroom: demoStockroom101, quantity: 24, install_status: 6, substatus: 'available' },
})
Record({
    $id: Now.ID['demo_inventory_bag_101'], table: 'alm_consumable', $meta: demo,
    data: { display_name: 'DEMO Reusable Bags Store 101', model: demoBagModel, stockroom: demoStockroom101, quantity: 40, install_status: 6, substatus: 'available' },
})
Record({
    $id: Now.ID['demo_inventory_gloves_205'], table: 'alm_consumable', $meta: demo,
    data: { display_name: 'DEMO Safety Gloves Store 205', model: demoGloveModel, stockroom: demoStockroom205, quantity: 8, install_status: 6, substatus: 'available' },
})

Record({ $id: Now.ID['demo_store_member_101'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore101, user: demoStoreAssociate, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_205'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore205, user: demoStoreAssociate, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_101'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore101, user: demoDistrictManager, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_205'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore205, user: demoDistrictManager, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_101_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_101_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_205_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore205, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_paper'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoPaperModel, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_bag'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoBagModel, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_glove'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoGloveModel, supplier_account: demoSupplierB, preferred: true, lead_time_days: 1, active: true, demo_data: true } })

Record({ $id: Now.ID['demo_role_associate'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_dm'], table: 'sys_user_has_role', $meta: demo, data: { user: demoDistrictManager, role: districtManagerRole } })
Record({ $id: Now.ID['demo_role_supplier_a'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactA, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_supplier_b'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactB, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_support_agent'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupportAgent, role: supportAgentRole } })
Record({ $id: Now.ID['demo_role_support_manager'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupportManager, role: supportManagerRole } })
Record({ $id: Now.ID['demo_group_agent'], table: 'sys_user_grmember', $meta: demo, data: { user: demoSupportAgent, group: supportGroup } })
Record({ $id: Now.ID['demo_group_manager'], table: 'sys_user_grmember', $meta: demo, data: { user: demoSupportManager, group: supportGroup } })
