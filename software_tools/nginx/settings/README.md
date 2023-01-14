<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Nginx 세팅
## 설명
Nginx 의 routing 과 reversing 을 설정하는 방법을 소개합니다.
Nginx 는 default 로 /etc/nginx/nginx.conf 설정 파일을 기반으로 설정합니다.

## 기본 nginx.conf (/etc/nginx/)
nginx 를 설치하면 아래와 같은 default 값으로 값이 세팅되어 있습니다.

```bash
vi nginx.conf
#---------- nginx.conf
# For more information on configuration, see:
# * Official English Documentation: http://ninx.org/en/docs/
# * Official Russian Documentation: http://ninx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for" ';
    
    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    #Load modular configuration files from the /etc/nginx/conf.d directory.
    #See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;
        root /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

# Settings for a TLS enabled server.
# 
#   server {
#       listen 443 ssl http2 default_server;
#       listen [::]:443 ssl http2 default_server;
#       server_name _;
#       root /usr/share/nginx/html;
#       ssl_certificate "/etc/pki/nginx/server.crt";
#       ssl_certificate_key "/etc/pki/nginx/private/server.key";
#       ssl_session_cache shared:SSL:1m;
#       ssl_session_timeout 10m;
#       ssl_ciphers PROFILE=SYSTEM;
#       ssl_prefer_server_ciphers on;
#
#       # Load configuration files for the default server block.
#       include /etc/nginx/default.d/*.conf;
#       
#       location / {
#       }

#       error_page 404 /404.html;
#           location = /40x.html {
#       }
#
#       error_page 500 502 503 504 /50x.html;
#           location = /50x.html {
#       }
#   }   
}
#----------
```

## Routing 
nginx 를 이용하여 static resources 를 접근하기 위해서는 아래와 같이 라우팅 해주어야합니다.  
아래 예시는 `${web-server-url}/examplepath` 라고 브라우저에서 요청했을 때 `/app/ui/main/resources/static` 하위에 있는 static resources 를 반환하는 예제 입니다.

```bash
#---------- nginx.conf
...
http {
    ...
    server {
        ...
        location /examplepath {
            alias /app/ui/main/resources/static;
        }
    }
}
#----------
```

## Reversing
nginx 를 이용하여 리버스 프록시를 구성하기 위해서는 아래와 같이 리버싱 해주어야 합니다.
아래 예시는 `${web-server-url}/examplepath/` 라고 브라우저에서 요청했을 때 `${was-ip}` back-end 를 호출하는 예제입니다.

```bash
#---------- nginx.conf
...
http {
    ...
    upstream max.was.co.kr {
        server ${was-ip}; # with port
    }

    server {
        ...
        location /examplepath/ {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://max.was.co.kr/;
        }
    }
}
#----------
```