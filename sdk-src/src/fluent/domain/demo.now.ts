import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { supportGroup } from './configuration.now'
import { districtManagerRole, storeAssociateRole, supplierAgentRole, supportAgentRole, supportManagerRole } from './security.now'

const demo = { installMethod: 'demo' as const }

// Fictional coffeehouse people and suppliers. Names and operating data do not
// represent Starbucks Corporation or any actual Starbucks supplier relationship.
export const demoDistrictManager = Record({ $id: Now.ID['demo_district_manager'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.dm', first_name: 'Dana', last_name: 'Northeast', email: 'dana.northeast@example.com', active: true } })
export const demoDistrictManagerCentral = Record({ $id: Now.ID['demo_district_manager_central'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.dm.central', first_name: 'Drew', last_name: 'Central', email: 'drew.central@example.com', active: true } })
export const demoDistrictManagerWest = Record({ $id: Now.ID['demo_district_manager_west'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.dm.west', first_name: 'Robin', last_name: 'West', email: 'robin.west@example.com', active: true } })
export const demoStoreAssociate = Record({ $id: Now.ID['demo_store_associate'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate', first_name: 'Alex', last_name: 'Midtown', email: 'alex.midtown@example.com', active: true } })
export const demoStoreAssociate205 = Record({ $id: Now.ID['demo_store_associate_205'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate.205', first_name: 'Casey', last_name: 'Lakeside', email: 'casey.lakeside@example.com', active: true } })
export const demoStoreAssociate310 = Record({ $id: Now.ID['demo_store_associate_310'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate.310', first_name: 'Jamie', last_name: 'Brooklyn', email: 'jamie.brooklyn@example.com', active: true } })
export const demoStoreAssociate415 = Record({ $id: Now.ID['demo_store_associate_415'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate.415', first_name: 'Quinn', last_name: 'Pike', email: 'quinn.pike@example.com', active: true } })
export const demoStoreAssociate520 = Record({ $id: Now.ID['demo_store_associate_520'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate.520', first_name: 'Avery', last_name: 'Airport', email: 'avery.airport@example.com', active: true } })
export const demoStoreAssociate625 = Record({ $id: Now.ID['demo_store_associate_625'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.associate.625', first_name: 'Reese', last_name: 'Suburban', email: 'reese.suburban@example.com', active: true } })
export const demoSupportAgent = Record({ $id: Now.ID['demo_support_agent'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.agent', first_name: 'Sam', last_name: 'Support', email: 'sam.support@example.com', active: true } })
export const demoSupportManager = Record({ $id: Now.ID['demo_support_manager'], table: 'sys_user', $meta: demo, data: { user_name: 'sss.demo.manager', first_name: 'Morgan', last_name: 'Manager', email: 'morgan.manager@example.com', active: true } })

export const demoSupplierA = Record({ $id: Now.ID['demo_supplier_a'], table: 'customer_account', $meta: demo, data: { name: 'Demo Coffeehouse Packaging Co', active: true } })
export const demoSupplierB = Record({ $id: Now.ID['demo_supplier_b'], table: 'customer_account', $meta: demo, data: { name: 'Demo Beverage Ingredients Co', active: true } })
export const demoSupplierC = Record({ $id: Now.ID['demo_supplier_c'], table: 'customer_account', $meta: demo, data: { name: 'Demo Sanitation & Safety Co', active: true } })
export const demoSupplierD = Record({ $id: Now.ID['demo_supplier_d'], table: 'customer_account', $meta: demo, data: { name: 'Demo Retail Operations Supply Co', active: true } })
export const demoSupplierContactA = Record({ $id: Now.ID['demo_supplier_contact_a'], table: 'customer_contact', $meta: demo, data: { user_name: 'sss.demo.supplier.a', first_name: 'Taylor', last_name: 'Packaging', email: 'taylor.packaging@example.com', account: demoSupplierA, active: true } })
export const demoSupplierContactB = Record({ $id: Now.ID['demo_supplier_contact_b'], table: 'customer_contact', $meta: demo, data: { user_name: 'sss.demo.supplier.b', first_name: 'Jordan', last_name: 'Ingredients', email: 'jordan.ingredients@example.com', account: demoSupplierB, active: true } })
export const demoSupplierContactC = Record({ $id: Now.ID['demo_supplier_contact_c'], table: 'customer_contact', $meta: demo, data: { user_name: 'sss.demo.supplier.c', first_name: 'Cameron', last_name: 'Sanitation', email: 'cameron.sanitation@example.com', account: demoSupplierC, active: true } })
export const demoSupplierContactD = Record({ $id: Now.ID['demo_supplier_contact_d'], table: 'customer_contact', $meta: demo, data: { user_name: 'sss.demo.supplier.d', first_name: 'Parker', last_name: 'Operations', email: 'parker.operations@example.com', account: demoSupplierD, active: true } })

export const demoStockroom101 = Record({ $id: Now.ID['demo_stockroom_101'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Midtown Stockroom', active: true } })
export const demoStockroom205 = Record({ $id: Now.ID['demo_stockroom_205'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Lakeside Stockroom', active: true } })
export const demoStockroom310 = Record({ $id: Now.ID['demo_stockroom_310'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Brooklyn Pickup Stockroom', active: true } })
export const demoStockroom415 = Record({ $id: Now.ID['demo_stockroom_415'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Pike Reserve Stockroom', active: true } })
export const demoStockroom520 = Record({ $id: Now.ID['demo_stockroom_520'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Airport Kiosk Stockroom', active: true } })
export const demoStockroom625 = Record({ $id: Now.ID['demo_stockroom_625'], table: 'alm_stockroom', $meta: demo, data: { name: 'DEMO Coffeehouse Suburban Stockroom', active: true } })

export const demoStore101 = Record({ $id: Now.ID['demo_store_101'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Midtown Café', store_number: 'DEMO-101', store_format: 'cafe', market: 'New York', volume_band: 'very_high', district: 'NYC-01', region: 'Northeast', district_manager: demoDistrictManager, primary_contact: demoStoreAssociate, stockroom: demoStockroom101, active: true, demo_data: true } })
export const demoStore205 = Record({ $id: Now.ID['demo_store_205'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Lakeside Drive-Thru', store_number: 'DEMO-205', store_format: 'drive_thru', market: 'Chicago', volume_band: 'high', district: 'CHI-02', region: 'Midwest', district_manager: demoDistrictManagerCentral, primary_contact: demoStoreAssociate205, stockroom: demoStockroom205, active: true, demo_data: true } })
export const demoStore310 = Record({ $id: Now.ID['demo_store_310'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Brooklyn Pickup', store_number: 'DEMO-310', store_format: 'pickup_only', market: 'New York', volume_band: 'high', district: 'NYC-01', region: 'Northeast', district_manager: demoDistrictManager, primary_contact: demoStoreAssociate310, stockroom: demoStockroom310, active: true, demo_data: true } })
export const demoStore415 = Record({ $id: Now.ID['demo_store_415'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Pike Reserve', store_number: 'DEMO-415', store_format: 'reserve', market: 'Seattle', volume_band: 'very_high', district: 'SEA-01', region: 'West', district_manager: demoDistrictManagerWest, primary_contact: demoStoreAssociate415, stockroom: demoStockroom415, active: true, demo_data: true } })
export const demoStore520 = Record({ $id: Now.ID['demo_store_520'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Airport Kiosk', store_number: 'DEMO-520', store_format: 'licensed_kiosk', market: 'Boston', volume_band: 'very_high', district: 'BOS-03', region: 'Northeast', district_manager: demoDistrictManager, primary_contact: demoStoreAssociate520, stockroom: demoStockroom520, active: true, demo_data: true } })
export const demoStore625 = Record({ $id: Now.ID['demo_store_625'], table: 'x_sln_store_suppli_store', $meta: demo, data: { name: 'DEMO Coffeehouse - Suburban Drive-Thru', store_number: 'DEMO-625', store_format: 'drive_thru', market: 'Atlanta', volume_band: 'moderate', district: 'ATL-04', region: 'Southeast', district_manager: demoDistrictManagerCentral, primary_contact: demoStoreAssociate625, stockroom: demoStockroom625, active: true, demo_data: true } })

Record({ $id: Now.ID['demo_role_associate'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_associate_205'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate205, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_associate_310'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate310, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_associate_415'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate415, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_associate_520'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate520, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_associate_625'], table: 'sys_user_has_role', $meta: demo, data: { user: demoStoreAssociate625, role: storeAssociateRole } })
Record({ $id: Now.ID['demo_role_dm'], table: 'sys_user_has_role', $meta: demo, data: { user: demoDistrictManager, role: districtManagerRole } })
Record({ $id: Now.ID['demo_role_dm_central'], table: 'sys_user_has_role', $meta: demo, data: { user: demoDistrictManagerCentral, role: districtManagerRole } })
Record({ $id: Now.ID['demo_role_dm_west'], table: 'sys_user_has_role', $meta: demo, data: { user: demoDistrictManagerWest, role: districtManagerRole } })
Record({ $id: Now.ID['demo_role_supplier_a'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactA, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_supplier_b'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactB, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_supplier_c'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactC, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_supplier_d'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupplierContactD, role: supplierAgentRole } })
Record({ $id: Now.ID['demo_role_support_agent'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupportAgent, role: supportAgentRole } })
Record({ $id: Now.ID['demo_role_support_manager'], table: 'sys_user_has_role', $meta: demo, data: { user: demoSupportManager, role: supportManagerRole } })
Record({ $id: Now.ID['demo_group_agent'], table: 'sys_user_grmember', $meta: demo, data: { user: demoSupportAgent, group: supportGroup } })
Record({ $id: Now.ID['demo_group_manager'], table: 'sys_user_grmember', $meta: demo, data: { user: demoSupportManager, group: supportGroup } })
