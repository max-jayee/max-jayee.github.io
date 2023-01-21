<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Podman 설치 방법

## 설명

본 설치 방법은 공식 사이트에서 제공하는 버전을 기준으로 작성하였습니다.

## 설치 방법 // TODO: 설치 방법 정리

**설치 과정**

1. 기본 개발 도구 설치
2. 방화벽 개방
3. Gitlab 설치 (community edition(무료), enterprise edition(유료) 두가지 버전이 존재)
4. Gitlab 초기 설정

### CentOS 8

1. podman 설치

    ```bash
    sudo dnf install podman
    ```

1. image 다운로드

    ```bash
    podman pull alpine:3.16.3
    podman images
    podman save > alpine-3.16.3.tar alpine:3.16.3
    # or
    podman save -o alpine-3.16.3.tar alpine:3.16.3
    ```

1. image 다운로드

    ```bash
    podman load -i alpine-3.16.3.tar
    podman load < alpine-3.16.3.tar
    ```

1. base docker file 작성 <!-- TODO: alpine 내부에서 java 가 실행이 안됨 -->

    ```bash
    FROM alpine:3.16.3

    ENV TZ=Asia/Seoul
    ENV LANG=en_US.UTF-8

    COPY OpenJDK8U-jdk_x64_linux_8u332b09.tar.gz /
    RUN tar zxf /OpenJDK8U-jdk_x64_linux_8u332b09.tar.gz -C /usr/lib
    #RUN rm /OpenJDK8U-jdk_x64_linux_8u342b07.tar.gz

    ENV JAVA_HOME=/usr/lib/openjdk-8u332-b09
    ENV PATH=${JAVA_HOME}/bin:${PATH}

    ENV JAVA_VERSION=8u332

    RUN chown root:root ${JAVA_HOME} -R
    RUN chmod 755 ${JAVA_HOME} -R

    #RUN java -version

    CMD ["/bin/ash"]
    ```

1. base image 생성

    ```bash
    podman build -t openjdk-1.8.0:0.0.1 ./
    ```

1. container 실행

    ```bash
    podman run -itd --name base openjdk-1.8.0:0.0.1
    #podman run -itd -p 9070:9070 --name base openjdk-1.8.0:0.0.1
    podman ps
    ```

1. container 접근

    ```bash
    podman exec -it base ash
    ```

1. nexus 에 저장 (only ip)

    ```bash
    # nexushost: verser, port, 
    podman tag image:version nexushost/repo/name:version

    podman login nexushost

    podman push nexushost/repo/name:version

    #Getting image source signatures
    #Checking if image destination supports signatures
    #Error: Can not copy signatures to docker://localhost:5000/rhosp-rhel8/openstack-etcd:16.2: pinging container registry localhost:5000: Get "https://localhost:5000/v2/": http: server gave HTTP response to HTTPS client 발생시
    /etc/containers/registries.conf.d/myregistry.conf
    [[registry]]
    location = "registry.mycluster.williamlieurance.com:5000"
    insecure = true

    [[registry]]
    location = "localhost:5000"
    insecure = true
    ```

1. Trouble Shooting <!-- TODO: podman trouble shooting -->

    ```bash
    권한으로 인해 podman images 잘 안될때 /etc/subuid, /etc/subgid 에 계정 정보 추가
    rm -rf ~/.config/containers ~/.local/share/containers
    podman system migrate
    #podman unshare cat /proc/self/uid_map
    ```

    <!-- TODO: 특정 dockerfile 로 특정 이름의 이미지 생성 -->
    ```bash
    # in openjdk.dockerfile
    FROM openjdk:8-jdk-alpine

    RUN apk --no-cache add curl
    # or
    RUN apk add --update curl \
        && rm -rf /var/cache/apk/*
    ```

    ```bash
    podman build -f openjdk.dockerfile -t ${sampleurl}/openjdk:8-jdk-alpine
    ```

    ```bash
    podman run -itd --name ctn ${sampleurl}/openjdk:8-jdk-alpine
    ```

    ```bash
    podman exec -it ctn ash
    ```

    ```bash
    podman stop ctn;podman rm ctn
    ```

    ```bash
    podman rmi ${sampleurl}/openjdk:8-jdk-alpine
    ```

    ```bash
    podman rmi ${sampleurl}/openjdk:8-jdk-alpine
    ```
