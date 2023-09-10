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
    unit: Frame
  3. network layer: 다른 네트워크와 통신하기 위한 경로 설정 & 논리 주소 결정
    protocols: IP, IPX
    unit: IP Packet
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
- collision: 컴퓨터 여러 대가 동시에 데이터를 보낼 때 발생하는 데이터 충돌
- CSMA/CD: Carrier Sense Multiple Access with Collision Detection 의 줄임말로, 데이터 전송시 발생하는 충돌이 발생하지 않게 ethernet 에서 시점을 늦추는 방법이지만, 효율이 좋지 않아 현재는 잘 사용되지 않는다.
  - CS: 데이터를 보내려고 할 때 케이블에 신호가 흐르고 있는지 아닌지를 확인한다.
  - MA: 케이블에 데이터가 흐르고 있지 않다면 데이터를 보내도 좋다.
  - CD: 충돌이 발생하고 있는지를 확인한다.
- MAC: Media Access Control Address 의 줄임말로, 랜 카드별 가지고 있는 물리 주소
  AB-CD-EF-01-23-45 가 있으면 AB~EF 까지의 24비트는 랜카드 제조사 번호, 01~45 까지의 24비트는 제조가사 붙인 일련번호로 전세계 유일한 주소가 된다.
  2계층에서 적용되고 헤더에 (1) 목적지 MAC 주소(6바이트), (2) 출발지 MAC 주소(6바이트), (3) 유형(2바이트) 가 추가된다.
  유형은 3계층의 프로토콜의 종류가 된다. (0800-IPv4, 0806-ARP, 8035-RARP, 814C-SNMP over Ethernet, 86DD-IPv6)
- FCS: Frame Check Sequence 의 줄임말로, 데이터 전송 도중에 오류가 발생하는지 확인하는 용도의 2계층에서 붙이는 트레일러
- MAC address table: 스위치의 포트 번호와 해당 포트에 연결되어있는 MAC 주소가 등록되어있는 표
  최초에는 비어있지만, 데이터 전송을 요청하면 데이터 전송하는 pc 의 mac 주소를 보고 등록하는데, 이 과정을 MAC 주소 학습 기능이라고 한다.
  그럼 등록되지 않은 mac 으로 데이터 전송을 하게 되면 허브처럼 모든 포트에 연결된 pc 에 데이터가 흘러들어가는데 이러한 현상을 flooding(홍수) 이라고 한다.
  bridge table 이라고도 불림
- switch: 허브와 유사하지만, 허브랑 차이점은 2계층에서 mac 주소를 보고 목적지 mac 주소의 pc 에만 데이터를 전송하고, 이를 mac 주소 필터링이라고한다.
  스위치는 내부적으로 송수신을 처리하게 구성되어 collision 이 발생하지 않는다.
  2계층에서 동작되어 L2 스위치, 스위칭 허브라고도 불림
- 전이중 통신 방식: 데이터의 송수신을 동시에 통신하는 방식 (스위치에 사용하는 방식)
- 반이중 통신 방식: 회선 하나로 송신과 수신을 번가아가면서 통신하는 방식 (허브에 사용하는 방식)
- ARP: Address Resolution Protocol 의 줄임말로, 목적지 pc 의 ip 를 이용하여 mac 주소를 찾기 위한 프로토콜
  - ARP request: 출발지 컴퓨터가 목적지 주소를 모르면 mac 주소를 알아내기 위해 네트워크에 브로드캐스트 하는 것
  - ARP reply: ARP request 에 대해 지정된 ip 를 가지고 있지 않은 컴퓨터는 응답하지 않지만, 지정된 ip 를 가진 컴퓨터는 mac 주소를 응답으로 보내는 것
  출발지 컴퓨터는 ARP reply 의 mac 주소를 가지고 이더넷 프레임을 만들 수 있다.
  - ARP table: 출발지 컴퓨터에서 mac 주소를 얻으면 mac 주소와 ip 주소의 매핑 정보를 메모리에 보관하는데 이 정보를 의미한다. ARP table 을 확인하기 위한 명령어는 `arp -a` 이다.
- Ethernet 규격: 10BASE5, 100BASE-T 등 과같이 속도, 전송방식, 케이블 형태로 규격화 되어있다.
  맨앞 숫자는 통신속도, BASE 는 전송방식, -T 는 케이블을 의미한다.
  BASE 뒤에 바로 숫자면 500M 와 같은 N*100 미터가 되고, -로 시작하면 100M 이며, T 는 UTP 케이블이다. T가 없으면 동축케이블이다.
