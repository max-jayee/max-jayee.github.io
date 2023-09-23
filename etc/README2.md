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
openldap 은 sha256 을 지원하여 gitlab ldap 설정 중 password 를 sha256 으로 해싱하여 넣을 수 있다.

echo -n 'password' | openssl dgst -sha256

vi /etc/gitlab/gitlab.rb
gitlab_rails['ldap_servers']
  main:
    password: '' # 아까 나온 해시값

sudo gitlab-ctl restart
-->

<!--
SSL 인증서 .jks로 변환

.jks란 java key store의 약자로서 자바 언어에서 사용되는 보안 인증서

# 1. .crt 및 .key 를 조합하여 jenkins.pfx 만들기
# export password 입력 필요!
openssl pkcs12 -export -in <crt인증서 경로>.crt -inkey <private키 경로>.key -out jenkins.pfx

# .pfx 에 포함된 인증서 확인 
openssl pkcs12 -info -in jenkins.pfx

# 2. 위에서 생성한 jenkin.pfx를  .jks 로 변환
keytool -importkeystore -srckeystore jenkins.pfx -srcstoretype pkcs12 -destkeystore jenkins.jks -deststoretype jks

# 3. jenkins 전용 폴더 생성 후 jks 파일 이동
mkdir -p /etc/jenkins
cp jenkins.jks /etc/jenkins/

# 4. key와 폴더 권한 변경
chown -R jenkins: /etc/jenkins
chmod 700 /etc/jenkins
chmod 600 /etc/jenkins/jenkins.jks
-->

<!--
젠킨스 ssl 인증서 config 파일 설정

# 1. war 실행시 옵션 추가 (사용자 root 여야 443 가능)
sudo vi /etc/systemd/system/jenkins.service

ExecStart=java -jar /app/jenkins/jenkins.war --httpsRedirectHttp --httpPort=80 --httpsPort=443 --httpsKeyStore=${jks 파일 위치} --httpsKeyStorePassword=${jps 파일 비밀번호}

User=root
Group=root

# 2. 젠킨스 재실행
sudo systemctl daemon-reload
sudo systemctl restart jenkins
netstat -anp | grep LISTEN | grep 443
-->

<!--
systemctl 에 다운시 복구 설정

vi /etc/systemd/system/${service name}.service
[Service]
Restart=always
RestartSec=60
StartLimitInterval=0
StartLimitBurst=3

sudo systemctl daemon-reload

# for detail : man systemd.service
-->

<!--
systemctl configurations

[Service] # section
Type=simple # simple=프로세스 실행, forking=부모 프로세스 종료되고 자식 프로세스 실행, oneshot=한 번 실행되고 종료, dbus=D-Bus 서비스 실행, notify=시작되면 다른 프로세스에 알림 전송
ExecStart= # 서비스 기동 명령어 또는 스크립트 지정
ExecStop= # 서비스 종료 명령어 또는 스크립트 지정
WorkingDirectory= # 서비스가 실행될 디렉토리 지정
User= # 실행할 사용자
Group= # 실행할 그룹
Restart= # 서비스 종료시 재시작 여부, no, always, on-success, on-failure, on-abornal, on-abort, on-watchdog
RestartSec= # 재시간 간격
StartLimitInterval= # 재시작 제한 시간
StartLimitBurst= # 재시작 제한 횟수
Environment= # 서비스 실행시 환경 변수
# 리소스: LimitCPU, LimitFSIZE, LimitDATA, LimitCORE 등..

-->

<!--
git remote 브랜치를 특정 tag 로 강제 이동시키기 (for force deploy)

git checkout origin/${branch name} -b ${branch name}
git fetch --all --tags
git tag
git reset --hard tags/${tag name}
curl -X DELETE "${gitlab url}/api/v4/projects/${project name}/repository/${branch name}" -H "PRIVATE-TOKEN: ${token}" # project name =  URL-encoded path 로 해야하고 이건 / 를 %2F 로 파싱한거임
git push ${branch name}

-->

<!--
hard link, symbolic link

hard link: ln ${linking target file} ${link file}

symbolic link: ln -s ${linking target file} ${link file}

original file, hard link -> inode1 -> original data
symbolic link -> inode2 -> original file -> inode1 -> original data

