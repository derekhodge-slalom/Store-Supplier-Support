import '@servicenow/sdk/global'

// Remove the unrelated SDK starter artifacts already installed in this application.
Now.del('sys_script', 'cf361fda6b5c4524864125f1b534b589')
Now.del('sys_script_client', '29c6decf27be437f8c3656f235ac84e9')
Now.del('sys_module', 'eb41889642b643d98e2f7ffee2b6a6ec')
Now.del('sys_module', 'c331017de83947bdb4872cc8647827be')
Now.del('sys_module', '1b09be7557a24209be1a7c827c172f3d')
