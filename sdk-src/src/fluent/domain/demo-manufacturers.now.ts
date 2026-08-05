import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

const demo = { installMethod: 'demo' as const }

// Direct core_company records are required by cmdb_model.manufacturer. CSM
// customer_account records remain separate because they represent portal-facing suppliers.
export const demoPackagingManufacturer = Record({
    $id: Now.ID['demo_packaging_manufacturer'], table: 'core_company', $meta: demo,
    data: { name: 'Demo Coffeehouse Packaging Co', manufacturer: true, vendor: true },
})
export const demoIngredientsManufacturer = Record({
    $id: Now.ID['demo_ingredients_manufacturer'], table: 'core_company', $meta: demo,
    data: { name: 'Demo Beverage Ingredients Co', manufacturer: true, vendor: true },
})
export const demoSanitationManufacturer = Record({
    $id: Now.ID['demo_sanitation_manufacturer'], table: 'core_company', $meta: demo,
    data: { name: 'Demo Sanitation & Safety Co', manufacturer: true, vendor: true },
})
export const demoOperationsManufacturer = Record({
    $id: Now.ID['demo_operations_manufacturer'], table: 'core_company', $meta: demo,
    data: { name: 'Demo Retail Operations Supply Co', manufacturer: true, vendor: true },
})
