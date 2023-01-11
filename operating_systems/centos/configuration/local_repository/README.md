<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/operating_systems/">Operating Systems</a>
>
<a href="/operating_systems/centos/">CentOS</a>
>
<a href="/operating_systems/centos/configuration/">Configuration</a>
>
</h5>
</div>

# 로컬 리파지토리 구성
## 설명
RPM(Redhat Package Manager) 의존성을 유지하며 패키지를 설치하는 방법 중 대표적으로 mirror repository 를 구성하여 사용하는 것으로, 폐쇄망(private)에서 의존성을 유지하며 패키지를 구성할 때 용이하게 사용할 수 있습니다.

## 방법
0. mirror repository 에 구성할 rpm 패키지 파일 설치
    ```bash
    sudo dnf list createrepo*
    sudo dnf install --downloadonly --downloaddir=createrepo createrepo

    #sudo dnf list java*openjdk*
    # 2가지 방법으로 다운로드 할 수 있음
    #sudo dnf install --downloadonly --downloaddir=local-repo java-1.8.0-openjdk-devel.x86_64

    #sudo yumdownloader --downloadonly --resolve --destdir local-repo java-1.8.0-openjdk-devel.x86_64
    ```

1. createrepo 패키지 설치 ([RPM command](https://zetawiki.com/wiki/리눅스_rpm_명령어 "https://zetawiki.com/wiki/리눅스_rpm_명령어")) <!-- TODO: software_tools 에 rpm 추가하고 거기로 링크 바꿀 예정 -->
    ```bash
    sudo rpm -ivh drpm-0.4.1-3.el8.x86_64.rpm 
    sudo rpm -ivh createrepo_c-libs-0.17.7-6.el8.x86_64.rpm
    sudo rpm -ivh createrepo_c-0.17.7-6.el8.x86_64.rpm
    # sudo rpm -ivh --nodeps createrepo_c-0.17.7-6.el8.x86_64.rpm 
    createrepo --version # check version 0.17.7 
    ```

2. local-repo 생성 및 파일 복사
    ```bash
    mkdir ~/local-repo
    cp -R ${directory-of-rpm-files} ~/local-repo/
    ```

3. mirror repository 구성
    ```bash
    createrepo --database ~/local-repo
    sudo vi /etc/yum.repos.d/local-repo.repo
    # ---------- /etc/yum.repos.d/local-repo.repo 
    [local-repo]
    name=CentOS-8.5 - Local Repository
    baseurl=file:///home/${user-account}/local-repo
    enabled=1
    gpgcheck=0
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
    # ----------
    ```

4. mirror repository 에서만 파일 설치하는 예시
    ```bash
    sudo dnf install --disablerepo=\* --enablerepo=local-repo java-1.8.0-openjdk-devel.x86_64
    ```
