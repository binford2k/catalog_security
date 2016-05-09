<!SLIDE>
# Artifacts on the Master
## Filebucketed file backups.

    @@@ Shell execute
    ssh root@master puppet bucket grep PrVVX
    say wat

![Bucket Face](../_images/bucket_face.jpg)

* This uses the `dhgwilliam/bucket_face` Forge module.


.callout.info The centralized `filebucket` service is disabled by default in
recent PE releases, but the same service is used by the new *static compiler*
option, in which case all managed files exist in the filebucket store.

~~~SECTION:notes~~~
You could get similar results by just grepping the `filebucket` directory.

    @@@ Shell
    root@master:~ # cd /opt/puppetlabs/server/data/puppetserver/bucket
    root@master:/opt/puppetlabs/server/data/puppetserver/bucket # grep -rn PrVVX *
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:6:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:12:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:18:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:24:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:30:password='PrVVX2pq*8rkd'

~~~ENDSECTION~~~

~~~SECTION:handouts~~~
Results:

    @@@ Shell
    d522269bdb72bf2769da20ea563b2103	2016-05-01 09:27	/root/.my.cnf:
    	password='PrVVX2pq*8rkd'
    	password='PrVVX2pq*8rkd'
    	password='PrVVX2pq*8rkd'
    	password='PrVVX2pq*8rkd'
    	password='PrVVX2pq*8rkd'

You could get similar results by just grepping the `filebucket` directory.

    @@@ Shell
    root@master:~ # cd /opt/puppetlabs/server/data/puppetserver/bucket
    root@master:/opt/puppetlabs/server/data/puppetserver/bucket # grep -rn PrVVX *
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:6:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:12:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:18:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:24:password='PrVVX2pq*8rkd'
    d/5/2/2/2/6/9/b/d522269bdb72bf2769da20ea563b2103/contents:30:password='PrVVX2pq*8rkd'

~~~ENDSECTION~~~
