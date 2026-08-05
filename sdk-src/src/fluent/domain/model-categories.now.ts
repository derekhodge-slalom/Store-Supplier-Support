import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

export const packagingModelCategory = Record({
    $id: Now.ID['store_supply_packaging_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Packaging', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
export const ingredientsModelCategory = Record({
    $id: Now.ID['store_supply_ingredients_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Beverage Ingredients', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
export const beverageServiceModelCategory = Record({
    $id: Now.ID['store_supply_beverage_service_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Beverage Service', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
export const cleaningModelCategory = Record({
    $id: Now.ID['store_supply_cleaning_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Cleaning and Sanitation', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
export const safetyModelCategory = Record({
    $id: Now.ID['store_supply_safety_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Safety and PPE', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
export const operationsModelCategory = Record({
    $id: Now.ID['store_supply_operations_model_category'], table: 'cmdb_model_category',
    data: { name: 'Store Supply - Retail Operations', asset_class: 'alm_consumable', product_model_class: 'x_sln_store_suppli_store_supply_model', allow_as_master: false, allow_in_bundle: true, bundle: false, ootb_category: 'n' },
})
