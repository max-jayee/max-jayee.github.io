<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Gitlab 문제&해결 모음

## 설명

Gitlab 을 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| 상황 | 원인 | 해결방안 | 비고 |
| :--- | :--- | :--- | :--- |
| 설치 중 `STDERR: initdb: error: invalid locale settings; check LANG and LC_* environment variables`  | 환경변수 설정이 기대한 값으로 세팅이 안된 경우 | 환경 변수 체크 LC_CTYPE=UTF-8, LC_ALL=en_US.UTF-8, LANG=en_US.UTF-8 | postgresql 의 언어와 매핑이 되어야함 |
