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