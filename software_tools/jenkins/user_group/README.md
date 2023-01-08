<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

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

# Jenkins 사용자/그룹 관리
## 설명
Jenkins 에서 다양한 방법으로 사용자/그룹을 관리하는 방법에 대해 소개합니다.

## Active Directory
TODO: Jenkins AD 

## Jenkins' own user database
Role-Based Strategy plugin
Jenkins management -> Security -> Manage and Assign Roles
Manage Roles
Global roles : 전반적인 그룹의 권한을 설정하는 것
Item roles : Pattern 에 필터링된 아이템별로 그룹의 권한을 설정하는 것

Assign Roles
Global roles : 전체적인 권한에 대한 그룹을 관리하는 것으로 관리자 / 관리자 이외 정도로만 구분해도 충분할 듯 합니다.
Item roles : 사용자별 그룹 권한 부여 (중복 가능)

정리하면 Manage roles 에서 그룹을 관리하고, Assign roles 에서 그룹고 사용자를 매핑하는 것으로 이해할 수 있습니다.

## LDAP
TODO: Jenkins LDAP

## Unix user/group database
TODO: Jenkins Unix user/group DB
