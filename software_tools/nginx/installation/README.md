<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Nginx 설치 방법
## 설명
크게 소프트웨어를 설치하는 방법과 컨테이너 이미지를 이용하여 설치하는 방법 등을 다룹니다.

## 설치 방법
**설치 과정**
1. Nginx 설치
2. Nginx 설정 세팅
3. Nginx 기동
4. 브라우저로 확인

## 컨테이너 이미지
ngninx 컨테이너 이미지 목록: https://hub.docker.com/_/nginx

1. 컨테이너 이미지 다운로드
    ```bash
    podman pull nginx:1.23.3-alpine
    ```

2. Dockerfile 작성
    ```bash
    FROM nginx:--

    COPY nginx.conf /etc/nginx/conf.d/nginx.conf

    CMD nginx -g 'daemon off;'

    EXPOSE 80
    ```

3. 이미지 생성
    ```bash
    podman build -t nginx-1.23.3:0.0.1 ./
    ```

4. 컨테이너 생성
    ```bash
    podman run -itd --name nginx nginx-1.23.3:0.0.1
    #podman run -itd -p 80:80 --name nginx nginx-1.23.3:0.0.1
    podman ps
    ```

5. 컨테이너 접근
    ```bash
    podman exec -it nginx ash
    ```

<!-- TODO: ## CentOS 8 설치 -->