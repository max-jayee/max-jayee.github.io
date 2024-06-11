<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# ETC5

## This is a playground

### Temporary things

<!--
route resource

```
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: ${resource name}
  creationTimestamp: null
spec:
  host: ${host name}
  port:
    targetPort: https
  tls:
    certificate: "-----BEGIN CERTIFICATE-----\r\n********\r\n-----END CERTIFICATE-----\r\n
      -----BEGIN CERTIFICATE-----\r\n********\r\n-----END CERTIFICATE-----"
    desticationCACertificate: "-----BEGIN CERTIFICATE-----\r\n********\r\n-----END CERTIFICATE-----\r\n
      -----BEGIN CERTIFICATE-----\r\n********\r\n-----END CERTIFICATE-----"
    key: |-
      -----BEGIN RSA PRIVATE KEY-----
      *****
      -----END RSA PRIVATE KEY-----
    termination: reencrypt
  to:
    kind: Service
    name: istio-ingressgateway
    weight: null
status: {}
```
-->

<!--
http virtual service

```
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: ${resource name}
  namespace: ${k8s namespace}
spec:
  gateways:
  - istio-system/${gateway name}
  hosts:
  - ${host name}
  http:
  - match:
      - uri:
          prefix: /context1
    route:
      - destination:
          host: ${pod1 name}
          port:
            number: ${pod1 service port}
  - match:
      - uri:
          prefix: /context2
    route:
      - destination:
          host: ${pod2 name}
          port:
            number: ${pod2 service port} 
```
-->

<!--
tcp virtual service

```
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: ${resource name}
  namespace: ${k8s namespace}
spec:
  hosts:
  - ${pod service dns}
  tcp:
  - match:
    - port: ${internal service port}
    route:
    - destination:
        host: ${pod1 name}
        port:
          number: ${pod1 service port}
  - match:
    - port: ${internal service port}
    route:
    - destination:
        host: ${pod2 name}
        port:
          number: ${pod2 service port}    
```
-->

<!--
configmap

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: ${resource name}
  namespace: ${k8s namespace}
data:
  ${ENV_VAR_NAME1}: '${value1}'
  ${ENV_VAR_NAME2}: '${value2}'
```
-->

<!--
secret

```
apiVersion: v1
kind: Secret
metadata:
  name: ${resource name}
  namespace: ${k8s namespace}
data:
  ${secret name}: '${base64 encoded value}'
  ${secret name}: '${base64 encoded value}'
type: Opaque
```
-->

<!--
grafana query regex

기본 문자: 일반 문자는 해당 문자
.: 어떤 단일 문자
^: 문자열의 시작
$: 문자열의 끝
*: 앞의 요소가 0회 이상 반복
+: 앞의 요소가 1회 이상 반복
?: 앞의 요소가 0 또는 1회 등장
{n}: 앞의 요소가 정확히 n 번 반복
{n,}: 앞의 요소가 n번 이상 반복
{n.m}: 앞의 요소가 n번 이상, m번 이하 반복
[abc]: 괄호 안의 어떤 문자와도 일치
[^abc]: 괄호 안의 어떤 문자와도 일치하지 않음
|: 두 패턴 중 하나와 일치
(abc): 괄호 안의 패턴과 일치
\: 특수 문자 사용시

=: 문자열 일치
=~: 정규표현식 일치
!=: 문자열 일치하지 않음
!~: 정규표현식 불일치

- sum : calculate sum over dimensions
- min : select minimum over dimensions
- max : select maximum over dimensions
- avg : calculate the average over dimensions
- stddev : calculate population standard deviation over dimensions
- stdvar : calculate population standard variance over dimensions
- count : count number of elements in the vector
- count_values : count number of elements with the same value
- bottomk : smallest k elements by sample value
- topk : largest k elements by sample value
- quantile : calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions

- without : label1, label2 를 빼고 추출
sum without (label1, label2) (field{label3="label3 value"})
- by : label1, label2 기준으로 추출
sum by (label1, label2) (field{label3="label3 value"})

- on : 
- ignoring : 


-->

<!--
yaml structure yaml 구조

기본 구조
1. 스칼라(scalars): 단일 데이터 값
2. 리스트(lists): 일련의 순차적인 아이템을 배열 형태로 표현
3. 딕셔너리(dictionaries): 키-값 쌍으로 구성된 구조

1. 스칼라

```
string: "hello"
integer: 25
float: 3.14
boolean: true
```

2. 리스트
- 를 기반으로 구성
```
fruits:
  - Apple
  - Banana
  - Cherry
```

3. 딕셔너리
key 다음에 : 으로 구분
```
person:
  name: John
  age: 25
  city: Seoul
```

4. 리스트 & 딕셔너리 중첩

```
employees:
  - name: John
    job: Developer
    skills:
      - Python
      - JavaScript
  - name: Jane
    job: Designer
    skills:
      - Illustrator
      - Photoshop
```

5. 주석

# 을 이용함

6. 고급

```
& = anchors and alias
| = Literal blocks
> = folded blocks
```
-->

<!--
from 또는 to 로 시작하여 첫번째 _ 와 두번째 _ 사이에 있는 값 추출하는 정규표현식 regex
/^(?!_)from[^_]*_([^_]*)_.*|^(?!_)to[^_]*_([^_]*)_.*/

from 로 시작하여 첫번째 _ 와 세번째 _ 사이에 있는 값 추출하는 정규표현식 regex
/^from_[^_]*_([^_]*_[^_]*)/
-->