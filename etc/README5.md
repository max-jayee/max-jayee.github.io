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