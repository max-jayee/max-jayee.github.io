<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Linux 권한 관리

## 설명

다수의 사용자를 기반으로 하는 운영체제에서 파일, 사용자 등과 같은 권한 관리는 어떻게 하는지 이해합니다.

## 파일 권한 관리

파일 권한을 확인하는 대표적인 방법은 아래와 같이 `ls -l` 옵션으로 확인할 수 있습니다.

```bash
ls -alh test.txt
> -rwxrw-r-- 1 user group 9K Dec 20 14:45 test.txt
```

Linux 에서는 파일을 새로 생성하면 default 로 `644(rw-r--r--)` 권한으로 생성됩니다.

### 파일 권한의 의미

|표기|의미|비고|
| :--- | :--- | :--- |
|-|파일 구분자|-: 파일, d: 디렉토리, l: 링크|
|rwx|소유자 권한|r: 읽기, w: 쓰기, x: 실행|
|rw-|그룹 권한|r: 읽기, w: 쓰기, x: 실행|
|r-\-|다른 사용자 권한|r: 읽기, w: 쓰기, x: 실행|
|1|링크 수||
|user|파일 소유자||
|group|파일 소유자 그룹||
|9K|파일 크기||
|Dec 20 14:45|수정한 날짜||
|test.txt|파일 이름||

### 권한 별 숫자 표기법

\-\-\- 단위로 2진법 -> 10진법 변환을 떠오르면 됩니다.
예시는 다음과 같습니다.

1. rwx = 7 (4+2+1)
2. rw- = 6 (4+2+0)
3. r-\- = 4 (4+0+0)

### 파일 권한 변경 방법

파일의 권한을 변경하는 명령어로 `chmod` 명령어를 제공합니다.
사용 방법은 다음과 같습니다.

1. 모든 사용자에게 실행 권한 부여 : `chmod +x ${file name}`
2. 모든 사용자의 실행 권한 회수 하기 : `chmod -x ${file name}`
3. 본인(본인=u, 그룹=g, 다른 사용자=o) 에게만 실행 권한 부여 : `chmod u+x ${file name}`
4. 본인과 그룹에게만 실행 권한 부여 : `chmod ug+x ${file name}`
5. 모든 사용자가 사용할 수 있도록 하기 : `chmod 777 ${file name}`
6. 본인만 읽고, 쓸 수 있도록 하기 : `chmod 400 ${file name}`
7. ... 

위와 같이 조합하여 권한을 제어할 수 있습니다.
