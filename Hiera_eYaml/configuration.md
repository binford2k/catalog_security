<!SLIDE>
# A little tricky to set up
## Uses its own set of certificates.

1. Install for CLI usage:
    * `gem install hiera-eyaml`
1. Install for Puppetserver Hiera backend functionality:
    * `puppetserver gem install hiera-eyaml`
1. Create encryption keys:
    * `cd $HOME`
    * `eyaml createkeys`
1. Install keys so the Puppet Master can use them
    * `cp -a ~/keys /etc/puppetlabs/puppet/keys`
    * `chown -R root:pe-puppet /etc/puppetlabs/puppet/keys/`
    * `chmod 0750 /etc/puppetlabs/puppet/keys/`
    * `chmod 0640 /etc/puppetlabs/puppet/keys/*.pem`
1. Configure your `hiera.yaml`
    * See https://github.com/TomPoulton/hiera-eyaml#setup
