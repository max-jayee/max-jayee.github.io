<style type="text/css">
  @import url("/css/style-header.css");
</style>

# [맥쓰네 블로그](/ "https://home-max.github.io")

# MacOS 문제&해결 모음
## 설명
MacOS 를 사용하며 어떠한 이유(궁금하거나, 문제를 마주하거나 등)에서 한 번이라도 알아보았던 문제와 문제에 대한 해결 방안들에 대해 정리합니다.

## 문제&해결 목록

| No. | 상황 | 원인 | 해결방안 | 비고 |
| :---: | --- | --- | --- | --- |
| 1 | `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun` | 이는 각 도구들이 CommandLineTools를 식별하지 못해 발생한 문제로, MacOS 를 업그레이드 한 경우 주로 발생합니다. | `xcode-select --install` 를 사용하여 CommandLineTools 를 설치하면 해소됩니다. | MacOS 를 업그레이드 한 이후 git, make, gcc 등과 같은 명령어를 사용하는 경우 만날 수 있습니다. |
