<!SLIDE>
# Configuration Management

* Define a configuration and Puppet will enforce it.
* Schlupping around config files or such to all nodes.

.break

    @@@ Puppet
    package { 'cowsay':
        ensure   => present,
        provider => gem,
    }

.break

    @@@ Shell execute
    cowsay -f bud-frogs "Elementary, my dear Watson"

~~~SECTION:notes~~~
This requires admin privileges to configure nodes.
~~~ENDSECTION~~~
