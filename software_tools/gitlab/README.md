<style type="text/css">
  @import url("/css/style-header.css");
</style>

# [맥쓰네 블로그](/ "https://home-max.github.io")

# Gitlab
## 설명
scm

## 설치 방법
**설치 과정**
1. ...

### Private 환경 (인터넷을 사용 할 수 없는 상황)
#### CentOS 8 (https://about.gitlab.com/install/#centos-7)
```bash

mkdir createrepo
sudo dnf install --downloadonly --downloaddir=createrepo createrepo
cd createrepo
sudo rpm -ivh drpm-0.4.1-3.el8.x86_64.rpm # https://zetawiki.com/wiki/리눅스_rpm_명령어
sudo rpm -ivh createrepo_c-libs-0.17.7-6.el8.x86_64.rpm
sudo rpm -ivh createrepo_c-0.17.7-6.el8.x86_64.rpm

mkdir local-repo
sudo dnf list java*openjdk*
sudo dnf install --downloadonly --downloaddir=local-repo java-1.8.0-openjdk-devel.x86_64

sudo yumdownloader --downloadonly --resolve --destdir local-repo java-1.8.0-openjdk-devel.x86_64

sudo rpm -ivh javapackages-filesystem-5.3.0-1.module+el8+2447+6f56d9a6.noarch.rpm

sudo dnf clean all

sudo yum repolist
# ansible-2-for-rhel-8-rhui-rpms Red Hat Ansible Engine 2 for RHEL 8 (RPMs) from RHUI
# packages-microsoft-com-mssql-server-2019 packages-microsoft-com-mssql-server-2019
# packages-microsoft-com-prod packages-microsoft-com-prod
# rhel-8-appstream-rhui-rpms Red Hat Enterprise Linux 8 for x86_64 - AppStream from RHUI (RPMs)
# rhel-8-baseos-rhui-rpms Red Hat Enterprise Linux 8 for x86_64 - BaseOS from RHUI (RPMs)
# rhui-client-config-server-8 Red Hat Update Infrastructure 3 Client Configuration Server 8

mkdir target-repo
createrepo --database target-repo
sudo vi /etc/yum.repos.d/target-repo.repo
---------- /etc/yum.repos.d/target-repo.repo
[target-repo]
name=CentOS-8.5 - My Repository
baseurl=file:///home/ec2-user/test/target-repo
enabled=1
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
----------

sudo dnf install --disablerepo=\* --enablerepo=target-repo java-1.8.0-openjdk-devel.x86_64


wget https://get.jenkins.io/war-stable/2.346.1/jenkins.war

java -jar jenkins.war
```