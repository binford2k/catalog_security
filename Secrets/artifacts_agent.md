<!SLIDE>
# Artifacts on the Agent
## Cached Catalog.

    @@@ Shell code_wrap execute
    ssh root@demo 'python -m json.tool $(puppet agent --configprint client_datadir)/catalog/demo.puppetlabs.vm.json | grep -n2 PrVVX'
    say wat

* The Puppet Agent will cache the latest catalog on disk every time it runs.
* This allows it to maintain state if the Master isn't reachable.

![state](../_images/provision_configure_puppet.png)


~~~SECTION:handouts~~~
Results:

    @@@ Shell Code_wrap
    4545-            \"line\": 8,
    4546-            \"parameters\": {
    4547:                \"root_password\": \"PrVVX2pq*8rkd\"
    4548-            },
    4549-            \"tags\": [
    --
    4601-                \"restart\": false,
    4602-                \"root_group\": \"root\",
    4603:                \"root_password\": \"PrVVX2pq*8rkd\",
    4604-                \"service_enabled\": true,
    4605-                \"service_manage\": true,
    --
    5011-            \"parameters\": {
    5012-                \"backup\": false,
    5013:                \"content\": \"### MANAGED BY PUPPET ###\\n\\n\\n[mysql]\\nuser=root\\nhost=localhost\\npassword='PrVVX2pq*8rkd'\\nsocket=/var/lib/mysql/mysql.sock\\n\\n[client]\\nuser=root\\nhost=localhost\\npassword='PrVVX2pq*8rkd'\\nsocket=/var/lib/mysql/mysql.sock\\n\\n[mysqldump]\\nuser=root\\nhost=localhost\\npassword='PrVVX2pq*8rkd'\\nsocket=/var/lib/mysql/mysql.sock\\n\\n[mysqladmin]\\nuser=root\\nhost=localhost\\npassword='PrVVX2pq*8rkd'\\nsocket=/var/lib/mysql/mysql.sock\\n\\n[mysqlcheck]\\nuser=root\\nhost=localhost\\npassword='PrVVX2pq*8rkd'\\nsocket=/var/lib/mysql/mysql.sock\\n\\n\",
    5014-                \"mode\": \"0600\",
    5015-                \"owner\": \"root\",

~~~ENDSECTION~~~
