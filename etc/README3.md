<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# ETC2

## This is a playground

### Temporary things

<!--
hosts 파일

linux: /etc/hosts
windows: C:\Windows\System32\drivers\etc\hosts
-->

<!--
argocd all sync disable

```
#! /bin/bash

NS_ENV="prd"
EXCEPTION_LIST="istio-system|virtual|config-map"
APPLICATION_LIST=`kubectl get applications.argoproj.io -n openshift-gitops --no-headers | awk '{print $1}' | egrep -v "${EXCEPTION_LIST}" | grep ${NS_ENV}`

# autosync disable
for app in $APPLICATION_LIST; do 
  echo " ### $app ### "
  kubectl patch applications $app --type=merge -p '{"spec":{"syncPolicy":{"automated":null}}}' -n openshift-gitops
  sleep 1
done
```
-->

<!--
argocd all sync enable

```
#! /bin/bash

NS_ENV="prd"
EXCEPTION_LIST="istio-system|virtual|config-map"
APPLICATION_LIST=`kubectl get applications.argoproj.io -n openshift-gitops --no-headers | awk '{print $1}' | egrep -v "${EXCEPTION_LIST}" | grep ${NS_ENV}`

# autosync disable
for app in $APPLICATION_LIST; do 
  echo " ### $app ### "
  kubectl patch applications $app --type=merge -p '{"spec":{"syncPolicy":{"automated":{"prune":true,"selfHeal":false}}}}' -n openshift-gitops
  sleep 3
done
```
-->

<!--
pod all down

```
#! /bin/bash

PROFILE="prd"

func_systemcode_appcode ()
{
  NAMESPACE="네임스페이스"
  DEPLOYMENTS=`kubectl get deployment -n ${NAMESPACE} --no-headers | awk '{print $1}'`

  for app in $DEPLOYMENTS; do
    echo " ### $app pod down ###"
    kubectl scale --replicas=0 deploy/$app -n $NAMESPACE
    sleep 1
  done
}

func_systemcode_appcode
```
-->

<!--
systemd service log path 로그 경로

```bash
[Service]
...
ExecStart=
StandardOutput=/LOG/system/system.log
StandardError=/LOG/system/err-system.log
...
```

일반 리눅스(strftime 을 사용하는)에서는 % 을 이용하여 날짜를 넣을 수 있다함
```bash
StandardOutput=/LOG/system/system-%Y-%m-%d_%H-%M-%S.log
StandardError=/LOG/system/err-system.log
```
-->

<!--
git diff 직전꺼 변경분 확인

# A(추가), M(수정), R(이름 바뀌며 새로 생성)
git diff --name-only --diff-filter=AMR ${브랜치 또는 HEAD}~1 ${브랜치 또는 HEAD} | tee modified
# D(삭제) or R(이름 바뀌며 제거)
git diff --name-only --diff-filter=D ${브랜치 또는 HEAD}~1 ${브랜치 또는 HEAD} | tee removed
git diff --name-only --diff-filter=R ${브랜치 또는 HEAD} ${브랜치 또는 HEAD}~1 | tee -a removed
-->

<!--
bash shell script var length / 변수 길이

