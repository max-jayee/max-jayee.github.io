<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/operating_systems/">Operating Systems</a>
>
<a href="/operating_systems/linux/">Linux</a>
>
</h5>
</div>

# Linux 설정 관리
## 설명
다수의 사용자를 기반으로 하는 운영체제에서 파일, 사용자 등과 같은 설정 관리는 어떻게 하는지 이해합니다.

## Shell 설정
Linux 는 오픈소스 기반이어서 그런지 모르겠지만 전반적인 시스템을 커스터마이징 할 수 있다고 보아도 과언이 아닙니다.
이에 터미널(깜깜~한 화면에 깜빡이는 커서 화면)에서 주 사용되는 shell 과 관련 옵션들을 커스터마이징 할 수 있기에, 커스터마이징 하는 방법을 알아봅니다.

### ~/.bashrc 파일
사용자 별 bash shell 을 커스터마이징 할 수 있는 파일이며, rc 는 run commands 의 줄임말입니다.
왜 run commands 라면 bashrc 에는 bash shell 이 수행되기 전 실행하는 스크립트들이 모여있는 파일이라 그렇다고 볼 수 있습니다.

#### alias 설정
alias 는 command 를 본인의 취향에 맞게 재정의할 수 있는 기능입니다.
`alias cc='clear'` 와 같이 간단한 명령어를 재정의할 수 있으며, 아래와 같이 `function` 을 적절하게 사용하면 파라미터도 활용할 수 있습니다.
```bash
mycd()
{
cd $1 && pwd > ~/pwd
}
alias cd=mycd
```