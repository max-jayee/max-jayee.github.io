<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# MacOS Trouble Shootings

## 설명

MacOS 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| 상황 | 원인 | 해결방안 | 비고 |
| :--- | :--- | :--- | :--- |
| 포트가 비정상적(인식을 못하거나 포트와 연결된 디스플레이가 이상할 때)으로 동작할 때 | 이는 전원을 관리하는 SMC 모듈과 관련이 있을 수 있습니다. | SMC 초기화를 수행한다. <br> 1. 전원을 끈다. <br>2. 어댑터 꽂힌 상태로 `control` + `option` + `shift(right)` 을 7초 누른다. (전원이 켜짐) <br>3. 위 세개의 키를 누르고 있는 상태에서 전원 버튼을 추가로 눌르고 7초 누른다. (전원 버튼 누르자마자 꺼짐)<br>4. 동시에 모든 키를 뗀다. <br>5. 기다리면 맥북이 켜진다. | 종종 운영체제 업데이트를 한 경우 발생합니다. |
| `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun` | 이는 각 도구들이 CommandLineTools를 식별하지 못해 발생한 문제로, MacOS 를 업그레이드 한 경우 주로 발생합니다. | `xcode-select --install` 를 사용하여 CommandLineTools 를 설치하면 해소됩니다. | MacOS 를 업그레이드 한 이후 git, make, gcc 등과 같은 명령어를 사용하는 경우 만날 수 있습니다. |
| 맥북을 초기화 하고 싶은 경우 | 어떠한 이유에서 초기화 하고 싶은 경우 | 전원을 껐다가 키자마자 `command` + `R` 를 누르고 있다가 apple logo 또는 다른 이미지가 나타나면 뗀다. | NVRAM 재설정을 위해선 켠 후 즉시 `option` + `command` + `p` + `r` 을 동시에 20초 누른다. |
| 배터리 최적화를 활성화 하였지만 계속하여 배터리가 100% 를 유지하는 경우 | 전원 부가 세팅이 잘 안된 것으로 보인다. | 1. 배터리 최적화 활성화를 끈다. <br>2. SMC 초기화를 수행한다. <br>3. 배터리 최적화 활성화를 다시 켠다. <br> | 그럼 배터리가 100% 에서 80% 로 다운된다. |
