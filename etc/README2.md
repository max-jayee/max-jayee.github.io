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

# 1. config 파일 접속
sudo vi /etc/sysconfig/jenkins

아래와 같이 변경하기
JENKINS_PORT="-1"	# http 포트 비활성화
JENKINS_HTTPS_PORT="9090"	# 젠킨스 포트 설정 (다른 포트여도 ㄱㅊ)
JENKINS_HTTPS_KEYSTORE="/etc/jenkins/jenkins.jks" # 앞서 변환한 .jks 인증서 경로
JENKINS_HTTPS_KEYSTORE_PASSWORD="<인증서 비밀번호>"
JENKINS_HTTPS_LISTEN_ADDRESS="0.0.0.0"	# 모든 ip에서 접근할 수 있도록 변경
JENKINS_ENABLE_ACCESS_LOG="yes"	# 초기 admin 비밀번호를 확인할 수 있도록 로그 활성화

# 2. 젠킨스 재실행
sudo systemctl restart jenkins
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
-->

<!--
linux hash 명령어

sha256 = echo -n 'string' | openssl dgst -sha256
md5 = echo -n 'string' | md5sum
ntlm = echo -n 'string' | iconv -t utf16le | openssl dgst -md4
aes = echo -n 'string' | openssl enc -aes-256-cbc -pass pass: -e -base64

-->