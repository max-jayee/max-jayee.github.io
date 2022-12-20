<style type="text/css">
  @import url("/css/style-header.css");
</style>

# [맥쓰네 블로그](/ "https://home-max.github.io")

# 로컬 리파지토리 구성
## 설명
RPM(Redhat Package Manager) 의존성을 유지하며 패키지를 설치하는 방법 중 대표적으로 mirror repository 를 구성하여 사용하는 것으로, 폐쇄망(private)에서 의존성을 유지하며 패키지를 구성할 때 용이하게 사용할 수 있다.

## 방법
1. createrepo 패키지 설치 (https://zetawiki.com/wiki/리눅스_rpm_명령어)
    ```bash
    sudo rpm -ivh drpm-0.4.1-3.el8.x86_64.rpm 
    sudo rpm -ivh createrepo_c-libs-0.17.7-6.el8.x86_64.rpm
    sudo rpm -ivh createrepo_c-0.17.7-6.el8.x86_64.rpm
    createrepo --version # check version 0.17.7 
    ```

2. local-repo 생성 및 파일 복사
    ```bash
    mkdir local-repo
    cp -R ${directory-of-rpm-files} local-repo/
    ```

3. mirror repository 구성
    ```bash
    createrepo --database local-repo
    sudo vi /etc/yum.repos.d/local-repo.repo
    ---------- # /etc/yum.repos.d/local-repo.repo 
    [local-repo]
    name=CentOS-8.5 - My Repository
    baseurl=file:///${absolute-parent-path-of-local-repo}/local-repo
    enabled=1
    gpgcheck=0
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
    ----------
    ```

4. mirror repository 에서만 파일 설치하는 예시
    ```bash
    sudo dnf install --disablerepo=\* --enablerepo=local-repo java-1.8.0-openjdk-devel.x86_64
    ```





