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

### Public 환경 (인터넷을 사용 할 수 있는 상황)
#### CentOS 8 (https://about.gitlab.com/install/#centos-7)
```bash

sudo yum install -y curl policycoreutils-python-utils perl libcurl-devel
# Enable OpenSSH server daemon if not enabled: sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
# Check if opening the firewall is needed with: sudo systemctl status firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld

sudo yum install postfix
sudo systemctl enable postfix
sudo systemctl start postfix

curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash

sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ce

```

### Private 환경 (인터넷을 사용 할 수 없는 상황)
#### CentOS 8 (https://docs.gitlab.com/ee/install/installation.html)
```bash
t3.xlarge

option sudo dnf install https://docs.gitlab.com/ce/install/installation.html


# m4
wget http://ftp.gnu.org/gnu/m4/m4-1.4.18.tar.gz
# autoconf
wget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz
# automake
wget http://ftp.gnu.org/gnu/automake/automake-1.16.1.tar.gz

sudo dnf install wget -y

# 1. Install git
# install m4 
cd ~
wget http://ftp.gnu.org/gnu/m4/m4-1.4.19.tar.gz
tar zxvf m4-1.4.19.tar.gz && cd m4-1.4.19
./configure --prefix=/usr
make 
sudo make install

# install perl for autoconf (https://www.cpan.org/src/README.html)
cd ~
wget https://www.cpan.org/src/5.0/perl-5.36.0.tar.gz
tar zxvf perl-5.36.0.tar.gz && cd perl-5.36.0
./Configure -des -Dprefix=$HOME/localperl
make
sudo make install

# install autoconf (need perl)
cd ~
wget http://ftp.gnu.org/gnu/autoconf/autoconf-2.71.tar.gz
tar zxvf autoconf-2.71.tar.gz && cd autoconf-2.71
./configure --prefix=/usr
make
sudo make install

# install automake
cd ~
wget http://ftp.gnu.org/gnu/automake/automake-1.16.1.tar.gz
tar zxvf automake-1.16.1.tar.gz && cd automake-1.16.1
./configure --prefix=/usr
make
sudo make install

# install zlib header
cd ~/gitlab
wget http://www.zlib.net/zlib-1.2.13.tar.gz
tar zxvf zlib-1.2.13.tar.gz && cd zlib-1.2.13
./configure --prefix=/usr
make
sudo make install

# install libtool
cd ~/gitlab
wget http://ftp.gnu.org/gnu/libtool/libtool-2.4.7.tar.gz
tar zxvf libtool-2.4.7.tar.gz && cd libtool-2.4.7
./configure --prefix=/usr
make
sudo make install

# install openssl (https://www.openssl.org/source/)
cd ~/gitlab
wget https://www.openssl.org/source/openssl-1.1.1s.tar.gz
tar zxvf openssl-1.1.1s.tar.gz && cd openssl-1.1.1s
./config
make
sudo make install
openssl version

# install curl 7.86.0 (need libtool, openssl)
cd ~/gitlab
wget https://curl.se/download/curl-7.86.0.tar.gz
tar zxvf curl-7.86.0.tar.gz && cd curl-7.86.0
#openssl version -d
#find / -name ssl -type d 
./configure --prefix=/usr --with-openssl
make
sudo make install
curl -V

# install git (need zlib), remote-http is not a git command 에러: https://shanta.tistory.com/10
cd ~/gitlab
wget https://github.com/git/git/archive/refs/tags/v2.38.1.tar.gz
tar zxvf v2.38.1.tar.gz && cd git-2.38.1
make configure
./configure --prefix=/usr
make all # need zlib
sudo make install
git -v

# 2. Install Ruby
cd ~/gitlab
wget https://cache.ruby-lang.org/pub/ruby/3.1/ruby-3.1.3.tar.gz
echo '5ea498a35f4cd15875200a52dde42b6eb179e1264e17d78732c3a57cd1c6ab9e ruby-3.1.3.tar.gz' | sha256sum -c -
tar zxvf ruby-3.1.3.tar.gz && cd ruby-3.1.3
./configure --disable-install-rdoc --enable-shared --prefix=/usr
make
sudo make install
ruby -v

# 3. Install Go
sudo rm -rf /usr/local/go

wget "https://go.dev/dl/go1.18.8.linux-amd64.tar.gz"
echo '4d854c7bad52d53470cf32f1b287a5c0c441dc6b98306dea27358e099698142a  go1.18.8.linux-amd64.tar.gz' | sha256sum -c -
tar -zxvf go1.18.8.linux-amd64.tar.gz && mv go go1.18.8.linux-amd64 
sudo cp -R go1.18.8.linux-amd64 /usr/local/go
cd go1.18.8.linux-amd64 && sudo cp bin/{go,gofmt} /usr/local/bin/
go version

# 4. Install Node 
# install g++
wget https://ftp.gnu.org/gnu/gcc/gcc-12.1.0/gcc-12.1.0.tar.gz
tar zxvf gcc-12.1.0.tar.gz && cd gcc-12.1.0
# configure 하는데 configure: error: *** A compiler with support for C++11 language features is required. 에러 나는중
./configure --enable-checking=release --enable-languages=c,c++ --disable-multilib
./configure --prefix=/usr
make -j4
sudo make install
gcc -v
g++ -v

# install nodejs (need g++)
wget https://nodejs.org/dist/v18.12.1/node-v18.12.1.tar.gz
tar zxvf node-v18.12.1.tar.gz && cd node-v18.12.1
./configure --prefix=/usr
make 
sudo make install
git -v


curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install -y nodejs

(optional) sudo yum install gcc-c++ make

curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install yarn

node -v
npm -v
yarn -v

------------------------------------------------------------

# 1. Install and configure the necessary dependencies (CentOS 7)
sudo yum install -y curl policycoreutils-python perl

# 1. Install and configure the necessary dependencies (CentOS 8)
sudo yum install -y curl policycoreutils-python-utils perl libcurl-devel

# Check if opening the firewall is needed with: sudo systemctl status firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld

sudo dnf install firewalld -y
systemctl start firewalld
systemctl enable firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld

# 3. install ruby (to run gitlab) ^
cd ~
mkdir ruby && cd ruby
curl --remote-name --location --progress-bar "https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.6.tar.gz"
echo 'e7203b0cc09442ed2c08936d483f8ac140ec1c72e37bb5c401646b7866cb5d10 ruby-2.7.6.tar.gz' | sha256sum -c - && tar xzf ruby-2.7.6.tar.gz
cd ruby-2.7.6

./configure --disable-install-rdoc --enable-shared
make
sudo make install
ruby -v

# 4. install go (several daemon written in go)
# Remove former Go installation folder
sudo rm -rf /usr/local/go

wget "https://go.dev/dl/go1.18.8.linux-amd64.tar.gz"
echo '4d854c7bad52d53470cf32f1b287a5c0c441dc6b98306dea27358e099698142a  go1.18.8.linux-amd64.tar.gz' | shasum -a256 -c -
tar -zxvf go1.18.8.linux-amd64.tar.gz
mv go go1.18.8.linux-amd64
sudo cp go1.18.8.linux-amd64/bin/{go,gofmt} /usr/local/bin/
go -v

# 5. install node (to compile JavaScript assets) ^
# install node v16.x
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install -y nodejs

(optional) sudo yum install gcc-c++ make

curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install yarn

node -v
npm -v
yarn -v

# 6. Create a git user for GitLab:
sudo adduser --system -m --comment 'GitLab' git
sudo passwd -f -u git
cat /etc/passwd

# 7. Install PosgreSQL (for gitlab db) ^
sudo dnf module list postgresql
sudo dnf module list postgresql-contrib
sudo dnf install @postgresql:13 postgresql-contrib
psql --version

systemctl list-unit-files
sudo systemctl enable --now postgresql
sudo systemctl status postgresql.service
sudo -u postgres psql -c "SELECT version();"

#Create a database user for GitLab:
sudo -u postgres psql -d template1 -c "CREATE USER git CREATEDB;"

#Create the pg_trgm extension:
sudo -u postgres psql -d template1 -c "CREATE EXTENSION IF NOT EXISTS pg_trgm;"

#Create the btree_gist extension (required for GitLab 13.1+):
sudo -u postgres psql -d template1 -c "CREATE EXTENSION IF NOT EXISTS btree_gist;"

#Create the GitLab production database and grant all privileges on the database:
sudo -u postgres psql -d template1 -c "CREATE DATABASE gitlabhq_production OWNER git;"

#Try connecting to the new database with the new user:
sudo -u git -H psql -d gitlabhq_production

#Check if the pg_trgm extension is enabled:
SELECT true AS enabled
FROM pg_available_extensions
WHERE name = 'pg_trgm'
AND installed_version IS NOT NULL;

-If the extension is enabled this produces the following output:
enabled
---------
 t
(1 row)

#Check if the btree_gist extension is enabled:
SELECT true AS enabled
FROM pg_available_extensions
WHERE name = 'btree_gist'
AND installed_version IS NOT NULL;

-If the extension is enabled this produces the following output:

enabled
---------
 t
(1 row)

Quit the database session:

gitlabhq_production> \q


# 8. Install Redis ^
sudo dnf install redis
# Configure redis to use sockets
sudo cp /etc/redis.conf ~/redis/redis.conf.orig

# Disable Redis listening on TCP by setting 'port' to 0
sudo sed 's/^port .*/port 0/' ~/redis/redis.conf.orig | sudo tee /etc/redis.conf

# Enable Redis socket for default Debian / Ubuntu path
echo 'unixsocket /var/run/redis/redis.sock' | sudo tee -a /etc/redis.conf

# Grant permission to the socket to all members of the redis group
echo 'unixsocketperm 770' | sudo tee -a /etc/redis.conf

# Add git to the redis group
sudo usermod -aG redis git

# Supervise Redis with systemd
systemctl show --value --property=Type redis.service
sudo systemctl status redis.service
sudo systemctl enable --now redis
sudo systemctl status redis.service


# 9. Install GitLab (14.10 14버전에서 젤 마지막)
su - git
sudo -u git -H git clone https://gitlab.com/gitlab-org/gitlab-foss.git -b 14-10-stable gitlab
```