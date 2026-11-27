/* 하위 페이지 틀. 마크업과 클래스 이름은 기존 사이트와 같게 맞췄습니다. 문구는 예시입니다. */
(function () {
  var S = window.SITE, P = window.P;
  var img = function (id, alt, cls) { return '<img data-img="' + id + '" alt="' + (alt || '') + '"' + (cls ? ' class="' + cls + '"' : '') + '>'; };

  /* ---------- COMPANY ---------- */
  var greeting = {
    big: 'company', title: '인사말', sub: '고객의 신뢰를 최우선으로, 케이솔루션이 인사드립니다',
    html: '<section class="sub s111"><div class="s111_img"></div><div class="inner2"><div class="greeting_txt">' +
      '<p class="tit">안녕하세요. 케이솔루션입니다.</p>' +
      '<p>케이솔루션은 첨단 기술과 정밀 제조 능력을 바탕으로 무인기와 로봇의 연구개발과 생산에 나서고 있는 무인체계 전문 기업입니다.</p>' +
      '<p>전장의 모습은 빠르게 바뀌고 있습니다. 사람이 감당하던 위험을 무인체계가 대신하는 시대에, 케이솔루션은 공중과 해상, 지상을 아우르는 제품군과 이를 하나로 묶는 통합 방어 솔루션으로 대한민국 방위산업의 새로운 지평을 열고자 합니다.</p>' +
      '<p>케이솔루션은 연구소에서 설계한 것을 같은 건물의 생산 라인에서 바로 만들고 시험합니다. 설계와 제조가 한곳에서 이어지는 구조는 개발 기간을 줄이고, 품질을 처음부터 끝까지 직접 책임질 수 있게 합니다.</p>' +
      '<p>이를 위해 케이솔루션은 젊은 리더십 아래 국내외 우수 연구 인력을 확보하고, 대학ㆍ연구기관ㆍ협력사와 함께 성장하는 열린 연구 환경을 만들어 가고 있습니다.</p>' +
      '<p>케이솔루션은 첨단 기술을 바탕으로 대한민국 국가 안보와 세계 평화에 이바지하는 기술보국의 가치를 실현해 나갈 것을 약속드립니다.</p>' +
      '<p>고객 여러분의 아낌없는 성원에 감사드리며, 더욱 신뢰받는 기업이 되도록 끊임없이 노력하겠습니다.</p>' +
      '<p class="greeting_bot"><span class="big bold">케이솔루션 임직원 일동</span></p></div></div></section>'
  };

  var hisItem = function (year, rows) {
    return '<div class="his_cont"><div class="his_inner"><div class="left"><p class="gotham year bold">' + year + '</p></div><div class="right"><p class="gotham right_year">' + year + '</p><ul class="his">' +
      rows.map(function (r) { return '<li><p class="month">' + r[0] + '</p><p class="desc">' + r[1].map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</p></li>'; }).join('') +
      '</ul></div></div></div>';
  };
  var history = {
    big: 'company', title: '연혁', sub: '케이솔루션이 걸어갈 길',
    html: '<section class="sub s131"><div class="top"><div class="inner2"><div class="left"><p class="semibold blue">2026-현재</p>' +
      '<p class="big bold upper">무인기와 로봇으로 <br>새로운 길을 <br>만들어 갑니다.</p>' +
      '<p class="light">연구소 설립부터 제품 개발까지<br>케이솔루션이 걸어온 길입니다.</p></div></div>' +
      '<div class="right">' + img('history', '') + '</div></div></section>' +
      '<section class="sub s132"><div class="inner2"><div class="his_top"><div class="his_top_inner"><p class="gotham upper">k-solution history</p><p class="line"></p><p class="gotham count"><span class="current">01</span> / <span class="total">02</span></p></div></div>' +
      '<div class="his_wrap"><span class="barOn" style="height:0%"></span>' +
      hisItem('2027', [['06', ['제품군별 시제 1호기 완성 (예시)']], ['03', ['무인체계 시험동 구축 (예시)']]]) +
      hisItem('2026', [['12', ['기업부설연구소 인정 (예시)', '6개 제품군 개발 착수 (예시)']], ['11', ['K-SOLUTION 법인 설립 (예시)', '진주 본사 내 연구소 개소 (예시)']], ['09', ['무인체계 사업 준비단 발족 (예시)']]]) +
      '</div><p class="ks_note">※ 연혁은 화면 구성을 보기 위한 예시입니다.</p></div></section>'
  };

  var vision = {
    big: 'company', title: '미션 및 비전', sub: '세계 평화에 이바지하는 글로벌 무인체계 전문기업을 향한 비전',
    html: '<section class="sub s121"><div class="s121_bg"><img src="' + P + 'img/s1/s121_img.png" alt=""></div><div class="inner2">' +
      '<div class="mission s121_cont"><p class="blue upper bold">Mission</p><p class="white bold"><span class="quote"><img src="' + P + 'img/s1/s121_quote.png" alt=""></span> 무인 기술로 사람을 지키고 대한민국 국가 안보와<br><span class="right">세계 평화에 이바지하는 기업 !</span></p></div>' +
      '<div class="vision s121_cont"><p class="blue upper bold">Vision</p><p class="white bold"><span>차세대<br> Global Leader in Unmanned Systems</span></p></div></div></section>' +
      '<section class="sub s122"><div class="inner2"><p class="s_tit1 blue bold upper">Strategy &amp; Execution</p><p class="s_tit2 bold upper">전략 및 실천방안</p><div class="s122_cont"><ul class="list">' +
      [['01', '기술혁신', 'Technological innovation', '지속적인 신기술 개발'], ['02', '고객만족', 'Customer satisfaction', '고객의 성장 도모'], ['03', '상생협력', 'win-win cooperation', '동반성장을 통한 협력사 상생'], ['04', '인재존중', 'Respect for human resources', '직원 역량 향상과 보상']]
        .map(function (r, i) { return '<li class="list' + (i + 1) + '" style="opacity:1"><p class="list_ico"><img src="' + P + 'img/s1/s122_ico' + r[0] + '.png" alt=""></p><p class="blue bold">' + r[1] + '</p><p class="light">' + r[2] + '</p><p class="list_txt">' + r[3] + '</p></li>'; }).join('') +
      '</ul></div></div></section>' +
      '<section class="sub s123"><div class="animated-title"><div class="track"><div class="content gotham">WE GO TOGETHER !&nbsp;&nbsp;&nbsp;WE GO TOGETHER !&nbsp;&nbsp;&nbsp;the way k-solution go&nbsp;&nbsp;&nbsp;WE GO TOGETHER !&nbsp;&nbsp;&nbsp;WE GO TOGETHER !&nbsp;&nbsp;&nbsp;the way k-solution go&nbsp;&nbsp;&nbsp;WE GO TOGETHER !</div></div></div></section>' +
      '<section class="sub s124"><div class="s124_bg"><img src="' + P + 'img/s1/s124_bg.png" alt=""></div><div class="s124_cont_wrap"><div class="inner2"><div class="s124_cont">' +
      '<div class="center"><div class="center_bg"><img class="Earth" src="' + P + 'img/s1/s124_inner_bg.png" alt=""><div class="circle cercle-1"><img src="' + P + 'img/s1/s124_circle01.png" alt=""></div><div class="circle cercle-2"><img src="' + P + 'img/s1/s124_circle02.png" alt=""></div></div><div class="center_txt"><p class="blue bold upper">Core Value</p><p class="bold white">핵심가치</p></div></div>' +
      '<div class="s124_inner"><div class="top">' +
      '<div class="left s124_con s124_con1"><p class="bold en">Challenging <br>Execution</p><p class="blue medium">도전적 실행</p><p class="small">새로운 분야를 두려워하지 않고 <br>빠르게 만들고 시험하며 배웁니다</p></div>' +
      '<div class="right s124_con s124_con2"><p class="bold en">Customer First</p><p class="blue medium">고객 최우선</p><p class="small">현장의 요구를 먼저 이해하고 <br>그에 맞춘 제품과 서비스를 제공합니다</p></div></div>' +
      '<div class="top bot"><div class="left s124_con s124_con3"><p class="bold en">Trust-Based</p><p class="blue medium">신뢰 기반</p><p class="small">직원과 협력사, 고객과의 관계를 <br>신뢰 위에서 쌓아 갑니다</p></div>' +
      '<div class="right s124_con s124_con4"><p class="bold en">Communication <br>and Cooperation</p><p class="blue medium">소통과 협력</p><p class="small">연구와 생산이 한 팀으로 소통하며 <br>함께 답을 찾습니다</p></div></div></div></div></div></div></section>'
  };

  var ogCol = function (exec, div, names, wide) {
    return '<li class="og_col' + (wide ? ' og_col--wide' : '') + '"><a class="og_node" href="#none">' + (exec ? '<span class="og_exec">' + exec + '</span>' : '') + '<strong class="og_div">' + div + '</strong></a><ul class="og_names">' +
      names.map(function (n) { return '<li><a href="#none">' + n + '</a></li>'; }).join('') + '</ul></li>';
  };
  var org = {
    big: 'company', title: '조직도', sub: '연구와 생산이 유기적으로 연결된 조직 구성',
    html: '<section class="sub og og_intro"><div class="inner2"><div class="og_intro_in"><div class="og_intro_l"><p class="c_label">Organization</p><h2 class="c_title">연구에서 양산까지<br>하나로 이어진 조직</h2></div>' +
      '<div class="og_intro_r"><p class="txt">케이솔루션은 연구소와 사업 조직이 긴밀하게 맞물려 움직입니다. 설계에서 시제 제작, 시험평가, 양산과 수출까지 하나의 흐름으로 이어지는 조직을 소개합니다.</p></div></div></div></section>' +
      '<section class="sub og og_chart"><div class="og_wrap"><div class="og_top"><div class="og_ceo">CEO</div><div class="og_vp">부사장</div></div><ul class="og_cols">' +
      ogCol('CTO', '무인체계 연구소', ['자율ㆍAI', '기체ㆍ구동', '임무장비', '체계통합', '시험평가'], true) +
      ogCol('COO', '생산본부', ['생산기술', '품질', '구매']) +
      ogCol('', '경영지원본부', ['경영기획', '총무', '보안']) +
      ogCol('', '사업본부', ['국내사업', '해외사업']) +
      '</ul><p class="og_hint">조직 구성은 화면 구성을 보기 위한 예시입니다.</p></div></section>'
  };

  var location_ = {
    big: 'company', title: '오시는 길', sub: '케이솔루션 본사 안내', map: true,
    html: '<section class="sub s151"><div class="inner2"><div class="map"><div class="top"><div id="daumRoughmapContainer1695272247923" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>' +
      '<div class="mid"><div class="map_tit"><div class="left"><p class="big bold">K-SOLUTION 본사</p></div><div class="left"><p class="address bold">' + S.address + '</p>' +
      '<div class="go_map"><a href="http://kko.to/SCRh3N0Rc2" target="_blank" rel="noopener"><p class="go_inner"><span class="img"><img src="' + P + 'img/s1/ico_map.png" alt=""></span><span class="txt">길찾기</span></p></a></div></div></div>' +
      '<div class="map_info"><p><span class="semibold upper">TEL</span><span class="light">' + S.tel + '</span></p><p><span class="semibold upper">FAX</span><span class="light">' + S.fax + '</span></p><p><span class="semibold upper">EMAIL</span><span class="light">' + S.email + '</span></p></div></div></div></div></section>'
  };

  /* ---------- BUSINESS ---------- */
  var business = {
    big: 'business', title: '사업영역', sub: '공중에서 지상, 해상까지 무인체계 전 영역을 연구하고 만듭니다', bg: [['.s221-top', 'biz-top']],
    html: '<section class="sub s211"><div class="s211-top s221-top"></div><div class="s212 s211-inner"><div class="txt"><div class="s212-tit"><h4 class="blue2">our business</h4><h3>무인체계사업</h3></div>' +
      '<div class="s212-detail"><p>무인체계 시장의 새로운 선두주자</p><p>케이솔루션은 첨단 기술과 정밀 제조 능력을 바탕으로<br>무인기와 로봇 시장에 도전합니다.<br>공중ㆍ지상ㆍ해상 제품군과 통합 방어 솔루션으로 새로운 패러다임을 개척합니다.</p></div></div></div>' +
      '<div class="s213 s223"><ul>' +
      '<li><a href="#t1"><div class="icon-wrap"><img src="' + P + 'img/s2/s223_icon1.svg" alt=""></div><p>혁신기술</p></a></li>' +
      '<li><a href="#t2"><div class="icon-wrap"><img src="' + P + 'img/s2/s223_icon2.svg" alt=""></div><p>글로벌사업</p></a></li>' +
      '<li><a href="#t3"><div class="icon-wrap"><img src="' + P + 'img/s2/s223_icon3.svg" alt=""></div><p>안전ㆍ품질</p></a></li></ul></div>' +
      '<div class="s214 s224 s211-inner"><div class="video-wrap"><div class="ks_info">' + img('biz-info', '사업영역 인포그래픽') + '</div></div><div class="cont">' +
      '<div class="txt" id="t1"><div class="tit"><h4>혁신기술</h4></div><div class="detail"><ul class="list"><li>연구소와 생산 라인이 한 건물에 있습니다.</li></ul><p>설계한 것을 바로 만들고, 만든 것을 바로 시험합니다.<br>자율ㆍAI, 기체ㆍ구동, 임무장비, 체계통합 네 분야의 연구가 하나의 제품으로 이어집니다.</p></div></div>' +
      '<div class="txt" id="t2"><div class="tit"><h4>글로벌사업</h4></div><div class="detail"><ul class="list"><li>세계 무인체계 시장의 새로운 개척자 케이솔루션</li></ul><p>케이솔루션은 국내를 넘어 중동 등 해외 시장을 함께 바라봅니다.<br>현장의 요구에 맞춘 제품으로 세계 방산시장의 동반자로서 글로벌 파트너십을 열어가고 있습니다.</p></div></div>' +
      '<div class="txt" id="t3"><div class="tit"><h4>안전ㆍ품질</h4></div><div class="detail"><ul class="list"><li>신뢰의 기본, 강력한 품질 관리</li></ul><p>철저한 품질 관리로 최고의 결과를 도출합니다.<br>핵심 부품을 사내에서 직접 가공하고 검사하여 품질을 처음부터 끝까지 책임집니다.</p></div></div>' +
      '</div></div></section>'
  };

  /* ---------- PRODUCTS ---------- */
  var specRows = function (type) {
    return [['Type', type], ['Dimensions (L × W × H)', '000 × 000 × 000 mm'], ['Weight', '00.0 kg'], ['Power', '000'], ['Operating time', '00 min'], ['Data link', '000'], ['Operating temperature', '-00 ~ +00 ℃'], ['Development stage', 'Concept design']];
  };
  /* 요격드론 전용: 발견 → 추적 → 대응 흐름 */
  var flow = function (m) {
    return '<div class="ks_flow"><h4 class="spec_tit">발견에서 대응까지</h4>' +
      '<div class="ks_flow_img">' + img(m.flow, m.name + ' 운용 장면') + '<span>콘셉트 이미지</span></div><ol>' +
      '<li><b>01</b><strong>발견</strong><p>레이더와 카메라가 넘겨준 표적 정보를 받아 곧바로 이륙합니다.</p></li>' +
      '<li><b>02</b><strong>추적</strong><p>표적의 움직임을 놓치지 않고 빠르게 거리를 좁혀 갑니다.</p></li>' +
      '<li><b>03</b><strong>대응</strong><p>운용자의 확인 아래 표적에 대응하고 결과를 전송합니다.</p></li></ol></div>';
  };
  /* 영역(공중ㆍ지상ㆍ해상ㆍ체계) 한 페이지에 제품군을 탭으로 나열한다 */
  var product = function (d) {
    var conts = d.lines.map(function (m, i) {
      return '<div class="s30_cont' + (i ? '' : ' active') + '"><div class="s30_tit_box"><div class="s30_tit_box_left"><div><h3 class="navy bold">' + m.name + '</h3><p class="gray">' + m.tag + '</p>' +
        (m.desc ? '<p class="gray ks_desc">' + m.desc + '</p>' : '') + '</div>' +
        '<a href="#none" class="tit_down">VIEW CATALOGUE <span class="arrow"><img src="' + P + 'img/s3/ico_arrow_ct.svg" alt=""></span></a></div>' +
        '<div class="s30_img_box"><div class="img_placeholder">' + img(m.img, m.name) + '</div></div></div>' +
        (m.flow ? flow(m) : '') +
        (m.scene ? '<div class="ks_flow"><h4 class="spec_tit">운용 장면</h4><div class="ks_flow_img">' + img(m.scene, m.name + ' 운용 장면') + '<span>콘셉트 이미지</span></div></div>' : '') +
        '<div class="s30_flex_box"><div class="s30_spec_box"><h4 class="spec_tit">SPECIFICATIONS</h4><table class="spec_table_02"><colgroup><col width="40%"><col width="60%"></colgroup>' +
        '<thead><tr><th colspan="2">' + m.code + '</th></tr></thead><tbody>' +
        specRows(m.type).map(function (r) { return '<tr><th>' + r[0] + '</th><td>' + r[1] + '</td></tr>'; }).join('') +
        '</tbody></table></div></div>' +
        '<div class="s30_feature_box"><h4 class="spec_tit">' + m.code + ' FEATURES</h4><ul class="feature_list"><li>Modular design for mission-specific equipment</li><li>Precision-machined structural parts made in-house</li><li>Open interface for third-party sensors</li><li>Designed for volume production</li></ul></div>' +
        (m.info ? '<div class="ks_wide">' + img(m.info, m.name + ' 구성 인포그래픽') + '</div>' : '') +
        '<div class="s30_info_box"><p>*제원 값(000)은 화면 구성을 보기 위한 자리 채움입니다</p><p>**Under development. Specifications subject to change</p></div></div>';
    }).join('');
    return {
      big: 'PRODUCTS', title: d.ko, sub: d.sub,
      html: '<section class="sub s30"><div class="s30_tab_wrap"><ul class="s30_tab">' +
        d.lines.map(function (m, i) { return '<li' + (i ? '' : ' class="active"') + '>' + m.name + '</li>'; }).join('') +
        '</ul></div><div class="s30_content_wrap">' + conts + '</div></section>'
    };
  };

  /* ---------- R&D ---------- */
  /* 연구소: 연구 분야 4개가 설계→시뮬레이션→시제→시험→양산으로 이어지는 인포그래픽 + 설명 3단 (사업영역 페이지와 같은 틀) */
  var lab = {
    big: 'R&amp;D', bigCls: 's421_big_tit', bigPCls: ' sub4-bigtit', title: '연구소', sub: '설계부터 시험평가까지, 무인체계 기술 혁신을 이끄는 연구개발',
    sub2: '<span>케이솔루션 연구소는 무인기와 로봇의 새로운 제품과 기술을 개발하는 다양한 프로젝트를 수행하고 있습니다.</span><br> 설계와 해석, 시뮬레이션, 시제 제작과 시험평가를 한 건물에서 진행하며,<br class="pc"> 연구 결과가 곧바로 생산으로 이어지도록 같은 건물의 생산 라인과 함께 움직입니다.',
    html: '<section class="sub s211 ks_lab"><div class="s214 s224 s211-inner"><div class="video-wrap"><div class="ks_info">' + img('lab-info', '연구소 연구개발 흐름도') + '</div></div><div class="cont">' +
      '<div class="txt" id="t1"><div class="tit"><h4>연구 분야</h4></div><div class="detail"><ul class="list"><li>자율ㆍAI, 기체ㆍ구동, 임무장비 통합, 체계통합이 한 팀으로 일합니다.</li></ul><p>분야별로 따로 개발해 나중에 맞추는 방식이 아니라, 처음부터 하나의 제품을 놓고 함께 설계합니다.<br><a href="sub.html?p=fields" style="display:inline;color:#002d82;text-decoration:underline">연구 분야 자세히 보기</a></p></div></div>' +
      '<div class="txt" id="t2"><div class="tit"><h4>설계와 시제</h4></div><div class="detail"><ul class="list"><li>설계한 것을 같은 건물에서 바로 만듭니다.</li></ul><p>기체 구조와 구동계, 임무장비 배치를 설계하고 해석과 시뮬레이션으로 먼저 검증합니다.<br>검증한 설계는 정밀공작기계로 핵심 부품을 직접 가공해 시제기로 만듭니다.</p></div></div>' +
      '<div class="txt" id="t3"><div class="tit"><h4>시험과 양산</h4></div><div class="detail"><ul class="list"><li>만든 것을 바로 시험하고 양산으로 잇습니다.</li></ul><p>사내 시험 설비에서 성능을 확인하고, 고칠 점은 곧바로 다음 시제에 반영합니다.<br>검증을 마친 설계는 같은 건물의 생산 라인으로 넘어갑니다.</p></div></div>' +
      '</div></div></section>'
  };

  var lineSec = function (no, title, desc, chips, imgId, rev) {
    return '<div class="line_sec' + (rev ? ' rev' : '') + '"><div class="line_txt"><span class="line_no">' + no + '</span><h3>' + title + '</h3><p>' + desc + '</p>' +
      (chips ? '<ul class="line_spec">' + chips.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>' : '') + '</div>' +
      '<div class="line_imgs"><a href="#none">' + img(imgId, title) + '<span class="gal_cap"><b>' + title + '</b>콘셉트 이미지</span></a></div></div>';
  };
  var fields = {
    big: 'R&amp;D', bigCls: 's421_big_tit', title: '연구 분야', sub: '네 분야의 연구가 하나의 제품으로 이어집니다',
    html: '<section class="s421 gal_page"><div class="gal_intro"><p class="c_label">Research Fields</p><p class="c_title">연구 분야</p><p class="gal_desc">자율ㆍAI부터 체계통합까지, 무인체계를 이루는 핵심 기술을 사내에서 직접 연구합니다.</p></div>' +
      lineSec('01', '자율ㆍAI', '스스로 길을 찾고 상황을 판단하는 자율 운용 기술과 영상 인식 기술을 연구합니다.', ['자율 운용', '영상 인식', '다수기 통제'], 'field-1') +
      lineSec('02', '기체ㆍ구동', '가볍고 튼튼한 기체 구조와 구동계를 설계하고, 핵심 부품을 사내에서 정밀 가공합니다.', ['구조 설계', '정밀 가공'], 'field-2', true) +
      lineSec('03', '임무장비 통합', '센서와 임무장비를 플랫폼에 안정적으로 결합하는 마운트와 인터페이스를 연구합니다.', ['모듈형 마운트', '표준 인터페이스'], 'field-3') +
      lineSec('04', '체계통합ㆍ시험평가', '공중ㆍ지상ㆍ해상 플랫폼을 하나의 체계로 묶고, 사내 시험 설비에서 성능을 검증합니다.', ['지휘통제 연동', '시험평가'], 'field-4', true) +
      '</section>'
  };

  var gal = function (file, title, cap, cls) {
    return '<li' + (cls ? ' class="' + cls + '"' : '') + '><a href="' + P + 'img/s4/photo/' + file + '" target="_blank" rel="noopener"><img src="' + P + 'img/s4/photo/' + file + '" alt="' + title + '" loading="lazy"><span class="gal_cap"><b>' + title + '</b>' + cap + '</span></a></li>';
  };
  var facility = {
    big: 'R&amp;D', bigCls: 's421_big_tit', title: '내ㆍ외부전경', sub: '연구와 정밀 제조가 한곳에서 이루어지는 진주 본사',
    html: '<section class="s421 gal_page"><div class="gal_intro plant_intro"><p class="c_label">Headquarters</p><p class="c_title">K-SOLUTION 본사ㆍ연구소</p><p class="gal_desc">케이솔루션의 본사는 설계, 해석, 시뮬레이션, 시험평가 등의 연구과정과 생산이 한곳에서 진행되는 곳입니다.</p>' +
      '<div class="plant_addr"><span class="lab">Addr.</span><span class="val">' + S.address + '</span><a href="sub.html?p=location">오시는 길</a></div></div>' +
      '<div class="gal_hero"><a href="' + P + 'img/s4/photo/exterior.jpg" target="_blank" rel="noopener"><img src="' + P + 'img/s4/photo/exterior.jpg" alt="외부전경" loading="lazy"><span class="gal_cap"><b>외부전경</b>경남 진주 정촌 산업단지에 자리한 본사 건물</span></a></div>' +
      '<div class="gal_sec"><p class="c_label">Interior</p><p class="c_title">내부전경</p><p class="gal_desc">로비부터 성능검사실, 물류창고까지 정밀 제조와 안전을 위해 설계된 공간입니다.</p><ul class="gal_grid">' +
      gal('lobby.jpg', '로비', '본사 로비', 'wide') + gal('wall.jpg', '전시벽', '비전을 소개하는 전시벽') + gal('control.jpg', '성능검사실', '완성된 제품의 성능을 최종 점검하는 곳') + gal('warehouse.jpg', '물류창고', '원소재 입고부터 출하까지 물량 흐름을 관리하는 물류창고', 'wide') +
      '</ul></div></section>'
  };

  /* ---------- NEWS ---------- */
  var news = {
    big: 'news', title: '보도자료', sub: '케이솔루션의 새로운 소식을 전해 드립니다',
    html: '<div class="ks_newslist"><div class="head"><p>총 <b>' + S.news.length + '</b>건</p><div class="search"><span>검색어 입력</span><i class="xi-search"></i></div></div><ul>' +
      S.news.map(function (n) { return '<li><a href="#none"><div class="thumb" data-bgimg="' + n.id + '"></div><p class="tit">' + n.title + '</p><p class="src"><span><span>출처</span><span>' + n.src + '</span></span><i class="xi-arrow-right"></i></p></a></li>'; }).join('') +
      '</ul><p class="ks_note">※ 기사 제목과 출처는 화면 구성을 보기 위한 예시입니다.</p></div>'
  };

  /* ---------- CONTACT ---------- */
  var field = function (label, req, extra) {
    return '<li class="no_bor"><div class="f_title">' + (req ? '<span class="color1">*</span>' : '') + label + (extra || '') + '</div><div class="f_cont"><p><input type="text" class="f_input"></p></div><div class="block"></div></li>';
  };
  var contact = {
    big: 'contact', n: 7, title: '고객문의', sub: '제품ㆍ협력 문의를 남겨 주시면 담당자가 신속히 답변드립니다',
    html: '<section class="sub s711"><div class="inner2"><div class="container"><p class="sub_p2 form_p">입력박스의 (* ) 표시는 필수입력 사항 입니다</p><div class="form_inner"><form id="form1" onsubmit="alert(\'프로토타입에서는 전송되지 않습니다.\');return false;">' +
      '<ul class="form_ul">' + field('회사명') + field('연락처', true) + '</ul>' +
      '<ul class="form_ul">' + field('성명', true, ' <span class="title_info">실명으로 공백없이 입력하세요.</span>') + field('이메일 주소', true) + '</ul><div class="form_line"></div>' +
      '<div class="form_tabs"><div class="f_title ver1"><span class="color1">*</span>종류</div><div id="form_tabs">' +
      ['제품문의', '협업문의', '협력사문의', '기타문의'].map(function (t, i) { return '<input class="tab_item" type="radio" name="catetype1" value="' + t + '" id="option' + (i + 1) + '"><label class="tab_item txt" for="option' + (i + 1) + '">' + t + '</label>'; }).join('') +
      '</div></div><div class="block"></div>' +
      '<div><div class="f_title">제목</div><div class="f_cont"><p><input type="text" class="f_input"></p></div><div class="block"></div></div>' +
      '<div><div class="f_title">문의내용</div><div class="f_cont2"><p><textarea class="f_input2"></textarea></p></div><div class="block"></div></div>' +
      '<div style="margin:30px 0 0;font-size:.85rem;color:#555;"><label><input type="checkbox" required> 개인정보 수집ㆍ이용에 동의합니다. (수집 목적: 문의 답변 / 항목: 회사명, 성명, 연락처, 이메일 / 보유 기간: 답변 완료 후 1년 / 동의를 거부할 수 있으며, 거부 시 문의 접수가 제한됩니다.)</label></div>' +
      '<div style="text-align:center;margin:50px 0 0;"><button type="submit" style="width:190px;height:50px;border:0;border-radius:25px;background:#002d82;color:#fff;font-size:.95rem;font-family:inherit;cursor:pointer;">문의하기</button></div>' +
      '</form></div></div></div></section>'
  };

  var talentRow = function (no, en, tit, txt, file, alt) {
    return '<li><div class="cr_talent_img"><img src="' + P + 'img/careers/' + file + '" alt="' + alt + '" loading="lazy"></div><div class="cr_talent_txt"><p class="no gotham">' + no + '<span>' + en + '</span></p><p class="tit">' + tit + '</p><p class="txt">' + txt + '</p></div></li>';
  };
  var step = function (n, name, desc) {
    return '<li><span class="ic"><img src="' + P + 'img/careers/ic_step' + n + '.svg" alt=""></span><span class="tx"><span class="step gotham">STEP ' + n + '</span><span class="name">' + name + '</span><span class="desc">' + desc + '</span></span></li>';
  };
  var talent = {
    big: 'contact', n: 7, title: '인재상', sub: '케이솔루션과 함께 무인체계의 미래를 만들 인재를 찾습니다',
    html: '<section class="sub careers cr_intro"><div class="inner2"><div class="cr_intro_in"><div class="cr_intro_l"><p class="c_label">Talent</p><p class="c_title">케이솔루션이 함께하고 싶은 인재</p></div>' +
      '<p class="cr_intro_r">케이솔루션은 첨단 기술을 바탕으로 대한민국 국가 안보와 세계 평화에 이바지하는 기업을 지향합니다. 새로운 분야에 도전하는 젊은 조직인 만큼, 스스로 생각하고 끝까지 해내는 사람과 함께 성장하고자 합니다.</p></div><ul class="cr_talent">' +
      talentRow('01', 'Challenge', '도전하는 인재', '익숙한 방식에 머무르지 않고 더 나은 방법을 찾아 시도하는 사람', 'talent_challenge.jpg', '태블릿에 부품 설계를 스케치하는 엔지니어') +
      talentRow('02', 'Expertise', '전문성을 갖춘 인재', '자기 분야를 깊이 파고들어 세계 최고 수준의 품질을 만들어내는 사람', 'talent_expertise.jpg', '정밀 가공 부품을 측정하는 손') +
      talentRow('03', 'Responsibility', '책임을 다하는 인재', '국가 안보와 직결된 일이라는 무게를 알고 원칙과 보안을 지키는 사람', 'talent_responsibility.jpg', '완성 부품을 검사하는 검사원') +
      talentRow('04', 'Collaboration', '함께 성장하는 인재', '동료와 협력사를 존중하고 열린 소통으로 함께 답을 찾는 사람', 'talent_collaboration.jpg', '도면을 두고 의논하는 동료들') +
      '</ul></div></section>' +
      '<section class="sub careers cr_process"><div class="inner2"><p class="c_label">Recruiting Process</p><p class="c_title">채용 절차</p><p class="careers_note">전형 일정과 결과는 지원서에 적어 주신 연락처로 개별 안내드립니다. 직무에 따라 전형 단계가 추가될 수 있습니다.</p><ol class="cr_steps">' +
      step(1, '서류전형', '지원서와 이력서를 검토합니다') + step(2, '1차 면접 (직무)', '직무 역량과 경험을 확인합니다') + step(3, '2차 면접 (인적성)', '인성과 조직 적합성을 확인합니다') + step(4, '증빙서류 검증', '이력서 내용과 증빙서류가 일치하는지 확인합니다') + step(5, '최종합격', '합격을 안내하고 입사 절차를 진행합니다') +
      '</ol></div></section>' +
      '<section class="cr_cta"><img class="cr_cta_img" src="' + P + 'img/careers/cta_bg.jpg" alt="" loading="lazy"><div class="cr_cta_in"><p class="cr_cta_tit">지금 진행 중인 채용공고를 확인해 보세요</p><div class="careers_btns"><a href="sub.html?p=careers" class="btn_fill">채용공고 보기</a></div></div></section>'
  };

  var job = function (tit, dept, kind, previews, file) {
    return '<li class="open"><a class="cr_job" href="#none"><div class="cr_job_img"><img src="' + P + 'img/careers/' + file + '" alt="" loading="lazy"></div><div class="cr_job_body"><p class="cr_job_top"><span class="badge open">모집중</span><span class="dday gotham">상시</span></p><p class="cr_job_tit">' + tit + '</p>' +
      '<div class="job_meta"><span><b>부서</b>' + dept + '</span><span><b>구분</b>' + kind + '</span><span><b>고용형태</b>정규직</span><span><b>근무지</b>경남 진주시 정촌면 산업로 124</span><span><b>접수기간</b>상시 접수</span></div>' +
      '<ul class="job_preview">' + previews.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div><div class="cr_job_go">자세히 보기 →</div></a></li>';
  };
  var careers = {
    big: 'contact', n: 7, title: '채용공고', sub: '케이솔루션에서 진행 중인 채용 공고입니다',
    html: '<section class="sub careers cr_jobs"><div class="inner2"><div class="cr_jobs_head"><div><p class="c_label">Now Hiring</p><p class="c_title">진행 중인 공고 <em>2</em>건</p></div>' +
      '<div class="cr_chips"><button type="button" class="on">전체 <b>2</b></button><button type="button">모집중 <b>2</b></button><button type="button">마감 <b>0</b></button></div></div>' +
      '<p class="careers_intro">현재 진행 중인 채용 공고입니다. 공고를 누르면 담당업무, 자격요건, 근무조건과 전형절차를 자세히 볼 수 있습니다.</p><ul class="cr_joblist">' +
      job('무인체계 연구원 (자율ㆍAI / 기체ㆍ구동)', '무인체계 연구소', '신입/경력', ['자율 운용, 영상 인식, 기체 구조 설계 등 연구 직무', '관련 분야 학사 이상'], 'dept_rnd.jpg') +
      job('상시채용 (전 부문)', '전 부문', '신입/경력', ['연구, 생산, 품질, 경영지원, 사업 등 전 부문', '지원 직무를 정하고 이력서와 함께 보내 주세요'], 'dept_management.jpg') +
      '</ul><div class="career_notice">ㆍ제출하신 서류는 채용 목적으로만 사용되며, 전형 종료 후 관련 법령에 따라 파기합니다.<br>ㆍ채용 관련 문의: <a href="sub.html?p=contact">고객문의</a> 또는 대표전화 ' + S.tel + '<br>ㆍ공고 내용은 화면 구성을 보기 위한 예시입니다.</div></div></section>'
  };

  var pages = { greeting: greeting, history: history, vision: vision, org: org, location: location_, business: business, lab: lab, fields: fields, facility: facility, news: news, contact: contact, talent: talent, careers: careers };
  /* 체계: 통합 솔루션 페이지 (사업영역 페이지와 같은 틀을 쓴다) */
  var solution = function (d) {
    var card = function (p, icon, label) { return '<li><a href="sub.html?p=' + p + '"><div class="icon-wrap"><img src="' + P + 'img/s2/s223_icon' + icon + '.svg" alt=""></div><p>' + label + '</p></a></li>'; };
    return {
      big: 'PRODUCTS', title: d.ko, sub: d.sub, bg: [['.s221-top', 'system-top']],
      html: '<section class="sub s211"><div class="s211-top s221-top"></div><div class="s212 s211-inner"><div class="txt"><div class="s212-tit"><h4 class="blue2">our solution</h4><h3>통합 운용 체계</h3></div>' +
        '<div class="s212-detail"><p>한두 명이 군단급 전력에 맞서는 통합 솔루션</p><p>케이솔루션의 통합 운용 체계는 공중ㆍ지상ㆍ해상의 무인 자산과 센서를<br>하나의 지휘통제 화면으로 연결합니다.<br>적은 인원으로도 넓은 지역을 지킬 수 있도록 설계한 체계입니다.</p></div></div></div>' +
        '<div class="s213 s223"><ul>' + card('air', 1, '공중') + card('land', 2, '지상') + card('sea', 3, '해상') + '</ul></div>' +
        '<div class="s214 s224 s211-inner"><div class="video-wrap"><div class="ks_info">' + img('system-info', '통합 운용 체계 구성도') + '</div></div><div class="cont">' +
        '<div class="txt" id="t1"><div class="tit"><h4>하나의 화면</h4></div><div class="detail"><ul class="list"><li>공중ㆍ지상ㆍ해상의 모든 자산을 한 화면에서 봅니다.</li></ul><p>드론과 로봇, 지상 감시 스테이션, 부이와 해저 센서가 보내는 정보를 하나의 상황도로 모읍니다.<br>운용자는 흩어진 장비를 따로 다루지 않고 전체 상황을 한눈에 파악합니다.</p></div></div>' +
        '<div class="txt" id="t2"><div class="tit"><h4>소수 인원 운용</h4></div><div class="detail"><ul class="list"><li>한두 명이 군단급 전력에 맞설 수 있도록.</li></ul><p>반복되는 감시와 이동, 임무 배정은 체계가 맡고 운용자는 판단과 승인에 집중합니다.<br>적은 인원으로 넓은 지역과 많은 장비를 동시에 운용하는 것이 이 체계의 목표입니다.</p></div></div>' +
        '<div class="txt" id="t3"><div class="tit"><h4>시설 및 지역방어</h4></div><div class="detail"><ul class="list"><li>탐지에서 대응까지 하나의 흐름으로.</li></ul><p>중요 시설과 지역을 둘러싼 탐지, 식별, 대응 과정을 하나의 체계로 묶습니다.<br>필요한 자산을 골라 시설 하나부터 넓은 지역까지 같은 화면으로 지킵니다.</p></div></div>' +
        '</div><div class="ks_info ks_info2">' + img('defense-info', '시설 및 지역방어 구성도') + '</div></div></section>'
    };
  };
  S.domains.forEach(function (d) { pages[d.id] = d.solution ? solution(d) : product(d); });
  S.pages = pages;
})();
