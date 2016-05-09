<!SLIDE>
# Extensible Plugin System
## Multiple encryption backends.

* `hiera-eyaml-gpg`
    * Provide GPG encryption
* `hiera-eyaml-plaintext`
    * This is a no-op encryption plugin that simply base64 encodes the values.
    It exists as an example plugin to create your own and to do integration
    tests on hiera-eyaml. THIS SHOULD NOT BE USED IN PRODUCTION
* `hiera-eyaml-twofac`
    * PKCS7 keypair + AES256 symmetric password for two-factor encryption Note
    that this plugin mandates the user enter a password. It is useful for
    non-automated scenarios, and is not advised to be used in conjunction with
    puppet, as it requires entry of a password over a terminal.
* `hiera-eyaml-kms`
    Encryption using AWS Key Management Service (KMS)

https://github.com/TomPoulton/hiera-eyaml#pluggable-encryption
