<!SLIDE>
# What about Compile Masters?
## Must have access to each node's public key.

* Must have a node's public key to encrypt for it.
* The CA has all public keys, but compile masters don't.
* Classify all masters with `node_encrypt::certificates`.
* Automatically distributes all public keys to all compile masters.

.break

    @@@ Puppet
    # configure mountpoint for cert distribution
    node /mom.example.com/ {
        include node_encrypt::certificates
    }

    # sync all public certificates
    node /compile\d\d.example.com/ {
        include node_encrypt::certificates
    }
