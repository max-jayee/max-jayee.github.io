<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2">
  <h1><a href="/">맥쓰네 블로그</a></h1>
  <h5 id="fixed-header-id"></h5>
</div>

# ETC
여긴 낙서장 같은 곳

첫번째 파라미터에 해당하는 파일의 절대 경로 : `SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"`

jpi -> hpi 로 변환 : `ls | grep '.jpi' | cut -d . -f 1 | while read line; do mv $line.jpi $line.hpi; done`

파일 전송 : `scp ${local file} ${target account}@${target url}:${target path}`

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

#### cut 명령어
`cut -c 5-7` 맨 첫글짜가 1이고 5-7 번째 문자만 자르기

#### 소문자로 모두 바꾸기
`awk '{print tolower(0)}'`

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

#### css 테스트

<button type="button" class="btn btn-primary" onclick="btn()">버튼</button>
<script>
function btn(){
    alert('버튼이 클릭되었습니다');
}
</script>


#### windows 특정 프로세스 킬
https://seomile.tistory.com/91


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
eadinessProbe:
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
https://www.jetbrains.com/help/idea/searching-everywhere.html#search_all

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

<details><summary><summary>
  <script src="/js/fixed-header.js" defer="defer"></script>
</details>