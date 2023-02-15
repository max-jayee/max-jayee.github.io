<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Nginx 설치 방법

## 설명

크게 소프트웨어를 설치하는 방법과 컨테이너 이미지를 이용하여 설치하는 방법 등을 다룹니다.

## 설치 방법

### 설치 과정

1. Nginx 설치
2. Nginx 설정 세팅
3. Nginx 기동
4. 브라우저로 확인

### 컨테이너 이미지

ngninx 컨테이너 이미지 목록: <https://hub.docker.com/_/nginx>

1. 컨테이너 이미지 다운로드

    ```bash
    podman pull nginx:1.23.3-alpine
    ```

1. Dockerfile 작성

    ```dockerfile
    FROM nexus-ip-or-domain:5000/los/base/nginx:1.23.3-alpine

    USER root

    # Timezone 설정
    ENV TZ=Asia/Seoul

    # application copy & set
    ARG STATIC_RESOURCE_PATH=ui-result
    ARG NGINX_CONF_FILE=nginx.conf

    COPY ${NGINX_CONF_FILE} /etc/nginx/nginx.conf
    COPY ${STATIC_RESOURCE_PATH} /app/ui/src

    RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx /etc/nginx && \
        chmod -R 770 /var/cache/nginx /var/run /var/log/nginx /etc/nginx

    RUN rm -rf /etc/nginx/conf.d/*

    EXPOSE 8080

    CMD ["nginx", "-g", "daemon off;"]
    ```

1. 이미지 생성

    ```bash
    podman build -t nginx-1.23.3:0.0.1 ./
    ```

1. 컨테이너 생성

    ```bash
    podman run -itd --name nginx nginx-1.23.3:0.0.1
    #podman run -itd -p 80:80 --name nginx nginx-1.23.3:0.0.1
    # podman run -itd --name nam --priviledge -p 80:80 -v/bcd:/mnt/bcd nginx-1.23.3:0.0.1
    # podman run -itd --name ${container name} --privileged -p ${host port}:${container port} -v ${host dir}:${container dir} ${image name}:${image tag}
    podman ps
    ```

1. 컨테이너 접근

    ```bash
    podman exec -it nginx ash
    ```

<!-- TODO: ## CentOS 8 설치 -->