<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# ETC

## This is a playground

### Temporary things

첫번째 파라미터에 해당하는 파일의 절대 경로 : `SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"`

jpi -> hpi 로 변환 : `ls | grep '.jpi' | cut -d . -f 1 | while read line; do mv $line.jpi $line.hpi; done`

파일 전송 : `scp ${local file} ${target account}@${target url}:${target path}`

파일 받기 : `scp ${target account}@${target url}:${target path} ${local file}`

폴더 전송 : `scp -r ${local file}/* ${target account}@${target url}:${target path}/`

Jenkins Execute shell 에서 원격 데몬 실행 명령시 return 올때까지 waiting 걸릴때 해소법 : `ssh -f  ${account}@${server} sh /home/administrator/bin/startServer.sh` 와 같이 -f 옵션 주기

nexus bulk download :  

```bash
sourceServer=
sourceRepo=
sourceUser=
sourcePassword=
logfile=$sourceRepo-backup.log
outputFile=$sourceRepo-artifacts.txt

# ======== GET DOWNLOAD URLs =========
url=$sourceServer"/service/rest/v1/assets?repository="$sourceRepo
contToken="initial"
while [ ! -z "$contToken" ]; do
    if [ "$contToken" != "initial" ]; then
        url=$sourceServer"/service/rest/v1/assets?continuationToken="$contToken"&repository="$sourceRepo
    fi
    echo Processing repository token: $contToken | tee -a $logfile
    response=`curl -ksSL -u "$sourceUser:$sourcePassword" -X GET --header 'Accept: application/json' "$url"`
    readarray -t artifacts < <( jq  '[.items[].downloadUrl]' <<< "$response" )
    printf "%s\n" "${artifacts[@]}" > artifacts.temp
    sed 's/\"//g' artifacts.temp > artifacts1.temp
    sed 's/,//g' artifacts1.temp > artifacts.temp
    sed 's/[][]//g' artifacts.temp > artifacts1.temp
    cat artifacts1.temp >> $outputFile
#for filter in "${filters[@]}"; do
     #   cat artifacts.temp | grep "$filter" >> $outputFile
    #done
    #cat maven-public-artifacts.txt
    contToken=( $(echo $response | sed -n 's|.*"continuationToken" : "\([^"]*\)".*|\1|p') )
done


# ======== DOWNLOAD EVERYTHING =========
echo Downloading artifacts...
urls=($(cat $outputFile)) > /dev/null 2>&1
for url in "${urls[@]}"; do
    path=${url#http://*:*/*/*/}
    dir=$sourceRepo"/"${path%/*}
    mkdir -p  $dir
    cd $dir
    pwd
    curl -vks -u "$sourceUser:$sourcePassword" -D response.header -X GET "$url" -O  >> /dev/null 2>&1
    responseCode=`cat response.header | sed -n '1p' | cut -d' ' -f2`
    if [ "$responseCode" == "200" ]; then
        echo Successfully downloaded artifact: $url
    else
        echo ERROR: Failed to download artifact: $url  with error code: $responseCode
    fi
    rm response.header > /dev/null 2>&1
    cd $curFolder
done
```

nexus bulk upload :

```bash
#! /bin/bash

files="./files.out"

username="${nexus id}"
password="${nexus pw}"
nexusurl="http://${nexus ip}:${nexus port}/repository/${repository name}/"

find . -name '*.*' -type f | cut -c 3- | grep "/" > $files

while read i;
do
    echo "upload ${i} to ${nexusurl}"
    curl -v -u ${username}:${password} --upload-file ${i} "${nexusurl}${i}"
done <$files
```

#### variable arithmetic expansion in shell script

`$((EXPR))`
ex: `num=$((num1 + num2))` or `num=$((num1 + 3))`

#### indirect parameter in shell script

```bash
VAR_KEY="KEY"
VAR_VAL="VAR_KEY"
${!VAR_VAL} # return KEY
```

#### cut 명령어

`cut -c 5-7` 맨 첫글짜가 1이고 5-7 번째 문자만 자르기

#### 소문자로 모두 바꾸기

`awk '{print tolower($0)}'`

#### 행 문자 바꾸기

`sed 's/_/-/g'`

#### 현재 위치에서 절대 경로 얻기

`pwd -P`

#### 결과값 shell 에서 받기

`` 변수=`command` ``

#### 특정 파일이 실행되고 있는 프로세스 죽이기

`` kill -9 `ps -ef | grep ${filename} | grep -v grep | awk '{print $2}'` ``

