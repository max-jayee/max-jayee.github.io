<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Spring Tool Suite 도구 설정

## 설명

Spring Tool Suite 를 사용하며 어떠한 이유(궁금하거나, 사용하기 위해서 등)에서 한 번이라도 알아보았던 도구 설정들에 대해 정리합니다.
STS 도구 설정은 SpringToolSuite4.ini 파일에서 수행할 수 있으며, 설치된 경로에 위치합니다. (설치된 위치는 STS -> Help -> About Spring Tool Suite -> Installation Details 에서 확인할 수 있습니다.)

## 메모리 설정

|옵션|설명|
|---|---|
|-Dosgi.requiredJavaVersion	| 자바 버전 설정 |
|-Xverify:none | 이클립스 시작시 class 유효성 검사 생략 | 
|-XX:+UseParallelGC | 병렬 가비지 컬랙션 처리 | 
|-XX:+AggressiveOpts | 컴파일러의 소숫점 최적화 기능 활성화 | 
|-XX:-UseConcMarkSweepGC | 이클립스의 GUI 응답 속도 향상 | 
|-XX:PermSize=256m | class 로딩 기본 메모리 설정 | 
|-XX:MaxPermSize=512m |  class 로딩 최대 메모리 설정<br/> Out Of Memory <br/>Error가 자주 발생하면 이 부분을 늘려 해결할 수 있음 | 
|-XX:NewSize=128m | JVM에서 새로운 객체 생성시 로딩되는 최소 메모리 설정 | 
|-XX:MaxNewSize=128m | JVM에서 새로운 객체 생성시 로딩되는 최대 메모리 설정 | 
|-Xms1024m | Heap 최소 메모리 설정 <br/><br/> RAM 용량에 따른 적정설정<br/> 4GB~8GB - Xms512m <br/> 8GB 이상 - Xms1024m <br/> |
|-Xmx2048 | Heap 최대 메모리 설정 <br/><br/> RAM 용량에 따른 적정설정 <br/> 4GB 이하 - Xmx512m <br/> 4GB~8GB : Xmx1024m <br/> 16GB 이상 : Xmx2048m  <br/> |

## 단축키 세팅

|설명|설정 방법|비고|
|---|---|---|
| Open Implementation | Window -> Preferences -> General -> Keys -> Search -> Binding 에서 단축키 세팅 | shift + F3 을 많이 씀, F3 이 Open Declaration 이기 때문에 |
