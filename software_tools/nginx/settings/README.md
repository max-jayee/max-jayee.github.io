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

# Nginx 세팅
## 설명
Nginx 의 routing 과 reversing 을 설정하는 방법을 소개합니다.
Nginx 는 default 로 /etc/nginx/nginx.conf 설정 파일을 기반으로 설정합니다.

## 기본 nginx.conf (/etc/nginx/)
```conf
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

```

## Routing <!-- TODO: nginx routing-->

## Reversing <!-- TODO: nginx reversing-->
