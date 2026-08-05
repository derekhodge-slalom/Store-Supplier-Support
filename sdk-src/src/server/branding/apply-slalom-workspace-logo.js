(function applySlalomWorkspaceLogo() {
    var sourceThemeId = '61cd3467f8d54502b6e5e0eda88be0f8';
    var targetAssetId = 'b6d1e06c5a1b4a8c91a9e7f0f01ee504';

    var existing = new GlideRecord('sys_attachment');
    existing.addQuery('table_sys_id', targetAssetId);
    existing.addQuery('content_type', 'image/svg+xml');
    existing.setLimit(1);
    existing.query();
    if (existing.next()) {
        return;
    }

    var source = new GlideRecord('sys_attachment');
    source.addQuery('table_sys_id', sourceThemeId);
    source.addQuery('content_type', 'image/svg+xml');
    source.setLimit(1);
    source.query();
    if (!source.next()) {
        gs.warn('Store Supplier Support: source-controlled Slalom logo attachment was not found.');
        return;
    }

    new GlideSysAttachment().copy(source.getValue('table_name'), sourceThemeId, 'sys_ux_theme_asset', targetAssetId);
})();
