# Store Supplier Support SDK source

Source-driven definition of the `x_sln_store_suppli` ServiceNow application.

- `npm run build` validates and packages the application.
- `npm run build:ci` validates the package without allowing generated key drift.
- `npm run deploy` installs it into the authorized `demo5` instance with tagged demo data.
- `npm run validate:demo5` runs the read-only instance and demo-data validation suite.
- `npm run test:atf:demo5` runs the packaged ATF regression suite through the ServiceNow CI/CD API. An interactive administrator must first enable `sn_atf.runner.enabled` and `sn_atf.schedule.enabled` on this sub-production instance; the runner does not change private platform properties.
- `npm run source:commit:demo5` commits instance-generated metadata through ServiceNow's native source-control workflow and restores the user's prior application context.
- Instance-generated source-control metadata remains under the app sys_id directory at the repository root and must not be edited by hand.

The deployment requires CSM, CSM Case Types, Asset Management, Knowledge, SLA,
Assessments/Surveys, Service Portal/Employee Center, and Email Interaction support.
