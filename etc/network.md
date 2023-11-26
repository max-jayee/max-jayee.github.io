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
- NAT: Network Access Translation 의 줄임말로, 자신을 지나는 데이터의 private ip 를 자신의 public ip 로 바꾸어 중계한다.
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
    protocols: IP, IPX, ICMP(ping)
    unit: IP Packet
  4. transport layer: 신뢰할 수 있는 통신(데이터 손상, 유실 등을 관리) 구현, 목적지 어플리케이션 식별
    protocols: TCP(연결형 통신), UDP(비연결형 통신), SPX
    unit: Segment(TCP header), Datagram(UDP header)
  5. session layer: 세션 체결, 통신 방식 결정
    protocols: NetBIOS, SAP, SDP, NWLink
  6. presentation layer: 문자 코드, 압축, 암호화 등의 데이터 변환
    protocols: ASCII, MPEG, JPEG, MIDI
  7. application layer: 이메일 & 파일 전송, 웹 사이트 조회 등 애플리케이션에 대한 서비스 제공
    protocols: HTTP, SMTP(메일 보낼 때), POP3(메일 받을 때), FTP, Telnet
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
  AB-CD-EF-01-23-45 가 있으면 AB~EF 까지의 24비트는 랜카드 제조사 번호(Organizationally Unizue Identifier), 01~45 까지의 24비트는 제조가사 붙인 일련번호로 전세계 유일한 주소가 된다.
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
  라우터는 목적지 IP 주소까지 어떤 경로로 데이터를 보낼지 결정하는 routing을 수행한다.
  routing table 을 가지고 있어 최적의 경로를 관리한다.
  이러한 라우팅 정보를 교환하기 위한 프로토콜을 routing protocol 이라고하며, RIP, OSPE, BGP 등이 있다.
- gateway: 다른 네트워크에 데이터를 전송하려면 라우터의 ip 를 설정해야하는데 이를 default gateway 라고한다.
  NAT 기능을 수행하는 네트워크 장비를 보통 gateway 라고 한다.
- IP address: Internet Protocol 의 줄임말로, 어떤 네트워크의 어떤 컴퓨터인지를 구분할 수 있도록 하는 주소
  3 계층에서 캡슐화하는 헤더는 12 개가 순서대로 있다.
  1. version
  2. header length
  3. service type
  4. total length
  5. identification
  6. flags
  7. fragment offset
  8. TTL
  9. protocol
  10. header checksum
  11. source IP address(32비트)
  12. destination IP address(32비트)
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
- TCP: Transmission Control Protocol 의 줄임말로, 신뢰를 보장하는 연결형 통신 프로토콜
  신뢰를 제공하는 TCP 헤더는 다음의 순서로 구성되고, TCP 헤더로 캡슐화되면 세그먼트 라고 한다.
  1. source port number(16비트): 출발지 어플리케이션 주소로, 포트번호는 0~1023번은 이미 예약된 well-known ports 라고하고 1024는 예약되어있지만 사용하지않는다.
  1025번 이상은 랜덤 포트라고해서 클라이언트 측의 송신 포트로 사용한다.
  1. destination port number(16비트): 목적지 어플리케이션 주소, well-known ports 중 대표적으로는 ssh 22, smtp 25, dns 53, http 80, pop3 110, https 443 등이 있다.
  2. sequence number(32비트): 송신자가 수신자에게 이 데이터가 몇 번째 데이터인지 알려주기 위해 사용
  3. acknowledgement number(32비트): 수신자가 몇 번째 데이터를 수신했는지 송신자에게 알려주기 위해 사용, 다음 번호의 데이터를 요청함(예: 10번 받으면 11번을 작성해서 요청)
  4. header length(4비트)
  5. reserved bits(6비트)
  6. code bits(flags)(6비트): urg(긴급 데이터), ack(연결 확인 응답), psh(밀어넣기 push), rst(초기화-즉시 종료), syn(연결 요청), fin(연결 종료) 각 1비트씩 사용
  7. window size(16비트): 버퍼 크기로 n 개의 세그먼트를 저장할 수 있는 공간의 크기로, 3-way handshake 를 할 때 서로 교환하여 알고 있게 된다.
  8. checksum(16비트)
  9.  urgent pointer(16비트)
  10. options(0-40비트)
