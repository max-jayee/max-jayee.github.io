<style type="text/css">
  @import url("/css/style-header.css");
</style>

# [맥쓰네 블로그](/ "https://max-jayee.github.io")

# Spring Tool Suite 문제&해결 모음
## 설명
STS(Spring Tool Suite) 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | gradle project 를 git 에서 import 했는데 gradle 프로젝트가 적용 안 될 때 | 프로젝트 import 시 그냥 java 프로젝트로 import 되어 gradle 화 시켜주어야한다. | 프로젝트 마우스 우클릭 -> Configure -> Add Gradle Nature 을 선택하여 gradle 화 시켜준다. | |
