(function () {
    data.audience = options.audience || (gs.hasRole('x_sln_store_suppli.supplier_agent') ? 'supplier' : 'internal');
    data.userName = gs.getUserDisplayName();
    data.cases = [];
    data.tasks = [];
    data.knowledge = [];

    function producer(name) {
        var item = new GlideRecord('sc_cat_item_producer');
        item.addQuery('name', name);
        item.addQuery('active', true);
        item.setLimit(1);
        item.query();
        return item.next() ? item.getUniqueValue() : '';
    }

    data.requestProducer = producer('Submit Store Supply Request');
    data.issueProducer = producer('Report Store Supply Issue');

    var cases = new GlideRecord('x_sln_store_suppli_supply_case');
    cases.addQuery('supply_state', 'NOT IN', 'closed,cancelled');
    cases.orderByDesc('sys_updated_on');
    cases.setLimit(20);
    cases.query();
    while (cases.next()) {
        if (!cases.canRead()) continue;
        data.cases.push({
            sys_id: cases.getUniqueValue(),
            number: cases.getDisplayValue('number'),
            short_description: cases.getDisplayValue('short_description'),
            store: cases.getDisplayValue('store'),
            state: cases.getDisplayValue('supply_state'),
            priority: cases.getDisplayValue('priority'),
            updated: cases.getDisplayValue('sys_updated_on'),
        });
    }

    if (data.audience === 'supplier') {
        var tasks = new GlideRecord('x_sln_store_suppli_supplier_task');
        tasks.addQuery('released', true);
        tasks.addQuery('task_state', 'NOT IN', 'complete,cancelled');
        tasks.orderByDesc('sys_updated_on');
        tasks.setLimit(20);
        tasks.query();
        while (tasks.next()) {
            if (!tasks.canRead()) continue;
            data.tasks.push({
                sys_id: tasks.getUniqueValue(),
                number: tasks.getDisplayValue('number'),
                short_description: tasks.getDisplayValue('short_description'),
                state: tasks.getDisplayValue('task_state'),
                released: tasks.getDisplayValue('released_on'),
            });
        }
    }

    var knowledge = new GlideRecord('kb_knowledge');
    knowledge.addQuery('workflow_state', 'published');
    knowledge.addQuery('short_description', 'LIKE', 'supply');
    knowledge.orderByDesc('sys_view_count');
    knowledge.setLimit(5);
    knowledge.query();
    while (knowledge.next()) {
        if (!knowledge.canRead()) continue;
        data.knowledge.push({ sys_id: knowledge.getUniqueValue(), number: knowledge.getDisplayValue('number'), title: knowledge.getDisplayValue('short_description') });
    }
})();
