<!SLIDE>
# Artifacts in PuppetDB
## Stored Catalogs.

    @@@ Shell execute
    # OS X doesn't do .pem anymore, since OpenSSL has been deprecated
    CERT=_files/ssl/cert.p12:boo
    CA=_files/ssl/certs/ca.pem
    SSL="--tlsv1 --cacert ${CA} --cert ${CERT}"

    PDB=https://master.puppetlabs.vm:8081/pdb/query/v4/catalogs/
    URL="${PDB}/demo.puppetlabs.vm"

    curl ${URL} ${SSL} | python -m json.tool | grep PrVVX
    say wat

.break

* PuppetDB stores the latest catalog for each node.
* Any whitelisted nodes can access them.
    * Only Master by default.
    * Often opened up for infrastructure discovery purposes.

~~~SECTION:notes~~~

* Provisioning
* puppetdbquery
* etc

~~~ENDSECTION~~~

~~~SECTION:handouts~~~
Results:

    @@@ Shell Code_wrap
    "root_password": "PrVVX2pq*8rkd",
    "root_password": "PrVVX2pq*8rkd"
    "content": "### MANAGED BY PUPPET ###\n\n\n[mysql]\nuser=root\nhost=localhost\npassword='PrVVX2pq*8rkd'\nsocket=/var/lib/mysql/mysql.sock\n\n[client]\nuser=root\nhost=localhost\npassword='PrVVX2pq*8rkd'\nsocket=/var/lib/mysql/mysql.sock\n\n[mysqldump]\nuser=root\nhost=localhost\npassword='PrVVX2pq*8rkd'\nsocket=/var/lib/mysql/mysql.sock\n\n[mysqladmin]\nuser=root\nhost=localhost\npassword='PrVVX2pq*8rkd'\nsocket=/var/lib/mysql/mysql.sock\n\n[mysqlcheck]\nuser=root\nhost=localhost\npassword='PrVVX2pq*8rkd'\nsocket=/var/lib/mysql/mysql.sock\n\n",

~~~ENDSECTION~~~
