<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# 네트워크 관리 도구 구성
## 설명
네트워크 관리를 편리하게 할 수 있도록 지원하는 도구인 ifconfig, netstat 등을 구성하여 네트워크를 관리할 수 있습니다.

## 설치
1. 네트워크 관리 도구 설치
    ```bash
    sudo dnf info net-tools
    sudo dnf install net-tools
    # include arp, hostname, ifconfig, netstat, rarp, route, plipconfig, slattach, mii-tool and iptunnel and ipmaddr
