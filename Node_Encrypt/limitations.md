<!SLIDE>
# Every tool has its limitations
## This is no exception.

* This will not prevent files with secrets from being backed up to filebucket.
    * But it will do the right thing with files in static catalogs.
* It renders `show-diff` useless.
* Secrets can be encrypted for a single node only.
* The master must have access to all nodes' public keys.
    * Includes a class for distributing to compile masters.
* This **does not** protect secrets in your codebase or Hiera datasources.
