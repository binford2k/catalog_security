class profile::mysql::server (
  $root_password,
) {
    class { 'mysql::server':
        root_password => $root_password,
    }
    class { 'mysql::bindings':
        php_enable => true,
    }
}

