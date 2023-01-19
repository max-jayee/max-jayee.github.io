<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# 로컬 DNS 목록 구성

## 설명

DNS 로 접근하고자 할 때, 공인 DNS 가 아니면 인식할 수 없습니다.
이에 특정 DNS 를 특정 ip 로 바라보게 끔 로컬 DNS 를 설정할 수 있습니다.

## 설정

```bash
vi C:\Windows\System32\drivers\etc\hosts
#---------- C:\Windows\System32\drivers\etc\hosts
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#	102.54.94.97    rhino.acme.com      # source server
#	38.25.63.10     x.acme.com          # x client host

 ${user-ip-address} ${user-dns-address}

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
#----------
```
