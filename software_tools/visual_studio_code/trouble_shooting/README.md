<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Visual Studio Code 문제&해결 모음
## 설명
VSCode(Visual Studio Code) 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | 한글을 입력하는 중 종종 문자가 먹히는 경우 | 도구 자체의 표시하는 언어가 한글로 설정되어 있지않아 제대로 표현되지 않은 것입니다. | 명령어 실행 단축키 (`cmd + shift + p`) 를 이용하여 Configuration Display Language 를 실행하고 ko(한국어) 로 설정한 후, 프로그램을 재부팅 합니다. | Mac 용 VSCode 에서 주로 발생한다. |