${#변수명}
-->

<!--
bash shell script multiple var length / 다중 변수 길이

retval=$((${#변수명1}+${#변수명2}+${#변수명3}))
-->

<!--
bash shell script check directory / 디렉토리 확인

if [ ! -d 디렉토리명 ]; then
 mkdir 디렉토리명
fi
-->

<!--
tar empty

touch empty-file-list
tar -cT empty-file-list -f empty-files.tar
-->

<!--
bash shell script parameter count check / 파라미터 확인

if (($# < 1)); then
  echo "usage: $0 올바른 파라미터"
  exit 1
fi
-->

<!--
bash shell script string comparison / 문자열 비교

if [ "aa" == "bb" ]; then
  echo "correct!"
fi

if [ "aa" != "bb" ]; then
  echo "incorrect!"
fi
-->

<!--
kubernetes hpa remove all / 전체 제거

kubectl delete hpa --all
kubectl delete hpa -A
-->

<!--
dbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(LOAD_BALANCE=OFF)(FAILOVER=ON)(PROTOCOL=TCP)(HOST=192.167.20.174)(PORT=1521))(ADDRESS=(PROTOCOL=TCP)(HOST=192.167.20.173)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=ora9i)))</value>

# 해당 url에 RAC로 구성된 서버의 vip 2개와 각각의 포트 그리고 대표 service name을 입력한다 LOAD_BALANCE는 client 단에서 로드 밸런싱 여부를 뜻하고 FAILOVER의 경우 CTF기능을 사용할지 말지를 뜻한다
-->

<!--
jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=OFF)(FAILOVER=ON)(ADDRESS=(PROTOCOL=TCP)(HOST=192.167.20.174)(PORT=1521))(ADDRESS=(PROTOCOL=TCP)(HOST=192.167.20.173)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=ora9i)(FAILOVER_MODE=(TYPE=SELECT)(METHOD=BASIC))(RETRIES=5)(DELAY=10)))</value>

# 앞의 jdbc.......................(CONNECT_DATA=(SERVICE_NAME=ora9i) 부분은 CTF 설정과 동일하다. 그러나 FAILOVER_MODE 뒤에 정의되는 부분이 TAF의 mode와 method, RETRIES, DELAY 를 설정하는 부분이다.(RETRIES와 DELAY는 굳이 설정할 필요는 없다) 해당 옵션의 동작은 앞을 참조하라
-->

<!--
gitlab default permission setting / 초기 권한 설정

프로젝트 생성 막기
 - 이동 : Admin - General - Visibility and access controls
 - Default project creation protection : Maintainers 로 변경
 - 그룹에 멤버 추가할땐 무조건 Reporter 로 권한 부여

 - 이동 : Admin - General - Account and limit
 - Default projects limit : 0 으로 설정

그룹 생성 막기
 - 이동 : Admin - General - Account and limit
 - User restrictions : 체크 해제

-->

<!--
nginx environment variable / nginx 환경변수 사용하기

envsubst 를 사용하여 시스템 환경 변수를 지정하여 반영할 수 있다.

envsubst '$환경변수명1 $환경변수명2' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

nginx # 기동
-->

<!--
gitlab migration

sudo gitlab-backup create # 에러가 발생하면 로그중 정답이 있으니 볼 것, no space left 는 백업 파일 생성할 곳에 용량이 부족한 것으로 늘려줄것
# sudo gitlab-backup create STRATEGY=copy # 누군가 백업 중 데이터를 조작하고있으면 백업이 안되는데 이를 방지하기 위해 copy 하는 방식으로 전략을 바꿔주는것
ls /var/opt/gitlab/backups

(optional copy) /etc/gitlab/gitlab-secrets.json # 얘는 해줘야 기존 리파지토리를 수정할 수 있음 # 주의 얘를 바꾸는경우 secret 으로 만드는 모든 데이터를 복호화 할 수 없어 시크릿 정보들을 이용할 수 없음: ldap secret 경로: /var/opt/gitlab/gitlab-rails/shared/encrypted_settings/ldap.yaml.enc
(optional copy) /etc/gitlab/gitlab.rb

sudo cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/
sudo chown git:git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar
sudo gitlab-ctl stop puma
sudo gitlab-ctl stop sidekiq
# Verify
sudo gitlab-ctl status
sudo gitlab-backup restore BACKUP=11493107454_2018_04_25_10.6.4-ce
sudo gitlab-ctl restart
sudo gitlab-rake gitlab:check SANITIZE=true # wait for a minute
-->

<!--
argocd repository yaml 등록

```
apiVersion: v1
kind: Secret
metadata:
  annotations:
    managed-by: argocd.argoproj.io
  labels:
    argocd.argoproj.io/secret-type: repository
  name: repo명
  namespace: openshift-gitops
stringData:
  name: repo명
  password: gitlab 비밀번호
  project: default
  type: git
  url: https://gitlaburl.git
  username: gitlab ID
```
-->

