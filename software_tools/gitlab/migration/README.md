<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/software_tools/">Software Tools</a>
>
<a href="/software_tools/gitlab/">Gitlab</a>
>
</h5>
</div>

# Gitlab 이관 방법
## 설명
gitlab, repository 등을 이관하는 방법을 다룹니다.

## Gitlab 이관 <!-- TODO: gitlab 이관 -->

## Repository 이관
1. 이관할 소스 리파지토리에서 클론
```bash
git clone --mirror ${source_repository_url}.git # 기존 repository 와 동일한 복사본을 생성하는 것으로 --bare 옵션을 내부적으로 수행하고 +a 작업을 추가로 함
# or
git clone --bare ${source_repository_url}.git # 독립적으로 repository 를 떠서 git config 관련 정보(예. origin 등)가 없음
```

2. origin url 변경
```bash
cd ${source_repository_url}.git
git remote set-url --push origin ${target_repository_url}.git 
```

3. 이관 타켓 리파지토리에 푸쉬
```bash
git push --mirror 
```