#### 특정 프로세스 stdout 보기

`` cat /proc/`ps -ef | grep ${filename} | grep -v grep | awk '{print $2}'`/fd/1 `` <!-- 1: stdout, 2: stderr -->

#### 패스워드 없이 git clone (ssh key)

```bash
# 1. Register SSH Key to git repository(github, gitlab etc..)
# 2. git clone (ex. github)
git clone git@github.com-${github id}:${username}/${repo name}.git
```

#### 패스워드 없이 git clone (http(s))

```bash
git clone http(s)://${id}:${password / access token}@${server uri}/${username / repo group}/${repo name}.git
```

#### 다수의 ssh key 관리

```bash
vi ~/.ssh/config
# ---------- ~/.ssh/config
Host my-private-server # alias
    Hostname 192.168.0.1 # real ip or dns
    User user1 # (optional) user account 
    Port 22 # (optional) connecting port
    IdentityFile ~/.ssh/aws-key.pem # using identity file path + file name
Host my-private-server2 # alias
    Hostname 192.168.0.1 # real ip or dns
    ...
    IdentityFile ~/.ssh/aws-key2.pem # using identity file path + file name
# ----------
```

⭐️Tip: SSH config 파일은 다른 사용자가 사용할 수 있으면 보안상 문제의 요지가 됨으로 권한은 조절하는 것이 좋다. `chmod 400 ~/.ssh/config`

#### 방화벽 확인 centos 8

sudo firewall-cmd --list-ports

#### windows 특정 프로세스 킬

<https://seomile.tistory.com/91>

<!-- TODO readinessProbe, livenessProbe -->
readinessProbe: 서비스가 가능한 상태인지
livenessProbe: 컨테이너가 살아있는지
Command probe
livenessProbe:
      exec:
        command:
        - cat
        - /tmp/healthy

HTTP probe
readinessProbe:
          httpGet:
            path: /readiness
            port: 8080

TCP probe
livenessProbe:
      tcpSocket:
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5

<!-- TODO Dockerfile add, copy, run, cmd, env, arg 등.. -->
```dockerfile
FROM nexus-ip-or-domain:5000/los/base/openjdk:8-jdk-alpine

USER root

# Timezone 설정
ENV TZ=Asia/Seoul

# application copy & set
ARG JAR_FILE=app.jar

COPY ${JAR_FILE} /app/devon/app.jar

CMD ["java", "-Dspring.profiles.active=dev", "-jar", "/app/devon/app.jar"]
```

<!-- TODO jenkins 모든 빌드 히스토리 제거 -->
Script Console 이동
Jenkins 관리 → Script Console 이동 후 아래 스크립트 수행

모든 아이템의 빌드 히스토리 제거
item = Jenkins.instance.getAllItems().each() { item ->
  item.builds.each() { build ->
    build.delete()
  }
  item.updateNextBuildNumber(1)
}
특정 아이템의 빌드 히스토리 제거
item = Jenkins.instance.getItemByFullName("jobname")
item.builds.each() { build ->
  build.delete()
}
item.updateNextBuildNumber(1)

<!-- TODO: sts 에서 remote branch 추가하기 -->
git -> project 우클릭 -> Fetch from ... -> Configure -> Advanced... -> 'All Branches' or 'All Tags' 클릭해서 설정

<!-- TODO: windows etc hosts 추가 -->
C:\Windows\System32\drivers\etc\hosts 에 추가
<!-- TODO: System, System32 차이 -->

<!-- TODO: 특정 디렉토리 빼고 검색 -->
grep -R --exclude-dir=${dir} -rn "string" path

<!-- TODO: aws 액세스 키, 비밀 액세스 키 차이 -->

<!-- TODO: No X11 DISPLAY variable was set, but this program performed an operation which requires it 에러 -->
export DISPLAY=:0.0
export DISPLAY=:0