<!--
argocd application yaml 등록

```
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ${application name}
  namespace: ${namespace name}
spec:
  destination:
    (optional) namespace: ${target namespace name}
    server: https://kubernetes.default.svc
  project: default
  source:
    path: .
    repoURL: ${cd gitlab url}.git
    targetRevision: dev
  syncPolicy:
    automated:
      selfHeal: true
```
-->

<!--
kubectl 특정 값을 갖는 특정 secret 일괄 제거

```bash
#! /bin/bash

for secret in $(kubectl get secret -n kubernetes-gitops | awk '{print $1}'); do
  if [ "" != "$(kubectl get secret $secret -n kubernetes-gitops -o yaml | grep ${특정 secret 변수} | awk '{print $2}' | base64 -d | grep ${특정 secret 값})" ]; then
    kubectl delete secret $secret -n kubernetes-gitops
  fi
done
```
-->

<!--
spring boot 의 embedded tomcat 사용시 외부에서 context path 잡는법

export SERVER_SERVLET_CONTEXT_PATH=/context-path
java -jar file_name.jar

kunernetes deployment 에서는 아래와 같이 설정하면 됨
```yaml
  env:
    - name: SERVER_SERVLET_CONTEXT_PATH
      value: "/context-path"
```
-->

<!--
gitlab rest api user modification

curl -X PUT -H 'PRIVATE-TOKEN: ${token}' "https://gitlab.com/api/users/:id?can_create_group=false"
curl -X PUT -H 'PRIVATE-TOKEN: ${token}' "https://gitlab.com/api/users/:id?projects_limit=0"
-->

<!--
linux sub group 에 user 추가

usermod -aG ${user 를 추가할 sub groups by ,(comma)} ${추가할 user name}
id # check user info
-->

<!--
nginx host not found in upstream 문제

nginx 의 upstream 를 container 환경에서 사용시 발생되는 오류로 공유받음
 - resolver 를 사용하여 해결 가능하다고 공유받음
-->

<!--
jenkinsfile script 태그에서 변수 사용하기

```gradle
def accounts = [
  "sys-bz1": 11111
  , "sys-bz2": 22222
]

pipeline {
  stages {
    stage("stage 1") {
      environment {
        SYSTEM_CODE = "sys"
        BIZ_CODE = "bz1"
      }
      steps {
        script {
          sh '''
          podman build --build-arg ACCOUNT_ID=''' + accounts["${SYSTEM_CODE}-${BIZ_CODE}"] + ''' -t image-name:version ./
          '''
        }
      }
    }
  }
}
```
-->

<!--
gitlab 기타 브랜치 막기

gitlab 의 protected 권한은 가장 낮은게 먹고
gitlab 의 group, repository 권한은 repository 권한을 우선으로 먹는다.

따라서 특정 브랜치외에 다른 브랜치 사용을 막고자하는 경우 * 로 push, merge 를 막고, 특정 브랜치별 권한 제어로 가능하다.
-->

<!--
nexus 경로 변경시 유의할 점

TODO: local 에 jar 를 받을때 dns 명을 기반으로 캐싱하는 것으로 보인다.
그래서 일괄적으로 변경하여 동시에 많은이들이 한꺼번에 받게되면 네트워크 대역이 부족하여 jar 가 안받아 질 수 있음
그런경우 순차적으로 dns 를 변경하는 방법으로 우회할 수 있다.
-->

<!--
jenkins rest api

jenkins rest api 사용법은 ".../api/" 라고 하면 나온다.
이는 공식 도큐먼트인 https://www.jenkins.io/doc/book/using/remote-access-api/ 에서 가이드하고 있다.
예를 들어 https://ci.jenkins.io/job/Websites/job/jenkins.io/job/master/lastSuccessfulBuild/ 와 같은 상황에서 사용할 수 있는 api 는 끝에 /api 를 붙인 https://ci.jenkins.io/job/Websites/job/jenkins.io/job/master/lastSuccessfulBuild/api/  에서 확인 가능하다.
-->

