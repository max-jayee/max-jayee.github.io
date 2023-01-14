<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">

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

# 네트워크 관리 도구 구성
## 설명
네트워크 관리를 편리하게 할 수 있도록 지원하는 도구인 ifconfig, netstat 등을 구성하여 네트워크를 관리할 수 있습니다.

## 설치
1. 네트워크 관리 도구 설치
    ```bash
    sudo dnf info net-tools
    sudo dnf install net-tools
    # include arp, hostname, ifconfig, netstat, rarp, route, plipconfig, slattach, mii-tool and iptunnel and ipmaddr