<!-- TODO: 두 날짜 사이 간격 구하기 -->
```java
String date1 = "2021/01/02"; //날짜1
String date2 = "2021/01/01"; //날짜2

Date format1 = new SimpleDateFormat("yyyy/MM/dd").parse(date1);
Date format2 = new SimpleDateFormat("yyyy/MM/dd").parse(date2);

long diffSec = (format1.getTime() - format2.getTime()) / 1000; //초 차이
long diffMin = (format1.getTime() - format2.getTime()) / 60000; //분 차이
long diffHor = (format1.getTime() - format2.getTime()) / 3600000; //시 차이
long diffDays = diffSec / (24*60*60); //일자수 차이

System.out.println(diffSec + "초 차이");
System.out.println(diffMin + "분 차이");
System.out.println(diffHor + "시 차이");
System.out.println(diffDays + "일 차이");

private static String AddDate(String strDate, int year, int month, int day) throws Exception {
  
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
    Date parsedDate = simpleDateFormat.parse(strDate);
  Calendar calendar = Calendar.getInstance();
        
  calendar.setTime(parsedDate);
        
  calendar.add(Calendar.YEAR,  year);
  calendar.add(Calendar.MONTH, month);
  calendar.add(Calendar.DATE,  day);
        
  return simpleDateFormat.format(calendar.getTime());
 }
```

<!-- TODO: intellij -->
<https://www.jetbrains.com/help/idea/searching-everywhere.html#search_all>

<!-- TODO: pem <-> ppk -->
pem : openssh, ppk : putty 용
Windows puttygen 설치
Linux sudo yum install putty or sudo apt install putty-tools
Windows
Macos brew install putty
pem -> ppk
puttygen pemKey.pem -o ppkKey.ppk -O private
ppk -> pem
puttygen ppkkey.ppk -O private-openssh -o pemkey.pem

<!-- TODO: private -> public -->
ssh-keygen -y -f private-key.pem

<!-- TODO: aws  -->
- internet gateway
- vpc
- subnet
- vpc router
- available zone

<!-- TODO: first aws option -->
- create vpc
- create subnet
- create internet g/w
- set vpc routing table (internet g/w)

<!-- TODO: 특정 문자로 자르기-->
```bash
#!/bin/bash

str="Hello:World:Bash"

echo $str | cut -d ':' -f1
echo $str | cut -d ':' -f2
echo $str | cut -d ':' -f3
```

<!-- TODO: 특정 문자로 자르기 응용-->
```bash
#!/bin/bash
file_name_len=${#1} # #은 문자열 길이 반환

end=$((file_name_len-4)) # 산술 식
fn=`echo $1 | cut -c 1-$end` # 1부터 시작, 뒤에서 4자리 날리기

image_name=`echo $file_name_len | cut -d '-' -f1`
image_tag="`echo $file_name_len | cut -d '-' -f2`-`echo $file_name_len | cut -d '-' -f3`"

```

<!-- local image translate to remote image-->
```bash
file format : ${image_name}_${image_tag}.tar
```

```bash
#! /bin/bash
image_registry=""

fn=$1
podman load -i $fn
fn_len=${#fn}

end=$((fn_len-4)) #.tar 기준
fn=`echo $1 | cut -c 1-$end`

in=`echo $fn | cut -d '_' -f1` # image name
tag=`echo $fn | cut -d '_' -f2`

podman tag $in:$tag $image_registry/repo/path/$in:$tag
podman rmi docker.io/library/$in:tag
```

<!-- push remote image-->
```bash
file format : ${image_name}_${image_tag}.tar
```

```bash
#! /bin/bash
image_registry=""
image_registry_token=`cat ${token_path}`

fn=$1
fn_len=${#fn}

end=$((fn_len-4)) #.tar 기준
fn=`echo $1 | cut -c 1-$end`

in=`echo $fn | cut -d '_' -f1` # image name
tag=`echo $fn | cut -d '_' -f2`

podman login -u ${registry_id} -p ${image_registry_token} ${image_registry}

podman push ${image_registry}/repo/path/${in}:${tag}
```

<!-- TODO: vi tab space 4-->
```bash
set smartindent # 새로운 라인에서 auto indentation 설정, 이건 딱히..
set tabstop=4 # tab 눌렀을 때 인식하는 칸 수
set expandtab # tab 을 스페이스로 확장
set shiftwidth=4 # >>, << 키로 들여쓰거나 내어쓸때 스페이스 수
```

<!-- TODO: git config -->
```bash
git config --global user.name "Your Name"
git config --global user.email you@example.com
```

<!-- TODO: cors https://coding-groot.tistory.com/91 -->

<!-- TODO: shell parameter 수 체크 -->
```bash
#! /bin/bash

np=
if [ $# -ne ${np} ];
then
  echo "${np} parameters are required."
  echo "usage 1.) $0 name username etc..
  exit 1
fi
```

<!-- TODO: sidecar container https://kubebyexample.com/learning-paths/istio/intro -->

### multiple table numbering test

|첫번째|테이블|테스트|
| :--- | :--- | :--- |
|1|1|1|
|2|2|2|