inode: 파일의 소유권, 허가권, 파일종류 등의 정보와 해당파일의 실제 데이터가 어디있는지 주소정보
inode block: inode가 모여있는 디스크 공간
data block: 실제 데이터가 저장되어있는 디스크 공간

--test--
mkdir ~/play/link
cd ~/play/link
echo hahahoho > originalfile
ln originalfile hardlink
ln -s originalfile symboliclink

ls -ial
cat hardlink
cat symboliclink

mv original ../
ls -ial

mv ../original ./
ls -ial
-->

<!--
redirect 와 forward 비교

redirect:
client 에게 새로운 url 로 이동하라고 요청
server -> client 에게 3xx(301, 302, 307)을 반환해서 redirect 알림
client 는 새로운 url 로 리퀘스트 수행
client 의 브라우저에서는 redirect 된 주소로 나옴

forward:
server 가 새로운 url 로 가서 직접 처리
client 에서는 이전 요청과 동일한 요청에서 처리된 것으로 생각
server 가 자체적으로 처리하므로 client 는 어떻게 되었는지 모름
client 의 브라우저에서는 최초 url 과 동일한 주소로 나옴
-->

<!--
gitlab 에서 권장하는 ldap 정보 숨기는 방법

gitlab-rake gitlab:ldap:secret:edit EDITOR=vi 명령어를 이용하여 정보 관리
이러면 gitlab.rb 에선 정보를 제거할 수 있음

main:
  password: ''
  bind_dn: ''
-->

<!--
linux hash 명령어

sha256 = echo -n 'string' | openssl dgst -sha256
md5 = echo -n 'string' | md5sum
ntlm = echo -n 'string' | iconv -t utf16le | openssl dgst -md4
aes = echo -n 'string' | openssl enc -aes-256-cbc -pass pass: -e -base64

-->

<!--
linux os type 확인

