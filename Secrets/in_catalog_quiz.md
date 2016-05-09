<!SLIDE form=secrets>
# Where will you find secrets?

Enforce the configuration:

    @@@ Shell execute
    ssh root@demo puppet agent -t


secrets -> Where do you think copies of these secrets might exist? =
    [=] puppetdb -> Information stored in PuppetDB
    [=] console -> Directly in the PE Console
    [] catalog_master -> A copy of the catalog cached on the master
    [=] catalog_agent -> A copy of the catalog cached on the agent
    [=] filebucket -> Changed files backed up on the master.
    [=] report_master -> A copy of the report cached on the master
    [=] report_agent -> A copy of the report cached on the agent
    [] syslog_master -> syslog on the master
    [=] syslog_agent -> syslog on the agent

~~~SECTION:notes~~~

~~~FORM:secrets~~~

~~~ENDSECTION~~~