<!--
linux 소문자를 대문자로

```
echo "hi hello" | tr '[:lower:]' '[:upper:]'
```
-->

<!--
Apache Flink

1. 독일어로 민첩함을 뜻하는 단어로 베를린 TU대학교에서 시작된 아파치 프로젝트
2. Exactly-once의 이벤트 처리를 보장하는 네이티브 스트림방식
3. 지연 발생이 적고 처리량은 높으며 비교적 사용하기 쉬움
4. 일괄처리 기능도 제공하지만 스트림 프로세싱을 목적으로 주로 사용
5. 프로세스: 소스(수신) -> 트랜스포메이션(가공) -> 싱크(송신)
-->

<!--
gitlab version upgrade

major 15 version -> major 16 version

```
sudo dnf install gitlab-ce-15.11.13-ce.0.el8
sudo dnf install gitlab-ce-16.3.6-ce.0.el8 (turning point)
sudo dnf install gitlab-ce-16.7.0-ce.0.el8
```

Creating configuration backup archive: gitlab_config_1703577591_2023_12_26.tar
/etc/gitlab/
/etc/gitlab/gitlab-secrets.json
/etc/gitlab/trusted-certs/
/etc/gitlab/gitlab.rb.bak-before-ldap
/etc/gitlab/gitlab.rb
Configuration backup archive complete: /etc/gitlab/config_backup/gitlab_config_1703577591_2023_12_26.tar

rpm 으로 설치시 명령어
sudo yum localinstall -y ${package 명 .rpm 포함}
sudo dnf install -y ${package 명 .rpm 포함}
-->

<!--
crontab 활성 / 비활성화

비활성화
crontab -l > crontab-backup.txt
crontab -r

활성화
crontab crontab-backup.txt
crontab -l

-->

<!--
linux comment / uncomment

