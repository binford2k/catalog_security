<!SLIDE>
# Some code

    @@@ Puppet
    class profile::wordpress {
        include profile::apache
        apache::vhost { $::fqdn:
            port     => '80',
            docroot  => '/opt/wordpress',
        }

        class { 'profile::mysql::server':
            root_password => 'PrVVX2pq*8rkd',
        }

        class { '::wordpress':
          db_user     => 'wordpress',
          db_password => 'pwd{94wqUDde',
        }
    }