|두번째|테이블|테스트|
| :--- | :--- | :--- |
|11|11|11|
|22|22|22|

#### array in bash shell

SUB_MODULES = "MOD1 MOD2 MOD3"
for SUB_MODULE in ${SUB_MODULES}; do echo "hahahoho ${SUB_MODULE} lululala"; done

#### repo port 확인

설정 -> repository -> repositories -> http 에 포트 확인

#### k8s 에서 pinging conatiner registry Get http: server gave HTTP response to HTTPS client 오류날때

```bash
crictl pull 이미지가  안되고있을것임..
1


In my case, I simply added [[registry]] field into /etc/containers/registries.conf file simply because I was using crio

[[registry]]
insecure = true
location = "IP ADDRESS"

and restart crio

systemctl restart crio.service
```

#### java string multiple spaces to single space

```java
${string}.replaceAll(" +", " ");
```

#### java remove front, end spaces

```java
${string}.trim();
```

```bash
#! /bin/bash

np=1
if [ $# -ne ${np} ]; then
    echo "${np} parameters are required."
    echo "usage 1.) $0 los-cbh-jps-bnd-dev"
    exit 1
fi

full_args=$1 # example los-cbh-jps-bnd-dev
project_code=`echo ${full_args} | cut -c 1-3`
system_code=`echo ${full_args} | cut -c 5-7`
biz_code=`echo ${full_args} | cut -c 9-11`
type_code=`echo ${full_args} | cut -c 13-15`
env_code=`echo ${full_args} | cut -c 17-19`

template_namespace=${project_code}-${system_code}-${env_code}
template_app_name=${system_code}-${biz_code}-${type_code}
template_system_code=${system_code}
template_part=${system_code}-${biz_code}
template_env_code=${env_code}

target_files=("deployment.yaml" "route.yaml" "service.yaml")
template_keys=("template-namespace" "template-app-name" "template-system-code" "template-part", "template-env-code")
template_values=("${template_namespace}" "${template_app_name}" "${template_system_code}" "${template_part}" "${template_env_code}")

echo "created: ${system_code}/${template_app_name}"
cp -R template-devon-boot ${system_code}/${template_app_name}

for (( i=0; i<${#target_files[@]}; i++ )); do
    for (( j=0; j<${#template_keys[@]}; j++ )); do
        sed -i "s/${template_keys[j]}/${template_values[j]}/g" ${system_code}/${template_app_name}/${target_files[i]}
    done
done

pushd ${system_code}/${template_app_name}
    git fetch
    git pull
    git add *
    git commit -m "add ${template_part}"
    git push
popd

```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    openshift.io/generated-by: OpenShiftNewApp
  labels:
    app: template-app-name
    app.kubernetes.io/component: template-app-name
    app.kubernetes.io/instance: template-app-name
    app.kubernetes.io/name: template-app-name
    app.kubernetes.io/part-of: Front-End
  name: template-app-name
  namespace: template-namespace
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      deployment: template-app-name
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      annotations:
        openshift.io/generated-by: OpenShiftNewApp
        sidecar.istio.io/inject: 'false'
      creationTimestamp: null
      labels:
        app: template-app-name
        deployment: template-app-name
        version: v1
    spec:
      containers:
      - image: nexus.com:5000/los/template-system-code/template-app-name-template-env-code:0.0.0
        imagePullPolicy: Always
        name: template-app-name
        livenessProbe:
          failureThreshold: 3
          httpGet:
            path: /template-part/health
            port: 9070
            scheme: HTTP
          initialDelaySeconds: 20
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
        ports:
        - containerPort: 9070
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /template-part/health
            port: 9070
            scheme: HTTP
          initialDelaySeconds: 20
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
        resources: {}
        terminationMessagePath: /template-env-code/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
```

```yaml
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  labels:
    app: template-app-name
    app.kubernetes.io/component: template-app-name
    app.kubernetes.io/instance: template-app-name
    app.kubernetes.io/name: template-app-name
  name: template-app-name
  namespace: template-namespace
spec:
  host: template-app-name-template-env-code-int.nexus.com
  port:
    targetPort: http
  to:
    kind: Service
    name: template-app-name
    weight: 100
  wildcardPolicy: None
```

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    openshift.io/generated-by: OpenShiftNewApp
  labels:
    app: template-app-name
    app.kubernetes.io/component: template-app-name
    app.kubernetes.io/instance: template-app-name
    app.kubernetes.io/name: template-app-name
  name: template-app-name
  namespace: template-namespace
spec:
  ports:
  - name: http
    port: 9070
    protocol: TCP
    targetPort: 9070
  selector:
    deployment: template-app-name
```

