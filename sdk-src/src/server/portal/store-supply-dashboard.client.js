api.controller = function () {
    var c = this;
    c.caseUrl = function (record) {
        return '?id=form&table=x_sln_store_suppli_supply_case&sys_id=' + record.sys_id;
    };
    c.taskUrl = function (record) {
        return '?id=form&table=x_sln_store_suppli_supplier_task&sys_id=' + record.sys_id;
    };
    c.producerUrl = function (sysId) {
        return '?id=sc_cat_item&sys_id=' + sysId;
    };
};
