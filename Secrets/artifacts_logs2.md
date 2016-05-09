<!SLIDE>
# Artifacts in Logs
## The evils of `show_diff`.

![.float_right show_diff leaking](../_images/show_diff.jpg)

* These diffs can be *anywhere* reports go.
    * syslog
    * interactive terminal output
    * PE Console
    * report processors
    * etc

.break

    @@@ Shell code_wrap execute
    ssh root@demo "puppet apply -e 'include demo::reset'"
