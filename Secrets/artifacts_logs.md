<!SLIDE>
# Artifacts in Logs
## The evils of `show_diff`.

* The `show_diff` setting will allow you to see all file changes Puppet makes.
* It also means that any secret managed by Puppet is no longer secret.

.break

    @@@ Shell code_wrap execute
    ssh root@demo "puppet apply -e 'include demo::diffs' --show_diff"
    say wat

