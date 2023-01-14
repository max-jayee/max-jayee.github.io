<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
</details>

# Nginx 문제&해결 모음
## 설명
Nginx 을 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | 컨테이너 실행 중 `[emerg] mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)`  | 폴더 생성하려는데 권한이 없어서 생성하지 못함 | 해당 폴더에 권한 추가 | `RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx /etc/nginx && chmod -R 770 /var/cache/nginx /var/run /var/log/nginx /etc/nginx` |
| 2 | 컨테이너 실행 중 `bind() to 0.0.0.0:80 failed (13: Permission denied)` | alpine 버전에서는 1024 아래의 포트는 안열리게 강제해둠 | 포트를 1025 이상으로 변경 | `nginx.conf 의 listen 영역을 80 -> 다른 포트로 변경` |
| 3 | 2번을 통해 포트를 바꿨는데도 `bind() to 0.0.0.0:80 failed (13: Permission denied)` | /etc/nginx/conf.d 폴더의 `default.conf` 에서 80 포트를 쓰지 않는지 확인한다. | 해당 파일을 제거하거나 해당 포트를 변경한다. | `rm /etc/nginx/conf.d/default.conf or rm /etc/nginx/conf.d/*` |

