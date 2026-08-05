import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import {
    demoDistrictManager, demoDistrictManagerCentral, demoDistrictManagerWest,
    demoStore101, demoStore205, demoStore310, demoStore415, demoStore520, demoStore625,
    demoStoreAssociate, demoStoreAssociate205, demoStoreAssociate310, demoStoreAssociate415, demoStoreAssociate520, demoStoreAssociate625,
    demoSupplierA, demoSupplierB, demoSupplierC, demoSupplierD,
    demoSupplierContactA, demoSupplierContactB, demoSupplierContactC, demoSupplierContactD,
} from './demo.now'
import {
    demoBagModel, demoCaramel, demoCarrier, demoCleaningTablet, demoColdCup16, demoColdCup24, demoColdLid,
    demoDecaf, demoEspresso, demoFilter, demoGloveModel, demoHotCup12, demoHotCup16, demoHotCup20, demoHotLid,
    demoLabel, demoNapkin, demoOat, demoPaperModel, demoSanitizer, demoSleeve, demoStraw, demoTowel, demoVanilla,
} from './demo-models.now'

const demo = { installMethod: 'demo' as const }

Record({ $id: Now.ID['demo_store_member_101'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore101, user: demoStoreAssociate, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_205'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore205, user: demoStoreAssociate205, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_310'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore310, user: demoStoreAssociate310, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_415'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore415, user: demoStoreAssociate415, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_520'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore520, user: demoStoreAssociate520, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_member_625'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore625, user: demoStoreAssociate625, member_type: 'associate', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_101'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore101, user: demoDistrictManager, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_205'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore205, user: demoDistrictManagerCentral, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_310'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore310, user: demoDistrictManager, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_415'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore415, user: demoDistrictManagerWest, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_520'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore520, user: demoDistrictManager, member_type: 'district_manager', active: true, demo_data: true } })
Record({ $id: Now.ID['demo_dm_member_625'], table: 'x_sln_store_suppli_store_member', $meta: demo, data: { store: demoStore625, user: demoDistrictManagerCentral, member_type: 'district_manager', active: true, demo_data: true } })

Record({ $id: Now.ID['demo_store_supplier_101_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_101_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_101_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_101_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore101, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_205_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore205, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_205_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore205, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_205_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore205, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_205_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore205, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_310_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore310, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_310_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore310, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_310_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore310, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_310_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore310, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_415_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore415, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_415_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore415, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_415_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore415, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_415_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore415, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_520_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore520, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_520_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore520, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_520_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore520, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_520_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore520, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_625_a'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore625, supplier_account: demoSupplierA, primary_contact: demoSupplierContactA, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_625_b'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore625, supplier_account: demoSupplierB, primary_contact: demoSupplierContactB, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_625_c'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore625, supplier_account: demoSupplierC, primary_contact: demoSupplierContactC, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_store_supplier_625_d'], table: 'x_sln_store_suppli_store_supplier', $meta: demo, data: { store: demoStore625, supplier_account: demoSupplierD, primary_contact: demoSupplierContactD, active: true, demo_data: true } })

Record({ $id: Now.ID['demo_supply_supplier_paper'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoPaperModel, supplier_account: demoSupplierD, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_bag'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoBagModel, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_glove'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoGloveModel, supplier_account: demoSupplierC, preferred: true, lead_time_days: 1, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_hot12'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoHotCup12, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_hot16'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoHotCup16, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_hot20'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoHotCup20, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_cold16'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoColdCup16, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_cold24'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoColdCup24, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_hotlid'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoHotLid, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_coldlid'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoColdLid, supplier_account: demoSupplierA, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_sleeve'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoSleeve, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_carrier'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoCarrier, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_napkin'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoNapkin, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_straw'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoStraw, supplier_account: demoSupplierA, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_espresso'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoEspresso, supplier_account: demoSupplierB, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_decaf'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoDecaf, supplier_account: demoSupplierB, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_vanilla'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoVanilla, supplier_account: demoSupplierB, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_caramel'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoCaramel, supplier_account: demoSupplierB, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_oat'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoOat, supplier_account: demoSupplierB, preferred: true, lead_time_days: 1, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_filter'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoFilter, supplier_account: demoSupplierB, preferred: true, lead_time_days: 3, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_label'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoLabel, supplier_account: demoSupplierD, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_sanitizer'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoSanitizer, supplier_account: demoSupplierC, preferred: true, lead_time_days: 1, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_cleaning_tablet'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoCleaningTablet, supplier_account: demoSupplierC, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
Record({ $id: Now.ID['demo_supply_supplier_towel'], table: 'x_sln_store_suppli_supply_supplier', $meta: demo, data: { supply_model: demoTowel, supplier_account: demoSupplierC, preferred: true, lead_time_days: 2, active: true, demo_data: true } })
