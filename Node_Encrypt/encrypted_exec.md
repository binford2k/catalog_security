<!SLIDE>
# Encrypting arguments for commands
## A little more convoluted.

* Sometimes you must run commands with secrets.
* Use the `puppet node decrypt` command.
* Pass the secret as an environment variable.
* Note the careful use of single quotes to prevent variable expansion.

.break

    @@@ Puppet code_wrap
    exec { 'set service passphrase':
      command     => 'some-service --set-passphrase="$(puppet node decrypt --env SECRET)"',
      path        => '/opt/puppetlabs/bin:/usr/bin',
      environment => "SECRET=${node_encrypt('and your father smelt of elderberries')}",
    }
