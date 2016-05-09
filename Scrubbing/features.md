<!SLIDE>
# Security Implications
## Disable features as appropriate.

* `filebucket`
    * Disabled by default in recent PE releases.
    * But now used for static catalogs.
    * Impact of disabling:
        * Cannot restore changed files.
        * Cannot use static catalogs.
* `show_diff`
    * Disabled by default.
    * Can be disabled per-file resource.
    * Impact of disabling:
        * Less visibility into changes.

~~~SECTION:handouts~~~
I don't actually recommend avoiding filebucket, if you find it useful. The Master
should be highly secure, so this isn't any worse than having your codebase on disk.
~~~ENDSECTION~~~
