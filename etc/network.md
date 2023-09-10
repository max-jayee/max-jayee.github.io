<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Network

## Definition

- network: 무언가를 주고 받기위해 어떠한 것들이 연결되어있는 형태
  컴퓨터간 연결되어 서로 데이터를 주고받는 형태를 컴퓨터 네트워크라고 하며, IT 에서는 그냥 네트워크라고 표현한다.
- internet: 전 세계의 큰 네트워크부터 작은 네트워크까지 연결하는 가장 큰 네트워크이다.
- packet: 컴퓨터간 데이터를 주고받을 때 네트워크를 통해 전송되는 데이터의 가장 작은 단위
  아무리 큰 데이터를 전송한다고 하더라도 패킷 단위로 나누어 전송한다.
  네트워크내에서 패킷은 순서가 보장되지 않은 상태로 전달되기에 패킷 별 번호를 붙여 수신자가 번호로 정렬하여 데이터를 조립할 수 있게 한다.
- bandwidth: 네트워크에서 이용 가능한 최대 전송 속도
  단위 시간당 전송할 수 있는 전송량을 의미한다.
- digital data: 0과 1의 집합
- character code: 문자를 숫자에 매핑해놓은 대응표
- LAN: Local Area Network 의 줄임말로 근거리 네트워크를 의미
  보통 가정, 빌딩, 사무실 같이 지리적으로 제한된 곳에서 컴퓨터를 연결할 수 있는 네트워크가 속한다.
  범위는 좁고 속도는 빠르고 오류가 적다.
- WAN: World Area Network: 의 줄임말로 광역 네트워크를 의미
  지리적으로 넓은 범위에 구축된 네트워크
  범위는 넓고 속도는 느리고 오류도 많다.
- ISP: Internet Service Provider 의 줄임말로 인터넷 사업자를 의미
  wan 은 isp 가 구축한 네트워크이다.
- broadband router: 공유기이며 가정용으로 만든 라우터
- SOHO: Small Office / Home Office 의 줄임말로 소규모 회사를 의미
- server: 컴퓨터 네트워크에서 다른 컴퓨터에 서비스를 제공하는 컴퓨터
- client: 컴퓨터 네트워크에서 다른 컴퓨터에게 서비스를 제공해주길 요청하는 컴퓨터
- DMZ: DeMilitarized Zone 의 줄임말로 외부에 공개하기 위한 네트워크
  보통 웹 서버, 메일 서버, DNS 서버를 공개한다.
  웹 서버는 외부 사용자에게 공개하기 위해, 메일 서버는 외부 사용자와 메일을 주고받기 위해, DNS 서버는 외부에서 도메인 이름으로 서버에 접근하기 위해 공개한다.
- on-premise: 사내 또는 데이터 센터에 서버를 두고 운영하는 형태
- protocol: 네트워크에서 데이터를 송수신하기 위한 규칙
- standard specification: 기술적인 사항에 대해 제정한 기준, 기술 표준이라고 한다.
- ISO: International Organization for Standardization 의 줄임말로, OSI 모델이라는 표준 규격을 제정하는 단체
- OSI 7 layers: 데이터 송수신시 수행하는 7단계 과정
  layer architecture 로 각 계층은 독립적이라 데이터가 전달되는 동안 다른 계층의 영향을 받지 않는다.
  1. physical layer: 물리적인 연결과 전기 신호를 제어 & 변환
  2. data link layer: 네트워크 기기 간의 데이터 전송 및 물리 주소 결정
    protocols: Ethernet, Token Ring, FDDI, Apple Talk
  3. network layer: 다른 네트워크와 통신하기 위한 경로 설정 & 논리 주소 결정
    protocols: IP, IPX
  4. transport layer: 신뢰할 수 있는 통신 구현
    protocols: TCP, UDP, SPX
  5. session layer: 세션 체결, 통신 방식 결정
    protocols: NetBIOS, SAP, SDP, NWLink
  6. presentation layer: 문자 코드, 압축, 암호화 등의 데이터 변환
    protocols: ASCII, MPEG, JPEG, MIDI
  7. application layer: 이메일 & 파일 전송, 웹 사이트 조회 등 애플리케이션에 대한 서비스 제공
    protocols: HTTP, SMTP, FTP, Telnet
- TCP/IP model: OSI 7 계층을 더 크게 묶어 4 계층으로 표현한 것
  1. network layer: OSI 1 + 2
  2. internet layer: OSI 3
  3. transport layer: OSI 4
  4. application layer: OSI 5 + 6 + 7
- encapsulation: 데이터 송신을 위해 계층을 거치며 필요한 정보를 헤더에 추가하는 것
- decapsulation: 데이터 수신을 위해 계층을 거치며 필요한 정보를 읽고 헤더에서 제거하는 것
- trailer: 데이터를 전달할 때 데이터에 2 계층에서 추가하는 헤더 외 마지막 정보
- VPN: Virtual Private Network 의 줄임말로, 가상 네트워크를 구축하여 외부에서 인터넷으로 사내에 접속하기 위한 네트워크
- lan card: 네트워크를 통해 데이터를 송수신할 수 있게 하는 모듈
  0 과 1을 전시 신호로 변환한다.
- RJ-45: 랜 케이블 끝에 달려있는 커넥터
- noise: 데이터의 왜곡이나 분해로 인해 전송 매체에서 생기는 전자 신호
- repeater: 네트워크 중계 장비로 정형(일그러진 신호를 복원)하고 증폭하는 기능을 수행
  최근들어 다른 네트워크 장비가 리피터 기능을 제공하는 경우가 많아 별도로 구축하는 경우는 적음
- hub: 여러개의 컴퓨터를 연결할 수 있도록 여러 포트로 구성된 장비
  하지만 허브는 별다른 데이터 제어를 하지 않기에 1 포트 컴퓨터 -> 2 포트 컴퓨터로 데이터를 전송하면 나머지 포트 컴퓨터에도 모두 데이터가 송신된다.
- switch: 