To comment, command is `:%s/^/#/`. In all lines (%), it substitutes (s///) the begin of line (^) with a hash (#).
To uncomment, command is `:%s/^#//`
-->

<!--
visual studio code 에서 markdown 문법 체크를 하는데, 특정 규칙을 비활성화 할 수 있다.

이는 프로젝트 root 에 .markdownlint.json 파일을 만들어 규칙을 false 로 주면 된다.
-->

<!--
catalina 로그를 바꾸려면 /usr/local/tomcat/conf 에서 logging.properties 에서
java.util.logging.ConsoleHanlder.formatter 를 pattern 형태의 클래스로 바꿔주고
해당 클래스의 pattern 을 정의해주어야한다.

아니면 더 업그레이드된 juli 를 쓰려면 아래와 같이 설정한다.
java.util.logging.ConsoleHandler.formatter = org.apache.juli.OneLineFormatter
org.apache.juli.OnLineFormatter.timeFormat = yyyy-MM-dd HH:mm:ss
-->

<!--
gradle build multi thread

< v6.0
settings.gradle
gradle.startParameter.parallel = true
gradle.startParameter.maxParallelForks = 4

> v6.0
gradle.properties
org.gradle.parallel=true
org.gradle.workers.max=4
-->

<!--
process umask 확인 하기

ps -ef | grep ${프로세스명} # 여기서 pid 획득

cat /proc/${pid}/status | grep Umask
-->

<!--
tomcat 에 umask 0002 설정하는 방법

UMASK=0002 로 환경변수 잡거나
catalina.sh 에 상위에 umask 0002 명령어 주입
-->

<!--
spring boot embedded tomcat 에서 umask 0002 설정하는 방법

entrypoint.sh 에서 umask 0002 를 주입
-->

<!--
gitlab 전체 프로젝트에 전체 브랜치에 protected 권한 부여하기

```bash
#! /bin/bash

# 0 => No access
# 30 => Developer access
# 40 => Maintainer access
# 60 => Admin access

branch_name="*"
merge_access_level=60
push_access_level=60

for id in {0..530}
do
  curl -X POST -H 'PRIVATE-TOKEN: gplat-asdfkjhadskjfh' "https://gitlab.com/api/v4/projects/${id}/protected_branches?name=${branch_name}&merge_access_level=${merge_access_level}&push_access_level=${push_access_level}"
done
```
-->

<!--
gitlab 전체 프로젝트에 특정 브랜치에 protected 권한 회수하기

#! /bin/bash

branch_name="*"

for id in {0..530}
do
  curl -X DELETE -H 'PRIVATE-TOKEN: gplat-asdfkjhadskjfh' "https://gitlab.com/api/v4/projects/${id}/protected_branches/${branch_name}"
done

-->

<!--
gitlab 전체 프로젝트에 protected tag 권한 부여하기

```bash
#! /bin/bash

# 0 => No access
# 30 => Developer access
# 40 => Maintainer access
# 60 => Admin access

tag_name="*-*"
create_access_level=60

for id in {0..530}
do
  curl -X POST -H 'PRIVATE-TOKEN: gplat-asdfkjhadskjfh' "https://gitlab.com/api/v4/projects/${id}/protected_tags?name=${tag_name}&create_access_level=${create_access_level}"
done
```
-->

<!--
gitlab 전체 프로젝트에 protected tag 해제하기

```bash
#! /bin/bash

tag_name="*-*"

for id in {0..530}
do
  curl -X DELETE -H 'PRIVATE-TOKEN: gplat-asdfkjhadskjfh' "https://gitlab.com/api/v4/projects/${id}/protected_tags/${tag_name}"
done
```
-->

<!--
Java thread safe Date 클래스

SimpleDateFormat 은 thread safe 하지않아서 multi thread 상황에서 성능 저하 요인이 될 수 있다고 한다.

그래서 DateTimeFormatter 를 사용하는 것이 좋으며 간략한 사용방법은 다음과 같다.

DateTimeFormatter yyyyMMdd = DateTimeFormatter.ofPattern("yyyyMMdd");
DateTimeFormatter HHmmss = DateTimeFormatter.ofPattern("HHmmss");

LocalDateTime now = LocalDateTime.now();
now.format(yyyyMMdd);
now.format(HHmmss);
-->

<!--
sed 모음집

sed '/APP/d' file_name : APP 문자가 포함된 줄을 삭제하여 출력한다.
sed '/^APP/d' file_name : APP 문자로 시작하는 줄을 삭제하여 출력한다.
sed '/APP/!d' file_name : APP 문자가 있는 줄만 지우지 않는다.
sed '/^APP/!d' file_name : APP 문자로 시작하는 줄만 지우지 않는다.
sed '1,2d' file_name : 처음 1줄, 2줄을 지운다.
sed '/^$/d file_name : 공백라인을 삭제하는 명령이다. 
-->

<!--
tar 모음집

tar xf ${file}.tar || exit 1 : tar 해제 실패시 에러 리턴
-->

<!--
shell command 모음집

A && B : A 가 exit status 가 0 일때 B 실행
A || B : A 가 exit status 가 0 이 아닐때 B 실행
-->

<!--
// TODO: cargo new 로 만든 프로젝트가 git 에 트래킹이 안되는 이유
-->

<!--
git 모음집

git add ${FILE_NAME}
error: '${FILE_NAME}' does not have a commit checked out
fatal: adding files failed

원인: 로컬 저장소(내 컴퓨터)에 .git 파일이 여러 개 있어서 sub module 로 관리되어 부모에서 잡을 수 없게됨  
  일반적으로 PL 도구를 이용하여 생성한 git 프로젝트의 경우 자동으로 .git 설정이 들어가며 발생하는 경우가 많음
해결: 중복 생성된 .git을 찾아서 삭제한다.
-->

<!--
jvm 옵션 주는 방법

export JAVA_OPTS=""

JAVA_OPTS 환경 변수에 설정하면 jvm 옵션이 먹는다.
-->

<!--
copy 쉘 스크립트 예시

#! /bin/bash

current_date_time=`date +"%Y%m%d_%H%M%S"`
echo "current_date_time=${current_date_time}"

echo ""
echo "####################################################"
echo "## usage: ./file-copy.sh <source_dir> <target_dir> ##"
echo "####################################################"
echo ""

source_dir=$1
target_dir=$2

if [ -z ${source_dir} ]; then
  echo "source dir 가 입력되지 않았습니다."
  exit 1
fi

if [ -z ${target_dir} ]; then
  echo "target dir 가 입력되지 않았습니다."
  exit 1
fi

log_file=file-copy-${current_date_time}.log

cp -Rv ${source_dir} ${target_dir} > 로그경로/${log_file} 2>&1

retval=$?

if [ 0 = "${retval}" ]; then
  echo "success"
else
  echo "fail"
fi

-->

<!--
java.base@17.0.2 에러 / java.lang.ClassFormatError accessible: module java.base does not "opens java.lang" to unnamed module 에러

jdk 9 부터 발생하는 에러로 버전 확인이 필요함
종종 시스템에 설치된 jdk 경로와 STS 에서 사용하는 jdk 경로가 다른 경우 발생

1. STS -> Window -> Preferences -> Java -> Installed JREs 에 설정된 jdk 확인
2. 1.8.0 이 아닌경우
3. cmd 창에서 `where java` 를 쳐서 나온 경로 중 bin 상위 폴더까지의 경로를 Add 해서 잡아주고
4. Apply and Close & STS 재부팅
-->

<!--
gitlab repository name 으로 repository id 가져오기

curl -X GET -H 'PRIVATE-TOKEN: ${personal access token}' "https://gitlab/api/v4/projects?search=${project name}" | jq .[0].id

-->

<!--
gitlab repository name (namespace 포함) 으로 repository id 가져오기

curl -X GET -H 'PRIVATE-TOKEN: ${personal access token}' "https://gitlab/api/v4/projects?search_namespaces=true&search=${project group}/${project name}" | jq .[0].id

-->

<!--
자동으로 프로젝트에 protected tag 걸기

project_id=$(curl -X GET -H "PRIVATE-TOKEN: ${personal access token}" "https://gitlab/api/v4/projects?search_namespaces=true&search=${project group}/${project name}" | jq .[0].id)

curl -X POST -H "PRIVATE-TOKEN: ${personal access token}" "https://gitlab/api/v4/projects/${project_id}/protected_tags?name=${태그명}&create_access_level=0"
-->

<!--
gitlab 16 이상 버전에서 personal access token 만료기한 없애기

서버에 들어가서
sudo gitlab-rails console

token = PersonalAccessToken.find_by_token('${토큰 이름}')
token.update!(expires_at: nil)
exit
-->

<!--
nginx 기본 취약점 해소

1. 버전 노출 제한
```
http{
 ...
 server_tokens off;
 ...
}
```

2. symbolic link 제한
```
http{
 ...
 disable_symlinks on;
 ...
}
```

-->

<!--
jenkins 버전 업그레이드하면서 JSONObject["scm"] is not a JSONObject. 에러

build-timeout, token-macro, workflow-api, workflow-job 플러그인 최신화로 해결
-->

<!--
kafdrop 에서 delete topic 기능 해제하는 방법

kafdrop jar 실행시 옵션에 --topic.deleteEnabled=false 추가
-->

<!--
Java class file version - Java version

49 = Java 5
50 = Java 6
51 = Java 7
52 = Java 8
53 = Java 9
54 = Java 10
55 = Java 11
56 = Java 12
57 = Java 13
58 = Java 14
59 = Java 15
60 = Java 16
61 = Java 17
62 = Java 18
63 = Java 19
64 = Java 20
65 = Java 21
-->

<!--
// TODO SSLv2, SSLv3, TLS1.0, TLS1.1, TLS1.2 차이

-->