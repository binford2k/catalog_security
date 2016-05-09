<!SLIDE>
# To wrap it all up
## Practical suggestions.

* Encrypt secrets in your catalogs:
    * `puppet module install binford2/node_encrypt`
    * Start using the type in place of sensitive `file` resources.
* Protect secrets in your codebase.
    * `gem install hiera-eyaml`
* Disable `show_diffs`.
* Protect the hell out of your Master.

![Doberman](../_images/doberman.jpg)
