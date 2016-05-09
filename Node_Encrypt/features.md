<!SLIDE>
# Features of the module
## Transparent & targeted encryption.

* Uses each nodes *public key* to encrypt data in the catalog.
    * Each node can decrypt only *its own* data.

.break

![Public key crypto](../_images/public_key_encryption.gif)

* Encrypted wrapper for native `file` type.
* Puppet subcommands for encrypting/decrypting data.
* Compiler functions to:
    * Generate encrypted data during compilation.
    * Remove a secret parameter from the catalog.