```bash
podman commit  ContainerID imagename
```

```bash
podman run  -v ${host path}:${pod path}
```

```bash
useradd # non-interactive
adduser # interactive

sudo groupadd -g 2000 appadm # check cat /etc/group
RUN useradd -ms /bin/bash -g 2000 -u 2020 userid

# in dockerfile
RUN addgroup -g 2000 groupname
RUN adduser -s /bin/ash -G groupname -S -D -u 2020 username

RUN mkdir -p /DATA && chmod 774 /DATA && chown username:groupname /DATA
RUN mkdir -p /LOG && chmod 774 /LOG && chown username:groupname /LOG

USER username
```

```bash
# ocp 1000750000 으로만 uid 생성될 때
oc adm policy add-scc-to-user anyuid -z default -n ${namespace}
clusterrole.rbac.authorization.k8s.io/system:openshift:scc:anyuid added: "default"
oc adm policy add-scc-to-user anyuid -z default -n ${namespace}
```

```bash
# TODO: container 이미지 다지우기
podman rmi $(podman images -q)
# TODO: 특정 이름의 container 이미지 다지우기
podman images -a | grep "pattern" | awk '{print $3}' | xargs podman rmi
# TODO: stop all container
podman stop $(podman ps -a -q)
# TODO: remove all container
podman rm $(podman ps -a -q)
```

```java
annotation definition
@Retention(RetentionPolicy.RUNTIME)
public @interface name {
  
}
```

```bash
# occur "no space left on device" when an image creates
container management software has limited own storage space.
It occurs when the storage space used by the image is exceeded, so you can clean up the image.
```

```bash
분 시간 날짜 월 요일 명령

예시

# 매일 오전 3시 실행
00 03 * * *

# 매월 1일 오후 3시 30분 실행
30 15 1 * *

# 수요일 새벽 2시 실행
00 02 * * 3
(월 : 1, 화 : 2, 수 : 3 ... 일 : 7)

# 30분마다 실행
*/30 * * * *

# 3시, 8시에 실행
* 3,8 * * *

# 3시 ~5시 사이 20분마다 실행
*/20 3-5 * * *
```

omnibus_gitconfig['system'] = {
 "receive" => ["denyNonFastforwards = true", "denyDeletes = true"],
}

```bash
zip -er dir.zip dir
```

```bash
#!/bin/bash
echo "Bash version ${BASH_VERSION}..."
for i in {0..10..2} # {START..END..INCREMENT}
do
  echo "Welcome $i times"
done
```

```bash
for id in {0..1000}
do
  curl -X POST ${url}/api/v4/projects/${id}/protected_branches?name=feature/* -H 'PRIVATE-TOKEN: ${value}'
done
```

```bash
Thymeleaf 
```

```bash
gradlew build -Pprofile=dev # build with specific profile, systemProperty 'spring.profiles.active', project.getProperties().get('profile') in build.gradle
gradlew build --exclude-task test # build without test
```

<!-- gradle nexus repo publish -->

<!-- nexus snapshot with intellij https://mycup.tistory.com/357 -->

<!-- dns ifconfig, resolve dns 설정, ifconfig 에 설정안박으면 reboot 시 ifconfig 값으로 원복됨 -->

