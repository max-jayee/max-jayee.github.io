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

<!--
jq usage, jq 사용법

- 전체 출력하기
  - echo $json | jq '.'

- 특정 키의 값 출력하기
  - echo $json | jq '.key'

- 여러 키의 값 출력하기
  - echo $json | jq '.key1, .key2'

- 배열 모든 요소 출력하기
  - echo $json | jq '.[]'

- 배열 특정 인덱스 요소 출력하기
  - echo $json | jq '.[1]'

- 배열의 길이 출력하기
  - echo $json | jq 'length'

- 객체 배열에서 특정 키의 모든 값 출력하기
  - echo $json | jq '.[].name'

- 객체 배열을 특정 키의 값으로 정렬하기
  - echo $json | jq 'sort_by(.name)'

- 특정 조건을 만족하는 요소만 찾기
  - echo $json | jq '.[]| select(.age > 25)'

- 맵(map)을 사용하여 배열의 각 요소에 대한 새 배열 생성하기
  - echo $json | jq 'map({fullName: .name, birthYear: (2023 - .age)})'

- 리듀스(reduce)를 사용하여 배열의 합계 계산하기
  - echo $json | jq 'reduce .[]as $num (0: . + $num)'

- 변수를 사용하여 중간 결과 저장하기
  - echo $json | jq '(.details | .age) as $age | "Age is \($age)"'

- 텍스트로 변환하기
  - echo $json | jq -r '.name'

- 문자열 인터폴레이션을 사용하여 출력 형식 지정하기
  - echo $json | jq -r '"The name is \(.name) and the age is \(.age)"'

- 파일에서 json 데이터 읽기
  - jq '.' filename.json

-->

<!--
jenkinsfile 후행 job 설정

```
stages {
  stage('trigger another job') {
    steps {
      script {
        build job: 'job name', parameters: [
          string(name: 'param1', value: env.SYSTEM_ENV_VAR1),
          string(name: 'param1', value: env.SYSTEM_ENV_VAR1)
        ], wait: true // wait: true 은 해당 job 이 끝날때까지 기다리고싶을때 사용
      }
    }
  }
}
```
-->