<!SLIDE>
# Hiera eYaml
## Protects secrets in Hiera datasources.

* Tooling for encrypting individual values in datasources.
* Hiera backend for transparently decrypting.

.break

    @@@ Puppet
    class { 'secret':
        password => hiera('password'),
    }

Datasource:

    @@@ Yaml
    ---
    plain-property: You can see me
    password: >
        ENC[PKCS7,Y22exl+OvjDe+drmik2XEeD3VQtl1uZJXFFF2NnrMXDWx0csyqLB/2NOWefv
        NBTZfOlPvMlAesyr4bUY4I5XeVbVk38XKxeriH69EFAD4CahIZlC8lkE/uDh
        jJGQfh052eonkungHIcuGKY/5sEbbZl/qufjAtp/ufor15VBJtsXt17tXP4y
        l5ZP119Fwq8xiREGOL0lVvFYJz2hZc1ppPCNG5lwuLnTekXN/OazNYpf4CMd
        /HjZFXwcXRtTlzewJLc+/gox2IfByQRhsI/AgogRfYQKocZgFb/DOZoXR7wm
        IZGeunzwhqfmEtGiqpvJJQ5wVRdzJVpTnANBA5qxeA==]