<!--
yum?
Yellowdog Updater Modified 의 약자로, RPM 기반의 시스템을 위한 자동 업데이터이자 소프트웨어와 같은 패키지 설치/ 삭제 도구
Duke 대학교의 물리학과에서 사용하는 Red Hat Linux 시스템의 관리를 편하게 하기 위해 만들어짐
RPM의 단점인 의존성 문제를 해결하기 위해 제공
RPM과 다른점은 자동적으로 의존성을 처리해 주며 rpm 패키지들을 안전하게 설치, 삭제 및 업데이트하기 위해 반드시 해야 할 일을 스스로 해결
단, 인터넷을 통해 필요한 파일을 저장소에서 자동으로 다운로드하여 설치하는 방식이므로 인터넷 연결이 되어있지 않다면 명령어 사용이 불가능
yum은 간편하고 접근성이 좋은 업데이터이자 설치/ 삭제 툴이다. yum에 대한 사용방법에 대해서는 명령 프롬프트 상에서 yum -h(help)를 치면 사용방법이 자세하게 설명되어 있다.
yum 명령어
yum check-update : 현재 인스톨된 프로그램 중 업데이트 된 것을 체크
yum clean all : 캐시 되어 있는 것을 모두 지움
yum deplist : yum 패키지에 대한 의존성 테스트
yum downgrade 패키지 : yum을 통한 패키지 다운그레이드
yum erase 패키지 : yum을 통한 시스템에서 삭제
yum groupinfo 그룹 : 그룹패키지의 정보를 보여줌
yum groupinstall 그룹 : 그룹패키지 설치
yum grouplist 그룹 : 그룹리스트에 관한 정보 확인
yum groupremove 그룹 : 그룹리스트에 관해 삭제
yum help : yum 도움말 확인
yum info 그룹 또는 패키지 : 패키지 또는 그룹의 패키지를 자세하게 확인
yum install 패키지 : 시스템으로 패키지의 Install을 실시
yum install 패키지명1 패키지명2의 형태로 여러 패키지를 한번에 설치 가능
yum list : 서버에 있는 그룹 및 패키지의 리스트를 보여줌
yum list installed 패키지명 : 패키지 설치여부 확인
yum list all: 설치가 가능한 모든 패키지 목록 출력
yum list updates: 업데이트 목록을 보여줌
yum localinstall 패키지 : 로컬에 설치
yum makecache : 캐쉬 다시 올림
yum provides FilePath명 : 파일이 제공하는 패키지 정보 출력
yum reinstall 패키지 : 패키지 재인스톨
yum update 패키지 : 패키지 업데이트
yum upgrade 패키지 : 패키지 업그레이드
yum search 키워드 : 키워드로 시작하는 패키지 검색
yum 옵션
-h, --help : 해당 명령어의 도움말을 보여주고 실행이 종료됨
-t, --tolerant : 에러를 자동으로 잡아서 설치
-C, --cacheonly : 캐시를 업데이트 하지 않고 전체 시스템 캐시 실행
-c [config file], --config=[config file] : 파일 위치를 알려줌
-R [minutes], --randomwait=[minutes] : 최대치의 명령어 실행시 기다림
-d [debug level], --debuglevel=[debug level] : 최종 결과를 디버깅
--showduplicates : 중복요소를 보여줌
-e [error level], --errorlevel=[error level] : 결과 중 에러를 보여줌
--rpmverbosity=[debug level name] : rpm에서 결과물을 디버깅
--version : Yum 버전을 보여주고 실행이 종료됨
-y, --assumeyes : 모든 물음에 예를 진행
-q, --quiet : 모든 작업이 종료됨
-v, --verbose : 작업을 장황하게 함
--installroot=[path] : root권한으로 path위치에 인스톨을 진행
--enablerepo=[repo] : 1개 이상의 저장소 위치에 저장시킴
--disablerepo=[repo] : 1개 이상의 저장소 위치에 저장시키지 않음
-x [package], --exclude=[package] : 패키지 이름을 제외시킴
--disableexcludes=[repo] : 이름으로 플러그인을 설치를 중단
--obsoletes : 오래된 패키지는 업데이트를 하는 동안 적절히 삭제 및 교체됨
--noplugins : yum plugin이 없도록 함
--nogpgcheck : gpg signature를 불가능하게
--skip-broken : 문제 있는 패키지는 자동으로 스킵해서 넘어감
--color=COLOR : 컬러가 사용되었을 때 조정
--releasever=RELEASEVER : $releasever의 값을 yum config와 repo파일에서 조정
--setopt=SETOPTS : 임의로 config와 repo 옵션값을 지정
--disablepresto : Presto 플러그인을 중단하고 deltarpm을 다운로드 받지 않음
-->

<!--
install some libararies on alpine linux 
libraries: build-essential, libstc++6, libgd-dev, net-tools, openjdk 8, aptitude

#cmds
podman pull alpine:3.17.2
podman run --name alpine-linux -itd alpine:3.17.2 ash
podman ps -a
podman exec -it alpine-linux ash
apk update 
apk add --no-cache build-base # for build-essential
apk add --no-cache libstc++6 # for libstc++6
apk add --no-cache libgd # for libgd-dev
apk add --no-cache net-tools # for net-tools
apk add --no-cache openjdk8 # for openjdk 8
apk add --no-cache aptitude # for aptitude

-->

<!-- usermod -d /var/www/ testuser # 계정 홈 디렉토리 변경 -->

<!-- mattermost webhook https://developers.mattermost.com/integrate/webhooks/incoming/ -->

