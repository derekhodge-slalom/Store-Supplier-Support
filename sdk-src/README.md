# Store Supplier Support SDK source

Source-driven definition of the `x_sln_store_suppli` ServiceNow application.

- `npm run build` validates and packages the application.
- `npm run build:ci` validates the package without allowing generated key drift.
- `npm run deploy` installs it into the authorized `demo5` instance with tagged demo data.
- `npm run validate:demo5` runs the read-only instance and demo-data validation suite.
- `npm run migrate:store-models:demo5` idempotently removes the three obsolete,
  unreferenced base-table demo models after their relationships are repointed.
- `npm run test:atf:demo5` runs the packaged ATF regression suite through the ServiceNow CI/CD API. An interactive administrator must first enable `sn_atf.runner.enabled` and `sn_atf.schedule.enabled` on this sub-production instance; the runner does not change private platform properties.
- `npm run source:commit:demo5` commits instance-generated metadata through ServiceNow's native source-control workflow and restores the user's prior application context.
- `npm run source:apply:demo5` advances the linked instance after the incoming Git diff has been reviewed; use it when ServiceNow reports unapplied repository changes, then redeploy the SDK package before capturing metadata because the apply operation reloads the repository's current application snapshot.
- Instance-generated source-control metadata remains under the app sys_id directory at the repository root and must not be edited by hand.

The deployment requires CSM, CSM Case Types, Asset Management, Knowledge, SLA,
Assessments/Surveys, Service Portal/Employee Center, and Email Interaction support.

Store supplies are modeled in `x_sln_store_suppli_store_supply_model`, a child of
`cmdb_consumable_product_model`. All application pickers and inventory lists use
that child class so general IT consumable models are not exposed in this app.
Each model uses a direct `core_company` record marked as a manufacturer and one
of six native consumable model categories scoped to the Store Supply child class.
Portal-facing CSM supplier accounts remain separate `customer_account` records;
they are used for supplier authorization and routing, not as model manufacturers.
Demo model display names are materialized from manufacturer plus model name, and
every `alm_consumable` record carries the same native `model_category` selected
on its model. Receipt processing validates and preserves that relationship.

The optional demo package contains a fictional Starbucks-inspired coffeehouse
network: six store formats, three district managers, six store contacts, four
supplier families, 24 supply models, and 51 stockroom inventory positions with
intentional low- and zero-stock examples. It does not represent actual Starbucks
stores, suppliers, or operating data.