- 3-way handshake: 신뢰할 수 있는 연결을 하기 위한 3 단계 연결 방법
  1. source -> destination: syn(연결 요청)
  2. source <- destination: ack(연결 확인 응답) + syn(연결 요청)
  3. source -> destination: ack(연결 확인 응답)
- 종료 handshake: 신뢰할 수 있는 종료를 하기 위한 종료 방법
  1. source -> destination: fin(종료 요청)
  2. source <- destination: ack(연결 종료 응답)
  3. source <- destination: fin(종료 요청)
  4. source -> destination: ack(연결 종료 응답)
- UDP: User Datagram Protocol 의 줄임말로, 신뢰를 보장하지 않는 비연결형 통신 프로토콜
  데이터의 정확성보단 효율성을 우선시하여 보통 스트리밍 방식으로 전송하는 동영상 서비스와 같은 곳에서 사용된다.
  UDP 헤더는 아래 4가지를 갖고, UDP 헤더로 캡슐화되면 데이터그램 이라고 한다.
  1. source port number(16비트)
  2. destination port number(16비트)
  3. length(16비트)
  4. checksum(16비트)
- unicast: 네트워크 상에 위치한 송신, 수신 노드간 일대일 통신을 의미한다.
- anycast: 네트워크 상에 위치한 가장 가까운 노드에 통신을 의미한다.
- multicast: 네트워크 상에 위치한 특정 그룹 단위의 다수 노드에 통신을 의미힌다.
- broadcast: 랜에 있는 컴퓨터나 네트워크 장비에 데이터를 일괄로 전송한다는 단어로 UDP 를 사용한다.
- HTTP: HyperText Transfer Protocol 의 줄임말로, 웹 사이트를 볼 때 사용하는 프로토콜
- FTP: File Transfer Protocol 의 줄임말로, 파일을 전송할 때 사용하는 프로토콜
- SMTP: Simple Mail Transfer Protocol 의 줄임말로, 메일을 보낼 때 사용하는 프로토콜
  송신자 컴퓨터에서 메일서버로 메일을 보내는 과정은 다음과 같다. (송신자 컴퓨터 -> 메일 서버)
  1. 세션 시작 통지
  2. 송신자 메일 주소 통지
  3. 수신자 메일 주소 통지
  4. 메일 본문 전송 통지
  5. 메일 본문 송신
  6. 세션 종료 통지
- POP3: Post Office Protocol version 의 줄임말로, 메일을 받을 때 사용하는 프로토콜
  메일 서버에는 메일 박스라고 하는 메일을 보관해주는 기능이 존재한다.
  수신자 컴퓨터에서 메일 서버로부터 메일을 받는 과정은 다음과 같다. (수신자 컴퓨터 -> 메일 서버)
  1. 세션 시작 통지
  2. 수신자 사용자 이름 통지
  3. 수신자 비밀번호 통지
  4. 메일 확인 (메일이 있는지 없는지 확인, 있으면 있음 없으면 없음)
  5. 메일 전송 요청 (메일 서버에 있는 메일을 수신자 컴퓨터로 내려받음)
  6. 세션 종료 통지
