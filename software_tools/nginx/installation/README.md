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