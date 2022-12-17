# [맥쓰네 블로그](/ "https://home-max.github.io")

# SSH-Keygen
## 설명
전자 인증에 필요한 암호화 키를 생성하고 관리하는 도구입니다.
특정 시스템에서 api 권한을 제어할 때 사용자 인증을 위해 많이 사용됩니다.
그때 시스템에서 지원하는 타입의 암호화 키를 만들어 주입하고, 시스템에서 해당 키에 대한 권한을 제어함으로써 사용자별 부여받은 api 를 사용할 수 있습니다.

## 사용법
### 키 생성

키 생성은 `ssh-keygen` 시스템 명령어를 수행하면 생성할 수 있습니다.
이때 다양한 옵션을 지정하여 원하는 암호화 키를 생성할 수 있으며, 옵션없이 명령어만 수행시 2048 bits 의 rsa version 2 타입의 암호화 키로 생성하게 됩니다.

생성된 암호화 키의 위치는 `Enter file in which to save the key (${HOME}/.ssh/id_rsa):` 와 같은 질문에 작성한 경로로 지정되지만, 아무값을 입력하지 않은 경우엔 괄호`()` 안에 위치한 `${HOME}/.ssh/id_rsa` 경로에 생성한 암호화 키 타입에 따라 `~/.ssh/identity, ~/.ssh/id_dsa or ~/.ssh/id_rsa` 등의 파일로 생성됩니다.

생성된 파일은 프라이빗 키와 퍼블릭 키로 구성되는데 퍼블릭 키는 `.pub` 확장자가 붙습니다. 예로 들면, 프라이빗 키는 `~/.ssh/id_rsa`, 퍼블릭 키는 `~/.ssh/id_rsa.pub` 이름의 파일로 생성되며 본인을 인증하기 위해 시스템에 제출하는 키는 퍼블릭 키가 됩니다.

#### 예제
1. 4096 bits 의 rsa version 2 타입 키 생성  
  `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
1. ed25519 타입 키 생성  
  `ssh-keygen -t ed25519 -C "your_email@example.com""`
