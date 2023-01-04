<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/software_tools/">Software Tools</a>
>
<a href="/software_tools/nginx/">Nginx</a>
>
</h5>
</div>

# Gitlab 권한 관리
## 설명
Git 프로젝트를 매니징하고 CI/CD 를 지원하는 도구에서 리파지토리, 사용자 등과 같은 권한 관리는 어떻게 하는지 이해합니다.

## 역할 관리
사용자, 그룹별 역할을 지정하여 권한을 관리할 수 있습니다.

### 역할 별 권한

|역할|설명|비고|
|---|---|---|
|Guest|이슈 생성만 가능||
|Reporter|이슈 관리, Merge Request 생성 가능||
|Developer|브랜치 생성, Merge Request 생성 가능|개발자(주니어)들에게 주로 부여|
|Maintainer|main 브랜치 push, 배포, Merge Request 승인 등 가능|PL, 개발자(시니어)들에게 주로 부여 <br/> Owner 역할에서 그룹, 프로젝트, 구성원 관리를 제외하였다고 보면 쉬움|
|Owner|그룹이, 프로젝트, 구성원 관리 권한 부여|PM, 팀장, 관리자 주로 부여|

