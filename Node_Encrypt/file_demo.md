<!SLIDE>
# Manage secrets in files
## Using the `node_encrypt::file` resource type.

Set up by causing a divergence:

    @@@ Shell execute
    ssh root@demo "echo changes > /tmp/foo"

.break

    @@@ Shell execute
    ssh root@demo puppet agent -t

.break

    @@@ Shell code_wrap execute
    ssh root@demo 'python -m json.tool $(puppet agent --configprint client_datadir)/catalog/demo.puppetlabs.vm.json | grep -n2 "will never appear"'
    say wahoo

.break

    @@@ Shell execute
    ssh root@demo cat /tmp/foo

~~~SECTION:handouts~~~
Results:

    @@@ Shell code_wrap
    root@demo:~ # puppet agent -t
    Info: Using configured environment 'production'
    Info: Retrieving pluginfacts
    Info: Retrieving plugin
    Info: Loading facts
    Info: Caching catalog for demo.puppetlabs.vm
    Info: Applying configuration version '1462176716'
    Notice: /Stage[main]/Main/Node[demo.puppetlabs.vm]/Node_encrypt::File[/tmp/foo]/Node_encrypted_file[/tmp/foo]/content: content changed '<<encrypted>>' to '<<encrypted>>'
    Notice: Applied catalog in 1.39 seconds

~~~ENDSECTION~~~
