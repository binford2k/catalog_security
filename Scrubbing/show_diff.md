<!SLIDE>
# Disabling `show_diff` for sensitive files

    @@@ Puppet
    file { '/etc/motd':
      ensure  => file,
      content => "changes!!1!\n",
    }
    file { '/etc/something_secret':
      ensure    => file,
      content   => 'hunter2',
      show_diff => false,
    }

.break

    @@@ Puppet_output
    root@demo:~ # puppet apply files.pp
    Notice: Compiled catalog for demo.puppetlabs.vm in environment production in 0.09 seconds
    Notice: /Stage[main]/Main/File[/etc/motd]/content:
    --- /etc/motd	2016-04-30 15:23:25.016930682 +0000
    +++ /tmp/puppet-file20160430-32415-x8gei	2016-04-30 20:23:00.596929656 +0000
    @@ -1 +1 @@
    -wut wut
    +changes!!1!
    Notice: /Stage[main]/Main/File[/etc/motd]/content: content changed '{md5}ec1dc85fc50a40805611f8e0b2413dda' to '{md5}ad3453fe26ac24cbccd3e76cb51a9c51'
    Notice: Applied catalog in 0.28 seconds
