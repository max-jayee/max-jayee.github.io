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

git diff --name-only --diff-filter=AMR head~1 head | tee modified
git diff --name-only --diff-filter=D head~1 head | tee removed
git diff --name-only --diff-filter=R head head~1 | tee -a removed
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