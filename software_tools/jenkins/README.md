<style type="text/css">
  @import url("/css/style-header.css");
</style>

# [맥쓰네 블로그](/ "https://home-max.github.io")

# Jenkins
## 설명
프로젝트 별로 CI/CD 환경을 구성할 때 파이프라인을 지원하는 도구로, 다양한 플러그인을 제공하여 손쉽게 파이프라인을 구성할 수 있도록 지원합니다.

## 설치 방법
**설치 과정**
1. Java 설치 (Jenkins 는 war 로 java 로 구동함)
2. Jenkins 설치
3. Jenkins 실행
4. System service 등록 (데몬으로 실행하기 위함)

### Public 환경 (인터넷을 사용 할 수 있는 상황)
#### CentOS 8
1. Java 설치 (Jenkins 는 war 로 java 로 구동함)
    ```bash
    sudo dnf install java-1.8.0-openjdk.x86_64 # 무난한 버전인 1.8.0 버전 설치
    ```
2. Jenkins 설치
    ```bash
    wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo # https://pkg.jenkins.io/redhat-stable/jenkins.repo 경로의 파일을 다운로드 받아 /etc/yum.repos.d/jenkins.repo 경로에 파일을 다운로드 받음
    sudo dnf install jenkins # jenkins 설치
    ```
3. Jenkins 실행
    ```bash
    # path: /etc/sysconfig/jenkins 에서 configuration 설정
    # $ firewall-cmd --permanent --add-port=젠킨스포트/tcp # 포트 오픈
    # $ firewall-cmd --reload # 방화벽 재실행
    sudo systemctl start jenkins.service # jenkins 데몬 실행
    sudo systemctl status jenkins.service # jenkins 데몬 상태 확인
    ```
4. System service 등록 (데몬으로 실행하기 위함)
    ```bash
    sudo systemctl stop jenkins.service # 실행중인 jenkins 데몬 중지
    sudo systemctl enable --now jenkins.service # jenkins 데몬 활성화 시키며 실행
    sudo systemctl status jenkins.service # jenkins 데몬 상태 확인
    ```

### Private 환경 (인터넷을 사용 할 수 없는 상황)
#### CentOS 8
1. Java 설치 (Jenkins 는 war 로 java 로 구동함)
    ```bash
    # wget https://github.com/AdoptOpenJDK/openjdk8-upstream-binaries/releases/download/jdk8u342-b07/OpenJDK8U-jdk_x64_linux_8u342b07.tar.gz # 외부에서 받아서 폐쇄망으로 반입과 동일한 과정을 수행
    tar zxvf OpenJDK8U-jdk_x64_linux_8u342b07.tar.gz # 압축 해제
    vi ~/.bash_profile # java 를 위한 사용자 환경 변수 값 설정
    ########## ~/.bash_profile
    JAVA_HOME=/home/ec2-user/java/openjdk-8u342-b07
    PATH=$JAVA_HOME/bin:
    ##########
    source ~/.bash_profile # 정의한 사용자 변수 적용
    java -version # java 명령어 & 설치된 버전 확인
    ```
2. Jenkins 설치
    ```bash
    sudo dnf install fontconfig # for AWT is not properly configured on this server. error (https://wiki.jenkins.io/display/JENKINS/Jenkins+got+java.awt.headless+problem)
    cd ~
    mkdir jenkins
    cd jenkins
    wget https://get.jenkins.io/war-stable/2.346.1/jenkins.war # ref: https://get.jenkins.io/war-stable/
    ```
4. Jenkins 실행
    ```bash
    java -jar jenkins.war
    #Open up your browser and type localhost:8080 url
    #Copy and Insert the password (ex: cat ~/.jenkins/secrets/initialAdminPassword)
    ```
5. System service 등록 (데몬으로 실행하기 위함)
    ```bash
    sudo vi /etc/systemd/system/jenkins.service
    ########## /etc/systemd/system/jenkins.service
    [Unit]
    Description=Jenkins Systemd Daemon

    [Service]
    Type=forking

    Environment=JAVA_HOME=/home/userAccount/java/openjdk-8u342-b07

    ExecStart=/home/userAccount/jenkins-daemon.sh

    User=userAccount
    Group=userAccount

    [Install]
    WantedBy=multi-user.target
    ##########
    vi ~/jenkins-daemon.sh
    ########## ~/jenkins-daemon.sh
    #! /bin/bash

    ${JAVA_HOME}/bin/java -jar /home/userAccount/jenkins/jenkins.war &
    ##########
    chmod +x ~/jenkins-daemon.sh
    sudo systemctl enable --now jenkins.service
    sudo systemctl status jenkins.service
    ```