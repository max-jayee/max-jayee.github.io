<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Spring Tool Suite 문제&해결 모음
<!-- TODO: IntelliJ Trouble Shooting-->
## 설명
STS(Spring Tool Suite) 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | gradle project 를 git 에서 import 했는데 gradle 프로젝트가 적용 안 될 때 | 프로젝트 import 시 그냥 java 프로젝트로 import 되어 gradle 화 시켜주어야한다. | 프로젝트 마우스 우클릭 -> Configure -> Add Gradle Nature 을 선택하여 gradle 화 시켜준다. | |
| 2 | 에디트 한글 깨질 때 | 에디터 기본 encoding 이 UTF-8이 아니어서 그렇다. | 프로젝트 마우스 우클릭 -> Properties -> Resource -> Other: UTF-8 로 설정 | |
| 3 | backend 에서 통신할 때 한글 깨지는 경우 | 빌드할 때 파일 인코딩이 UTF-8 로 안되어서다. | 빌드 옵션에 -Dfile.encoding=UTF-8 을 추가한다. | |
