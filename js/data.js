/* K-SOLUTION 프로토타입 데이터. 문구는 모두 예시입니다. */
window.P = 'https://ktechkr.com/';   /* 기존 사이트의 아이콘·건물 사진을 그대로 불러오는 기준 주소 (화면에는 표시되지 않음) */
window.SITE = {
  name: 'K-SOLUTION',
  nameKo: '케이솔루션',
  address: '경상남도 진주시 정촌면 산업로 124',
  tel: '055-000-0000',
  fax: '055-000-0001',
  email: 'info@example.com',

  menu: [
    { t: 'COMPANY', items: [['인사말', 'greeting'], ['연혁', 'history'], ['미션 및 비전', 'vision'], ['조직도', 'org'], ['오시는 길', 'location']] },
    { t: 'BUSINESS', items: [['무인체계사업', 'business']] },
    { t: 'PRODUCTS', items: [['공중', 'air'], ['지상', 'land'], ['해상', 'sea'], ['체계', 'system']] },
    { t: 'R&D', items: [['연구소', 'lab'], ['연구 분야', 'fields'], ['내ㆍ외부전경', 'facility']] },
    { t: 'NEWS', items: [['보도자료', 'news']] },
    { t: 'CONTACT', items: [['고객문의', 'contact'], ['인재상', 'talent'], ['채용공고', 'careers']] }
  ],

  /* 제품 영역: 공중 → 지상 → 해상 → 체계 순서.
     각 영역 페이지에서 lines 가 탭으로 나열됩니다. 제원 값은 화면 구성을 보기 위한 자리 채움(000)입니다. */
  domains: [
    { id: 'air', ko: '공중', list: '요격드론 ㆍ 공격드론 ㆍ 장거리 드론', img: 'pro-interceptor',
      sub: '요격에서 장거리 임무까지, 하늘을 맡는 무인 항공체계',
      lines: [
        { name: '단거리 저고도 요격드론', code: 'KS-I 01', tag: 'SHORT-RANGE LOW-ALTITUDE INTERCEPTOR', img: 'pro-interceptor', type: 'Multirotor UAS', flow: 'chase-low',
          desc: '낮은 고도로 가까이 들어오는 소형 무인기를 발견하는 즉시 따라붙는 단거리 요격드론입니다.' },
        { name: '중장거리 중고도 요격드론', code: 'KS-I 02', tag: 'MEDIUM/LONG-RANGE MID-ALTITUDE INTERCEPTOR', img: 'pro-interceptor2', type: 'Fixed-wing UAS', flow: 'chase-mid',
          desc: '더 높은 고도에서 멀리서부터 접근하는 무인기를 추적하는 중장거리 요격드론입니다.' },
        { name: '공격드론', code: 'KS-A 01', tag: 'TACTICAL UNMANNED AERIAL SYSTEM', img: 'pro-strike', type: 'Fixed-wing UAS',
          desc: '임무 지역까지 스스로 비행하는 삼각날개형 무인 항공체계입니다.' },
        { name: '장거리 드론', code: 'KS-L 01', tag: 'LONG-RANGE UNMANNED AERIAL SYSTEM · 1,000 KM+', img: 'pro-longrange', type: 'Fixed-wing UAS',
          desc: '1,000km 이상을 비행하며 오래 체공하는 중고도 장거리 무인 항공체계입니다.' }
      ] },
    { id: 'land', ko: '지상', list: '전투 로봇 ㆍ 매복형 지상 드론 ㆍ 지상 감시 스테이션', img: 'pro-robot',
      sub: '병력을 대신해 위험 지역에 먼저 들어가는 로봇과, 땅 위에서 하늘과 주변을 지켜보는 감시 장비',
      lines: [
        { name: '전투 로봇 (궤도형)', code: 'KS-G 01', tag: 'MULTI-PURPOSE UNMANNED GROUND VEHICLE', img: 'pro-robot', type: 'Tracked unmanned ground vehicle',
          desc: '험지를 달리며 정찰과 수송, 지원 임무를 수행하는 궤도형 지상 로봇입니다.' },
        { name: '전투 로봇 (사족보행형)', code: 'KS-G 02', tag: 'QUADRUPED ROBOT PLATFORM', img: 'pro-robot2', type: 'Quadruped robot',
          desc: '계단과 건물 내부처럼 바퀴가 가기 어려운 곳을 걷는 사족보행 로봇입니다.' },
        { name: '매복형 지상 드론', code: 'KS-G 03', tag: 'LOW-PROFILE CAMOUFLAGED GROUND DRONE', img: 'pro-robot3', type: 'Low-profile wheeled ground drone', scene: 'scene-robot3',
          desc: '위장막을 덮은 채 낮게 엎드려 기다리다가 스스로 자리를 옮기는 저상형 지상 드론입니다. 움직이는 대전차 장애물 개념으로 기동로를 지킵니다.' },
        { name: '지상 감시 스테이션', code: 'KS-G 04', tag: 'GROUND SENSOR STATION', img: 'pro-defense', type: 'Fixed / mobile sensor station',
          desc: '레이더 안테나와 카메라를 세워 하늘과 주변을 지켜보는 지상 설치형 감시 장비입니다. 고정형과 이동형으로 운용합니다.' }
      ] },
    { id: 'sea', ko: '해상', list: '해상드론 ㆍ 감시 부이 ㆍ 해저 센서', img: 'pro-maritime',
      sub: '수면 위와 아래, 바닥까지 바다를 지켜보는 무인 수상ㆍ수중체계와 센서',
      lines: [
        { name: '해상드론 (수상)', code: 'KS-M 01', tag: 'UNMANNED SURFACE VESSEL', img: 'pro-maritime', type: 'Unmanned surface vessel',
          desc: '각진 삼동선 선체로 파도를 가르며 연안과 항만을 순찰하고 감시하는 무인 수상정입니다.' },
        { name: '해상드론 (수중)', code: 'KS-M 02', tag: 'UNMANNED UNDERWATER VEHICLE', img: 'pro-maritime2', type: 'Unmanned underwater vehicle',
          desc: '수면 아래를 탐색하는 무인 잠수정입니다.' },
        { name: '감시 부이', code: 'KS-M 03', tag: 'SENSOR BUOY', img: 'pro-buoy', type: 'Moored sensor buoy',
          desc: '바다 위에 떠서 주변 해역을 지켜보고 수집한 정보를 전송하는 감시 부이입니다.' },
        { name: '해저 센서', code: 'KS-M 04', tag: 'SEABED SENSOR NODE', img: 'pro-seabed', type: 'Seabed sensor node',
          desc: '바다 밑바닥에 설치해 수중의 움직임을 감지하는 해저 센서입니다.' }
      ] },
    /* 체계: 제품 탭이 아니라, 공중ㆍ지상ㆍ해상 자산을 하나로 묶는 통합 솔루션 페이지 */
    { id: 'system', ko: '체계', list: '통합 운용 체계', img: 'pro-system', solution: true,
      sub: '공중ㆍ지상ㆍ해상의 모든 자산을 하나로 묶어, 적은 인원으로 운용하는 통합 솔루션' }
  ],

  news: [
    { id: 'news-1', date: '2026-11-20', src: '예시일보', title: 'K-SOLUTION 출범, 무인기ㆍ로봇 전문 기업으로 새 출발' },
    { id: 'news-2', date: '2026-11-12', src: '예시경제', title: 'K-SOLUTION 무인체계 연구소 개소… 진주 본사에 둥지' },
    { id: 'news-3', date: '2026-10-30', src: '예시뉴스', title: 'K-SOLUTION, 공중ㆍ지상ㆍ해상 제품군 개발 로드맵 공개' },
    { id: 'news-4', date: '2026-10-15', src: '예시신문', title: '경남 방산 클러스터와 무인체계 공동 연구 업무협약' },
    { id: 'news-5', date: '2026-09-28', src: '예시타임즈', title: 'K-SOLUTION, 국내 방산 전시회 첫 참가' },
    { id: 'news-6', date: '2026-09-10', src: '예시데일리', title: '무인체계 연구 인력 공개 채용 시작' }
  ]
};
