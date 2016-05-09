<!SLIDE>
# Using Hiera eYaml
## As easy as editing files!

1. Just edit a `*.eyaml` file with the `edit` command.
1. Provide encryption markers.
    * `password: DEC::PKCS7[super sekrit password]!`
1. There is no step three.

.callout.warning A slight bug in the `eyaml edit` command requires your `CWD` to be
your home directory where your keys are stored.

    @@@ Shell Code_wrap
    root@master:~ # eyaml edit /etc/puppetlabs/code/hieradata/secure.eyaml
    puppet apply -e 'notice(hiera("password"))'
    Notice: Scope(Class[main]): super sekrit password
    Notice: Compiled catalog for master.puppetlabs.vm in environment production in 0.04 seconds
    Notice: Applied catalog in 0.11 seconds