<!-- 
alpine+fontconfig

podman pull openjdk:8-jdk-alpine
podman run --name alpine-openjdk-8 --privileged -itd openjdk:8-jdk-alpine sleep infinity
podman exec -it alpine-openjdk-8 ash
apk update
apk add --upgrade fontconfig
exit
podman commit alpine-openjdk-8 openjdk:8-jdk-alpine-fontconfig
podman save -o openjdk8-alpine-fontconfig.tar openjdk:8-jdk-alpine-fontconfig

usually font path: /usr/share/fonts
copy ttf directory to font path and renew font config calling `fc-cache -f -v` cmd
-->

<!-- 
gradle snapshot 적용

configurations.all {
  resolutionStrategy.cacheChangingModulesFor 0, 'seconds'
}
-->

<!--
jenkins 로그인 없이 접속하려고할때 404 뜨는데 그거 홈으로 바꾸는법
war 폴더에 WEB-INF 가서 web.xml 에서
error-page 에
<error-code>404</error-code> 넣고
<location>/</location> 으로 적용
-->

<!--
svn 서버 설치
1.1 yum(패키지설치관리도구)을 이용해서 subversion 설치(🦄root 계정으로)
# yum install subversion
1.2 Repository 생성
# mkdir /home/svn 👈 Root 저장소 생성
# cd /home/svn 👈 생성된 Root 저장소로 이동
# svnadmin create --fs-type fsfs tmp_repo1 👈 저장소 생성(여기서는 tmp_repo1)
1.3 SVN 시작 및 체크아웃을 통한 정상설정 확인
# svnserve –d –r /home/svn/ 👈 svn 시작 // 3690 << default port >>
# svn checkout svn://127.0.0.1/tmp_repo1 👈 svn://서버ip/저장소 명
2. 사용자 생성 및 권한 설정
2.1 SVN 설정
# vi cd tmp_repo1/conf 👈 생성된 저장소의 conf 디렉토리로 이동
# vi svnserve.conf

[general]
anon-access = none 👈 인증 되지 않은 사용자 접근 거부
auth-access = write 👈 인증된 사용자 쓰기 권한
password-db = passwd 👈사용자에 대한 계정정보
authz-db = authz 👈사용자에 대한 저장소 권한주기. Optional
2.2 사용자 설정
# vi passwd
[users]
user1 = user1
user2 = user2
user3 = user3 👈 계정 = 패스워드
2.3 권한 설정
# vi authz
[groups]
usergroup = user1, user2 👈 사용자를 usergroup에 추가
[/] 👈 최상위 디렉토리 권한
*=rw
[repository:/tmp_repo1] 👈 저장소 권한
@usergroup = rw 👈 usergroup 그룹에 rw 권한부여
user3 = rw 👈 user3 사용자에게 rw 권한부여
2.4 SVN 권한 설정
# chmod –R 760(or 764) /home/svn/*
👉 760 – 파일생성자: RWE, 그룹: RW 부여
👉 764 – 파일생성자: RWE(Execution), 그룹: RW, 타인: R 부여
3. 기타 설정
3.1 서버 부팅시 데몬 띄우기
# vi /etc/rc.d/rc.local 👈 rc.local 설정파일로 이동
# svn start
/usr/bin/svnserve –d –r /home/svn
3.2 디렉토리 구성
# svn mkdir svn://127.0.0.1/tmp_repo1/branches
# svn mkdir svn://127.0.0.1/tmp_repo1/tags
3.3 .bash_profile 에 SVN_EDITOR 설정
# cd 👈 홈디렉토리로 이동
# vi .bash_profile

SVN_EDITOR=/user/bin/vi
export SVN_EDITOR

# source .bash_profile 👈 .bash_profile 저장 후 실행(설정 적용)
4. SVN 서비스 시작/중지
4.1 SVN 서비스 시작
# svnserve -d -r /home/svn 👈 svn 시작
# ps -ef | grep svnserve | grep -v grep 👈 서비스 상태 확인
root      7204     1  0 10:36 ?        00:00:00 svnserve -d -r /home/svn 👈 pid 7204 
4.2 SVN 서비스 중지
# kill 7204 👈 svn 중지(pid 종료)
# ps -ef | grep svnserve | grep -v grep 👈 서비스 상태 확인

-->

<!-- 
home directory 변경

usermod -d 폴더위치 아이디
usermod -d /var/www/ testuser

or

vi /etc/passwd
test:x:1001:1001::/home/test:/bin/bash -> 현재 홈디렉토리 /home/test
-->

