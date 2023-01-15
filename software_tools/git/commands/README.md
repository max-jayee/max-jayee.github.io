<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Git 유용한 명령어 모음
## 설명
Git 을 사용하며 유용한 명령어들을 정리합니다.

## 명령어 목록
명령어 특성상 `code` 형태로 기술합니다.

```bash
##### 설정값 보기
git config -l

##### 전역에 값 설정하기
git config --global ${config attribute} "${config value}"

##### 프로젝트에만 값 설정하기
git config ${config attribute} "${config value}"

##### 히스토리 보기
git log

##### 브랜치 목록
git branch -a

##### 브랜치 생성
git branch ${branch name}

##### 브랜치 제거
git branch -d ${branch-name}

##### 브랜치 이동
git checkout ${branch name}

##### 브랜치 만들면서 이동하기
git checkout -b ${branch name}

##### 리모트 목록
git remote -v

##### 리모트에 브랜치 생성
git push ${remote-name} ${local-branch-name}:${remote-branch-name}

##### 리모트 브랜치 제거
git push ${remote-name} -d ${remote-branch-name}

##### fork한 소스 오리지날과 싱크
git remote add ${forking-origin} ${forking-origin-git-url}

git fetch ${forking-origin}

git merge ${forking-origin}/master

```
