<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Kafka confluent

## key sharing

```bash
ssh-keygen
enter
enter
enter

# copy ~/.ssh/id_rsa.pub to VM1~3:~/.ssh/authorized_keys
```

## Install with ansible

### redhat 9

install kafka with ansible document: https://docs.confluent.io/ansible/current/overview.html
ansible document : https://www.redhat.com/en/topics/automation/learning-ansible-tutorial
port information document : https://docs.confluent.io/platform/current/installation/system-requirements.html#ports

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
ansible-galaxy collection install confluent-platform-7.6.1.tar.gz # install collection - ~/.ansible/collections/ansible_collections/confluent/platform 에 설치됨
```

#### configure inventory

```bash
mkdir ~/inventories
cd ~/inventories
vi hosts.yml

```

```yml
# hosts.yml
---
all:
  vars:
    ansible_connection: ssh
    ansible_user: ec2-user
    ansible_become: true
    ansible_ssh_private_key_file: /tmp/certs/ssh_priv.pem

kafka_controller: # zookeeper 랑 동시 사용 불가능
  hosts:
    VM1 IP:
    VM2 IP:
    VM3 IP:

kafka_broker:
  hosts:
    VM1 IP:
    VM2 IP:
    VM3 IP:

zookeeper: # kafka_controller 와 동시 사용 불가능
  hosts:
    VM1 IP:
    VM2 IP:
    VM3 IP:

schema_registry:
  hosts:
    VM1 IP:

kafka_rest:
  hosts:
    VM1 IP:

ksql:
  hosts:
    VM1 IP:

kafka_connect:
  hosts:
    VM1 IP:

control_center:
  hosts:
    VM1 IP:
```

```bash
ansible -i hosts.yml all -m ping # check hosts.yml and vm connections
ansible-playbook -i hosts.yml confluent.platform.validate_hosts # optional, validate hosts before installing kafka
# ansible-playbook -i hosts.yml confluent.platform.validate_hosts --tags=<component-name> # To validate hosts for an individual component, use the --tag flag == <component-name> can be zookeeper, kafka_broker, kafka_controller, schema_registry, kafka_rest, kafka_connect, ksql, or control_center.

# 동시 실행하는 명령언데 이걸로하면 리소스가 부족한 경우 특정 모듈들이 로딩이 안되서 실패하는 모듈이 생김
# 그래서 저 아래에 모듈단위로 설치하는 명령어로 수행하는 걸 추천함 
ansible-playbook -i hosts.yml confluent.platform.all # install all # detail log option is '-vvv' 

# sysctl 오류(ERROR! couldn't resolve module/action 'sysctl'. This often indicates a misspelling, missing collection, or incorrect module path.) 발생시 : ansible-galaxy collection install ansible.posix

# Hash merge 오류(Hash Merging must be enabled in ansible.cfg) 발생시 : 아래 값을 아래 설정중에 넣어준다. 아래 우선순위로 읽음

[defaults]
hash_behaviour=merge

# 1. ANSIBLE_CONFIG (environment variable if set)
# 2. ansible.cfg (in the current directory)
# 3. ~/.ansible.cfg (in the home directory)
# 4. /etc/ansible/ansible.cfg

# alternatives 오류(ERROR! couldn't resolve module/action 'alternatives'. This often indicates a misspelling, missing collection, or incorrect module path.) 발생시 : ansible-galaxy collection install community.general

# TASK [confluent.platform.kafka_controller : Check Kafka Metadata Quorum] 에서 "Timed out waiting for a node assignment." 오류 발생시 : 방화벽 개방 = firewall-cmd --permanent --add-port=9093/tcp # firewall-cmd --reload # 방화벽 재실행

# TASK [Get Topics with UnderReplicatedPartitions] 에서 "Timed out waiting for a node assignment." 오류 발생시 : 방화벽 개방 = firewall-cmd --permanent --add-port=9091/tcp # firewall-cmd --reload # 방화벽 재실행

# TASK [confluent.platform.schema_registry : Wait for API to return 200] 오류 발생시 : 오류 발생시 : 방화벽 개방 = firewall-cmd --permanent --add-port=8081/tcp # firewall-cmd --reload # 방화벽 재실행

### dnf install -y net-tools # for netstat
### dnf install -y firewalld # for firewall-cmd
#### sudo systemctl start firewalld & sudo systemctl enable firewalld

ansible-playbook -i hosts.yml confluent.platform.all --tags=certificate_authority
ansible-playbook -i hosts.yml confluent.platform.all --tags=kafka_controller # or ansible-playbook -i hosts.yml confluent.platform.all --tags=zookeeper # Do not install both.
ansible-playbook -i hosts.yml confluent.platform.all --tags=kafka_broker
ansible-playbook -i hosts.yml confluent.platform.all --tags=schema_registry
ansible-playbook -i hosts.yml confluent.platform.all --tags=kafka_rest
ansible-playbook -i hosts.yml confluent.platform.all --tags=kafka_connect
ansible-playbook -i hosts.yml confluent.platform.all --tags=ksql
ansible-playbook -i hosts.yml confluent.platform.all --tags=control_center # 최소 얘정도는 8기가 머신기준으로는 메모리가 부족해서 다른 서버에 띄우는걸 추천함
```