- DNS: Domain Name System 의 줄임말로, 컴퓨터나 네트워크 장비에 붙여진 이름을 기반으로 ip 주소를 name resolution 하는 시스템
- WWW: World Wide Web 의 줄임말로, html, url, http 라는 세 가지 기술이 사용된다.
- HTML: HyperText Markup Language 의 줄임말로, 웹 페이지에서 문장 주고나 문자를 꾸미는 태그를 사용하여 HyperText 를 작성할 수 있는 마크업 언어이다.
- hyperlink: 보통 link 라고 부르는데 다른 사이트로 이동할 수 있는 경로이다.
- URL: Uniform Resource Locator 의 줄임말로, 프로토콜을 포함한 식별 정보이다. (예: <http://example.com/blog?type=a>, file://example.com/blog?type=a)
- URI: Uniform Resource Identifier 의 줄임말로, 식별 정보이다. (예: example.com/blog?type=a, <http://example.com/blog?type=a>)
- URN: Uniform Resource Name 의 줄임말로, 리소스 정보를 의미한다. (예: blog?type=a)
- request: 클라이언트가 서버에게 데이터를 요청하는 것
- response: 서버가 클라이언트에게 클라이언트가 요청한 정보를 제공하는 것
- keepalive: HTTP/1.1 버전에 추가된 것으로 수립한 연결을 건건이 끊지않고 데이터를 모두 수신할 때까지 연결을 유지하는 기능
- HTTP/2 특징: response 를 request 순서에따라 보내지 않고 그냥 보내서 속도가 향상됨
  이는 앞선 오래걸리는 컨텐츠에 의해 전체적인 성능 지연이 개선 됨
- ping: ICMP(internet control message protocol)이라는 프로토콜을 사용하여 목적지 컴퓨터에 ICMP 패킷을 전송하고 패킷에 대한 응답이 제대로 오는지 확인하는 도구
  ICMP 프로토콜은 3계층에 속한 프로토콜로 ip 까지만 관여한다.
- WAP: Wireless Access Point 의 줄임말로, 무선 랜 칩과 무선 랜 어댑터를 이용하여 선없이 네트워크를 제공하는 장비, 무선 공유기 같은 것들
- wireless client: 컴퓨터 또는 스마트폰과 같이 선 없이 네트워크에 연결되는 클라이언트
- infrastructure type: 무선 액세스 포인트(무선 공유기)를 중심으로 기기들이 접속하는 방식
- ad hoc type: 무선 클라이언트끼리 직접 통신하는 방식
- 무선 규격: IEEE802.11ad, IEEE802.n 등.. 속도와 주파수별로 여러가지 있다.
- beacon: 자기를 알리는 신호로 wap 은 네트워크에 있는 모든 기기에 주기적으로 전송하고, 이 신호를 무선 클라이언트가 잡아서 연결한다.
- SSID: Service Set IDentifier 의 줄임말로, 액세스 포인트의 고유이름
  네트워크 이름, 인증, 암호화, 암호화 키 등을 설정해놓아야 무선 클라이언트가 자동으로 무선 액세스 포인트를 찾아 통신할 수 있다.
  무선 공유기와 컴퓨터가 연결하는 과정은 다음과 같다.
  1. 무선 공유기 -> 컴퓨터: 비컨 전송
  2. 무선 공유기 <- 컴퓨터: 같은 SSID 인지 질의
  3. 무선 공유기 -> 컴퓨터: 같은 SSID 여부 회신
  4. 무선 공유기 <-> 컴퓨터: 인증 과정 수행
  5. 무선 공유기 <- 컴퓨터: 접속 요구
  6. 무선 공유기 -> 컴퓨터: 승인 응답
- channel: 여러 기기가 동시에 연결할 수 있도록 주파수 대역을 분할하였을 때 분할된 주파수 대역
  주로 2대 이상의 wap 을 구축했을때 분리되는데, 두 wap 의 전파가 겹치면서 같은 채널로 설정되어 있으면 주파수가 겹치면서 전파 간섭이 생기고 통신 속도가 느려진다.
- byte 단위
  1. kB, MB, GB, TB = 10^3, 10^6, 10^9, 10^12 Byte
  2. KiB(Kibi), MiB(Mebi), GiB(Gibi), TiB(Tebi) = 2^10, 2^20, 2^30, 2^40
