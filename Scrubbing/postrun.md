<!SLIDE>
# Scrubbing Node Catalogs
## Getting rid of the evidence.

* Somewhat common to remove catalog from disk after running.

.break

    @@@ Ini
    # /etc/puppetlabs/puppet/puppet.conf
    [agent]
        postrun_command = rm $client_datadir/catalog/$certname.json
    ...

* Drawbacks:
    * Cannot use cached catalog for failsafe if Master is unavailable.
    * Cannot reduce load on Master by using cached catalog.
    * Cannot use Direct Puppet.
    * Cannot use for troubleshooting.


~~~SECTION:handouts~~~
Remember if needed, you can retrieve the value of any Puppet setting using `--configprint`:

* `$(puppet agent --configprint client_datadir)`
* `$(puppet agent --configprint certname)`

https://docs.puppet.com/puppet/latest/reference/configuration.html#postruncommand

~~~ENDSECTION~~~