<!--
Linux -> Windows Server

1. SSHD 설치 (openssh, freesshd)
2. 방화벽 개방 (방화벽 들어가서 개방)
3. 포트 개방 (인그레스 포트 개방)
4. sshd 에서 유저 정보 설정
5. services 를 관리자 권한으로 실행하여 sshd 재시작
6. public key 는 로그인할 사용자 명으로 생성
7. ssh 로 접속
8. ssh command (ssh id@ip:port "cmd /c ${command}", ex: ssh id@ip:port "cmd /c dir d:")

-->

<!--

java class reflection

Class objectClass = object.getClass(); // 이런식으로하면 class 정보를 가져올 수 있고 이를 reflection 이라고함
| 함수명 | 설명 |
| ----- | ----- |
| getName() | 패키지 포함한 클래스 이름 리턴 |
| getSimpleName() | 단순 클래스 이름만 리턴 |
| getDeclaredFields() | 멤버 함수 목록 리턴 (Field) |

for (Field field : objectClass.getDeclaredFields())
| 함수명 | 설명 |
| ----- | ----- |
| getType() | 멤버 변수 타입의 클래스 리턴 (Class) |
| getName() | 멤버 변수 명 리턴 |
| get(Object) | object 에 해당하는 변수 값 리턴 (Object)|
-->


<!-- 
gitlab 저장소 변경
sudo gitlab-ctl stop
sudo rsync -av /var/opt/gitlab/git-data/repositories /data/git-data/
vi /etc/gitlab/gitlab.rb
git_data_dirs({
   "default" => { "path" => "/data/git-data" }
})
sudo gitlab-ctl reconfigure
sudo gitlab-ctl start

rm -rf /var/opt/gitlab/git-data/repositories

# option, remove cache
gitlab-rake cache:clear Rails_ENV=production
# option, grant a permission 
chown -R git:git /data/git-data/
-->

<!--
[Unit]
Description=Jenkins Systemd Daemon

[Service]
Type=simple

Environment=JENKINS_HOME=/APP/jenkins
Environment=XDG_RUNTIME_DIR=/DATA/tmp/runtime-jenkins
Environment=CONTAINER_TMPDIR=/DATA/tmp/runtime-jenkins
ExecStart=java -jar /APP/jenkins/jenkins.war
SuccessExitStatus=143

User=jenkins
Group=appadm

[Install]
WantedBy=multi-user.target
-->

<!--
jenkins tmp dir 변경 임시 디렉토리 변경
XDG_RUNTIME_DIR=/DATA/tmp/runtime-jenkins 로 변경
CONTAINER_TMPDIR=/DATA/tmp/runtime-jenkins 로 변경
sudo systemctl daemon-reload
sudo systemctl restart jenkins.service
-->

<!--
jenkins podman 
특정 UID 안없어 지게 하기 (/run/user/$UID)
vi /usr/lib/tmpfiles.d/tmp.conf
d /run/user/${UID} 0700 ${UID} ${GID} -

sudo systemctl restart systemd-tmpfiles 
or
reboot
-->

<!--
apache ant
tar zxvf apache-ant-1.10.13-bin.tar.gz
mv apache-ant-1.10.13 /usr/local/lib/

vi ~/.bashrc
export ANT_HOME=/usr/local/lib/apache-ant-1.10.13
export PATH=$PATH:$ANT_HOME/bin
-->

<!--
container image none remove
podman rmi $(podman images -f "dangling=true" -q)
of
podman image prune
-->

<!--
jenkins 에서 podman build 할 때 /run/user 하위 디렉토리 생성을 못하는 경우
loginctl enable-linger ${user id}

설정하여 로그인 상태 유지
-->

<!--
spring boot build.gradle 에서 test 옵션
```
test {
  systemProperty 'user.language', 'ko'
  systemProperty 'user.country', 'KR'
  systemProperty 'spring.profiles.active', project.getProperties().get('profile')
  useJUnitPlatform()

  minHeapSize = "1024m"
  maxHeapSize = "1024m"

  testLogging {
    testLogging.showStandardStreams = true
    showCauses = true
    showExceptions = true
    showStrackTraces = true
    exceptionFormat = 'full'
  }
}
```
-->

<!--
Jenkinsfile 에서 파일 있으면 무언가 처리하는 if 문 실행하는 shell

sh 'if [ -f ${file name with path} ]; then ${execute command}; else ${execute command}; fi'

을 사용한다.
-->