cat /etc/*release
getconf LONG_BIT # linux os bit 확인
-->

<!--
linux bash 특정 문자열 포함 여부 파악하기

if [[ "ab de ssdf" =~ "ss" ]]; then
  echo "true"
else
  echo "false"
fi
-->

<!--
bash script boolean check

if [ "$variable" = true ]; then # or if [ "$variable" != true ]; then
  echo "true"
else
  echo "false"
fi
-->

<!--
java 에서 super = 부모를 의미함

super.a = 부모의 멤버 변수 a
this.a = 자식의 멤버 변수 a

super() 를 사용하는 이유는 기본적으로 java 는 자식 생성자가 호출될 때 super() 를 컴파일러가 자동으로 삽입함, 하지만 기본 생성자(파라미터가 없는 생성자)가 없는 경우엔 super() 를 넣어주지 않아서 별도 처리를 해주어야함
이땐 super(파라미터 값) 이런식으로 해주어야한다.

-->

<!--
java 버전에 따른 https protocol 버전

java 5 ~ 7 은 TLSv1.0 or SSLv3
Java 8 ~ 16 은 TLSv1.2

Java 5 ~ 7 에서 Java 8 ~ 16 과 https 통신하려면 -Dhttps.protocols=TLSv1.2 를 설정해주어야함

-->

<!--
nginx data size

http {
  client_header_buffer_size 1k; # default: 1k - 클라이언트로부터 수신한 헤더 크기, 헤더 크기를 넘기면 연결이 종료될 수 있음
  client_body_buffer_size 1m; # default: 16k or 8k - 클라이언트로부터 수신한 body 데이터의 버퍼 크기로 메모리 사용량 조절
  client_max_body_size 100m; # default: 1m - 클라이언트로부터 전송되는 요청의 최대 body 크기를 조절
}
-->

<!--
windows memory 사용하지 않는데 점유중일때

1. windows key + R
2. mdsched.exe + enter
3. restart now (recommended)
4. F1
5. move arrow to down & select Extended
6. F10 
7. memo error report
8. Esc (to restart)
-->

<!--
모니터 보호기 무력화

import java.awt.MouseInfo;
import java.awt.PointerInfo;
import java.awt.Robot;

public class Nwl {
  public static void main(String[] args) throws Exception {
    System.out.println("Running...");

    PointerInfo pointerInfo = null;
    Robot robot = new Robot();

    boolean isPending = false;
    while (true) {
      try {
        pointerInfo = MouseInfo.getPointerInfo();
        robot.mouseMove(pointerInfo.getLocation().x, pointerInfo.getLocation().y);

        if (isPending) {
          System.out.println("Restore...");
        }
        isPending = false;
      } catch (Throwable t) {
        if (!isPending) {
          System.out.println("Pending...");
        }
        isPending = true;
      }
      Thread.sleep((5 * 60 * 1000) - 10);
    }
  }
}
-->

<!--
git log 원하는 날짜기간동안 조회

git log --stat --oneline --after="xxxx-xx-xx" --before="xxxx-xx-xx" --pretty=format:"%cd - %s"

git log 주요 옵션
-p: 각 커밋에 적용된 패치를 보여준다.
--stat: 각 커밋에서 수정된 파일의 통계정보를 보여준다.
--shortstat: --stat 명령의 결과 중에서 수정한 파일, 추가된 라인, 삭제된 라인만 보여준다.
--name-only: 커밋 정보중에서 수정된 파일의 목록만 보여준다.
--name-status: 수정된 파일의 목록을 보여줄 뿐만 아니라 파일을 추가한 것인지, 수정한 것인지, 삭제한 것인지도 보여준다.
--abbrev-commit: 40자 짜리 SHA-1 체크섬을 전부 보여주는 것이 아니라 처음 몇 자만 보여준다.
--relative-date: 정확한 시간을 보여주는 것이 아니라 “2 weeks ago” 처럼 상대적인 형식으로 보여준다.
--graph: 브랜치와 머지 히스토리 정보까지 아스키 그래프로 보여준다.
--pretty: 지정한 형식으로 보여준다. 이 옵션에는 oneline, short, full, fuller, format이 있다. format은 원하는 형식으로 출력하고자 할 때 사용한다.
--oneline: --pretty=oneline --abbrev-commit 두 옵션을 함께 사용한 것과 같다.

format 옵션
%H - 커밋 해시
%h - 짧은 길이 커밋 해시
%T - 트리 해시
%t - 짧은 길이 트리 해시
%P - 부모 해시
%p - 짧은 길이 부모 해시
%an - 저자 이름
%ae - 저자 메일
%ad - 저자 시각 (형식은 –-date=옵션 참고)
%ar - 저자 상대적 시각
%cn - 커미터 이름
%ce - 커미터 메일
%cd - 커미터 시각
%cr - 커미터 상대적 시각
%s - 요약

-->

<!--
gitlab timezone 변경

vi /etc/gitlab/gitlab.rb
gitlab_rails['time_zone']='Asia/Seoul' # 로 변경(기존엔 UTC 임)

gitlab-ctl reconfigure
-->

<!--
eclipse 에서 gradle 프로젝트에서 다른 프로젝트 참조하기

1. 참조하는 프로젝트 우클릭 -> Properties 선택
2. 왼쪽 트리 메뉴 Java Build Path 선택
3. Project 탭 선택 -> Add... 버튼 클릭 -> 참조 당하는 프로젝트 선택 -> OK 선택
4. Order and Export 탭 선택 -> 참조 당하는 프로젝트 선택 -> Top -> Apply -> Apply and Close 버튼 선택
-->

<!--
git 기간별 변경된 파일 이력 엑셀로 출력

#! /bin/bash

if [ $# -ne 2 ]; then
  echo "wrong command line."
  echo "usage) $0 2023-08-09 2023-08-11"
  exit 1;
fi
echo "========== 로그 수집 시작 =========="

start_date=$1
end_date=$2
excel_file="$(echo $start_date | cut -c 6-7)$(echo $start_date | cut -c 9-10)-$(echo $end_date | cut -c 6-7)$(echo $end_date | cut -c 9-10)"
echo "Project Name,Commit Date,Source Path,File Name" > $excel_file.csv
for original_project_name in $(ls -d */); do
  project_name=$(echo ${original_project_name%%/});
  project_name=$(echo ${project_name/\//});
  pushd $project_name
    git pull
    for line in $(git log --oneline --name-only --after="$start_date" --before="$end_date" --pretty=format:%cd --date=format:'%Y-%m-%d'); do
      if [[ $line =~ ^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$ ]];
      then
        cur_date=$line
      else
        modified_file=$(echo ${line/*\//})
        modified_file=$(echo ${modified_file/\.*/})
        echo "$project_name,$cur_date,$line,$modified_file" >> ../$excel_file.csv;
      fi
    done
  popd
done

echo "========== 로그 수집 종료 =========="
-->

<!--
excel 에서 row, column 구분자

excel 에 넣을때 그냥 echo "문자열" > aa.csv 하면 한 셀에 쏵 들어간다
이때 row 는 \n 단위로 끊어져서 들어가고
column 은 ,(콤마) 단위로 끊어져서 들어간다.
-->

<!--
bash shell split by token

IN="bla@some.com;john@home.com"
arrIN=(${IN//;/ })
echo ${arrIN[1]}                  # Output: john@home.com
-->

<!--
bash shell official description

https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents
-->

<!--
linux 폴더 내 모든 파일 조회

#!/bin/bash
for file in 경로/*
do
        if [ -d $file ]
        then
                echo "$file is directory"
        elif [ -f $file ]
        then
                echo "$file is file"
        fi
done
-->

<!--
CORS(Cross-Origin Resource Sharing) 문제

a 도메인에서 b 도메인의 서비스를 호출할 때 b 도메인의 서비스에서 기본적으로 보안 정책상으로 막는걸 해제하는 것

a 도메인에서 b 도메인으로 보낼 때 절차는 아래와 같음
1. a -> b 로 preflight 를 날린다. (preflight 는 a 가 b 에게 요청을 보내면 처리해줄 것인지 물어보는 것과 유사함)
2. 실제 데이터를 a -> b 로 전송

기본적으로 외부 도메인에서 타고들어올땐 서비스에서 막게끔 되어있다.
이를 허용하려면 cors 를 추가해주어야한다.

이는 java spring boot 기준으로는 WebMvcConfigurer 인터페이스를 개발하여 addCorsMappings(CorsRegistry registry) 함수를 override 한다.
그리고 아래와 같이 설정한다.
```
@Override
public void addCorsMappings(CorsRegistry registry) {
  registry.addMapping("/**")
    .allowedMethods("*")
    .allowedOriginPatterns("*")
    .allowedHeaders("*")
    .allowedCredentials(true)
    .exposedHeaders("Content-Disposition"); // for exbuilder
}

```

이때 1번 과정에서는 http method 를 OPTIONS 로 보내게 된다. 즉, b 서비스에서는 OPTIONS 가 왔을때 200 status 를 보내주어야 preflight 를 pass 할 수 있음

string boot 기준으로 interceptor 에서 request.getMethod().equals("OPTIONS") 일때 return true; 와 같이 주어 preflight 를 pass 시킨다.

-->

<!--
gitlab ssl 적용
# 제일 중요한 점은 적용하는 인증서 파일(${dns name}.crt) 에 server, intermediate, root 인증서가 한 파일에 모두 들어가있어야한다.
# 그리고 순서가 반드시 맨위 server, 그 다음 intermediate 1, 그 다음 intermediate 2, 그 다음 root 이렇게 구성이 되어있어야 chain 을 물어서 인증이 된다.
# 여러 인증서를 하나의 인증서로 만드는 방법은 cat 같은걸로 >> 리다이렉션을 통해 넣고, 인증서마다 엔터가 잘 안들어가있으면 넣어주어야한다.
# 이렇게 만들어진 인증서는 아래 '도움이 되는 도구' 를 이용하여 조회함으로써 확인할 수 있다.

mkdir -p /etc/gitlab/ssl
cp ${dns name}.crt ${dns name}.key /etc/gitlab/ssl/
cp password.txt /etc/gitlab/ssl/

vi /etc/gitlab/gitlab.rb

external_url "https://${dns name}"
letsencrypt['enable'] = false
nginx['ssl_password_file'] = '/etc/gitlab/ssl/password.txt'
nginx['enable'] = true
nginx['redirect_http_to_https'] = true

gitlab-ctl reconfigure
gitlab-ctl restart

도움이 되는 도구
echo | /opt/gitlab/embedded/bin/openssl s_client -connect HOSTNAME:port # 서버의 인증서 조회
/opt/gitlab/embedded/bin/openssl x509 -in /path/to/certificate.crt -text -noout # 특정 인증서의 정보 확인
echo | /opt/gitlab/embedded/bin/openssl s_client -connect HOSTNAME:port | /opt/gitlab/embedded/bin/openssl x509 -text -noout # 특정 서버의 인증서 정보 확인
-->

<!--
sts 에서 https 에 연결시 git: authentication not supported 라는 에러와 함께 git 관련 아무 작업이 되지 않을 때

Window -> Preferences -> Version Control -> Git -> Configuration 에 http.sslVerify = false 를 넣어준다.
-->

<!--
svn command 명령어

svn checkout svn://${URI} ${repo dir name} # 소스코드 최초로 받기

svn import ${repo dir name} svn://${URI} # 아무것도 들어있지 않은 원격 저장소에 최초 파일 업로드

svn export svn://${URI} # 메타데이터 빼고 순수 파일들만 내려받기

svn update # 최신 버전 내려받기

svn add ${file name} # 파일 등록

svn commit -m "${message}" # 서버로 전송

svn status ${file name} # 파일 상태 확인

svn diff -r 1 # 현재 작업중인 프로젝트와 리비전 1과 비교 확인
svn diff -r 1:2 # 비교 확인
svn diff -r 1 ${file name} # 리비전 1과 현재 file 의 비교 확인

svn log # 로그 확인
svn log -r 1 # 리비전 1의 로그 보기

svn mkdir ${new dir} # 새로운 디렉토리 생성

svn delete ${file / dir name} # 파일 또는 폴터 삭제

svn move ${file name} ${directory} # 파일 이동

svn rename ${old file name} ${new file name} # 파일명 변경

svn switch --relocate ${old url} ${new url} # 소스 서버 변경
-->

<!--
yum 기본적인 개발 도구 설치

yum groupinstall "Development Tools" // basic
yum groupinstall "Additional Development" // extension
-->

<!--
npm install ${모듈} 하는 중 permission 이나 install 에러가 발생하는 경우
보통 root 로 실행하는 것을 많이 막아둔 selinux 에서 종종 발생한다.

경험한 경우로는 internal/modules/cjs/loader.js:905 에서 throw err; 에러가 발생하여 node-sass 가 설치가 안되고 있었음

인터넷에서는 아래와 같은 에러가 발생하여 설정해주었다고한다.
```
EACCESS: permission denied
npm ERR! spawn ENOENT
npm ERR! code ELIFECYCLE
sh: 1: node: Permission denied
```

--unsafe-perm 옵션을 넣어준다.
또는 npm config set unsafe-perm true
또는 .npmrc 에 unsafe-perm=true 를 넣어주어도 된다고한다.
-->

<!--
npm init example

npm run install:dev --unsafe-perm --no-audit --verbose --sass-binary-path= --registry http://nexus.com/repo/
-->

<!--
jenkins 원격 실행 jenkins remote

job 조회(GET)
${jenkins}/job/${job name}/api/json --user ${id}:${token}

job 빌드(POST)
${jenkins}/job/${job name}/build --user ${id}:${token}

job 빌드 with 파라미터(POST)
${jenkins}/job/${job name}/buildWithParameters --data param1=value1 --data param2=value2 --user ${id}:${token}

job 빌드 결과 조회(GET)
${jenkins}/job/${job name}/${build number}/api/json --user ${id}:${token}

job 마지막 빌드 결과 조회(GET)
${jenkins}/job/${job name}/lastStableBuild/api/json --user ${id}:${token}
-->

<!--
oracle error

ORA-12518: TSN:리스너는 클라이언트 연결을 처리할 수 없습니다.
 -> dbms 리스너가 고장난 것으로 메모리 부족, 세션 부족 등과 같은 문제를 의심해 볼 수 있다.
-->

<!--
java jvm heap option

-Xms1024m = 최소 jvm heap size
-Xmx1024m = 최대 jvm heap size
-XX:InitialRAMPercentage=70.0 = 초기화하는 jvm heap size 비율
-XX:MinRAMPercentage=70.0 = 200m 미만의 메모리에서 최대 jvm heap size 비율
-XX:MaxRAMPercentage=70.0 = 200m 이상의 메모리에서 최대 jvm heap size 비율
-->

<!--
kubernetes anti affinity 한 노드에 pod 가 몰리지 않게 하기
-->

<!--
java process provisioning tool

arthas
-->

<!--
container iamge 관련 /var/lib/containers/storage 가 찰 때

/etc/containers/storage.conf 에 graphroot 항목으로 인해 쌓이는 것으로 설정

rootless 계정들도 설정할 수 있으니 해당 conf 파일을 살펴 볼 것
-->