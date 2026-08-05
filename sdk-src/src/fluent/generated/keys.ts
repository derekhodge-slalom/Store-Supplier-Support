import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    a1000000000000000000000000000001: {
                        table: 'sys_user_group'
                        id: 'a1000000000000000000000000000001'
                    }
                    a1000000000000000000000000000002: {
                        table: 'cmn_schedule'
                        id: 'a1000000000000000000000000000002'
                    }
                    apply_receipt_br: {
                        table: 'sys_script'
                        id: '524ed0075fc14e758e4b37cadf641007'
                    }
                    approval_completed_event: {
                        table: 'sysevent_register'
                        id: '185e9a70b1fe4dc2a1b38cd808526074'
                    }
                    approval_completed_notification: {
                        table: 'sysevent_email_action'
                        id: '62511ead8b78457caf77b8c293f16ea3'
                    }
                    approval_requested_event: {
                        table: 'sysevent_register'
                        id: '1641aebb8c10405cbc74c22ecb9ee70d'
                    }
                    approval_requested_notification: {
                        table: 'sysevent_email_action'
                        id: 'bbbbdccfba64457bac2044c59da63df0'
                    }
                    approval_sync_br: {
                        table: 'sys_script'
                        id: '508e6bf6ffdd48e99eec8d9c0bcecb30'
                    }
                    atf_acl_matrix: {
                        table: 'sys_atf_test'
                        id: 'a6db12cbdb3d4f6b842948d63fa4700d'
                    }
                    atf_acl_matrix_script: {
                        table: 'sys_atf_step'
                        id: '606591803e484bbe819bc4b02a21fba7'
                    }
                    atf_case_types_and_states: {
                        table: 'sys_atf_test'
                        id: '85d5c7acdc414130b1bf4246e66d0ba1'
                    }
                    atf_case_types_and_states_script: {
                        table: 'sys_atf_step'
                        id: '49b73264d0344e57864412eccdb68188'
                    }
                    atf_christmas_performance: {
                        table: 'sys_atf_test'
                        id: '4afa0f76f04f40f29bc61d165918a350'
                    }
                    atf_christmas_performance_script: {
                        table: 'sys_atf_step'
                        id: '320aa6620b8d40bda3678998a6f46f4a'
                    }
                    atf_enable_once: {
                        table: 'sysauto_script'
                        id: '2e868d3a4ee9422993e188a3aa1277ff'
                        deleted: true
                    }
                    atf_full_regression_suite: {
                        table: 'sys_atf_test_suite'
                        id: '498f5848951041c9b2b5a5c578e30be8'
                    }
                    atf_intake_notifications_knowledge: {
                        table: 'sys_atf_test'
                        id: 'ef74f6b4acd94b9da31efe71f9d59586'
                    }
                    atf_intake_notifications_knowledge_script: {
                        table: 'sys_atf_step'
                        id: 'ca2d8adb6d6f441e8d27ffeeae287e60'
                    }
                    atf_restore_on_demand: {
                        table: 'sysauto_script'
                        id: '0a8d9ecd02a6427398a9d2a757543cc4'
                        deleted: true
                    }
                    atf_routing_and_receipts: {
                        table: 'sys_atf_test'
                        id: '3576d29b0840489ab4ab174f6248670d'
                    }
                    atf_routing_and_receipts_script: {
                        table: 'sys_atf_step'
                        id: '035670b9aa9344abbfae29e6d136e6dd'
                    }
                    atf_sla_approval_escalations: {
                        table: 'sys_atf_test'
                        id: 'a54d2577482148a3a02b71608904ded6'
                    }
                    atf_sla_approval_escalations_script: {
                        table: 'sys_atf_step'
                        id: '22341d6a28c94e35af59be7686411d7e'
                    }
                    atf_suite_acl_matrix: {
                        table: 'sys_atf_test_suite_test'
                        id: '5a18ec16e859474a89e01037ec7fb3dc'
                    }
                    atf_suite_case_types: {
                        table: 'sys_atf_test_suite_test'
                        id: '9cfc734faa71447b9845eacb5aeaa99c'
                    }
                    atf_suite_christmas_load: {
                        table: 'sys_atf_test_suite_test'
                        id: 'e02dbd2fb4c54e548dec65d69c8d140c'
                    }
                    atf_suite_intake_communications: {
                        table: 'sys_atf_test_suite_test'
                        id: 'aa016eb47a3941adbc132cfb4fb81e12'
                    }
                    atf_suite_routing_receipts: {
                        table: 'sys_atf_test_suite_test'
                        id: 'a2e155fadee24116bd9c1af2c4634548'
                    }
                    atf_suite_sla_approval: {
                        table: 'sys_atf_test_suite_test'
                        id: '72fbf1e09c7b4893abaf9644c7667ab7'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '56d0c2384d184db889427bf1b7206ddb'
                    }
                    cancel_case_action: {
                        table: 'sys_ui_action'
                        id: '2b2626e5016b45698aa6475d54b49b76'
                    }
                    capability_check_schedule: {
                        table: 'sysauto_script'
                        id: 'fe90e0a8665649d496a27d79b4ef1569'
                    }
                    case_assigned_notification: {
                        table: 'sysevent_email_action'
                        id: 'ed9b8e14d0d840c097c4af6bb93da809'
                    }
                    case_closed_notification: {
                        table: 'sysevent_email_action'
                        id: '461ef80b14dd476faca8fa42d6def600'
                    }
                    case_comments_external_write_acl: {
                        table: 'sys_security_acl'
                        id: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                    }
                    case_create_acl: {
                        table: 'sys_security_acl'
                        id: '7943be86ddd14709a5e48bde5595859b'
                    }
                    case_defaults_br: {
                        table: 'sys_script'
                        id: 'da11b7993e2747caa1aca20123aaf0cb'
                    }
                    case_delete_acl: {
                        table: 'sys_security_acl'
                        id: '03b70f642eed469fb41ccada15c2f943'
                    }
                    case_escalated_event: {
                        table: 'sysevent_register'
                        id: 'b0554a5ef45742daa8e50f0f8a72d4a2'
                    }
                    case_escalated_notification: {
                        table: 'sysevent_email_action'
                        id: 'a264d102a44844f4b5241468c3f096dc'
                    }
                    case_escalation_monitor_schedule: {
                        table: 'sysauto_script'
                        id: '489a3cf2bffd4450a42ac39f30bc0343'
                    }
                    case_feedback_external_write_acl: {
                        table: 'sys_security_acl'
                        id: '7b5149c15bc64c199f95de6449ba0df2'
                    }
                    case_opened_notification: {
                        table: 'sysevent_email_action'
                        id: '71eb031b4b004978b7163a3ddc4f13b9'
                    }
                    case_rating_external_write_acl: {
                        table: 'sys_security_acl'
                        id: 'ad22eadc853146a79492ff374666e850'
                    }
                    case_read_acl: {
                        table: 'sys_security_acl'
                        id: 'e94eda5342bc4b5bb9617a83ef2afabe'
                    }
                    case_reopened_event: {
                        table: 'sysevent_register'
                        id: 'b87268bf226d436180aa214b01482c46'
                    }
                    case_reopened_notification: {
                        table: 'sysevent_email_action'
                        id: '6d8ae06c408c4e5ebc2fb4865c0a7124'
                    }
                    case_survey_br: {
                        table: 'sys_script'
                        id: '6d4403117a5e4680b4f2a5ceed20a282'
                    }
                    case_transition_br: {
                        table: 'sys_script'
                        id: 'b5b78c27282440c4999a06b9394ef2a3'
                    }
                    case_update_event: {
                        table: 'sysevent_register'
                        id: 'e7f9ead1ca4244d4abdfe58be39e9cca'
                    }
                    case_update_notification: {
                        table: 'sysevent_email_action'
                        id: '39a76b632d414382a982b6a76bac418b'
                    }
                    case_work_notes_support_read_acl: {
                        table: 'sys_security_acl'
                        id: '2378daa7956543ee8957913661e008f1'
                    }
                    case_work_notes_support_write_acl: {
                        table: 'sys_security_acl'
                        id: 'a2198a544c7f4a849e85895d1d2fa543'
                    }
                    case_write_acl: {
                        table: 'sys_security_acl'
                        id: '0dcc89ed7708465f8dfa2a11c31b5d7b'
                    }
                    close_case_action: {
                        table: 'sys_ui_action'
                        id: '0563c70617b64eda89e6cf840a281b65'
                    }
                    complete_supplier_task_action: {
                        table: 'sys_ui_action'
                        id: '43229ae6c8434d118c2fa4b65545f902'
                    }
                    configuration_tables_acl: {
                        table: 'sys_security_acl'
                        id: '2427e24489da495f853366abf297fc00'
                    }
                    customer_update_br: {
                        table: 'sys_script'
                        id: '00a8df02d2e1485f95c920c4ce73ad9e'
                    }
                    dashboard_active_cases: {
                        table: 'par_dashboard_widget'
                        id: '7180dc0c9987437f886c710311c3e1cf'
                    }
                    dashboard_cases_by_supplier: {
                        table: 'par_dashboard_widget'
                        id: '4c9bd9e495a7435ba2d087caec5c1e93'
                    }
                    dashboard_cases_by_type: {
                        table: 'par_dashboard_widget'
                        id: 'b57420a3d2904ddabc9d9db268a9763d'
                    }
                    dashboard_csat: {
                        table: 'par_dashboard_widget'
                        id: 'be89122580a34289a47d83cf47f1bd2e'
                    }
                    dashboard_escalated_cases: {
                        table: 'par_dashboard_widget'
                        id: '1b1cfd90e3a24cbaa41b98105e79ee3f'
                    }
                    dashboard_received_quantity: {
                        table: 'par_dashboard_widget'
                        id: '50692c330f4d4a99b5a6d0e9fb04f952'
                    }
                    dashboard_reopen_rate: {
                        table: 'par_dashboard_widget'
                        id: '56f44ab9015747fab6325c88ae6a6282'
                    }
                    dashboard_requested_quantity: {
                        table: 'par_dashboard_widget'
                        id: 'f2f333e2dc7f468f92a403cacd5c739d'
                    }
                    dashboard_sla_breaches: {
                        table: 'par_dashboard_widget'
                        id: '35dbb7f07fe54910a995e8a19f50a0ff'
                    }
                    demo_bag_model: {
                        table: 'cmdb_consumable_product_model'
                        id: 'ff445d67da494258bc873d5dcbcd8b49'
                        deleted: true
                    }
                    demo_caramel_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'b686a206069a44bda0fbeea59e014223'
                    }
                    demo_carrier_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'd62b222a5f884e4f977a12a468142197'
                    }
                    demo_cleaning_tablet_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'f99d43e663234548abe4da7ef43194cb'
                    }
                    demo_cold_cup_16_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '32a31ac346914b29a95b226a83dd557c'
                    }
                    demo_cold_cup_24_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '38cdc481ba2844ef8281e0eaa7a685d7'
                    }
                    demo_cold_lid_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'b8ee021226c14bcc8dc2a3aade3aa3be'
                    }
                    demo_decaf_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '6596a98035cb4cef9d85d4a07984ae81'
                    }
                    demo_district_manager: {
                        table: 'sys_user'
                        id: '5960060a11b94cb79b12cdb5c58ef7aa'
                    }
                    demo_district_manager_central: {
                        table: 'sys_user'
                        id: '773e0f62f7b944908a899d9f1cd04bd3'
                    }
                    demo_district_manager_west: {
                        table: 'sys_user'
                        id: '1d855cfbaed84f07b262d7d8169e730a'
                    }
                    demo_dm_member_101: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '7897b24addbd4530933dbd5674af9c65'
                    }
                    demo_dm_member_205: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '3c9076c363c74e4f971e1d8c630b3e41'
                    }
                    demo_dm_member_310: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '5b3caa6446cf4a539d73214cf489671d'
                    }
                    demo_dm_member_415: {
                        table: 'x_sln_store_suppli_store_member'
                        id: 'e3d439e390724b788cd476912c65a62c'
                    }
                    demo_dm_member_520: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '63bcd897ecd049a2a573edb9e11550d5'
                    }
                    demo_dm_member_625: {
                        table: 'x_sln_store_suppli_store_member'
                        id: 'e293489829cd40438680691b2b4e1c07'
                    }
                    demo_espresso_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '35713523b5e24566ba7daa3a2f5d1454'
                    }
                    demo_filter_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'a34a2e7b682449dba351cd6daee86df0'
                    }
                    demo_glove_model: {
                        table: 'cmdb_consumable_product_model'
                        id: 'f3b49069a9764bc69f85b860f60fcc33'
                        deleted: true
                    }
                    demo_group_agent: {
                        table: 'sys_user_grmember'
                        id: 'c713b73510ce47a087558ef3c857bb90'
                    }
                    demo_group_manager: {
                        table: 'sys_user_grmember'
                        id: '472bc5f25abc44d3bcec7b36a8fdb64a'
                    }
                    demo_hot_cup_12_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '71dd953f0b9340728ab40bff4a428f3c'
                    }
                    demo_hot_cup_16_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '2505828f7df6480e9abc4f6751f9142b'
                    }
                    demo_hot_cup_20_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '9edf1978a5734921b3f7978906a5d8be'
                    }
                    demo_hot_lid_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'ff35c0bc5fd14ab591f6aa8b07c40536'
                    }
                    demo_ingredients_manufacturer: {
                        table: 'core_company'
                        id: '9c1e73d4655e407ebf050ee0186eadfc'
                    }
                    demo_inventory_bag_101: {
                        table: 'alm_consumable'
                        id: '62709c54e8564bd5b0ed27238332ff3f'
                    }
                    demo_inventory_cold24_101: {
                        table: 'alm_consumable'
                        id: '43c5e6fed68c4809b4cae4635648387e'
                    }
                    demo_inventory_cold24_205: {
                        table: 'alm_consumable'
                        id: '980c546544f44942b1e0e3aa25e6e47f'
                    }
                    demo_inventory_cold24_310: {
                        table: 'alm_consumable'
                        id: '1434d89e0de7417d880689ed8f2aad7e'
                    }
                    demo_inventory_cold24_415: {
                        table: 'alm_consumable'
                        id: '4abed0854d034153a1c1b19eb91b9d35'
                    }
                    demo_inventory_cold24_520: {
                        table: 'alm_consumable'
                        id: '6b38c75e431b4705964f885f792fd99c'
                    }
                    demo_inventory_cold24_625: {
                        table: 'alm_consumable'
                        id: 'd3e30110de754b60bd5f1facbe384fb1'
                    }
                    demo_inventory_espresso_101: {
                        table: 'alm_consumable'
                        id: 'daab345f7e6845eb8fb96c90899481e7'
                    }
                    demo_inventory_espresso_205: {
                        table: 'alm_consumable'
                        id: 'e81da3eb2c5c48d1967d77e7ca22fa6d'
                    }
                    demo_inventory_espresso_310: {
                        table: 'alm_consumable'
                        id: 'afa76228ff9c44678ea3a1a27329eeb6'
                    }
                    demo_inventory_espresso_415: {
                        table: 'alm_consumable'
                        id: 'f79a8408493544eebb8694ccf27498c6'
                    }
                    demo_inventory_espresso_520: {
                        table: 'alm_consumable'
                        id: '6906fb3bf62e4a1497ad8eeedacb424d'
                    }
                    demo_inventory_espresso_625: {
                        table: 'alm_consumable'
                        id: '2985cec362604e24879c3c251086fc9f'
                    }
                    demo_inventory_gloves_205: {
                        table: 'alm_consumable'
                        id: '5264db7a37974acf885354354275a0f4'
                    }
                    demo_inventory_hot12_101: {
                        table: 'alm_consumable'
                        id: '2d33e32f99c742f9b26aecb9c3eacb09'
                    }
                    demo_inventory_hot12_205: {
                        table: 'alm_consumable'
                        id: '769203d14d024169b4e9f5450db4830e'
                    }
                    demo_inventory_hot12_310: {
                        table: 'alm_consumable'
                        id: 'fd5d4c329ded4673a842948fdd1f5842'
                    }
                    demo_inventory_hot12_415: {
                        table: 'alm_consumable'
                        id: '4c151c13f8a541939acc036a50b82966'
                    }
                    demo_inventory_hot12_520: {
                        table: 'alm_consumable'
                        id: 'a5a8e55713e34c26849d765db06820f9'
                    }
                    demo_inventory_hot12_625: {
                        table: 'alm_consumable'
                        id: '3ba0e5311792422998ebe524d243b7da'
                    }
                    demo_inventory_hot16_101: {
                        table: 'alm_consumable'
                        id: '4c23abf2a2cf4629b3d04732c82c45c2'
                    }
                    demo_inventory_hot16_205: {
                        table: 'alm_consumable'
                        id: 'b3eca6f55a4a410183cf95a2bd953ed9'
                    }
                    demo_inventory_hot16_310: {
                        table: 'alm_consumable'
                        id: 'e32258c619454c8a9a283b2844fb8a8d'
                    }
                    demo_inventory_hot16_415: {
                        table: 'alm_consumable'
                        id: 'ee86df8c1bbd4125a990071c4b17a292'
                    }
                    demo_inventory_hot16_520: {
                        table: 'alm_consumable'
                        id: '426bb64793af4f8f96b62fcd7a0aad59'
                    }
                    demo_inventory_hot16_625: {
                        table: 'alm_consumable'
                        id: '10822b9ddbe34db585b7eccc93af64f4'
                    }
                    demo_inventory_hotlid_101: {
                        table: 'alm_consumable'
                        id: 'ca19806af5804479907299e28f315c2e'
                    }
                    demo_inventory_hotlid_205: {
                        table: 'alm_consumable'
                        id: '381b55267c094643a42f22ca72f74346'
                    }
                    demo_inventory_hotlid_310: {
                        table: 'alm_consumable'
                        id: '84e7f2dc5aa84c0180986b081d2c5999'
                    }
                    demo_inventory_hotlid_415: {
                        table: 'alm_consumable'
                        id: 'a431033a228643dda7a2c4403aed6651'
                    }
                    demo_inventory_hotlid_520: {
                        table: 'alm_consumable'
                        id: '5314b3f0c3474ac8bd7880643fb1d902'
                    }
                    demo_inventory_hotlid_625: {
                        table: 'alm_consumable'
                        id: 'c15a1efae2a84c4bb6df29c70a5ea122'
                    }
                    demo_inventory_label_101: {
                        table: 'alm_consumable'
                        id: '57aaab621b6c4b7b8bf77fa9f0379573'
                    }
                    demo_inventory_label_205: {
                        table: 'alm_consumable'
                        id: 'bc374d5d6c8144dc80f50eb03f40177f'
                    }
                    demo_inventory_label_310: {
                        table: 'alm_consumable'
                        id: '9f1e89558ac1403ea771234d6279cd62'
                    }
                    demo_inventory_label_415: {
                        table: 'alm_consumable'
                        id: '87472726b1ce4932be93e49aeffed419'
                    }
                    demo_inventory_label_520: {
                        table: 'alm_consumable'
                        id: 'f70a4ff9ee9f410e870f3040757136e3'
                    }
                    demo_inventory_label_625: {
                        table: 'alm_consumable'
                        id: 'd50e571a63154d2895e6ea1f9e29e6da'
                    }
                    demo_inventory_oat_101: {
                        table: 'alm_consumable'
                        id: '2bcbc0d6d1204cf29138aa10f0f98526'
                    }
                    demo_inventory_oat_205: {
                        table: 'alm_consumable'
                        id: '5e53cbed7e69437eb2195cb829cab9e7'
                    }
                    demo_inventory_oat_310: {
                        table: 'alm_consumable'
                        id: '32090cdd11cd4957ab7d4ce966bdde92'
                    }
                    demo_inventory_oat_415: {
                        table: 'alm_consumable'
                        id: '12da6c15c3654cb9be4946da8ac70d3e'
                    }
                    demo_inventory_oat_520: {
                        table: 'alm_consumable'
                        id: '4a2bbdfd5c7741ce939259aadd901b7b'
                    }
                    demo_inventory_oat_625: {
                        table: 'alm_consumable'
                        id: '9388df54b93249d3b7eede5d23ea6a19'
                    }
                    demo_inventory_paper_101: {
                        table: 'alm_consumable'
                        id: 'f6483bfd5b544894ba93e762f3ede63e'
                    }
                    demo_inventory_sanitizer_101: {
                        table: 'alm_consumable'
                        id: '6297c959b99343ad9bd6cbfa54f008a9'
                    }
                    demo_inventory_sanitizer_205: {
                        table: 'alm_consumable'
                        id: '52c885d199dd46f3b62cd7a0fa73d1ba'
                    }
                    demo_inventory_sanitizer_310: {
                        table: 'alm_consumable'
                        id: 'ef68790eb20d4bae9824edb0f4a25226'
                    }
                    demo_inventory_sanitizer_415: {
                        table: 'alm_consumable'
                        id: '4d79f50b3e974372ae0fe43727ce64ef'
                    }
                    demo_inventory_sanitizer_520: {
                        table: 'alm_consumable'
                        id: 'd84c0a077b0d4a119b83fb9b7699015f'
                    }
                    demo_inventory_sanitizer_625: {
                        table: 'alm_consumable'
                        id: 'fdd55f726e984d5e92b45135267ccfb0'
                    }
                    demo_label_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '5b7d9c032c524312aa20fe0e6fb1f7de'
                    }
                    demo_napkin_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '55c923a5417e4d309109f29efc8b1094'
                    }
                    demo_oat_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'ad53db6aa2d74173927079bd00baeb75'
                    }
                    demo_operations_manufacturer: {
                        table: 'core_company'
                        id: '75d1a0798f774e6683166792dc9d2158'
                    }
                    demo_packaging_manufacturer: {
                        table: 'core_company'
                        id: 'ae03fa416eab4290b7ca9856486979a0'
                    }
                    demo_paper_model: {
                        table: 'cmdb_consumable_product_model'
                        id: '824953bc0dd347cd97fb24655814c003'
                        deleted: true
                    }
                    demo_role_associate: {
                        table: 'sys_user_has_role'
                        id: '43610127bb91494f8706acb9b4b175f9'
                    }
                    demo_role_associate_205: {
                        table: 'sys_user_has_role'
                        id: '8f046c90d7294ecb95cf6b09e3d6251e'
                    }
                    demo_role_associate_310: {
                        table: 'sys_user_has_role'
                        id: '17bb794a130e44c9908e390af1736a54'
                    }
                    demo_role_associate_415: {
                        table: 'sys_user_has_role'
                        id: '5d86d0a9a6e0496d9d42ab747f5ef1f4'
                    }
                    demo_role_associate_520: {
                        table: 'sys_user_has_role'
                        id: '55202b7881704871acd0521ab3d76045'
                    }
                    demo_role_associate_625: {
                        table: 'sys_user_has_role'
                        id: '73b1fc75f6494f0e853c94953da06da5'
                    }
                    demo_role_dm: {
                        table: 'sys_user_has_role'
                        id: '51498cf3ba4540fba18378ccd24dc364'
                    }
                    demo_role_dm_central: {
                        table: 'sys_user_has_role'
                        id: 'a4798e7c56154a56bfcaa91209bd7336'
                    }
                    demo_role_dm_west: {
                        table: 'sys_user_has_role'
                        id: '04e4e4ae7faa45a9b4a2d45b474afa97'
                    }
                    demo_role_supplier_a: {
                        table: 'sys_user_has_role'
                        id: '83e7d9562bb04c2b9a3450fea4c9257a'
                    }
                    demo_role_supplier_b: {
                        table: 'sys_user_has_role'
                        id: 'f453199d7bf9497995913b7a9d975f88'
                    }
                    demo_role_supplier_c: {
                        table: 'sys_user_has_role'
                        id: '17f30ecb1bdc4e71b51e79126d4ed53d'
                    }
                    demo_role_supplier_d: {
                        table: 'sys_user_has_role'
                        id: '2e146037202c4c168d19d4aab1cbf138'
                    }
                    demo_role_support_agent: {
                        table: 'sys_user_has_role'
                        id: '8250c066ab1c44c694cc8033764c65fb'
                    }
                    demo_role_support_manager: {
                        table: 'sys_user_has_role'
                        id: '73303d684dd84140baf4b8f9865c6025'
                    }
                    demo_sanitation_manufacturer: {
                        table: 'core_company'
                        id: '7a68b05b4a24470f8135a0e8d4d32140'
                    }
                    demo_sanitizer_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '07b7756b5e394ee39e35d0ea4c71e9c6'
                    }
                    demo_sleeve_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'c0d7faa1d171425db0d9d617f919c9ac'
                    }
                    demo_stockroom_101: {
                        table: 'alm_stockroom'
                        id: '9d42ab655c674f49bdbf932e111f6b51'
                    }
                    demo_stockroom_205: {
                        table: 'alm_stockroom'
                        id: 'fc2d1bec645e45a8ab982f458a1a255a'
                    }
                    demo_stockroom_310: {
                        table: 'alm_stockroom'
                        id: 'eec0a15a182447f696cafb9101c75fa3'
                    }
                    demo_stockroom_415: {
                        table: 'alm_stockroom'
                        id: '2f888b1b2f87442e974ba7169ce9e182'
                    }
                    demo_stockroom_520: {
                        table: 'alm_stockroom'
                        id: '0189ecc1b3b241f78c394f1154c214bd'
                    }
                    demo_stockroom_625: {
                        table: 'alm_stockroom'
                        id: 'fcf42e4b36c7466db7f5f410fcb2f8a1'
                    }
                    demo_store_101: {
                        table: 'x_sln_store_suppli_store'
                        id: '28ba6dc06d504cf09f58734840c342e2'
                    }
                    demo_store_205: {
                        table: 'x_sln_store_suppli_store'
                        id: 'c85e5ac7855c4ace831041ae20ccf84a'
                    }
                    demo_store_310: {
                        table: 'x_sln_store_suppli_store'
                        id: '3811dfbc866a446f9af137216b01f96c'
                    }
                    demo_store_415: {
                        table: 'x_sln_store_suppli_store'
                        id: 'a7d8184848464dc692be9db0abc27492'
                    }
                    demo_store_520: {
                        table: 'x_sln_store_suppli_store'
                        id: '51a9cd3af5a24a20844dd8f6bdafa504'
                    }
                    demo_store_625: {
                        table: 'x_sln_store_suppli_store'
                        id: '1c3a6b115a39417eb638b80f5697f627'
                    }
                    demo_store_associate: {
                        table: 'sys_user'
                        id: 'a94a17421bd14c3d8af7d3396ea2577e'
                    }
                    demo_store_associate_205: {
                        table: 'sys_user'
                        id: '772c31e0eb7943098db26cb9597f08d3'
                    }
                    demo_store_associate_310: {
                        table: 'sys_user'
                        id: '80e4566dce784d2aaf5a11675e9c64ec'
                    }
                    demo_store_associate_415: {
                        table: 'sys_user'
                        id: '4e742301f0674285af11411b120a0f28'
                    }
                    demo_store_associate_520: {
                        table: 'sys_user'
                        id: 'e9c179da85984705b3f6c1af0d5d9c51'
                    }
                    demo_store_associate_625: {
                        table: 'sys_user'
                        id: '0af5cd8484264f369019ad5982238313'
                    }
                    demo_store_bag_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '866fa48e56cf488ebf1ee21390b25b27'
                    }
                    demo_store_glove_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '2144054bb99142459c6de53f7d1ad14c'
                    }
                    demo_store_member_101: {
                        table: 'x_sln_store_suppli_store_member'
                        id: 'c1796f57a6844ceab676c2c0d895f407'
                    }
                    demo_store_member_205: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '9568e32136e849f680e20a8f659b14c4'
                    }
                    demo_store_member_310: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '6e5057f7570643e89199319d81024c42'
                    }
                    demo_store_member_415: {
                        table: 'x_sln_store_suppli_store_member'
                        id: 'fbf7daec5327465a9562ee7c599fcd24'
                    }
                    demo_store_member_520: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '3841d805bd314c76a9c4dfab2ffdc2c1'
                    }
                    demo_store_member_625: {
                        table: 'x_sln_store_suppli_store_member'
                        id: '56c1e022142b415cacc747f42f238345'
                    }
                    demo_store_paper_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'afebfb5aae42489b84d5111484b5b837'
                    }
                    demo_store_supplier_101_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '522035ec1bda44c3b2717aeae0f234a7'
                    }
                    demo_store_supplier_101_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '01349703eac34b83be7d7cdcbf619db6'
                    }
                    demo_store_supplier_101_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '28bdc3f8d60e45f0b0490b9d480beb88'
                    }
                    demo_store_supplier_101_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '4a6bd7fc018444d78fc803b014ed8720'
                    }
                    demo_store_supplier_205_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'd5aec83c9552435da7d44fa984e29b16'
                    }
                    demo_store_supplier_205_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '0458841240034452831b9687298cd09b'
                    }
                    demo_store_supplier_205_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '9f97de261ab04370b7852d61e5c63dc6'
                    }
                    demo_store_supplier_205_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '272cf2bfa6484791a3b3e0efdab4b701'
                    }
                    demo_store_supplier_310_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'dd01cc029d364eb8a8cf4c47fb92926b'
                    }
                    demo_store_supplier_310_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'f46d90bac07144a6807e9e547ba1f7f2'
                    }
                    demo_store_supplier_310_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '07a60c8c5a0f40de87d49691b7776b32'
                    }
                    demo_store_supplier_310_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '9a9076e5ec4c474abb32ec14103018f5'
                    }
                    demo_store_supplier_415_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '2403cc7990894e36b822677d8451a46f'
                    }
                    demo_store_supplier_415_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'ada5ebd73fee4a948c8b38bce1c2e38a'
                    }
                    demo_store_supplier_415_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '5cab99972247486d8e08918d5cb6426e'
                    }
                    demo_store_supplier_415_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '17ec0056206b47e88a3b486f68f2d014'
                    }
                    demo_store_supplier_520_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '1c6c8457a1704b68b1152a296c3d743f'
                    }
                    demo_store_supplier_520_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '5d71be2fe61d4a5c9143b52ef38dd21e'
                    }
                    demo_store_supplier_520_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'f5f75bcb4e9c42f3b3e9ffc3941723f0'
                    }
                    demo_store_supplier_520_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '1c01bf33db3f4ae2a4ac55189b5128bd'
                    }
                    demo_store_supplier_625_a: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'c676239581ff42ec8ea85e41e0f31d0c'
                    }
                    demo_store_supplier_625_b: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'd53041523bbb4c32909bbd2cdcde212b'
                    }
                    demo_store_supplier_625_c: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: '79565460269c4413a693ec4740ba24a3'
                    }
                    demo_store_supplier_625_d: {
                        table: 'x_sln_store_suppli_store_supplier'
                        id: 'f05225f2258f43c4b24d5f32a0ac1ef6'
                    }
                    demo_straw_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'ff6f88eadff54f4bb9e84dd9377cd19e'
                    }
                    demo_supplier_a: {
                        table: 'customer_account'
                        id: 'e6c93655c46f43b186ffbbbe7d0249b0'
                    }
                    demo_supplier_b: {
                        table: 'customer_account'
                        id: '2b5e84439248484db68f932d79e8d33c'
                    }
                    demo_supplier_c: {
                        table: 'customer_account'
                        id: 'bf71f2d3e3024aec856a81cd0d51a9fe'
                    }
                    demo_supplier_contact_a: {
                        table: 'customer_contact'
                        id: 'c3a8ac9788104dcb8e80708e0b9f02d9'
                    }
                    demo_supplier_contact_b: {
                        table: 'customer_contact'
                        id: '5ea003668dc74e9c817ddaa8121a8176'
                    }
                    demo_supplier_contact_c: {
                        table: 'customer_contact'
                        id: '09b19488b23948b9914355bd35f2f6ea'
                    }
                    demo_supplier_contact_d: {
                        table: 'customer_contact'
                        id: 'fa2bb36445074dfabb8aadb2fa0c7ac0'
                    }
                    demo_supplier_d: {
                        table: 'customer_account'
                        id: 'adf250d72f2544f39b43532391ced1bd'
                    }
                    demo_supply_supplier_bag: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '6903afec55d045c39e82d78076b80872'
                    }
                    demo_supply_supplier_caramel: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '7cb0c4c5b64842909b19690eb4e6aa85'
                    }
                    demo_supply_supplier_carrier: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'f87728d5608d4e89bdb1921ef86c0b8f'
                    }
                    demo_supply_supplier_cleaning_tablet: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'badde36d875143ca9767ae2c7a8c83ad'
                    }
                    demo_supply_supplier_cold16: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '45dcea6a816842538d4e52c52fa0eb28'
                    }
                    demo_supply_supplier_cold24: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '7a4700b7bc1b4e29be039220df5c283e'
                    }
                    demo_supply_supplier_coldlid: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '0a8438f7784548eca0c1511e5fafdd38'
                    }
                    demo_supply_supplier_decaf: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '63ec83399d6e46afb9f8e30720540061'
                    }
                    demo_supply_supplier_espresso: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'ea0e8f9e0acc493bb27234f8993d9832'
                    }
                    demo_supply_supplier_filter: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '75db095a301741769daec061f5fdbf8c'
                    }
                    demo_supply_supplier_glove: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'c341ae7c2f6e4a34beb9a482ec9304c1'
                    }
                    demo_supply_supplier_hot12: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '116f70b9b76a443c92f29e8237d31f78'
                    }
                    demo_supply_supplier_hot16: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '7e0e343c035945bdbca8310ef699fa2d'
                    }
                    demo_supply_supplier_hot20: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '362e058fcfc64c6e9760a9cce0acaa68'
                    }
                    demo_supply_supplier_hotlid: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '24282f39b0e245a6bf347ea249ac1cd3'
                    }
                    demo_supply_supplier_label: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'a86a894a412d445eb5f370b15157f077'
                    }
                    demo_supply_supplier_napkin: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '543b8f648a9540638df028cb71e5dc95'
                    }
                    demo_supply_supplier_oat: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '4b01511c187a49f38b3e734b7d2a03bf'
                    }
                    demo_supply_supplier_paper: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'd3dcf75e3f7e48c0993b98116e343d51'
                    }
                    demo_supply_supplier_sanitizer: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '999f3bf2e7054b9c8d35be6dc88f24a1'
                    }
                    demo_supply_supplier_sleeve: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: 'a07f4fb089cf40beb02aa4288b21b9d7'
                    }
                    demo_supply_supplier_straw: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '94ee7228bd7d4cb08f8608756535e8d2'
                    }
                    demo_supply_supplier_towel: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '7badb6d7cc7e449f96d40a84928b216c'
                    }
                    demo_supply_supplier_vanilla: {
                        table: 'x_sln_store_suppli_supply_supplier'
                        id: '6cdd05305249422f8f52f295f18258bb'
                    }
                    demo_support_agent: {
                        table: 'sys_user'
                        id: '344c33f1631d4b0781b969f3f21948a6'
                    }
                    demo_support_manager: {
                        table: 'sys_user'
                        id: '5ce499d102b04731a5ce408a8f520047'
                    }
                    demo_towel_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: 'f8a8c7b67fff4e4c9a83aac8ef07f885'
                    }
                    demo_vanilla_model: {
                        table: 'x_sln_store_suppli_store_supply_model'
                        id: '573aa41722db4fe19434dd456800d814'
                    }
                    employee_center_store_supply_column: {
                        table: 'sp_column'
                        id: '130dca487aba499b802d2fb24ea4ddc7'
                    }
                    employee_center_store_supply_container: {
                        table: 'sp_container'
                        id: '999bda81933f454faac6c95b5dd8c83a'
                    }
                    employee_center_store_supply_instance: {
                        table: 'sp_instance'
                        id: '26397f7c68f540ed95944a600e18a637'
                    }
                    employee_center_store_supply_row: {
                        table: 'sp_row'
                        id: '76a169a1171541a098c39b6736d4670b'
                    }
                    escalate_case_action: {
                        table: 'sys_ui_action'
                        id: '8c6264d6c7f94dbc85b1faaaace99796'
                    }
                    escalation_read_acl: {
                        table: 'sys_security_acl'
                        id: '30888dd43ac94366be9166a3f0bd83c8'
                    }
                    friday_schedule_span: {
                        table: 'cmn_schedule_span'
                        id: 'f79f7b6b5c624462b45c8ee63c9c7c35'
                    }
                    issue_case_type_registration: {
                        table: 'sn_case_type'
                        id: '243da027960f47ee85f75749a44f4767'
                    }
                    module_active_cases: {
                        table: 'sys_app_module'
                        id: 'ca14aaf97deb406b8f81e68e620a8933'
                    }
                    module_consumables: {
                        table: 'sys_app_module'
                        id: 'af675deee7844bc58a45e00e18e460de'
                    }
                    module_escalated_cases: {
                        table: 'sys_app_module'
                        id: 'b1a685111fa0498dbdaa1a80ed678212'
                    }
                    module_issues: {
                        table: 'sys_app_module'
                        id: '3168f66cea644f0fa95002e6e7e21666'
                    }
                    module_receipts: {
                        table: 'sys_app_module'
                        id: 'e0f02b7c3fe04d01972922d3f7a54537'
                    }
                    module_requests: {
                        table: 'sys_app_module'
                        id: '2a8f254d2e1a403399b7a2a9038bcd7d'
                    }
                    module_store_suppliers: {
                        table: 'sys_app_module'
                        id: '29c96d5306a84f23b38e9a6ac951064d'
                    }
                    module_store_supply_model_categories: {
                        table: 'sys_app_module'
                        id: '11811e7be0c949bbb961f5dcfeaaf1e7'
                    }
                    module_store_supply_models: {
                        table: 'sys_app_module'
                        id: 'c715bd8f7d944030a74760b9e03ac031'
                    }
                    module_stores: {
                        table: 'sys_app_module'
                        id: '4086a98a007f476f94796f7a60cbb05c'
                    }
                    module_supplier_tasks: {
                        table: 'sys_app_module'
                        id: 'e23920c0efb349a89555e8950311cb56'
                    }
                    module_supply_suppliers: {
                        table: 'sys_app_module'
                        id: 'bcce2fc5cb63446a9f7101ae5d28341e'
                    }
                    module_survey_ledger: {
                        table: 'sys_app_module'
                        id: '91b01fa9ae114c9c9086840b32b74408'
                    }
                    monday_schedule_span: {
                        table: 'cmn_schedule_span'
                        id: '7f5e5edb6f434bd8a3d389a9f640cfd2'
                    }
                    new_store_supply_email_interaction: {
                        table: 'sysevent_in_email_action'
                        id: 'e39c4380ec484bcd8e758f8fc5818045'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9ae5080d77e944b780a586510547d5c2'
                    }
                    prepare_receipt_br: {
                        table: 'sys_script'
                        id: 'c926569abbd94d16b1ee4c32534ddc50'
                    }
                    receipt_create_acl: {
                        table: 'sys_security_acl'
                        id: '5a198834059146388e16473242107176'
                    }
                    receipt_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'b30555cac47141888a5e6bcf7f1a921b'
                    }
                    receipt_read_acl: {
                        table: 'sys_security_acl'
                        id: '949c11a49f12490fa33779205c50c372'
                    }
                    receipt_recorded_event: {
                        table: 'sysevent_register'
                        id: '790c4558b5544c71a10d7556e954b380'
                    }
                    receipt_write_acl: {
                        table: 'sys_security_acl'
                        id: '7eb3a3ecdb61423fb2291f83beee9f65'
                    }
                    recommend_knowledge_action: {
                        table: 'sys_ui_action'
                        id: '533239dfd12e4f719676df9bf92b9741'
                    }
                    record_receipt_action: {
                        table: 'sys_ui_action'
                        id: 'bffe42ccbf554c43bfb2d1f898d20a91'
                    }
                    release_supplier_task_action: {
                        table: 'sys_ui_action'
                        id: '24643f79e7f64488998b288a62884cc8'
                    }
                    reopen_case_action: {
                        table: 'sys_ui_action'
                        id: '96a3a38f03824cb68b945378abbce916'
                    }
                    reopen_window_property: {
                        table: 'sys_properties'
                        id: '73a08d266be54cb2ba2ba170b9d75000'
                    }
                    request_case_type_registration: {
                        table: 'sn_case_type'
                        id: '63fdf24ec74d4c93b4a375ccbeb0a6f6'
                    }
                    request_dm_approval_action: {
                        table: 'sys_ui_action'
                        id: '77e8d38c390d40568701a5c1bac29e22'
                    }
                    route_supply_lines_action: {
                        table: 'sys_ui_action'
                        id: 'ea0e25851e6c43c7b6dc96093d338ede'
                    }
                    sla_schedule_property: {
                        table: 'sys_properties'
                        id: '801e1716117545adb4917ae0bcd5f06b'
                    }
                    'src_server_portal_store-supply-dashboard_client_js': {
                        table: 'sys_module'
                        id: '41ee2d5d489d40d4b3b9544bca8b4f75'
                    }
                    'src_server_portal_store-supply-dashboard_server_js': {
                        table: 'sys_module'
                        id: '87bba8a6c5694e628278260cbb22add9'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '38b7d5d13b2648249c45c5df6ff0027f'
                    }
                    stale_threshold_property: {
                        table: 'sys_properties'
                        id: '0f34fb0a51e645b993f4da51619be462'
                    }
                    store_create_acl: {
                        table: 'sys_security_acl'
                        id: '602c3ab90a1142eb8e97cac4ee42c27c'
                    }
                    store_delete_acl: {
                        table: 'sys_security_acl'
                        id: '8cdbdec5d11b47b394dc3778a1e5263b'
                    }
                    store_read_acl: {
                        table: 'sys_security_acl'
                        id: '180be0a8520b4027b829ef2edbfcef02'
                    }
                    store_supplier_config_acl: {
                        table: 'sys_security_acl'
                        id: '7c2e367e2dcc4221861c29d2f51a5abc'
                    }
                    store_supplier_support_menu: {
                        table: 'sys_app_application'
                        id: '9adffcf938f44e9ea20887a6ff1a08c4'
                    }
                    store_supply_beverage_service_model_category: {
                        table: 'cmdb_model_category'
                        id: 'afde9a484a2b43dd839c8bb563c32f41'
                    }
                    store_supply_catalog: {
                        table: 'sc_catalog'
                        id: '9c541830c1e842c3a8c176469696e147'
                    }
                    store_supply_catalog_category: {
                        table: 'sc_category'
                        id: '832e4e5a4ea1441795e6581cdfda3781'
                    }
                    store_supply_cleaning_model_category: {
                        table: 'cmdb_model_category'
                        id: 'a7bef4b287644759b623dd2245f6e503'
                    }
                    store_supply_dashboard_overview_tab: {
                        table: 'par_dashboard_tab'
                        id: '54e640252cb34c1d9023996358842b2a'
                    }
                    store_supply_dashboard_widget: {
                        table: 'sp_widget'
                        id: '3489f5632ce048cd9336a322f7227425'
                    }
                    store_supply_email_reply: {
                        table: 'sysevent_in_email_action'
                        id: '7f05bba37aad4c2faed8fa64ba930740'
                    }
                    store_supply_ingredients_model_category: {
                        table: 'cmdb_model_category'
                        id: '0255b40734544251bb3c19984846d388'
                    }
                    store_supply_model_create_acl: {
                        table: 'sys_security_acl'
                        id: '0d9e0f11547e455fadcd00d2d3ac01e1'
                    }
                    store_supply_model_delete_acl: {
                        table: 'sys_security_acl'
                        id: '45756a5af3c544eaa701b6f03f1396a9'
                    }
                    store_supply_model_read_acl: {
                        table: 'sys_security_acl'
                        id: 'f1f743077587434da489dc5ef94d853a'
                    }
                    store_supply_model_write_acl: {
                        table: 'sys_security_acl'
                        id: '11c0858d55174525b191acdd95dcdbd7'
                    }
                    store_supply_operations_model_category: {
                        table: 'cmdb_model_category'
                        id: '2f2dae6ab28d4a4e9e17102e4fbbc659'
                    }
                    store_supply_packaging_model_category: {
                        table: 'cmdb_model_category'
                        id: 'faebf65ca4974af282c50471ff52e917'
                    }
                    store_supply_resolution_sla: {
                        table: 'contract_sla'
                        id: '1a5e9871a2ac4ad6acf73a50ce981306'
                    }
                    store_supply_response_sla: {
                        table: 'contract_sla'
                        id: 'f5c436866f764ad8a79d2be32296c5c0'
                    }
                    store_supply_safety_model_category: {
                        table: 'cmdb_model_category'
                        id: '21c94fc52fc34a71b8644fb5495894ef'
                    }
                    store_supply_workspace: {
                        table: 'sys_ux_page_registry'
                        id: 'f1cb3bb464254d179a0c2c3060ace9df'
                    }
                    store_supply_workspace_applicability: {
                        table: 'sys_ux_applicability'
                        id: '3395ea6f7d2b4b8085c85af4fd9a41d2'
                    }
                    store_supply_workspace_dashboard: {
                        table: 'par_dashboard'
                        id: '9386a211ada04081b700657f3b542909'
                    }
                    store_supply_workspace_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: 'ef453bff7ddf44988f3e7bd671b9aa61'
                    }
                    store_supply_workspace_route_acl: {
                        table: 'sys_security_acl'
                        id: '878c0afed4644e4980be509e84c39a77'
                    }
                    store_supply_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '3f8cebee4f134dc0951c77b67b418e63'
                    }
                    store_supply_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '4a195aaa3ed94920817e41191805b04d'
                    }
                    store_supply_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '65df9b026a6d46b8b56e298b194cc347'
                    }
                    store_supply_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '44db28f1c508454fbe241dba71700a66'
                    }
                    'store_supply_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '80343f43228448569e0364d15ca08907'
                    }
                    store_supply_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '04a17bbe0bf74967a74776e9a8f19864'
                    }
                    store_supply_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '5c64175c046246b1adf93506291feca3'
                    }
                    store_supply_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: 'd0c457ab805c4fe7b3fe7ea87995fee1'
                    }
                    store_supply_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '65b09e90d44e48de8bdb4a913e29a9cd'
                    }
                    store_supply_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '02ec826704a8433c870fb5d7091e617c'
                    }
                    store_supply_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: '5eff54956efa4038a01bc93c377eeec8'
                    }
                    store_supply_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '15188e4c5df24bea85eb8d7761ac0c32'
                    }
                    store_supply_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'ab5c7c362aaf4d1e9a4a2b98b0b19fc2'
                    }
                    store_supply_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'cf19456f30f34b6c845b04b03ae6ff89'
                    }
                    store_supply_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: 'f3572d309760413e822aefdd100e86b8'
                    }
                    store_supply_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '68af0efc64204e43ab1bf6992cc09502'
                    }
                    store_supply_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '3f2db1e1bd9a46ecad710b8e9a88775d'
                    }
                    'store_supply_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '856ca05db0d24ac180033e8f5180392f'
                    }
                    store_supply_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '66e7f039f36a4eeeae6e273fe9d3e9b3'
                    }
                    store_supply_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '08365e02e25943bf811828881d4c4a04'
                    }
                    store_supply_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: 'd2a82a0dd9644214be11b0b81de46406'
                    }
                    'store_supply_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '83f80ceaede94845aef0b6363be6b5ec'
                    }
                    store_write_acl: {
                        table: 'sys_security_acl'
                        id: '8d993b8ee3bc47a5a3edd0fac14fb002'
                    }
                    supplier_completed_event: {
                        table: 'sysevent_register'
                        id: 'fc43a0e0c893438b992989c562795ea4'
                    }
                    supplier_notes_read_acl: {
                        table: 'sys_security_acl'
                        id: '506d444910524903afea96d382b309d5'
                    }
                    supplier_notes_write_acl: {
                        table: 'sys_security_acl'
                        id: 'db17cb5873194c2f8940b63a6da567e7'
                    }
                    supplier_released_event: {
                        table: 'sysevent_register'
                        id: '52f1429a5b8642aa9eb4ccfe7b287318'
                    }
                    supplier_store_supply_column: {
                        table: 'sp_column'
                        id: '56200fe6b3104065a32d7eed8e2b48df'
                    }
                    supplier_store_supply_container: {
                        table: 'sp_container'
                        id: 'e2516cb8b4ea4a41899095a76e33f9e8'
                    }
                    supplier_store_supply_instance: {
                        table: 'sp_instance'
                        id: '1c5801bc61de4263ae62575a85c1b73c'
                    }
                    supplier_store_supply_row: {
                        table: 'sp_row'
                        id: '4118c97608a54f4e970f1aff36d2bce5'
                    }
                    supplier_support_portal: {
                        table: 'sp_portal'
                        id: '9b24c0ef16af4a86bcfa468f532f00d1'
                    }
                    supplier_task_completed_notification: {
                        table: 'sysevent_email_action'
                        id: '058f15a09cb04e838e4e03ba9a044311'
                    }
                    supplier_task_create_acl: {
                        table: 'sys_security_acl'
                        id: '99e45f79e73640828d72af0b0dd907e1'
                    }
                    supplier_task_read_acl: {
                        table: 'sys_security_acl'
                        id: 'e44c4fff8671406f940fbbdb2c7cecee'
                    }
                    supplier_task_released_notification: {
                        table: 'sysevent_email_action'
                        id: '2faa89e40aaa408c996cac7846ca2dc2'
                    }
                    supplier_task_work_notes_acl: {
                        table: 'sys_security_acl'
                        id: 'e95421d2df1f407e88a3b046a35dbce4'
                    }
                    supplier_task_write_acl: {
                        table: 'sys_security_acl'
                        id: 'b1b32a9ef80a46a2836d2eaaf9feae32'
                    }
                    supply_issue_record_producer: {
                        table: 'sc_cat_item_producer'
                        id: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                    }
                    supply_line_create_acl: {
                        table: 'sys_security_acl'
                        id: 'f8aef6fcb29347bcac7183cca21d1127'
                    }
                    supply_line_defaults_br: {
                        table: 'sys_script'
                        id: '5759a2b5e150433799ac39d4d5c9f9e5'
                    }
                    supply_line_read_acl: {
                        table: 'sys_security_acl'
                        id: '9b7182dfc70e43d1b9e464af633c611b'
                    }
                    supply_line_write_acl: {
                        table: 'sys_security_acl'
                        id: '1d7d1c1bae3e4416aa76d3deac10e0fe'
                    }
                    supply_request_record_producer: {
                        table: 'sc_cat_item_producer'
                        id: 'c9a7076278194d71a494e4325fbec4bf'
                    }
                    supply_supplier_config_acl: {
                        table: 'sys_security_acl'
                        id: '486102463000437fa7f09a08ad145bcc'
                    }
                    support_group_property: {
                        table: 'sys_properties'
                        id: '7d61072735b84ab7be2413bc4271106b'
                    }
                    survey_invitation_notification: {
                        table: 'sysevent_email_action'
                        id: '7a342d9d9be64e058cf6a083a15a9dc8'
                    }
                    survey_invite_event: {
                        table: 'sysevent_register'
                        id: 'a14ab17fa34b46479f1821f265f83887'
                    }
                    survey_ledger_read_acl: {
                        table: 'sys_security_acl'
                        id: '325caaa0618d4f6b8e4004a189877890'
                    }
                    sync_consumable_category_br: {
                        table: 'sys_script'
                        id: '3d31f5874c7d49ad88da1b732637f386'
                    }
                    thursday_schedule_span: {
                        table: 'cmn_schedule_span'
                        id: 'f9dfee26b5ad422dbdcdc46969dcb6a4'
                    }
                    tuesday_schedule_span: {
                        table: 'cmn_schedule_span'
                        id: '43a2445910064405aab4e4bd7110e589'
                    }
                    unresolved_threshold_property: {
                        table: 'sys_properties'
                        id: 'b5ad36db99d64bb9873b28d36a0addb6'
                    }
                    wednesday_schedule_span: {
                        table: 'cmn_schedule_span'
                        id: '84d1879e52f742c0938e48b3769ad3d4'
                    }
                    weekly_digest_event: {
                        table: 'sysevent_register'
                        id: '779d6000bc0b4935b6f547c4ac2c32b9'
                    }
                    weekly_digest_notification: {
                        table: 'sysevent_email_action'
                        id: 'd4e4a40cbc2148ddbb0d559e61337847'
                    }
                    weekly_digest_property: {
                        table: 'sys_properties'
                        id: '3ff6c2ed9b9747fe8e638b18f4ea4eb6'
                    }
                    weekly_digest_schedule: {
                        table: 'sysauto_script'
                        id: '30d6a3afd6614c008bb8c8039c82d103'
                    }
                    workspace_active_cases: {
                        table: 'sys_ux_list'
                        id: 'cda6121bab2d40c3b949ddf8130f98a9'
                    }
                    workspace_active_cases_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'd7c4491c8b6f4c70bd435564751f0816'
                    }
                    workspace_active_tasks: {
                        table: 'sys_ux_list'
                        id: 'd99e6c3cec2d44dfb57285844f8ad834'
                    }
                    workspace_active_tasks_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '75255756c03c446ba58adc6fdb58f23c'
                    }
                    workspace_cases_category: {
                        table: 'sys_ux_list_category'
                        id: '251bd7c0b02349b5805e01ab8aafd1a7'
                    }
                    workspace_configuration_category: {
                        table: 'sys_ux_list_category'
                        id: '7faefac4ca4d44daacf75aa6c6010ae0'
                    }
                    workspace_draft_tasks: {
                        table: 'sys_ux_list'
                        id: '870138d63fba4e92a67ab280953b2715'
                    }
                    workspace_draft_tasks_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '7ec7d1392aff413dba216db18f31f909'
                    }
                    workspace_escalated: {
                        table: 'sys_ux_list'
                        id: '2f847e7ed5a14d259062ad4f7aed03ee'
                    }
                    workspace_escalated_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '24374387fbac4b6d9a26da7fea68a319'
                    }
                    workspace_fulfillment_category: {
                        table: 'sys_ux_list_category'
                        id: '94115f15171a4b008fa406fb3481bdb2'
                    }
                    workspace_receipts: {
                        table: 'sys_ux_list'
                        id: '018b75d4898947dc8a45cee5ae9efd67'
                    }
                    workspace_receipts_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'b3b75604b33443539214c54e2864cfd5'
                    }
                    workspace_requests: {
                        table: 'sys_ux_list'
                        id: '997235b4dfad4d46a374e582569e22dc'
                    }
                    workspace_requests_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '925720036a2943309469f364ec505819'
                    }
                    workspace_store_suppliers: {
                        table: 'sys_ux_list'
                        id: '4a9fb981e69f4aa1b667d48b1f62f77d'
                    }
                    workspace_store_suppliers_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '67b202d88829404abf9ae3372046de66'
                    }
                    workspace_store_supply_inventory: {
                        table: 'sys_ux_list'
                        id: '847c350436e743319ceab8dee7077461'
                    }
                    workspace_store_supply_inventory_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '976959d5b33746a8b2831acc84d37f78'
                    }
                    workspace_store_supply_model_categories: {
                        table: 'sys_ux_list'
                        id: '9f62bc27951942cca6c9eb1d21d49585'
                    }
                    workspace_store_supply_model_categories_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3b265c5fecd647b99b5dd578816dd2de'
                    }
                    workspace_store_supply_models: {
                        table: 'sys_ux_list'
                        id: '69bbe7aa87024218a04048ec48b1ad1a'
                    }
                    workspace_store_supply_models_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '643063f0b60e4e41a2a095f6f9b91129'
                    }
                    workspace_stores: {
                        table: 'sys_ux_list'
                        id: '5b4f68ac5b1a462597909bc36b6c1482'
                    }
                    workspace_stores_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '118022c5fd7e4c50917d4aa01b58c788'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '001c0a8bdee74b03ac9b72f8e4e1d55f'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'stockroom'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '005b99ff3d024214a6e68f1c40c67215'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'reopen_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '00f9569cf5804b5f95e000344c34057c'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '00feca535e5c4e69bddbdbdfbcf1975d'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '018f6606d8f54b24a4ca2ec575b723df'
                        key: {
                            sys_ui_action: '2b2626e5016b45698aa6475d54b49b76'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '01b955f1671d42229cd1454d8b357cba'
                        key: {
                            sys_ui_action: '77e8d38c390d40568701a5c1bac29e22'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '023e384c7d2843c5ba93048f58be5684'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'safety'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0272db706ed9438db162eda02949cb7a'
                        key: {
                            sys_ui_action: '8c6264d6c7f94dbc85b1faaaace99796'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02883e23ca1c4599853f13402cac8fc4'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02a2ad384db0410d8ffb0165a2a7a4a2'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'received_quantity'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '03109ed238fa46ef8300bc3f342623db'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'damaged'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '036c87d148844a5c824195ee70f21d1a'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'member_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0371ec0d4e51471ab9cb42c1ede853db'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'promotion_event'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '03b0245535a04c949deacb73d61a3beb'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '03f26ca9a268437ea2582aca075cafd1'
                        key: {
                            sys_security_acl: '949c11a49f12490fa33779205c50c372'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '041ff990d96346baac6d74f4307fed3d'
                        key: {
                            question: {
                                id: '8d0d2798a7d748c0a3492ad787582e02'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'planned_demand'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04698b001e2d4bd8b0a906151fea4c07'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05015459ec0443248ab212900945851f'
                        key: {
                            sys_security_acl: 'db17cb5873194c2f8940b63a6da567e7'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05183448f21647c2bdddd4c130f4deb1'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0538f202b6d3473eb2dda32f47b409f2'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '056cedc1d7f841a89f6cfecd60b0d34b'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active_for_ordering'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '056ed3c7c265480d9da39a79a3d401e7'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05a1a4d5d67d4d0aadd663d3a43ed9f3'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '05c660d2e9d24a12872254bb0647ff3e'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'volume_band'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0694d1151ef94ebd9c32433013b9e2cf'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'supplyModel'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06afe38fcf1349e892fe0bb156596df9'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06bb9381abbe4f938d739742614eabb0'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'completion_summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '071185c234d544f1836efd667ae1e585'
                        key: {
                            sc_cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            sc_category: '832e4e5a4ea1441795e6581cdfda3781'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '07220c51a04e46d0853caedd637cba2d'
                        key: {
                            sys_security_acl: '506d444910524903afea96d382b309d5'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '074d524a12654c8184214a3d9e51a090'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '075a4dd9883f4a3898d982bca571afb4'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reopen_count'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '077ec3f4b63440d5adf45aa331e5f38c'
                        key: {
                            name: 'x_sln_store_suppli.supplier_agent'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '079487aeecc9417294de82564c4f0e14'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '07a2091718774def950da0b642255ce4'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '081c3adf92de4163abce7de595b8971e'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            value: 'quality'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08549310394e4518a9807a2ccc44c78a'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '08c9e2e1da0843b0b4de241a62552ff4'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '09275dc464bf427294aa6f7cffe127e3'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            caption: 'Supplier Task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0934a06edce544e78cb8161b481434a0'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'released'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0939562e8bfd49389e5dec27b3e049b2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0964f8c034b242748411551346bd5dda'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'on_hand_snapshot'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '09c928ca72fa43b380896795dd2d7aed'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a1314e7280a4328a7175ddfcb2ae63a'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a958521889240d1a62da274094c66f3'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            value: 'duplicate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0aa1198741f2493382edc61bc66e7474'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'subtype'
                            position: '6'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '0aabdde773a243428240714ab53c6181'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'seasonal'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0af8d294649e45d1a08615dd40394f8d'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b1b1b2d989e4b9fa59f336876ec0884'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b352f5ab0bf47e1a5de15d0fe1be4ef'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'backordered'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0b823a2c18c54d6fbed8294aeafde759'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bafbfadccd4460f8946356d2b9aa9cc'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supply_line'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '0bbac35e2c2f433386e6f32f2dc9fbc2'
                        key: {
                            question: {
                                id: '350ab80cd3b7472ba5f8e02a094e068c'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'quality'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bf2fa7548bb4c878dd5f22f777a6074'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'unit_of_measure'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c956e8205ab40ca943c6288c5f33b34'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ca91d98308941abaa2a2f14e2a178df'
                        key: {
                            sys_security_acl: '2427e24489da495f853366abf297fc00'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d12821ddea24a76ad4bdb30ab85ea15'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'triggered_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d45dbcc695945fbaa74fd9f8360956d'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0d4eeebbf3404941bce67dc9121fc1ab'
                        key: {
                            document_key: 'ca2d8adb6d6f441e8d27ffeeae287e60'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0d93a6e611bd4889ab5043f89f747f64'
                        key: {
                            sys_ui_action: '43229ae6c8434d118c2fa4b65545f902'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '0dabf678692b4ea28269ee241491dc04'
                        key: {
                            role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                            contains: {
                                id: '13b34b395b1a45d1b3fd1c52e00dc568'
                                key: {
                                    name: 'sn_customerservice.customer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0dcef181fe6448cf84d9b6aa0645727b'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_line'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0dcf4251d53e494fb38bd2301ab551c0'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e4e5fc095c44a96a0217e33150d357e'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0e8ff99f5e7f4300981fe3fbe77d6829'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f4a6d0bea9f4a4db981cc840f21f966'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'escalation_reasons'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1040cde7daf14fdbac48a49f6fdd44c3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stockroom'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1059fe693135404399287d00190ed5b2'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'assigned_quantity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1081b2d9d3e048da86090fa352d97318'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalation_reasons'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '109573c3da6e4a688c437e71e61f10ae'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10a259f48812444b800f24e4a7e834ae'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1137534fe36e4a82be25033192b517e0'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '114e8c546779498ea317fa18c52cb59a'
                        key: {
                            question: {
                                id: '8d0d2798a7d748c0a3492ad787582e02'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'special_order'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1182acdd6a7b494b902673dc2da7a628'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'late'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '11d2831f34c74972bd6bb378d71db3e8'
                        key: {
                            sys_security_acl: '949c11a49f12490fa33779205c50c372'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12171881da2b40949a13b9783e0beeb0'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'reopened_at'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '12429fefed2c4240a6a5450c9aea0b90'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12dd1604b7444ffe8404674f3f354b77'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1317d1d03f8546f1937000ec4f935394'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1349fbd8d5784cd2980dee8a4772d2d8'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '135f2ceeb8a64ffe9432e794481260a3'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '136d584e9ae8478aa6ab6276211e508d'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'general'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '139681c19ccf45e0bb9878a3fca2ad88'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '13b6f1dc54b8497c88cf22ceb55716b3'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'attachments'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '14256c36923b41eea012b87ee56695af'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fulfilled_quantity'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1443368ebe7b4cb18dc473efdf257af3'
                        key: {
                            question: {
                                id: '8d0d2798a7d748c0a3492ad787582e02'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'replenishment'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '148be3e2283f487ba218a4b0f4e96ec0'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'general'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '14b2fc9dab5542a98f7030252c321b08'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14c4fc66bdad49fc8efdac2a836d7586'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '14ca61ad2fc84747ab27d8901e998f92'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14f3a53fa2be49b1896678f31324c21d'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'received_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1549f79153fd4268826ff59072ee58c0'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '164bd6dfb24f4a36aa0bc52d6e05c501'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '166ca53b7cab41e0a276e995f6da02f7'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '168829ddd932485b9bf4476a9d741031'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '16a761aef15746c395a3490a077886b0'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17036053fc8b4504803f345831ef3a78'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1730ad873fe04fb398d5d3b3505c8b9d'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'prior_active_state'
                        }
                    },
                    {
                        table: 'm2m_sp_portal_catalog'
                        id: '1868c53448424abeb7eeb7364954b238'
                        key: {
                            sp_portal: '9b24c0ef16af4a86bcfa468f532f00d1'
                            sc_catalog: '9c541830c1e842c3a8c176469696e147'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18eb70bfb1a946b18ce6cc9ab781b568'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            value: 'issue_corrected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '18f8fda6312341cfb83a8a4a15911118'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19b6329dcecb47d49c2a3d5a0e0018dc'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'sent_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19d1509b7b2f46e6bdfe35a54b7c3290'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'released'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '19ea522f29c14fb480cc920cd677a01e'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a5fe1778b314e91a0e2f3239b50a20f'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'originating_supplier'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a81f75886fc4c869dea1e3aaa32783f'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'supplier_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1ab47a7cb3c144e68fd1a855dbf9fc8f'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'fulfilled_quantity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ab5f2e5645841119a38a6ebd9a10c22'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stockroom'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ab98c81d03f4ecfb07d8db465122ff1'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            value: 'pickup_only'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ac48c818f0c4808a34346147a4c19b0'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'partially_received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1acf2d2c10064c03b1c7cf55f4850070'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1b31bc8376194bd584d3e598ebb62bbe'
                        key: {
                            sys_security_acl: '486102463000437fa7f09a08ad145bcc'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b36505edca341fe8a5a36afaa852e9f'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b973d2c46344e92a14c65aff219be5b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'last_customer_update'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1bf7bd76306b4f47a6451a89d4d02f96'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_line'
                            col_name_string: 'supply_model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c8a51686e6248889972bc407c7d2bc6'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'active_for_ordering'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d8e9e94c0714af2aaafd6ea50c4bde6'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1deadae1cfcc4dc4898044595fa38f21'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'model_number'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1dfacb12f62149cba412e4fd1b924f59'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1e0a517f8739456e9e64799e3098f0c9'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'partial'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '1e1cff63c5e44c998829544255a7413f'
                        key: {
                            id: 'store-supply-internal'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e4ece0ddd8b442ba751fafa7f1c1a8f'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'new_store_remodel'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ec6d1b6ce574205ab890a13f66c9604'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'inventory_applied'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ecb1f130cb645fc890ac0dbd2f2eeb0'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_customer_update'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f4d79439ebd48fea940f1564aa279d7'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'received_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ff0eada95ff4bc9b6ad62e0a25adbfc'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '206c50207e7a444988e9c4277e36bab2'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2086d7b5c4ce4b14a04585cbaf2c2d58'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '20cad900f8814eba9b818b2693ba225c'
                        key: {
                            sys_security_acl: '506d444910524903afea96d382b309d5'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '20fe3ebdfeee44329cffdbc9807a48eb'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: '22341d6a28c94e35af59be7686411d7e'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '211e72d293ce4d688ebd58684fe2b41a'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '214122d7b9e9496aa0acae2f4b2e8251'
                        key: {
                            name: 'x_sln_store_suppli.support_agent'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2182646f7a7b4117b87a484a13557d74'
                        key: {
                            sys_ui_action: 'bffe42ccbf554c43bfb2d1f898d20a91'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2192b431510a44e2a5b80583cd49afbb'
                        key: {
                            sys_security_acl: 'a2198a544c7f4a849e85895d1d2fa543'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '2224716bc209456b80f88eeb58c65661'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '22296ba8fbfb46ec968fcf7071738f9f'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '226244a03dd6489db14ac946aec48fef'
                        key: {
                            sys_security_acl: '30888dd43ac94366be9166a3f0bd83c8'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '227d7951b5854fbc9dac9d988fc73107'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'preferred'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2360cba2ee6044b59663b7b2a36d9795'
                        key: {
                            list_id: {
                                id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                                key: {
                                    name: 'x_sln_store_suppli_case_escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'reason'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2399741a780d4f55ae7cafc7ffdc7dab'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'wrong_quantity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2413df9a2276410fac43bad79bcdce65'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2450296a8d32482d9645883b0c2a31d6'
                        key: {
                            sys_security_acl: '5a198834059146388e16473242107176'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '252135fbae7b407392cbcc8f32abe078'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'lead_time_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2541bc4dabb844a597e3d2290190c8e1'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '25686442678346c5a29fda7330aa8b7b'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'knowledge_recommended'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2572040c458342999dc74a03542a2db0'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '258c12ce00394d0ea3440dabbd8d2449'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'replacement'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '25970479075d42928ccbb1ab003d278c'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26820604d89842d1ac7849c797f45dd2'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'supplier_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26ab0bd575af4c9ebd4f6f527f25c18c'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26cbde1aaf1c41e1807280180b914d64'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'escalated'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '274e9c09d2624014b5293e46689b3e27'
                        key: {
                            sys_security_acl: '878c0afed4644e4980be509e84c39a77'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2782368038c04746ba872c56938f4262'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '285119caf758458093f79fad5a0fc353'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'one_time'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '28575e909def422f982446ef24c933fd'
                        key: {
                            sys_ui_action: 'bffe42ccbf554c43bfb2d1f898d20a91'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2898696d99fe4d3eb3b46a2f641ee718'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2899afb5043542fbb9fb4be77ebe463b'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'stockroom'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '293517cce8534162b605ed5cfe464766'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'unit_of_measure'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2984469af8d4415d85417c100add24a8'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'needed_by'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '298a15e780c6446f9aabcb2179f6ace5'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'calendar_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2a78462bb07243f9ab230def5dc5a52d'
                        key: {
                            name: 'x_sln_store_suppli.district_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b202bfcef3c43c9972bd716a68badb0'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2b67da3af103459da5e5844d6aaa5569'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c9508de629c481695c57dc709ed7e9f'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '2ccf0efdcae2402e8b77500eff314805'
                        key: {
                            sc_cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            sc_category: '832e4e5a4ea1441795e6581cdfda3781'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2df570b4f24649a1acf04555be787c2a'
                        key: {
                            name: 'x_sln_store_suppli_store'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2e0be7b7dc3e47d7912a7f0e245f4301'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2e95904af7e54b79982cde142e8e7edb'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'task_state'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2ebf1ce3d98f450d9d966014b8d3bd36'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: '035670b9aa9344abbfae29e6d136e6dd'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2eec88ee606e4730a5ecb6954053edb5'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_store'
                            col_name_string: 'district_manager,active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f0ae5c922c74cf797f1c5e9702d7e35'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f250d83dec24e1387777897552ca0d4'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f314420168544be98de888fed001d6d'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f47c2516a914091a0b0b7bf6ec47c32'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'supply_model'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '2f7ab7bdf9b64ec8ab30bc33a4ddfa7d'
                        key: {
                            role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                            contains: {
                                id: '02430e1dc34c4df8b18adf27d9dccd28'
                                key: {
                                    name: 'category_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '303c72c4c9874afb994bde444fa57a67'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '307746aa6ace4277b9c27c256813b585'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '311987449a4d45fea18eb9ac1f4a1c11'
                        key: {
                            sys_security_acl: 'b30555cac47141888a5e6bcf7f1a921b'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3141a1c647b146698afcb7d96fc5552d'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supplier_task'
                            col_name_string: 'parent_case'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '317090f935ce4e139be9c3dabc2f3662'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'urgent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '319a4883e0fa47dbb55e943061e86b9b'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '31b055bd05b746e999185541607bfbed'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                            value: 'agent'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '31b3ead780c348039de7293476c2b477'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'knowledge_recommended'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31e9f5ab2c8142ba9e5ad58792d8fa93'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '32236bf1bf0e431891dd20cd520b3afa'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '325dc4f3049a41e2bd12004001c7963f'
                        key: {
                            role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                            contains: {
                                id: 'cb12102bba0a4fcf913fb84e42c015dd'
                                key: {
                                    name: 'sn_customerservice_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '32cb98cb8be5436583bd9b1bab353b1f'
                        key: {
                            sys_security_acl: '5a198834059146388e16473242107176'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '32ff9f6ddff24483817628561a3402be'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3340c9be817e47338d44748286c5c0ac'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                            value: 'unresolved_five_days'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3353573f1d094127a6c5444ce3524cb3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3358d68e1b024cc5ae321b6f495ac0ab'
                        key: {
                            document_key: '49b73264d0344e57864412eccdb68188'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '338fd71110e04731acc4ec4da70a2e48'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'needed_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33aa678871974c30a8dc0b408f7661ba'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'cleaning'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: '33ea5e333bba42a6b1fd25aab7727209'
                        key: {
                            dashboard: '9386a211ada04081b700657f3b542909'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_sln_store_suppli.support_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33ea7b6266bf47418f4aa4ea170fdd79'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'last_customer_update'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '340c7973da924620bbca63a5a4ea7a7f'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'damaged'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '346727355bff4aaca02d2f7a477df0b9'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '349dcb72b0ee467ab5e4eec7557363ec'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_quantity'
                            position: '8'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '34abc58cb96448a3b0f37ad3d5681412'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'general'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34d21ae41f53480982ed3f8a8ea6c3bc'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'fulfilled_quantity'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '34fcfb43c05d452d9dfda9514db31bd1'
                        key: {
                            sys_ui_action: '77e8d38c390d40568701a5c1bac29e22'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '350ab80cd3b7472ba5f8e02a094e068c'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'category'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '350b353120ae4b09b6412e95de539dae'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35855135581f4c169b19de81fb4128ea'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35b723cfa8a644d191091def059e1ceb'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'reopened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35ee7aaedee04dae91f5f0b66da10b69'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35f876a1bf9f4d3f81f102a1db7095a8'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36494d020ab94c15a0cfdc444b2e1321'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            value: 'reserve'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '367776571669410ca6c25c016ad6b7e5'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'line_state'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3789fb6d937b47fe9a53ffa6062b54a8'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37b5355797fe40deb0d078ac333af2c5'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37faa459b9b54d82a6a60311d64b9b0b'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '380944e5c7c34f88a060156901966e64'
                        key: {
                            sys_security_acl: '2427e24489da495f853366abf297fc00'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38304c0e26ea43febb4f2fc55ef99277'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'primary_contact'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: '3858cb818e854a058027d1f19453c179'
                        key: {
                            dashboard: '9386a211ada04081b700657f3b542909'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_sln_store_suppli.support_agent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '38674f21d2b24b67a942ee89320eb21d'
                        key: {
                            sys_security_acl: '878c0afed4644e4980be509e84c39a77'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38884e1285a94672bd500caf97d6dcda'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '389431d851a4472799715b39421b89f8'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '38a2834cbe744e2988fedff5e57fbad3'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            caption: 'Resolution'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38ae00d0419b4be984b53de08dd6e750'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'market'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38d43df93a1d4888baae73966d2f31fe'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3909313dbc8641cf8ceb758cb7c55180'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '394e8be2d8854b7284b07f74cfb54cac'
                        key: {
                            sys_security_acl: '11c0858d55174525b191acdd95dcdbd7'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39c5f4fdf3174aa28498a76246712dae'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '39c68886dc7048c3b5e0c57fc758de2c'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '3a23157d814543e48e002a9cccc872a7'
                        key: {
                            sys_ui_form: {
                                id: '32ff9f6ddff24483817628561a3402be'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '3a55c5516b9344e784ea659073c41cc7'
                        key: {
                            id: 'store-supply-supplier'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ab38215505f48c2a71364beaefd9e70'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ae5f51ce4404e7881d18f70923e0063'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3b127ef73f434bca983102e78aa41438'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'market'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3b702a40c7f74917a14d094e25e403ec'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'out_of_stock'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b8bdef5e9224738a49a6a5994422c37'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'operations'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bae7b5ba0bf424daedc75c43b4a41c3'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3bcb5c9715964176ac4f83e489dd1a2f'
                        key: {
                            question: {
                                id: '8d0d2798a7d748c0a3492ad787582e02'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3bd2f72262a340478194cee6a01a3844'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'late'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '3cfba26451b24d91bd72ac8ac6cdfa70'
                        key: {
                            sys_ui_form: {
                                id: 'dd0618fda0ab4a4c9b742f97f0371e90'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3d80fec2401346a188cb7cd3e8f552e3'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3dc29ef0bdca4e9b9c9e168830eaf94b'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3dd6a2baa8834aa4b586b99fb0672437'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3f1f2b18e62143bca65cef20b6d6db2c'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'defective'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f5c21f6113943dc9ab60b74f583ba25'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3f65ba48283443b4ab054634b1924fdd'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3f9b51de10354e6ca90b3a3f4e758d01'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'missing'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '3fe098ba203f4e329b4bdb7614614f7e'
                        key: {
                            sys_ui_action: '533239dfd12e4f719676df9bf92b9741'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4034a2d3af55415b9b3f80624805f4d7'
                        key: {
                            sys_ui_action: '8c6264d6c7f94dbc85b1faaaace99796'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '407a79db661c48f4817c4bf4be5e196c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'district'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4099da6939f847a1ae9708c6e0fcf1b7'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '412547ee2c414312a312a810c454c4e3'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '41a5bb2314df4f2ebb109a4502e547f2'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'low_stock'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41aed7912e43495894a471a55e78e52c'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'missing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '41f25f85723245dbbbbc011e02386693'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supplier_notes'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '421fb73e888a418fa0ab985b514f7427'
                        key: {
                            sys_ui_action: '43229ae6c8434d118c2fa4b65545f902'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42479dc62c38482c88090ec2cd4c066f'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '425887ff32254714a37b08ea66edbe84'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'supply_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '425b06969dee4e1e904b991293917d48'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '428b9eba62f14682824bbcea0ed60b02'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                            value: 'special_order'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42cc55790f7e4c1696a475c1af6c8092'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'requested_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '42dd1a01f0f74e299b8390b09f676a3e'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'inventory_applied'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '436a969dabd44e35a2c3d75f20ecef8c'
                        key: {
                            sys_security_acl: '8d993b8ee3bc47a5a3edd0fac14fb002'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4405e896c9454ab19d610784b5e7d719'
                        key: {
                            list_id: {
                                id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                                key: {
                                    name: 'x_sln_store_suppli_case_escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'triggered_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4533fdf34ae34118962ea363b997aef0'
                        key: {
                            sys_security_acl: '7c2e367e2dcc4221861c29d2f51a5abc'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '45aee82a489d419b98010530945220c2'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4682aa24b094460593c615f29fdb21f0'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'member_type'
                            value: 'district_manager'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4705d940ffe34e2aab1f647638cc1ef9'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4740672a04174fdd9483429aad621f47'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '47421b7ec1cc4f198816c02b7f24eb04'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'businessJustification'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '476bd7c1fa5d49db89a6b26b151ef56f'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '477191f1a5f74b55bf3efe5b15aa8ad9'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'notification_sent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '47ae5eaafe1c4e6db275acfc260cba5f'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '47b80695745342ed946248dcb75441b7'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_store_member'
                            col_name_string: 'store,user,member_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '488ceeae68724beba224e63167d8a10c'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supply_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '491cba6c9979421ebceda01790658bb2'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'stockroom'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4980dec472f74a829b9a258a1e8f2ed9'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'recipient'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '49b67842949541448ccb3577e454d05c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reopen_count'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '49ec0a4ead01431b8f0d6b4f8b7b2659'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'district_manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4a2dd42e31744df5b8b71ddb246132d6'
                        key: {
                            sys_security_acl: '7c2e367e2dcc4221861c29d2f51a5abc'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4a2fe6526d544ec8a231f688652da17b'
                        key: {
                            sys_ui_action: 'bffe42ccbf554c43bfb2d1f898d20a91'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4a455282a44a45019288293ba796dfa2'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4a6bf059625d4b798c5ccb269c6e6988'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'manufacturer'
                            position: '4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4a7c16a5beda41b0b5169a170db04904'
                        key: {
                            question: {
                                id: 'c281b3f815594fc5b6d104fcd6f6021e'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4ad1d41087b742af999080e3d7bb5fff'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4ae279886ead4ae7884d023031336949'
                        key: {
                            category: 'x_sln_store_suppli_supply_case'
                            prefix: 'SSC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ae67c0d31244b78bbff582401201967'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b6a312c595545e79b2def20ce946db0'
                        key: {
                            sys_security_acl: '949c11a49f12490fa33779205c50c372'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4bcd37174ffc488a9bca46c52d7efd03'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'low_stock'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4bfafc41b4c34d938125fb1f86004f1f'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c07111b53844b75ac30ad82fc42816b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'originating_supplier'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4c2e0a78d30945aca1f1435526297e8e'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4c9556a77c3d4a04909fc9045f8b63fa'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '4cc67bb23b1b48ce81166f074f5368d5'
                        key: {
                            role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                            contains: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4db5d8af5afa43249c8dec450c5509ed'
                        key: {
                            sys_security_acl: '949c11a49f12490fa33779205c50c372'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4db9e9799ee042a79e590d87919b4466'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'completion_summary'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ddd0a9233e540b1ac291067b8da1f1f'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'knowledge_recommended'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e1a366577b64a969759a5b9546927cf'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'inventory_applied'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4e27ea3855b74d5c9549fe0690a80da3'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'lineNotes'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4e3b932852784337872330f909c6b71f'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ebfc6df869942428698d843a4b682f8'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'business_impact'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4ec9981639bf44f5b52aab3c120ab7a6'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4efc8ca76018442888e92be7ea912bb7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4f8af73841e943be99f388d288b56dad'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_store'
                            col_name_string: 'store_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50204b5df0fc48d6881dd15b1c7fed86'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50caa6166fc04771b27189398ec5c074'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50f8e9bf84934f79a9173fc4374af5e5'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_response_at'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5116d13eac464516ad91c8af879e961a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reopen_count'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51c5338fc2164c4ebf6192d4c64273be'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supply_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '51d8b2fc19c54373b5a73040d57e7c94'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_task_line'
                            col_name_string: 'supplier_task,supply_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51e063d8163c4fa6a61024d54631970f'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '51f1f4e686874a67aebaedbb53aca089'
                        key: {
                            sys_ui_action: '2b2626e5016b45698aa6475d54b49b76'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '521d81c0492f46d9ae8c5b601fcfab65'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'fulfilled_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '523c161adf0944b5be509c8824cf00ea'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5248bb74d6ff4e6a891c196b1458b182'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_case'
                            col_name_string: 'originating_supplier,supply_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52621e53414a4e55ae1afb7f81102ff0'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'notification_sent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '52a976b7fab64030a2d7521d0ce66f57'
                        key: {
                            sys_ui_action: '96a3a38f03824cb68b945378abbce916'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '53108e10cb644ce3bf20d7e02deb60ab'
                        key: {
                            sys_ui_action: 'ea0e25851e6c43c7b6dc96093d338ede'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '53292fc2cb6544dc8ec0a6dcfee13de8'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalated'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5340b5b58bdb45adbfa6f9257c2e7ef2'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5346a5fc5cf44ff6809c965ccdbe43c4'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '535b045e28f44a68bccfc32938330a2c'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supplier_task'
                            col_name_string: 'supplier_account,task_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5374fb1b9c564b0c970a2a826d712dc9'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'unit_of_measure'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '53a58cda87c640518f0ab8a01179e4ca'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '546dd0e11e264ee5bec650d19fc82e2f'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54bd083efe844efda8c36e0b39a89501'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '54c872bee610400797e7f0723ccc4f33'
                        key: {
                            role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                            contains: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '54fa82553c884bf799ef9e1140a60901'
                        key: {
                            sys_security_acl: '99e45f79e73640828d72af0b0dd907e1'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55401375cc224d5e82e383dcf21d4160'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '55bde4f7285a433689cf25fe3541e530'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56615e5cb9ea47cea832d06e1e65232f'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'district_manager'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '56f3f0608dc34fbb8015cd00bed87872'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57076c909b814c4fb8091e9f5e137e32'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'volume_band'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57101949890f466596ec25ded771f1a2'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supplier_account'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '577dc47e40d8418db9684a96f2913caa'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57a999ee47c041a0bfad572ba7fe2670'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'requested_quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57ad7389179649cfad4991f39995ca95'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57d722de7e284074bfc6400e8363b5f6'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '57d7d55ea8cc4454b59efcb738e1a1a0'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '57e94d656a504a16a77937abdec3438e'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'lineNotes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5887483f054248efa09c540a79828279'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store_format'
                            position: '3'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5942af5dead840fa822a09a9aa888ce6'
                        key: {
                            question: {
                                id: '350ab80cd3b7472ba5f8e02a094e068c'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '595251d46c4a4562b62459ea3c27f4e6'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a81729408fd4be48630de52a33125ec'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5a9036da4b7f4aef91ffeed5221eb12c'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5acb5867a38c474fa0066107840c2b64'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store_category'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b6a6bbb77cc4f8fb0fc20c70ed288df'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supply_model'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5bcfb3d0130e4623b2abb6ace11c67a9'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'preferred'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5c3239afc2c44d069defd59c570aee5e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'unit_of_measure'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c4781b28c014f139763d43dfaeab59d'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'first_response_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c51ec0e82604b6c80157532bffa7d1a'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5c8cd6a97b514bcbb3b2e912f46ec2bb'
                        key: {
                            sys_security_acl: '1d7d1c1bae3e4416aa76d3deac10e0fe'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5cd534b91a5f42ad9897c7849260e7c5'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d7d997610bf44e8af7d1cc0614f32c8'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                            value: 'replenishment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5dc2f7eadcea48e498aafe7fda92d3b3'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5dd273c8b0d64e78913580ead4af535a'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5de7d2c5375e4a7d937fa0e37c21f37e'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e691fd668434deab3aa16f9ddbea395'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5eb2f3c18647453a9a63bc0851966cf0'
                        key: {
                            question: {
                                id: 'c281b3f815594fc5b6d104fcd6f6021e'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5f160c3e44c142ecb572c92f2196c4e0'
                        key: {
                            sys_security_acl: '0d9e0f11547e455fadcd00d2d3ac01e1'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5f8129bff5e9498284d19e413011ba69'
                        key: {
                            document_key: '606591803e484bbe819bc4b02a21fba7'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f9cdedb42a346f3ab8de95afeb5de76'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'sent_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fae9dc220074c6f8e63c16bcb89905e'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'received_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5fcb5d9976cf4a21acf7b7dc44a1556e'
                        key: {
                            sys_security_acl: '03b70f642eed469fb41ccada15c2f943'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6071777535854f5b9d8ed2dcc5891e92'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6090271749f84c1b8abe78cc225f3623'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6097209960d748129c0b66c7d6b1bfba'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60e5d5b770764d8586f7ea1d477ee52b'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'completed_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '614d671b99f1448b9e9eff24f3330ee4'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_response_at'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '615349efed2d4bf198bba66a2af4d148'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'business_impact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '61ac59ea7b2545048155f97560c35e4e'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6261ef35090443f1ae2f4f79101bce45'
                        key: {
                            sys_security_acl: '5a198834059146388e16473242107176'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62bb4423734f412a90a044b1141e4abc'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '631f638c5b7a44ca857f02dc490cf49b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '63b89cebb89948c994d00e217064e889'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '63d2166246414b53a60e40473374b3cf'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '63d323d9af864dbea77c6e720760c49e'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            caption: 'Issue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '640477639c4f40639dd1a7a5adf051f4'
                        key: {
                            sys_security_acl: '45756a5af3c544eaa701b6f03f1396a9'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64162ae147be42e8a9acd9bb3cedf045'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '645ae3f41f4f4b6ca606951298ef64db'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '648a108cc06f46c5a721b1c01b29ea45'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'store'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '65010ed50abc4c018364fdd7089bc8b7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65068234a5c24816b48cb32cdb342f62'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6540dd69a8f54a84bd1d253c32a24463'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '65ca8cb5d19147daabeccbf5ef8058fe'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66bd19d8133a45288292b6ac77040bfd'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6728a4f91b0f4af1856af9e3a0d24d6e'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            value: 'drive_thru'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '674d7c5687a1466fa2d8eab1cb51bb18'
                        key: {
                            sys_security_acl: '2378daa7956543ee8957913661e008f1'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67a49e02605d4ef6ac1032fa613d73bd'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_feedback'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '67d640729dfa4130be21fb6296d58566'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            caption: 'Receipt'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6852a4ec566447e498c1ed6a0d415e91'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'member_type'
                            value: 'associate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '686bbabf0b2140cc98534e823d45cd6d'
                        key: {
                            sys_security_acl: '5a198834059146388e16473242107176'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '68ef86dd92d44dc9acd62d2d86fd2253'
                        key: {
                            question: {
                                id: '350ab80cd3b7472ba5f8e02a094e068c'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'delivery'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '691486796f9d41538b64da39b554f981'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6996a218c7134aa8be1af088950e0cee'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store_category'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '699f58c669ea493397700e6120283f08'
                        key: {
                            sys_security_acl: 'e44c4fff8671406f940fbbdb2c7cecee'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '69d47782996e48099b00a5781b36c3d9'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '69ddad557782439cb26ea73ae595dace'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6a08d2993e834c44a0144c241f991008'
                        key: {
                            sys_ui_action: '43229ae6c8434d118c2fa4b65545f902'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6a317b59123a43ddbb5189ecd4477fd6'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a3b7a59c1ff483ea45f8063848a49b8'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'district_manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6a5a8e6464a449f98aa418a85978e076'
                        key: {
                            sys_security_acl: 'e95421d2df1f407e88a3b046a35dbce4'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6ab4b75b50a54be2a4b844c15b149c50'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_model'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6ade6f24b6a14567876e6374e60f839c'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'task_state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b1f1a76f03b46ef933a641dc872a2eb'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'store'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6bde544b3c754d2bbfd5d92048cb49da'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c411504860a452fbdae21a92f333795'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '6cce8c4f9e064e458086de97becda00f'
                        key: {
                            role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                            contains: {
                                id: '424d1e7dc14e4f3ea736d8bbe2c1e946'
                                key: {
                                    name: 'approver_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6d5483d7ac994dbb804b27f64951f3e0'
                        key: {
                            sys_security_acl: '2378daa7956543ee8957913661e008f1'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d84ce68862f4ec0a2665cb68fddaf03'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'work_in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d8fc889b7804c3a91603904e3bb7e7c'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6db3a2c461484a659e8210cf1fee77a8'
                        key: {
                            sys_security_acl: 'db17cb5873194c2f8940b63a6da567e7'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dfec4695e5e444e8103e5d1162be78e'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6e0a5bb13af746ba82342009fcdd3f87'
                        key: {
                            sys_ui_action: 'ea0e25851e6c43c7b6dc96093d338ede'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6ed90fe11d9646289a4eb1852ff41559'
                        key: {
                            sys_ui_action: '533239dfd12e4f719676df9bf92b9741'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f32c3f3464d4d46bdccc83c5aeddd3c'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6f385fe63b2e478aa776220e88d3d270'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f657c670c97491da9dbd49f9772d560'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7079dcf5cb734bddb8bcb3fe7df328d6'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_feedback'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '707c85da457c4b58bc1768ebbc5d3ea4'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '707d9be2a9a3418bb69af3c272a20cb0'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'partial'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7096f6aeefb6473888d790500a9a32f2'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70eaf14de7fa4e768df1ad3ccbe5b75c'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '710e95a4fe53497698e2464b066151c2'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'detected_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '714957d9e53f44829a04bcdf4380e121'
                        key: {
                            sys_security_acl: 'b1b32a9ef80a46a2836d2eaaf9feae32'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '71612a5fc1a649fc930c40ffff8a6739'
                        key: {
                            sys_ui_form: {
                                id: '9cff54fe00c544df8b5c7a77dffe29f6'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '716eacea775546aaaa9ef721eb5667fe'
                        key: {
                            sys_security_acl: '7eb3a3ecdb61423fb2291f83beee9f65'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '718de78f555240a998c5d6b764ce5ef0'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71937580893f4529bf23a2d101401ea1'
                        key: {
                            sys_security_acl: '11c0858d55174525b191acdd95dcdbd7'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71eecf516c484037a4d4094536fcce67'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '71f2c8fac7834677ba4b343aea5adf25'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '721d08a8da434a6888565e7c55874f06'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active_for_ordering'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '727f011efa864468b67c05d3b2e210ab'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'knowledge_recommended'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '72911216c74d4bb4afdeb8ce313f5bd7'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '72e6ab3d7cef454d9411d6733a5f8425'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '734c96ca42194cd8bcf1cebca1ea91bd'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '73799b610d5348568a846d41000baf93'
                        key: {
                            sys_security_acl: '30888dd43ac94366be9166a3f0bd83c8'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '739b98ec34c149cda65a6bcebe39e7e1'
                        key: {
                            sys_ui_action: '96a3a38f03824cb68b945378abbce916'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '73a5f21dbecb4bf7b466ee903e4982c1'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: '320aa6620b8d40bda3678998a6f46f4a'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '73ad12ba3e4f453ba9d5bd4200401e8c'
                        key: {
                            sc_cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            sc_catalog: '9c541830c1e842c3a8c176469696e147'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '73cefcf35020462294f0bbced6e145f9'
                        key: {
                            document_key: '22341d6a28c94e35af59be7686411d7e'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '740d46f7373a4701930331a0f48c19cd'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '74ab8da691a940c6abb94f0792926e70'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'needed_by'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '74ff14545307462f9e62be10c9564bfc'
                        key: {
                            sys_security_acl: 'e44c4fff8671406f940fbbdb2c7cecee'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7505f9837cfa46d4924c6217085098a2'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7527057eda7b4a5695a84fd36adf180f'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '75314dd578e0400f9e4a68a9fe71eb8c'
                        key: {
                            list_id: {
                                id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                                key: {
                                    name: 'x_sln_store_suppli_case_escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'triggered_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7533e7c8b23f448f986537a7b4532f31'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'needed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '75404b02db12423fae4c3d3dff6f392a'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'member_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '754316bc544842f0b50ad9eb103d81ec'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7577cdee11b74145b52231791c4f3450'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '758408649d1d48ccbba05be18aacf2fd'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_survey_ledger'
                            col_name_string: 'supplier_account,calendar_month'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '75b5aa315eff413ab3609f7d0a33fe77'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '75e888c251fc4d12aa721839f16e643f'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'attachments'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7667c5f377f14a9bbe9ad03378948cf9'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'market'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7684cea18e2647f887a59c1688a8dd67'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7696ebdf4cfe41fa8f769fd760ae65a6'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'originating_supplier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '76ed782204604db29dc75c64861815e2'
                        key: {
                            question: {
                                id: '350ab80cd3b7472ba5f8e02a094e068c'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'accuracy'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '7710e8de8da34f129fb9d8e774594da9'
                        key: {
                            role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                            contains: {
                                id: 'f2f70f96fb5f40e9a16cc156556b3456'
                                key: {
                                    name: 'knowledge'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7720a056f3354306a27ad22b3245c7e4'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'received_on'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '77a94882ff1b4236a1393942c1b76de6'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_line'
                            col_name_string: 'parent_case,supplier_account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77d7125f931c445585b8b2bb6086ac90'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'escalation_reasons'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77ec2a3ea8654ba882b097d6bc42ed8f'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'district_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7891b3185ec14978b41c7f8318680c0f'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78f05d0da655488e9dccded631ea1371'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'prior_active_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '790412df643f4dfba95dbcb40388694c'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7952dba28c6b46c28233d792820bdd6a'
                        key: {
                            question: {
                                id: 'c281b3f815594fc5b6d104fcd6f6021e'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7963a8498f2143d1aeac63f7a53b407a'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '796e767025e741078b18022cce39f892'
                        key: {
                            sys_security_acl: '486102463000437fa7f09a08ad145bcc'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '798c16440fc8463eb6fce0a290415086'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a5b57607d2c495788f53d84a60c5b9e'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'fixtures'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a9511233fc84bcf917dd8b12eff06d7'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'store'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7aa8a1cd82c045f3888e2f60dc3d566d'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b71c1281dcd488d95d42f14bc50fe2d'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b7705d419a64f5291894a5b2f5b873b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                            value: 'phone'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c012ae60c8b419d9c751f01ce55e28d'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution_code'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ca71290350d4d51861d6a4f1997023b'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'expired_unsafe'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7ccaa38a57e44bafaa471884a16105d4'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d0d58a277fb4b1e96a990d21fc52b82'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'released_on'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7d3c59232b5743329c57e17cd8ba6cd5'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_supplier'
                            col_name_string: 'supply_model,supplier_account'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7d79d22b967342a6ba1cbc49b27ab75e'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'subtype'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7da1c7cd6fb743c09c2181e56c4e89ae'
                        key: {
                            sys_security_acl: '11c0858d55174525b191acdd95dcdbd7'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e152417e2d74eb1b47e0402dbc25405'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7e3d0b9948354951aa64920303bd7e65'
                        key: {
                            name: 'x_sln_store_suppli.support_manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7e51c538b97d420dbf6f087f8abcf0c3'
                        key: {
                            sys_security_acl: 'a2198a544c7f4a849e85895d1d2fa543'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e8e51532f4a4323a3982f3e6a488b95'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_customer_update'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7eb4652997d947a5a6533ea4452f1501'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7eb81c59bd4144a49e80c0ef7839fa63'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ed8b1db8c774fbebc423a8e7db6e6e8'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'fulfilled_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7ee4011814d546bd88754306f56579b7'
                        key: {
                            sys_security_acl: '0d9e0f11547e455fadcd00d2d3ac01e1'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7fa0d50dbf164d55838355b672113875'
                        key: {
                            sys_security_acl: '0d9e0f11547e455fadcd00d2d3ac01e1'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7fb0b9c803a7445b810f61296f86ace6'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'businessImpact'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '801194e7fb584601b140d7fd495729ca'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '80695ce11dff4fcb8eb133264531f007'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'district'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '806fff51a9cc416f8640c4520e34fd40'
                        key: {
                            sys_security_acl: 'db17cb5873194c2f8940b63a6da567e7'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8134aba5f3a143f686c5c5973f9f15cd'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            caption: 'Supply Line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81422d523eef4ddaa4e968997fd8557c'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81457738d74b4921bd808e29f219e97d'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_quantity'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81b78ccd38c64f62b3069b854a593fcb'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_feedback'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81d88565d188488aaffa39782c12d8d6'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'seasonal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '81f6bdb5aa5c41d38b562c2d163401e0'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            caption: 'Store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8221f8a0cb2c4b14b2c4f36cca21ef9c'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82b2d33e697d487ebaffcb2fa9c6ca8c'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'new_item'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '82f4779552da4ebcb7fc7165b5f863ba'
                        key: {
                            sys_security_acl: '602c3ab90a1142eb8e97cac4ee42c27c'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8313c9d7b9f04b7f9f1ce0e91dc70cbf'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'standard'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8329d6c422f74fc685eacf93cfe03ac6'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8345b7e1f3cc411ca15e5f62b87715ed'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '83e01a7a9eda4d378966817d6efbb4a4'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '83f6a7c9b4bc46ab942098d2e4ffa942'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution_code'
                            position: '1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8413534116a94c29ae6009a7099ccf87'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'store'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8432a321fa454cbea62f18bafde1d11b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            value: 'awaiting_dm_approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '847052b1bf2340a1a6ef3f77beb1c4ec'
                        key: {
                            sys_ui_action: '0563c70617b64eda89e6cf840a281b65'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84a1dec5bf0941339c0fa2bb86e450c3'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '84d998b93b6c4c25bb4fc74114bc1941'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                            value: 'portal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '84e3ce2b8d504b89bc872efbb2d86e3d'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stockroom'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85605c2bb5994b829366165542d66efa'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '86a2e5a26f0d4f62b7ed50800379ac43'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '86c7302bd49b455bb8bf54af9ee44696'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_response_at'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '86fa9974ee81473c9383a1992c0fd445'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '872efdd8e0c9486f89b02940816b6836'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8762de5a46de481db4a872f3bb71267f'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8776422f7b0945d5ba0f3e1808c704cc'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'fulfilled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '88142174981f47899e9819bf35d28d7b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8851ee811865441c854b49b714ab4a5a'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8873b085880b4ccab452954d23ba10e6'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'supply_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '88864ee4cdcd47538ba3a783ec249889'
                        key: {
                            question: {
                                id: 'f58ca77c0d004469a3e0ebbe08585107'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '889b0f2f927d42a9a1cddc4a3eef09ab'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '88ae0163c93144a39a182d4512b23559'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'completed_on'
                            position: '9'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '88bc8254100f47059434771e51efc5d2'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'wrong_item'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '88fc6ff9404f40819208c624aa481d1b'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8935bb6c1f6540e6be62de9bbabdc832'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inventory_applied'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '895dd470b8ba4e93ac1d9091c8bd6705'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '89ffbecf8e5d46a98023e0d969c9356a'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8a590984651246388532ee57b9f21d55'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active_for_ordering'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8aa26fe2dc1846db9a2752f1fad47aae'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8aad3c89162c4e9db8056eef4e10d327'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'completed_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cbc8145a87049e6820d6e87036c2029'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'reopen_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cfc6a2ab1304e86b383135037a0ab81'
                        key: {
                            document_key: 'ca2d8adb6d6f441e8d27ffeeae287e60'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8d0d2798a7d748c0a3492ad787582e02'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d5e7ba98a4c4453b7a8891d92cdae34'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'source_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d674478c71a48acb1a080e77259fe38'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_status'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d6fd887d9fd4b71a379d9fa5d160667'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d827da928ff49debcb8a21d71c594a0'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                            value: 'moderate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d9dc5d494ee431fad249860cf8afc2c'
                        key: {
                            sys_security_acl: 'db17cb5873194c2f8940b63a6da567e7'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8d9de9fa447144e99f6df01e43d7543b'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8da5096b34c24dbe8c050bb86d80dde9'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'unit_of_measure'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e1a7f965c3e49e0a71bc9e7452d2a1b'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e2737d4d6d049c4b5e74175e4f4bc71'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_rating'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e4794a4a5884c3ab3078768c0d80def'
                        key: {
                            sys_security_acl: '878c0afed4644e4980be509e84c39a77'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e81c879da10492b8c03a4a1ded2cb30'
                        key: {
                            sys_security_acl: 'a2198a544c7f4a849e85895d1d2fa543'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e9990f0d9324c73830efc7dd2022701'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'on_hand_snapshot'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8ec8c98ad28542ccb334453013b60b2d'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8f24e0a5e15647c28060370fcd92e16b'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8f50de95dc5d48638f20f0a07ffda64b'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f66ae5a77654f17841712f8467feabe'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supplier_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fa568fe367344c898d03d23bb0b8b92'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9059939cb46a49d8b0687b6b3fa7a9fc'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '90a5116829fb4b19a9cc2d65cd614999'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '910959cc4da04868a36a57bc436f28c1'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '912cd8ef269b469c8e22643d94a63f7f'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '9172400d1e6544beb4cc06e92eba28c5'
                        key: {
                            sys_ui_action: 'bffe42ccbf554c43bfb2d1f898d20a91'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91dd3ed7443b4a77bcc9fb82968bce96'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9298489d181d4016a4730fc0ced137f9'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'completed_on'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '92a2b4b455314b938469939d21bdf7c4'
                        key: {
                            question: {
                                id: 'f58ca77c0d004469a3e0ebbe08585107'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '92cc1680a4ec477bb40fb813327d2de7'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '92f62cf52c264b92ac5690e0940a3b0a'
                        key: {
                            name: 'x_sln_store_suppli_store'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92f9e1c94c134c32814bc1f8bc0f3273'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9389a7dcf5f8453886bc56a9de486c61'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'originating_supplier'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '93917e8c37a841129bfdbfd56495a808'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'received_quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93d3e36ec0c94c78a21ca3b7693ff192'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            value: 'licensed_kiosk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9426818be43140b884360926b0ca2a66'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'unit_of_measure'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9452c0d3425242cab6662f7d57ca75e1'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '11'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '94b98cbab35a4cf6ad37bc121a150a5c'
                        key: {
                            question: {
                                id: '350ab80cd3b7472ba5f8e02a094e068c'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'availability'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '95057cb27df94d4a8be21070a6d7a6ef'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_store_supply_model'
                            col_name_string: 'active_for_ordering,store_category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '954394a16f424226809463e0fdaa2d6a'
                        key: {
                            sys_security_acl: '1d7d1c1bae3e4416aa76d3deac10e0fe'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9554cca8a01440b6a335c91404b244a0'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '95b73a0c78e04e6fbb03166f6eb25166'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reopen_count'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95ff1e15b12245c0be34c79e2d83f902'
                        key: {
                            sys_security_acl: 'e95421d2df1f407e88a3b046a35dbce4'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '96274efd5f7f4bfdab484e5a7bfb9b4e'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_case'
                            col_name_string: 'store,supply_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '968c53ff4ef240bf8b5ab2f43b1081bc'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '969dc93dceeb4cb8ab25c27addd9ac31'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '974bfe24a68f454397155a94b6dd6ce7'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '97637f93882e490d8245ae8255acb852'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'stockroom'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9787dca198b3413e90b6e593a1695a8e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'manufacturer'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97d9edd0921742a2ad5d27909a453b95'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '98134e75c14a403cb466065ab1629084'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '98ed7ce01e6049539dfe3900379e4132'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '994d728389334a319c7309dd9776a633'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'released_on'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '99640a03a0ae4706aec69a2c63cbc7f6'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '99a1f7ac517c49b1b077e81d2fae4fd6'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '99ae67ffc7f74c308cb80775caecc305'
                        key: {
                            document_key: '320aa6620b8d40bda3678998a6f46f4a'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99f3dee8545342669505da1fb3edac5c'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a174d43135143f5a9507334597edc30'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'demo_data'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9a5f6fbe9d434a92a7615a26fa25a68f'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a89f4928b4840ae8e328103c76b605d'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9a9290dbbb1a4023abaff96ed8dd1778'
                        key: {
                            sys_security_acl: 'e95421d2df1f407e88a3b046a35dbce4'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9af3314f3c0f47009645d2dac3c00ecd'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '9b772adc1ccc46609f9a5aa3d1de435b'
                        key: {
                            sys_ui_action: '2b2626e5016b45698aa6475d54b49b76'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b852f899e32474692de53f1a01a1b4d'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9b9ad89cee1d492cba8c174f39f76a52'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'quantity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9bbf9f9f0f40449fbf274c7bbd5bba74'
                        key: {
                            sys_security_acl: '99e45f79e73640828d72af0b0dd907e1'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c7bd14b30bf48bdb82609f178723b9e'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cd72b1235ae4a36979e3059a0e7d5f4'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'primary_contact'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9cff54fe00c544df8b5c7a77dffe29f6'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d04c3438dd8417097529f861fadae9d'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_justification'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9d25b9994f3245349d2152201fbf0a32'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: '49b73264d0344e57864412eccdb68188'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d4653c66c034abcb223d47e462dfb65'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d863b7c64ed45f5b97624619f0bdae3'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'routed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '9db2ba8ab1e9476e90cd1e83c9969057'
                        key: {
                            dashboard: '9386a211ada04081b700657f3b542909'
                            experience: 'f1cb3bb464254d179a0c2c3060ace9df'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9db3cacb190e4270b586447b6e648879'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'line_state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e548a4674154ec795d5cd386cb314db'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e5ce48fa16341a8b870527d513d4bf1'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            value: 'cafe'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a06111f0fa35402b9504219132452caf'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a0842eb262704828b81e142fdc1ad7d4'
                        key: {
                            sys_security_acl: '602c3ab90a1142eb8e97cac4ee42c27c'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a0a1effb987240f6ae3ed78aba11ab94'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalation_reasons'
                            position: '8'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'subtype'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a0f8d0eb8a8441bcb6783876474bdbfe'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'district_manager'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1005bbea0f84f9897e455a27564d9dc'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a102a4423d46489ca6ef82b5487bd45f'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_rating'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1c805daf0244a1a992e00dba7e3adb3'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'released'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a201bf794e704a598b8c49d310eaa704'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a256f9a912ce4be0ac30348878c1057f'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2a341b205da4a31b10b88b2b699aa10'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'primary_contact'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a2b04d8fd5f44fddb4d5e8bd0db1a747'
                        key: {
                            sys_ui_action: '533239dfd12e4f719676df9bf92b9741'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a2c8fa65a25b40faa2c40c04c9e478fe'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalation_reasons'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a31b237816e744abaef025ee5d7109a6'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a372acfcefa747b99fa6fe3ec1f82bf3'
                        key: {
                            document_key: '49b73264d0344e57864412eccdb68188'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a3eab355632049e8a3c79f162b9a29ee'
                        key: {
                            question: {
                                id: 'c281b3f815594fc5b6d104fcd6f6021e'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a47dc03aec6b4365aac12fb106b6e799'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a492f65d50c94f6c9041e5d1b328291b'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution_notes'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a4edb67550574784ac0d70765d889c45'
                        key: {
                            sys_security_acl: '8cdbdec5d11b47b394dc3778a1e5263b'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a4f42fa5b84e45d38aa518bf11c859f2'
                        key: {
                            sys_security_acl: '9b7182dfc70e43d1b9e464af633c611b'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a4f887dc42224d139c656e3b9f9c264a'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4ff6ecedfa04d59b53b96c1d1e253fc'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a50c7ee9da2940acb25fe201135c1521'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a534fa817f1d47bd9ac046d2956baf0c'
                        key: {
                            sys_security_acl: '8d993b8ee3bc47a5a3edd0fac14fb002'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5384c36204d4f628a69f6fd833c7f68'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a5666bdf20b24d79b86c03e15156acda'
                        key: {
                            sys_ui_form: {
                                id: '45aee82a489d419b98010530945220c2'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6e867ed709f421c9ce52c2057291852'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'supplier_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a70f192e1ad74b3bb569bacd3a232f9c'
                        key: {
                            sys_security_acl: '325caaa0618d4f6b8e4004a189877890'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a79052733689413b9c59fde0d1a1e716'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7a72a31aebe436eaf3266da07a288c2'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a88295d5412840fbad143b4ad9989665'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a890ab664db44283a5adc3e4042056fc'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'ingredients'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a8d5b161d15f4b67a9ccac6942beeded'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8e82defec7a4550b28902654872ab51'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'out_of_stock'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a8fd124c778b4f5c84f67f731e2d5da0'
                        key: {
                            sys_security_acl: '7eb3a3ecdb61423fb2291f83beee9f65'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a97661b29a8643fe951f77d2cc2d31d6'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_model'
                            position: '6'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a9ff2c4309854c85b9dbf760ffa2ee27'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'new_store_remodel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa1da173935a461faa5311b3c603f406'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aadf42cc2d754d86a864501cfc9dd614'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'source_key'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ab23f8f0ff8645a7823c0ccb0324d131'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab2aa629999d481faad48d575e4251fc'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abb333da3773404ebfc0db8422809fdd'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'abdb8f26ba40490ca56c28c2f70bd720'
                        key: {
                            sys_ui_form: {
                                id: '45aee82a489d419b98010530945220c2'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abff715efce2474bab4dde56648a808e'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'defective'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ac54b70c12e6458dbd40452a8f18159d'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution_notes'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ac6a4e7051254eeabc1b5c9976dc1699'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ac84abb62fdf4c12a7e6bb40e8158864'
                        key: {
                            sys_ui_action: '24643f79e7f64488998b288a62884cc8'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acec992e89c7488aaff0b24906a24a85'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'calendar_month'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad688d4556d5432697856daad8fa55ad'
                        key: {
                            sys_security_acl: '7c2e367e2dcc4221861c29d2f51a5abc'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ad8477e114d54566bd10142838b97ad7'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad99945f0bdf44a89226b440cb15cb28'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                            value: 'not_requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ada0f4c246a9415c99ca84f356d78533'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adc311b803d64c22adb693682db7e0b8'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae50f081f77c42fba761f4bbeb97872c'
                        key: {
                            sys_security_acl: 'f8aef6fcb29347bcac7183cca21d1127'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae57992682514089a09aba366b4dba38'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'primary_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ae6b1016f6d14a0fa5f884e8c208d034'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'district'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae7dbe8f2ba046fabf1feb78a2078229'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'escalated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aea2cf231a084917b0a68fe5e6ae1b12'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'detected_at'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'aea9c371f1c54880b38a7ce81c7d4829'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'manufacturer'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'aeae714772274f1ab90fbf0e1be0c391'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'display_name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'af45676b67bc4d799bf087d33b5f7d23'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'afd373fab201450fa9a668c81c95ef19'
                        key: {
                            category: 'x_sln_store_suppli_supply_request'
                            prefix: 'SSR'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'afd8a96b181940b3a0c14189d456e3d5'
                        key: {
                            sys_security_acl: 'e44c4fff8671406f940fbbdb2c7cecee'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'afff9ca680d94e1a814062d2d2e7fef1'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalated'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b0b262e2090948a5a2ed3f0c1df944bc'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_on'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b0bc24c081cb47e18387f375939aee23'
                        key: {
                            sys_security_acl: 'b1b32a9ef80a46a2836d2eaaf9feae32'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0e6e9ceb990430aaac725e556a03cd9'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_notes'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b13b4a0812fa49f9bc922dda77c7700a'
                        key: {
                            sys_ui_action: '8c6264d6c7f94dbc85b1faaaace99796'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b19e407301584f35ab9f06afc878252c'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                            value: 'very_high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1cc620f216a43e6aa5833d4b7392726'
                        key: {
                            sys_security_acl: 'b1b32a9ef80a46a2836d2eaaf9feae32'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b2dbb3307f1841f68a05fbf5865b419b'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b33b974fb6794046b0aa998c6c5eab6b'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b377ced3208e433995eaa47ac81de29e'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_by'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b377eb9a681d4245be1872c388bf15b8'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'wrong_quantity'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b409879ed04c4eac8241bc22c71a697d'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b40c08b982a74a5eb914683e8f8da86a'
                        key: {
                            sys_ui_action: 'bffe42ccbf554c43bfb2d1f898d20a91'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b4b1081006b14df89656b0534a6585cf'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_store_supplier'
                            col_name_string: 'store,supplier_account'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b613e92d84634affad5858905c5c0c7d'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6302a1e5ebb4487b327a4541d872828'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6acacc2b6724fbab0712dfe5775ba8c'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6f09af03a7c4e19a74fe09a33695490'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            value: 'delivery'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b723cf0a68c24e6897ececcef9ec1388'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b72a4ae083c94932ab054d517b29052b'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'stockroom'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7c70716da82421da38d8ff9d4594b72'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_feedback'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7ee33ff99604056b8d96714994edb6f'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supplier_contact'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b88248e863324f1aa8aa2f13bb06f882'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'needed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b8c2bc27dc9e4de4828614920da7b063'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8f796d9d4854451bd9b9185c6d12c4b'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b90c3c8d47764827ac0a0601b63484b4'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b91a0b116e9c4eebab54ed248ac411de'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            value: 'awaiting_stock'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b9218e549a5d4833a453ceffb1339037'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b936d65230324395a831909fde3cd4ab'
                        key: {
                            document_key: '320aa6620b8d40bda3678998a6f46f4a'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b988abec785e4b64bde44752f27bd0bc'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'first_response_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b9c32b022c45462bab071f7bb97a9650'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba74af9ea7fd474ca9be3843332964f5'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'released_on'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ba7d69c3858e4b319348a7336a9b5c72'
                        key: {
                            question: {
                                id: 'f58ca77c0d004469a3e0ebbe08585107'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bad0f31d81ac410fbda29f6945c0ed5b'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'needed_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb0846ad81a54e8fa7383acda607ba27'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            value: 'awaiting_store'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb3dbb22776c4556bea26bfacbdcf0cd'
                        key: {
                            sys_security_acl: '5a198834059146388e16473242107176'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'bb43cd3c1c8149d694dd15339544301f'
                        key: {
                            sys_ui_action: '0563c70617b64eda89e6cf840a281b65'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bb89431875be4e4db92a180c16f061dc'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbdd6a923b724a89bbb017f71b1d4f07'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'supplier_account'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bc1b347e6d9244ef99d01dd70dd6270d'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc263d01008f41129007c66c7547f162'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc971079f6e942ab8474e5cf94e60fdd'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bd0d7d38de4a4e369ca9c0a80edbac93'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bd15b23c2c6446d8b7c6303358ab9621'
                        key: {
                            sys_security_acl: '506d444910524903afea96d382b309d5'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd20636a75ab4e5e81b1413b8a436a41'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                            value: 'requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bd65e1f7b16849b197a5f7ab2c80d4ca'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'escalated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd79a3b75b784c9cad78cab222b46604'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            value: 'availability'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd9a9cc7025d4239b1be45f5e06bb73a'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                            value: 'stale_update'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bdab9b5981bc44399ee3d4e96da62c97'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_case_escalation'
                            col_name_string: 'parent_case,reason'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be787eb0a3fb4d96bffb8f418aff80fb'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store_number'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'beb93be10d104f39aa12aa161d5efde2'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf000f1816964396a140f2646ee826ae'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: 'c5273ad1234147e99414a42385449f23'
                                key: {
                                    name: 'x_sln_store_suppli.store_associate'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf0e315c166f495b913e1ca675989bf8'
                        key: {
                            document_key: '035670b9aa9344abbfae29e6d136e6dd'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bf50251620584e6e8df883de89e7a21a'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf9bf2227b1841c0af5b967844479135'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bfbdb517954f422ea157d53aa78a8cdb'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'beverage_service'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c019400162a749b793e7ab1710b81cdb'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'supply_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c0398b0432b14c7590fb029d0482c71c'
                        key: {
                            sys_ui_action: '96a3a38f03824cb68b945378abbce916'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c0afe11432c54fc1ad304e137e199b58'
                        key: {
                            sys_security_acl: '8d993b8ee3bc47a5a3edd0fac14fb002'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c111756ce82843538c9594d9d4e121be'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'triggered_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c159ef68702a44c1882501c3d9faa98d'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c1bf1c6a67db49019b5290c73021e3a3'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'shortDescription'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c20aa31b66294121b1ef681b00bde19c'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'neededBy'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c24cef5d736f46638cc1cb08ab98d94b'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c270648a311149d388189b0cab27ee21'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                            value: 'urgent'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c271cb0d165a4a4488b0f024673dbd24'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'primary_contact'
                            position: '7'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c281b3f815594fc5b6d104fcd6f6021e'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'priority'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'c2a422699ca849e5b921b7227c263e17'
                        key: {
                            dashboard: '9386a211ada04081b700657f3b542909'
                            dashboard_tab: '54e640252cb34c1d9023996358842b2a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2ced24e808b4cb28c8193b2501b840b'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'supply_model'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c301d9620d0e4d87b71527d426bbde23'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c3333d0bffaf4ce1a36ba976af01c73c'
                        key: {
                            sys_ui_form: {
                                id: '2224716bc209456b80f88eeb58c65661'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c3990bc4db3647ae989c67226deec5c2'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3a0bd6953374075a0673de0d010b05d'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'category'
                            value: 'planned_demand'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c41ca1c9c5ce445187b75c9641f8199c'
                        key: {
                            sys_ui_action: '77e8d38c390d40568701a5c1bac29e22'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c49f9d007f8d42e2af65bef9b84deada'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'on_hand_snapshot'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'c4ec60a2a3d24d9aa21c6cf5ec3baed5'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'expired_unsafe'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c4f4f2aa6126433896a13e9ef8031c06'
                        key: {
                            sys_security_acl: '486102463000437fa7f09a08ad145bcc'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c5273ad1234147e99414a42385449f23'
                        key: {
                            name: 'x_sln_store_suppli.store_associate'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c55abf10244148e4bd6b1d8094408e65'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c5784675006e4439b125d693fa3efef5'
                        key: {
                            sys_ui_action: '24643f79e7f64488998b288a62884cc8'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c60ea9ea90554e1e89a8a7511453b9e4'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c629c25664794931bfe50a9e8135b2ac'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c69ad0675dde49baa79b0cdb1f5bddb2'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'c6ee03a7a9fa40f9bac9e78ea66ead43'
                        key: {
                            category: 'x_sln_store_suppli_supply_issue'
                            prefix: 'SSI'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c6ee2c9fb38f4b41a68c244b337d34f2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c79a5f7c42494a149c61b41687daa6d0'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'task_state'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c7d545a6ef8e4924a985b8f97eed2eec'
                        key: {
                            sys_ui_form: {
                                id: 'cd5f6897ad4843ad9640d5d98f7da121'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8ca1b8f8748471a9e92e36f420c71b4'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c8fbddf2f35848b794947e158a5ed45f'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9910515eb4c4d218e149f7406cb180f'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'received_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9d8b29fcbba40989557d53aaaa34654'
                        key: {
                            sys_security_acl: '602c3ab90a1142eb8e97cac4ee42c27c'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c9de908115484e9b977f0f1f18cadb39'
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca695c8086e24b749b6280defdaa5b9b'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'wrong_item'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca8134c2b2f1456d8f30c6c1bf4dd16b'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cad630531f724c5587dc3e76da542260'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'primary_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb45cf8016174f6d939b70583ee43093'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cb746cbe29be49cf867650f6dde6b81c'
                        key: {
                            list_id: {
                                id: '872efdd8e0c9486f89b02940816b6836'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_quantity'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'cb86c4808f8041db952d108fa142a28f'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            caption: 'Request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb9479ecc9cd4adea9152cbe1693bca0'
                        key: {
                            document_key: '035670b9aa9344abbfae29e6d136e6dd'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cc1759fd7a024903b11e9d0e5bb1f1c3'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cc1986acf6e148538e5d0b552bbcbe50'
                        key: {
                            sys_security_acl: 'a6b323f0f69a42c1b83dded6e78ae8c8'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc571f62c89043d791cf3731137b5d59'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc57906d21d24d64917f2f319dff918b'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd5d059b18e34869bf0b8e7e1f124cbc'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'discontinued'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cd5f6897ad4843ad9640d5d98f7da121'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cdd86142c23343df94d253a8f7adfbde'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cde760c58740463da228bd61d6465ced'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'released'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ce59f3a4c5d1455498d92e02477d8a9d'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cec311ff8361498db9ca6d9ab79e998f'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'district'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cf0b10fd19d84a7098325f9c56bbd644'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalation_reasons'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf0e35934ec14783869e74e0861e039d'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cf92956a3e6b4cdb8b6f6f8f96895cf5'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'cfa4f55187784d4bbb4ceedbc5384f8b'
                        key: {
                            sc_cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            sc_catalog: '9c541830c1e842c3a8c176469696e147'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cfe0f9ac1354465dbbf07961f1389282'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: 'ca2d8adb6d6f441e8d27ffeeae287e60'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd005676262b2411ba291d3d452f2f2d6'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0b71e8a4e1b492884f4c6efa639aac9'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd0d3c17c86374134861ef9214c88148c'
                        key: {
                            sys_security_acl: '0dcc89ed7708465f8dfa2a11c31b5d7b'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd0d3c51a8e5c4d4ba2389ce5f618666e'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'backordered'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd10bbdeb6afd46a4820a7f6742a9b4f4'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd15c5859eb934521a46132ff2ea84487'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd18038bfbce147c1b54d7d196ee8ef0d'
                        key: {
                            sys_security_acl: '506d444910524903afea96d382b309d5'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd264989e634844f2ba89d48665007f9e'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'stockroom'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd28935491c91444a9116031b06742ad6'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'triggered_by'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd29e137931f54b3cbc1012d41456b6f4'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2adf1ec861749eea05904adaac78763'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                            value: 'email'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2f0b1b86f6c42c59c180275ab73ebc6'
                        key: {
                            sys_security_acl: '2378daa7956543ee8957913661e008f1'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2fdeda884e14e20bb1794a54eaa419b'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'subtype'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd31a91b97e5445a692d39f628f9694c6'
                        key: {
                            sys_security_acl: '7eb3a3ecdb61423fb2291f83beee9f65'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd3d05fc4d3584e28b15bb8a66affc18f'
                        key: {
                            role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                            contains: {
                                id: '3726de5b9be34387946ec2b1fe8a7bf4'
                                key: {
                                    name: 'sn_customerservice_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd3e2edc4e35a47e5b16378a8b1f5dc5e'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_model'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd3ff1ec0dc3945a98e69198a21bc5ee4'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'store'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd438a38dd45f4011bd5480865989c1b3'
                        key: {
                            sys_security_acl: '325caaa0618d4f6b8e4004a189877890'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4548408bdba4ca29e58638ea8dd36d0'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd480fdd4eb2b4ae293c287a4b56ac0d0'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'fulfilled_quantity'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd4add6b8e7af4c1f9989daf7062682ae'
                        key: {
                            sys_ui_action: '24643f79e7f64488998b288a62884cc8'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd513b4af35a14427b2ad0a4de6fc5346'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                            value: '5'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd59b0f5308e44ff3a67cb3180f98cb90'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'received_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd5e318febc8f496a87a33283c774eb36'
                        key: {
                            sys_security_acl: '0dcc89ed7708465f8dfa2a11c31b5d7b'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd638aee1c840472d97b949e14df561f2'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'assessment_instance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd687763465cb4715ab9dbc977e7a6f92'
                        key: {
                            name: 'x_sln_store_suppli_supply_receipt'
                            element: 'supplier_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd69f5834556a4d328ee80dd808043eeb'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6d87b1829dd412dbf523c65f8ff9851'
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd7b96f01195048dd82f05d44e8fdb9f8'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_impact'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7b9cde9813d4fe285fc99b74c9e314d'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'supplier_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd8ad8d6d31e9466990810256c5eb9455'
                        key: {
                            sys_security_acl: '2427e24489da495f853366abf297fc00'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8c3016b1fa048588a57137377a0476b'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd8dbef20c32443b7b6689eedf4d60bec'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd98e1dea73b14681b15939b6437f5296'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'supplier_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd99412c9e8234ecd8bb1ae88bbe77841'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'assigned_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da1a5df479694e5bab793ff3bc754045'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'supply_line'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'da1aaa9143c642dea2850c343d51d927'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'supplyModel'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dacdbfe52262427fb1378809f93d79af'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_customer_update'
                            position: '7'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dad9c054684f4c539c565f33fe0a8054'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db051668b2cb483db7625d8393efc868'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'db28a70e691e4e77b546ecfc6b8f96ac'
                        key: {
                            sys_security_acl: '0dcc89ed7708465f8dfa2a11c31b5d7b'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'dba547ebb01d4f468249be8a04767e6d'
                        key: {
                            sys_ui_form: {
                                id: '9cff54fe00c544df8b5c7a77dffe29f6'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbd44dc538d64a64a4c578a20fc18f2a'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc17b6337170428aa6565c90ffc79469'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'assessment_instance'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dc7591bae860455c9e2ea80807012776'
                        key: {
                            document_key: '606591803e484bbe819bc4b02a21fba7'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'dcaae8518d1b4ef48509d7d5bea2cc51'
                        key: {
                            question: {
                                id: '7d79d22b967342a6ba1cbc49b27ab75e'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'discontinued'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dcfeb071b03d432ca67ab12fbfe9a49e'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'dd0618fda0ab4a4c9b742f97f0371e90'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd6ab8c05f014f4a8c3d27ee44a138f8'
                        key: {
                            sys_security_acl: 'ad22eadc853146a79492ff374666e850'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd72547336664d21b4559ddee92def95'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            value: 'fulfilled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd899bdb02634506b7e7e7b9a1ca5d16'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'de5b6701abce4ede8c8ada400e878bc4'
                        key: {
                            sys_security_acl: '30888dd43ac94366be9166a3f0bd83c8'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de830c2cfae84b8490274c426ca9aa5e'
                        key: {
                            name: 'x_sln_store_suppli_task_line'
                            element: 'supplier_task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de9028ffccb0477f914977cbfd9efc6e'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'subtype'
                            value: 'general'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de9329c91b83439aaa44d441573fcf15'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dec20dc040cf47d2b64d98f799dd879d'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'released_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dedc2ca37ce2416ca1868a11345c03ac'
                        key: {
                            document_key: '22341d6a28c94e35af59be7686411d7e'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dedcf114a6b549f18fa6e41ec3ac15e1'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'details'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dfef185afb6e495b9c5571a50b1fe675'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'cmdb_model_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e009f92df4df4be9ba867dbf354580e5'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'active_for_ordering'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e01448b104624446b6c453babe085298'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'market'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e0596868dde34f0cb9f0baf8acd98947'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_model'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e0dba0ffe5a041af99f5722874e104e7'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0f5a47460f04bfc9f1678603b55b46d'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'service_rating'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                        key: {
                            name: 'x_sln_store_suppli.admin'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e1d08fe28dbe48d3934953d7b447968f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e21d22d83dca48d78f80661576182775'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            caption: 'Store Supply Model'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e26785f0cfea4bbbacad32f1db2cf645'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store_format'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            caption: 'Resolution and Escalation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e32f5446899e409d8fc2cce3cabfe9be'
                        key: {
                            name: 'x_sln_store_suppli_supplier_task'
                            element: 'demo_data'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e35330eefa144c069f7a704d62ec35ac'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e36436b1f1694da580e0db51a9575ed8'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store_category'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e38fbaa4eccc4d67914b7ee22c186245'
                        key: {
                            list_id: {
                                id: '801194e7fb584601b140d7fd495729ca'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_updated_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3f1282bcca048c5a76fc93728ab331e'
                        key: {
                            sys_security_acl: 'f1f743077587434da489dc5ef94d853a'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e44b41cc261e40619f5eab0f36ce9668'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'new_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4684e375968445dbe7a54803ba11091'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'store'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e47e0d19e50148ee942c33efc5afa1e3'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'detected_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e48d161364c340bd9fd59304e0d37a8f'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                            element: 'lead_time_days'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e4df177a93514d29b36a9223eb240b5f'
                        key: {
                            sys_ui_section: {
                                id: '8134aba5f3a143f686c5c5973f9f15cd'
                                key: {
                                    name: 'x_sln_store_suppli_supply_line'
                                    caption: 'Supply Line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supplier_account'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e54aec92587c43f5871dc84f9385f22e'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'model_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e5a42e9ed9b04f82ba904d99ad3362d2'
                        key: {
                            role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                            contains: {
                                id: '3a98f530607b4fdc9b0a73f7baa7e41e'
                                key: {
                                    name: 'report_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5a697264df54296acbff7524b9b73c1'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'district'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e60e1c7f78a7400c91267df41c745226'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e620d8fa5cd34f9f8d21c64d2cf8c7a5'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'one_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e65557410a8d4e1a85e8ecd0e59059d7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active_for_ordering'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e670d6e9325140eb991ef3937c1f4399'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e67d3d7962524b109643a7c051dc4443'
                        key: {
                            list_id: {
                                id: 'b33b974fb6794046b0aa998c6c5eab6b'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supplier_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e73aff64177b42b9a776f67069f4f9db'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e76b9ca5416b4bdba71e9bb47aba74ac'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cmdb_model_category'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e76fbafa15534fedb8d1c59b05fdcc8b'
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'display_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7bf95865e8b4f889f8eaafb01e7f678'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'category'
                            value: 'accuracy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e7dfeff7dc104833a4b0fd7c91eaf0b0'
                        key: {
                            field: 'script'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            id: '606591803e484bbe819bc4b02a21fba7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8424f34a1cc4b36bac5014a0a089f00'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8462754fae345a3ad3aaaf232f87f6a'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e87951d4f66e4b43bcd7d714fe28ce72'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e87bde6a07a545879831670fc4974bb9'
                        key: {
                            sys_security_acl: '99e45f79e73640828d72af0b0dd907e1'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8833db7351644da8ffd224eabd12c1a'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'resolution_code'
                            value: 'no_action'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8a22311c0d94a1bb29c2604e67d26fb'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e90f46ca4c55420da4b7b545b42e222b'
                        key: {
                            sys_security_acl: 'e94eda5342bc4b5bb9617a83ef2afabe'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9ff881392554f6aa87cb179ea040911'
                        key: {
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'quantity'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ea0c194d79e34a0ca6e6f9a9346d8165'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'intake_channel'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea292a7977884f9f9184cbdef88b14a2'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ea493d895b5944feb4b620f81d88adee'
                        key: {
                            sys_ui_action: 'ea0e25851e6c43c7b6dc96093d338ede'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea8a9005d0a64ea09f5617caba150204'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eae40cf5ca4149af8892879f78a30b48'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            value: 'work_in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb004ca1c0bb455aa69da95130af25c6'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ec2f4660e7814d22b6f79f46f3a28f51'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'promotion_event'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ed791b179db143519e81a6b0b0e1961c'
                        key: {
                            sys_security_acl: '180be0a8520b4027b829ef2edbfcef02'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed9fb343eeb4436583e8111e5d443021'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef2836781df843e3a16e9d68edc9953b'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            element: 'store_category'
                            value: 'packaging'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef3c36aa885040a384785e4646352a56'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'triggered_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ef765364266d4c94b3e8ce7e04410fde'
                        key: {
                            cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                            variable_set: 'NULL'
                            name: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ef878f94d9a14b96a4b67627168a7385'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalated'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'efb779bd688b43d486fa21abb6e99fab'
                        key: {
                            sys_ui_section: {
                                id: '09275dc464bf427294aa6f7cffe127e3'
                                key: {
                                    name: 'x_sln_store_suppli_supplier_task'
                                    caption: 'Supplier Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'completion_summary'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f0460d491538481e85af028e2b1655c5'
                        key: {
                            list_id: {
                                id: '143a3a2b3c1f4fbd8622f1265d3ed49a'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f04f265a745945a5b9d8379aacd91cac'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f083a4d42a3f47498cddd62191527ee9'
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f0c3aba9faee42e6800f85cacd936091'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '38a2834cbe744e2988fedff5e57fbad3'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_response_at'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1f27e35fbf94f8b9504db5a3859c72c'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'supply_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f29b6e1f3b7949c790f02c1de67f21c4'
                        key: {
                            name: 'x_sln_store_suppli_survey_ledger'
                            element: 'recipient'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2aa21b8b89d4e9eac33df3b1aafaba2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81f6bdb5aa5c41d38b562c2d163401e0'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    caption: 'Store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f36fceb6221b4528812aa5534768c32f'
                        key: {
                            sys_security_acl: 'e44c4fff8671406f940fbbdb2c7cecee'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f375135785674b4eba60ebcd9127ccf9'
                        key: {
                            name: 'x_sln_store_suppli_supply_supplier'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f3fc900b702d4e048abd58b7cd09c7b5'
                        key: {
                            sys_security_acl: '7943be86ddd14709a5e48bde5595859b'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f4bb439618e6466faae6a123715615d7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e2f39fc3bdde41c2a6ef73c494a369b7'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Resolution and Escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_customer_update'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f51684bbc90e475da2f856b8fa87edaf'
                        key: {
                            list_id: {
                                id: 'a201bf794e704a598b8c49d310eaa704'
                                key: {
                                    name: 'x_sln_store_suppli_store'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'f531f09700f04ebe899229e322ed465c'
                        key: {
                            role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                            contains: {
                                id: '46367772d0754e6cbf09d5c7fa7ce2db'
                                key: {
                                    name: 'sn_customerservice.csm_workspace_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f58ca77c0d004469a3e0ebbe08585107'
                        key: {
                            cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                            variable_set: 'NULL'
                            name: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5cabc5b03294e11b9e4505110623121'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                            value: 'manual'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5fd20268a3c41e6ad2ce9c9a9a7f667'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'volume_band'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f6190682b4c8450fb853bb5cfdfacdda'
                        key: {
                            list_id: {
                                id: 'feb47636dff747f29b60aee0e5d00505'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6671bf0dcc44d839d4aa202c5d95cdd'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'hold_reason'
                            value: 'awaiting_supplier'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f6e903b4f1894b8c9f26cc5badf3e222'
                        key: {
                            sys_ui_form: {
                                id: '25970479075d42928ccbb1ab003d278c'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '67d640729dfa4130be21fb6296d58566'
                                key: {
                                    name: 'x_sln_store_suppli_supply_receipt'
                                    caption: 'Receipt'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f6ee229c3a2e457da1e66b5afdfceacb'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f7fc11c7d8c247a2b1c0790344f764e7'
                        key: {
                            sys_ui_action: '0563c70617b64eda89e6cf840a281b65'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f8736e787df444a1b81107820011ffca'
                        key: {
                            sys_ui_section: {
                                id: 'cb86c4808f8041db952d108fa142a28f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'hold_reason'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8ae219740e644e393a7c17f2a662825'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'received_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8fad92d987e44de8f4a88036afb333e'
                        key: {
                            name: 'x_sln_store_suppli_store'
                            element: 'store_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f9769f1996804329ac73839d9ab9cf24'
                        key: {
                            list_id: {
                                id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                                key: {
                                    name: 'x_sln_store_suppli_case_escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9b48bf433a84b5b9ed187c1f82e10cc'
                        key: {
                            name: 'x_sln_store_suppli_supply_line'
                            element: 'line_state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f9dbdedd950442aa835dc963bbca0925'
                        key: {
                            sys_ui_section: {
                                id: '63d323d9af864dbea77c6e720760c49e'
                                key: {
                                    name: 'x_sln_store_suppli_supply_issue'
                                    caption: 'Issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'hold_reason'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9fd62fccf404727b06358de4cd0d7bc'
                        key: {
                            name: 'x_sln_store_suppli_supply_issue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'fa3157ecd8e44bef9934af0aaf4f9aa6'
                        key: {
                            category: 'x_sln_store_suppli_supplier_task'
                            prefix: 'SST'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa6bf7445593431b8577de2b40d0ac64'
                        key: {
                            sys_security_acl: '949c11a49f12490fa33779205c50c372'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa6c9e7380b342c890593efb720b3e69'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa8f69f59c4a470fa3035fa7141009e3'
                        key: {
                            name: 'x_sln_store_suppli_store_member'
                            element: 'member_type'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'fad0892d2e6543b78ebaecf6fe9c83b4'
                        key: {
                            logical_table_name: 'x_sln_store_suppli_supply_case'
                            col_name_string: 'escalated,supply_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb0dac78c37843c29b601788d72f1ab1'
                        key: {
                            name: 'x_sln_store_suppli_supply_request'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb31b6e7628641919688cf8cf18252b4'
                        key: {
                            sys_security_acl: '1d7d1c1bae3e4416aa76d3deac10e0fe'
                            sys_user_role: {
                                id: 'e132f63dbefa4c6186bf051e3b37d0eb'
                                key: {
                                    name: 'x_sln_store_suppli.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fb7424ca6c994970bcfdd5c384f8325f'
                        key: {
                            name: 'x_sln_store_suppli_supply_case'
                            element: 'approval_status'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'fb8c88a6520e4a0c82f3ee6edd479e01'
                        key: {
                            role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                            contains: {
                                id: '861ee0f80c0d4259b5999acb1e6db4c1'
                                key: {
                                    name: 'model_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb9db49f64624b1ab33da27ca928c24e'
                        key: {
                            sys_security_acl: 'b1b32a9ef80a46a2836d2eaaf9feae32'
                            sys_user_role: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'fbfd9e5666b840b194344fccd13c97c7'
                        key: {
                            question: {
                                id: 'a0bf9cac45484db0b40fe203e2c3bc00'
                                key: {
                                    cat_item: 'c9a7076278194d71a494e4325fbec4bf'
                                    variable_set: 'NULL'
                                    name: 'subtype'
                                }
                            }
                            value: 'replacement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc39afa3aad44219be109d7fd1d865a1'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'supplier_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fc43c220bf274b57a01cae3d4cfbb544'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'e21d22d83dca48d78f80661576182775'
                                key: {
                                    name: 'x_sln_store_suppli_store_supply_model'
                                    caption: 'Store Supply Model'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cmdb_model_category'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fcb89147482f4c8486976120a6a3a447'
                        key: {
                            list_id: {
                                id: 'b283acf4d9f74a52bf8b18b8685cc17f'
                                key: {
                                    name: 'x_sln_store_suppli_case_escalation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'notification_sent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fcd526dabd294415a9667234cb52302f'
                        key: {
                            name: 'x_sln_store_suppli_case_escalation'
                            element: 'reason'
                            value: 'resolution_sla'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'fd4adddcf9764abd8f892657ea8ca324'
                        key: {
                            role: {
                                id: '7e3d0b9948354951aa64920303bd7e65'
                                key: {
                                    name: 'x_sln_store_suppli.support_manager'
                                }
                            }
                            contains: {
                                id: '214122d7b9e9496aa0acae2f4b2e8251'
                                key: {
                                    name: 'x_sln_store_suppli.support_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fdfcb570e0b44aa08982a86627f6e007'
                        key: {
                            list_id: {
                                id: '22296ba8fbfb46ec968fcf7071738f9f'
                                key: {
                                    name: 'x_sln_store_suppli_supply_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'subtype'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe59deed10654d32a0dccd89c9f7d1bb'
                        key: {
                            name: 'x_sln_store_suppli_store_supplier'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fe65eaacc05b48e1a1016fdf5c8de599'
                        key: {
                            sys_ui_action: '43229ae6c8434d118c2fa4b65545f902'
                            sys_user_role: {
                                id: '077ec3f4b63440d5adf45aa331e5f38c'
                                key: {
                                    name: 'x_sln_store_suppli.supplier_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'feb47636dff747f29b60aee0e5d00505'
                        key: {
                            name: 'x_sln_store_suppli_store_supply_model'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff0ddd72def941378916708e7be0c4bf'
                        key: {
                            sys_security_acl: '7b5149c15bc64c199f95de6449ba0df2'
                            sys_user_role: {
                                id: '2a78462bb07243f9ab230def5dc5a52d'
                                key: {
                                    name: 'x_sln_store_suppli.district_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ff8a5d6bec82436d957100ac8ae31fb2'
                        key: {
                            question: {
                                id: 'f58ca77c0d004469a3e0ebbe08585107'
                                key: {
                                    cat_item: 'f7a5ffe7fd564a9e897dc65ee96deab7'
                                    variable_set: 'NULL'
                                    name: 'priority'
                                }
                            }
                            value: '1'
                        }
                    },
                ]
            }
        }
    }
}
