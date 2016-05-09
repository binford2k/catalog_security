<!SLIDE>
# Common Failures
## Things to watch out for.

* Certificates must be readable by the Master.
* Gem must be installed **twice** in different `$GEMPATH`s.
* The `createkeys` and `edit` commands work with keys in `$CWD`
* Upgrading Puppetserver often does not preserve installed gems.
* If you forget the marker text, the value **is not encrypted**.

.callout.warning Remember that if you ever commit unencrypted data, it can be
a real bear to scrub. It's best to just discard the secret and regenerate a
fresh version. See https://help.github.com/articles/remove-sensitive-data for info.
