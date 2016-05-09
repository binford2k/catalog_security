<!SLIDE>
# Existing CA Infrastructure
## Why can't we just use it?

* Introducing `binford2k/node_encrypt`
* Encrypts data in the catalog for each node.
* Mostly transparent with little-to-no configuration.

.break

    @@@ Json
    {
      "type": "Node_encrypted_file",
      "title": "/var/www/sites/default/sites.php",
      "tags": ["node_encrypted_file", "node_encrypt::file", "node_encrypt", "file", "node", "default", "class"],
      "file": "/etc/puppetlabs/code/environments/production/modules/node_encrypt/manifests/file.pp",
      "line": 66,
      "exported": false,
      "parameters": {
        "content": "-----BEGIN PKCS7-----
    MIIMlQYJKoZIhvcNAQcDoIIMhjCCDIICAQAxggJ5MIICdQIBADBfMFoxWDBWBgNV
    BAMMT1B1cHBldCBDQSBnZW5lcmF0ZWQgb24gcHVwcGV0ZmFjdG9yeS5wdXBwZXRs
    YWJzLnZtIGF0IDIwMTUtMTItMTEgMDE6MTk6MzYgKzAwMDACAQIwCwYJKoZIhvcN
    AQEBBIICADGhLbgBfodWjA6S+rzNfkTNLP+aGkwjGXQH5vSGpBm/z5bg+18+1vCZ
    +L+wrsE8P/5ZGuK9sXXV//IKcuu2Shn+rkW32/kqPVab4yNnWZUjaqbdGdnEI46F
    6N44XQWOxbu7nTg9yCaUTdrDhVNtdYl+YrCDQiMsUjsJ+no78/y7IYqbWuwN70hx
    OdqYSvZ2Fkww2nqiRBpSWXvja6ONw3025vywBT1WNEDPNYEL+mPSq17gC9yDpr+I
    409+g/uD/j8q5YtABpf4d9CVhsDy/5E3T9O28ruR/Ow4lA2EDGsyu7tYKAMiYNU6
    XjEkyiqRNNTil49T73cyZGloPtBevHOREee/DE/u9oZw+aMQS3o4TCA+ubRSuRKF
    kgSgathI4gC/C2E57GBQfreuSi4umKTF/kKYfaGoj6zba/nwSU/8pQqYT86M7pP9
    4HRy9S1tlcjAuXKFffB+P52Bdz2Dv7uc4s5sJfkvIR1T0dgtiUl+X8HWsDWJ3cYJ
    t5+TpqDLkjREVis/vuG3+mX2XgeQvNkGucTAuB9iS0XLZINYnIBE04fPGezi36V3
    VJm4rnOa2AIVc1MbT7khkRaKbO1MXSqGHTyv2zbLTwfQFpRPdzW/fouxxVcZoA5w
    HLHacKMRYxCQnFwbVlrgO2cWhH89UM6dFlX4nkA3m6vW65+/yWA4MIIJ/gYJKoZI
    hvcNAQcBMB0GCWCGSAFlAwQBBAQQt4G22wVoZW9HXytCTJ68+YCCCdAbEe+ytJM9
    m59oGAX8//I6Py4DaGL8ECN0yfP3MBVxZ0pISKqGaKLxYdsXRU6HBQx895/9Z0Qh
    jB86siqv+iXEMoPLpKM90RfUNzyT275Ua/SHRn8DCLTHMj+SvHTpKUe7bv+WPXMV
    ...

~~~SECTION:notes~~~

* https://forge.puppet.com/binford2k/node_encrypt

~~~ENDSECTION~~~

~~~SECTION:handouts~~~

* https://forge.puppet.com/binford2k/node_encrypt

~~~ENDSECTION~~~
