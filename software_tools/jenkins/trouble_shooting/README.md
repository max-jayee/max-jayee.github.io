<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/software_tools/">Software Tools</a>
>
<a href="/software_tools/jenkins/">Jenkins</a>
>
</h5>
</div>

# Jenkins 문제&해결 모음
## 설명
Jenkins 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | 빌드 중 `Could not find tools.jar.` 와 같이 `~ valid JDK installation` 을 확인하라고 나오며 빌드가 되지 않습니다. | 빌드 도구인 javac 가 설치되지 않거나 잘못 설치된 경우입니다. | `sudo dnf install java-1.8.0-openjdk-devel.x86_64` 와 같이 jdk 를 설치합니다. | 관련 task: `Execution failed for task ':compileJava'.` |
