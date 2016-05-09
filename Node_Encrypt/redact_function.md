<!SLIDE>
# I've got you covered.
## Redact class parameters from the catalog..

* Used by the class author for transparency.

.break

    @@@ Puppet
    class secret ($password) {
      $encrypted = node_encrypt($password)

      file { '/etc/something/or/other.conf':
        ensure  => file,
        owner   => 'root',
        group   => 'root',
        mode    => '0644',
        content => "password = ${encrypted}",
      }

      redact('password')

      # could be called with the optional second parameter
      # redact('password', 'The password has been redacted')
    }
