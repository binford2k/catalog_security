<!SLIDE>
# Manage secrets in `exec` resources.
## Using the `puppet node decrypt` command.

Code on the master:

    @@@ Puppet
    class { 'secret':
        password => 'your mother was a hamster',
    }

Enforce it:

    @@@ Shell execute
    ssh root@demo puppet agent -t

Look at the catalog:

    @@@ Shell code_wrap execute
    ssh root@demo 'python -m json.tool $(puppet agent --configprint client_datadir)/catalog/demo.puppetlabs.vm.json | grep -B9 "title.*Secret"'
    say wahoo

~~~SECTION:handouts~~~
Results:

    @@@ Shell
    "parameters": {
        "password": "<<redacted>>"
    },
    "tags": [
        "class",
        "secret",
        "node",
        "demo.puppetlabs.vm"
    ],
    "title": "Secret",

~~~ENDSECTION~~~