- router: 3 계층에서 다른 네트워크 간 통신을 가능하게 하는 장비
  즉, switch 는 2 계층에서 활동하기에 다른 네트워크 까지는 관여할 수가 없다.
  네트워크를 식별하기 위한 주소로는 IP 주소를 사용한다.
  라우터는 목적지 IP 주소까지 어떤 경로로 데이터를 보낼지 결정하는 라우팅을 수행한다.
  routing table 을 가지고 있어 경로를 관리한다.
- IP address: Internet Protocol 의 줄임말로, 어떤 네트워크의 어떤 컴퓨터인지를 구분할 수 있도록 하는 주소
  3 계층에서 캡슐화하는 헤더는 (1) version, (2) header length, (3) service type, (4) total length, (5) identification, (6) flags, (7) fragment offset, (8) TTL, (9) protocol, (10) header checksum, (11) source IP address, (12) destination IP address 순서로 구성된다.
  ISP 에게 부여받을 수 있으며 IPv4(32비트), IPv6(128비트) 이 있다.
  8비트 단위로 나누어 왼쪽에서부터 1옥텟, 2옥텟, 3옥텟, 4옥텟 으로도 표현한다.
- IP structure: ip 주소는 network id 와 host id 가 합쳐져 구성되어 있고, 여러 A~E 클래스로 관리된다.
  1. A 클래스: 대규모 네트워크 주소, 1옥텟:00000001(1) ~ 01111111(127) 처음 8비트가 network id, 나머지가 host id
     - 공인 ip 주소 범위: 1.0.0.0 ~ 9.255.255.255, 11.0.0.0 ~ 126.255.255.255
     - 사설 ip 주소 범위: 10.0.0.0 ~ 10.255.255.255
  2. B 클래스: 중형 네트워크 주소, 1옥텟: 10000000(128) ~ 10111111(191) 처음 16비트가 network id, 나머지가 host id
     - 공인 ip 주소 범위: 128.0.0.0 ~ 172.15.255.255, 172.32.0.0 ~ 192.255.255.255
     - 사설 ip 주소 범위: 172.16.0.0 ~ 172.31.255.255
  3. C 클래스: 소규모 네트워크 주소, 1옥텟: 1100000000(192) ~ 11011111(223) 처음 24비트가 network id, 나머지가 host id
     - 공인 ip 주소 범위: 192.0.0.0 ~ 192.167.255.255, 192.169.0.0 ~ 223.255.255.255
     - 사설 ip 주소 범위: 192.158.0.0 ~ 192.168.255.255
  4. D 클래스: 멀티캐스트 주소, 4옥텟: 11111111(255) 로 네트워크에 있는 컴퓨터나 장비에게 한 번에 데이터를 전송하는 데 사용되는 ip 주소
  5. E 클래스: 연구 및 특수용도 주소
     - 네트워크 주소: 전체 네트워크에서 작은 네트워크를 식벽하는 용도로 host id 가 00000000(0) 인 ip 주소
- public ip: ISP 가 제공하는 공인 ip 주소
- private ip: lan 의 네트워크 관리자가 할당하는 사설 ip 주소로 수동으로 할당하거나, 라우터의 DHCP 기능을 이용하여 자동으로 할당할 수 있다.
  사설 ip 는 절대로 공인 ip 주소로 사용할 수 없으니 주의가 필요하다.
- subnet: 분할된 네트워크를 의미하며 네트워크를 분할하는 것을 subneting 이라고 한다.
  subneting 은 host id 를 분할하여 subnet 으로 만드는것으로 network id, subnet id, host id 로 바뀐다.
- subnet mask: network id 와 host id 를 식별하기 위한 값
  A 클래스의 경우 255.0.0.0, B 클래스의 경우 255.255.0.0, C 클래스의 경우 255.255.255.0 이 되고, 이를 prefix 표기법으로 사용하면 슬래쉬(/)를 사용하면된다.
  예를 들어 C 클래스의 network id 를 28 비트로 설정하면 host id 에서 4 비트를 사용하는 것이 되어 network id: 24 비트, subnet id: 4 비트, host id: 4 비트가 되고, 이를 subnet mask prefix 표기법으로 바꾸면 255.255.255.240/28 이 된다.