<!SLIDE>
# Manage secrets in files
## Using the `node_encrypt::file` resource type.

* Just replace `file` resources:

.break

    @@@ Puppet
    #file { '/tmp/foo':
    #  owner   => 'root',
    #  group   => 'root',
    #  content => 'This string WOULD BE in the catalog.',
    #}

    # Port to secure file wrapper.
    node_encrypt::file { '/tmp/foo':
      owner   => 'root',
      group   => 'root',
      content => 'This string will never appear in the catalog.',
    }

.callout.warning Secure content is encrypted in the catalog, and is scrubbed
from reports and file diffs. However, it will still appear in backed up files.
