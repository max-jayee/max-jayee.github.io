<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
</details>

# CentOS 문제&해결 모음
## 설명
CentOS 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | 폐쇄망 환경에 소프트웨어 설치 및 구동 | 상용 제품으로 많이 사용되는 CentOS 는 주로 폐쇄망에서 많이 이용하게 되며 이때는 소프트웨어 설치 방법에 대해 고민이 필요합니다. | 커스터마이징할 소프트웨어는 소스를 다운받아 컴파일 & 빌드, 구동 식으로 수행하고, 이외 사용을 위주로 하는 소프트웨어는 dnf 패키지 매니저를 활용하여 디펜던시를 함께 다운로드하여 설치합니다. | 로컬 리파지토리를 구성하여 이용하면 수월히 구성할 수 있습니다. |
