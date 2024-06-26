<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Kafka confluent

## Install with ansible

### redhat 9

install kafka with anssible document: https://docs.confluent.io/ansible/current/overview.html
ansible document : https://www.redhat.com/en/topics/automation/learning-ansible-tutorial

#### install ansible

```bash
sudo dnf install -y epel-release # not yet
sudo dnf install -y ansible-core # TA
sudo dnf install -y git # optional TA
```

#### install ansible playbooks

Starting in Confluent Platform 7.0, Ansible is packaged as an Ansible Collection.

If you are using Ansible 2.11 or higher, download the Ansible Playbooks for Confluent Platform collection using the ansible-galaxy command as described in this section.

Collections are a distribution format for Ansible content that can include playbooks, roles, modules, and plugins. You can install and use collections through a distribution server, such as Ansible Galaxy, or a Pulp 3 Galaxy server.

```bash
git clone https://github.com/confluentinc/cp-ansible
cd cp-ansible
git fetch
git checkout 7.6.1-post # specific version
ansible-galaxy collection build # create tar ball
ls -l confluent-platform-7.6.1.tar.gz # check created tar ball
ansible-galaxy collection install confluent-platform-7.6.1.tar.gz # install collection

```
