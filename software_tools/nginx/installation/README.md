<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/software_tools/">Software Tools</a>
>
<a href="/software_tools/nginx/">Nginx</a>
>
</h5>
</div>

# Gitlab 설치 방법
## 설명
본 설치 방법은 무료 버전인 ce(community edition) 버전을 기준으로 작성하였습니다.

## 설치 방법
**설치 과정**
1. 기본 개발 도구 설치
2. 방화벽 개방
3. Gitlab 설치 (community edition(무료), enterprise edition(유료) 두가지 버전이 존재)
4. Gitlab 초기 설정

### Public 환경 (인터넷을 사용 할 수 있는 상황)
#### CentOS 8 (https://about.gitlab.com/install/)
1. 기본 개발 도구 설치
    ```bash
    sudo yum install -y curl policycoreutils-python-utils openssh-server perl postfix
    sudo systemctl enable sshd
    sudo systemctl start sshd
    sudo systemctl enable postfix
    sudo systemctl start postfix
    ```
2. 방화벽 개방
    ```bash
    sudo firewall-cmd --permanent --add-service=http
    sudo firewall-cmd --permanent --add-service=https
    sudo systemctl reload firewalld
    ```
3. Gitlab 설치 - ce 버전
    ```bash
    curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
    sudo yum install -y gitlab-ce
    ```
4. Gitlab 초기 설정
    ```bash
    sudo vi /etc/gitlab/gitlab.rb
    #---------- /etc/gitlab/gitlab.rb
    ...
    external_url 'http://${GITLAB_DASHBOARD_URL}'
    ...
    #----------
    sudo gitlab-ctl reconfigure
    open a browser and request ${external_url}
    # id: root
    # pw: /etc/gitlab/initial_root_password 
    # notice: 패스워드는 24시간 후에 사라짐
    ```

### Private 환경 (인터넷을 사용 할 수 없는 상황)
#### CentOS 8 (https://docs.gitlab.com/ee/install/installation.html)
1. 기본 개발 도구 설치
    ```bash
    createrepo --database local-repo
    sudo yum repolist # check added the local-repo in list
    (optional) sudo dnf install postfix
    
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

    sudo dnf install @postgresql:13
    psql --version # 13.7

    sudo dnf install @redis:6
    redis-cli --version # 6.2.7

    sudo dnf install perl-libs
    ```

2. 방화벽 개방
    ```bash
    sudo netstat -anp | grep LISTEN # or sudo netstat -anp | grep 80
    sudo firewall-cmd --permanent --zone=public --add-port=80/tcp
    sudo firewall-cmd --reload
    ```
3. Gitlab 설치 - ce 버전
    ```bash
    sudo dnf clean all
    sudo dnf install --disablerepo=\* --enablerepo=local-repo gitlab-ce
    ```
4. Gitlab 초기 설정
    ```bash
    sudo vi /etc/gitlab/gitlab.rb
    #---------- /etc/gitlab/gitlab.rb
    ...
    external_url 'http://${GITLAB_DASHBOARD_URL}'
    ...
    #----------
    sudo gitlab-ctl reconfigure

    # more gitlab configure - https://docs.gitlab.com/omnibus/settings/

    open a browser and request ${external_url}
    # id: root
    # pw: /etc/gitlab/initial_root_password 
    # notice: 패스워드는 24시간 후에 사라짐
    ```
