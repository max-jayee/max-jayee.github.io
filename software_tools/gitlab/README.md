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
#### CentOS 8
```bash
(optional) sudo dnf install postfix
sudo dnf install createrepo
createrepo --version # 0.17.7
sudo dnf groupinstall 'Development Tools'
perl -V # 15 revision 5 version 26 subversion 3
git --version # 2.31.1 -> 2.37.x
g++ --version # 8.5.0
autoconf --version # 2.69
java -version # openjdk 1.8.0_352
sudo dnf install golang
# ---------- Trouble Shooting
RPM: error: db5 error(-30969) from dbenv->open: BDB0091 DB_VERSION_MISMATCH: Database environment version mismatch
RPM: error: cannot open Packages index using db5 – (-30969)
RPM: error: cannot open Packages database in /var/lib/rpm
The downloaded packages were saved in cache until the next successful transaction.

cd /var/lib/rpm
rm -rf __db.*
rpm --rebuilddb
# ----------
go version # 1.18.4
sudo dnf install @ruby:2.7
ruby --version # 2.7.6

sudo dnf install @nodejs:16
node --version # 16.18.1
#TODO yarn install
sudo dnf install @postgresql:13
psql --version # 13.7
sudo dnf install @redis:6
redis-cli --version # 6.2.7

sudo dnf install perl-libs

createrepo --database local-repo
sudo yum repolist # check added the local-repo in list

sudo dnf clean all
sudo dnf install --disablerepo=\* --enablerepo=local-repo gitlab-ce

sudo netstat -anp | grep LISTEN # or sudo netstat -anp | grep 80
sudo firewall-cmd --permanent --zone=public --add-port=80/tcp
sudo firewall-cmd --reload

sudo vi /etc/gitlab/gitlab.rb
#---------- /etc/gitlab/gitlab.rb
...
external_url 'http://${GITLAB_DASHBOARD_URL}'
...
#----------
sudo gitlab-ctl reconfigure

# more gitlab configure - https://docs.gitlab.com/omnibus/settings/

```