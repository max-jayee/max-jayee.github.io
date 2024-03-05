<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# ETC4

## This is a playground

### Temporary things

<!--
jenkins Role-based Authorization Strategy 의 기본 그룹

1. authenticated (users who logged in)
2. anonymous (any user, including ones who have not logged in)
-->

<!--
ssh Connection to ip closed by remote host. error

remote server 에서 /etc/hosts.allow, /etc/hosts.deny 로 막혀있지 않은지 확인
-->

<!--
bash shell <, << ,<<< 차이

< 는 input redirection 으로 파일의 내용을 입력으로 사용
command < file.txt

<< 는 here document 로 사용자가 입력한 값을 입력으로 사용
command <<EOT
line 1
line 2
EOT

<<< 는 문자열을 명령어의 표준 입력으로 사용
command <<< "input string"
-->

<!--
bash shell >, >> 차이

> 는 표준 출력을 파일로 redirect 하고 파일이 존재하는 경우 덮어 씀
command > file.txt

>> 는 표준 출력을 파일에 추가하여 파일이 존재하는 경우 추가로 작성함
command >> file.txt
-->