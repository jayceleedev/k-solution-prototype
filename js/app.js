(function () {
  var S = window.SITE, P = window.P;
  var $ = function (q, el) { return (el || document).querySelector(q); };
  var $$ = function (q, el) { return [].slice.call((el || document).querySelectorAll(q)); };
  var url = function (p) { return 'sub.html?p=' + p; };

  /* ---------- 헤더 ---------- */
  var gnb = S.menu.map(function (m) {
    return '<li><a href="' + url(m.items[0][1]) + '">' + m.t + '</a><ul class="lnb">' +
      m.items.map(function (i) { return '<li><a href="' + url(i[1]) + '">' + i[0] + '</a></li>'; }).join('') + '</ul></li>';
  }).join('');
  var lang = '<div class="lang"><span>KR <i class="xi-angle-down-min"></i></span><div class="lang_menu"><ul><li><a href="#none">EN</a></li></ul></div></div>';
  var icon = '<div class="menu_icon"><div id="nav-icon"><span></span><span></span><span></span></div></div>';
  var hd = $('#ks-header');
  if (hd) {
    hd.outerHTML =
      '<div id="header"><div class="header_inner"><div class="logo"><a href="index.html"><img src="assets/logo.svg" alt="K-SOLUTION"></a></div>' +
      '<div id="nav"><ul class="gnb">' + gnb + '</ul></div><div class="header_right">' + lang + icon + '</div></div></div>' +
      '<div class="nav_box2"><div class="bg"></div><div class="inner"><div class="btn_area">' + lang + icon + '</div><div class="cont">' +
      '<div class="cont_inner news"><p class="gotham black upper">NEWS</p><ul class="news_cont">' +
      S.news.slice(0, 2).map(function (n) { return '<a href="' + url('news') + '"><li><p class="img"><img data-img="' + n.id + '" alt=""></p><p class="txt"><span class="semibold">' + n.title + '</span><span class="light">' + n.date.replace(/-/g, '.') + '</span></p></li></a>'; }).join('') +
      '</ul><ul class="btn_list"><li><a href="' + url('news') + '"><span class="light">보도자료</span><i class="xi-angle-right-min"></i></a></li></ul></div>' +
      '<div class="cont_inner who"><p class="gotham black upper">who we are</p><ul class="btn_list"><li><a href="' + url('business') + '"><span class="light upper">BUSINESS</span><i class="xi-angle-right-min"></i></a></li><li><a href="' + url('air') + '"><span class="light upper">PRODUCTS</span><i class="xi-angle-right-min"></i></a></li></ul></div>' +
      '<a href="index.html"><p class="h_logo"><img src="assets/logo.svg" alt=""></p></a><p class="h_address light">(52845) ' + S.address + ', ' + S.name + '</p>' +
      '<ul class="h_map"><li><a href="' + url('contact') + '">고객문의</a></li><li><a href="#none">개인정보처리방침</a></li></ul><p class="copy light upper">Copyright © ' + S.name + '. All rights reserved.</p></div></div>' +
      '<div class="nav-siteMap white mob"><div class="siteMap-bg"></div><div class="siteMap-wrap"><h1 class="white">Site Map</h1><ul class="m_nav">' +
      S.menu.map(function (m) { return '<li><p class="nav_tit">' + m.t + '<span></span></p><ul class="mob_sub">' + m.items.map(function (i) { return '<li><a href="' + url(i[1]) + '">' + i[0] + '</a></li>'; }).join('') + '</ul></li>'; }).join('') +
      '</ul></div></div></div>';
  }

  /* ---------- 푸터 ---------- */
  var ft = $('#ks-footer');
  if (ft) {
    ft.outerHTML = '<div class="section footer"><div id="topBtn"><img src="' + P + 'img/ico_top.png" alt="top"></div><div class="f_wrap"><div class="f_top"><ul class="f_nav">' +
      S.menu.map(function (m) { return '<li><a href="' + url(m.items[0][1]) + '" class="f_tit bold white">' + m.t + '</a><ul class="f_nav_sub">' + m.items.map(function (i) { return '<li><a href="' + url(i[1]) + '">' + i[0] + '</a></li>'; }).join('') + '</ul></li>'; }).join('') +
      '</ul></div><div class="f_bot"><div class="f_logo"><a href="index.html"><img src="assets/logo-white.svg" alt="K-SOLUTION"></a><div class="privacy"><a href="#none" class="white light">개인정보처리방침</a></div></div>' +
      '<div class="f_info"><ul class="info_wrap"><li><p><span class="bold">회사명</span><span class="light">' + S.name + '</span></p><p><span class="bold">대표자</span><span class="light">○○○</span></p><p><span class="bold">대표번호</span><span class="light">' + S.tel + '</span></p><p><span class="bold">FAX</span><span class="light">' + S.fax + '</span></p></li>' +
      '<li><p><span class="bold">대표이메일</span><span class="light">' + S.email + '</span></p><p><span class="bold">주소</span><span class="light"><i>본사ㆍ연구소 : ' + S.address + '</i></span></p></li></ul>' +
      '<p class="copyright white light upper">Copyright © ' + S.name + '. All rights reserved.</p></div></div></div></div>' +
      '<div class="ks_proto"><b>PROTOTYPE</b>문구와 이미지는 예시입니다<span>새로고침은 <kbd>Shift</kbd>+<kbd>F5</kbd></span></div>';
  }

  /* ---------- 하위 페이지 ---------- */
  var root = $('#ks-sub');
  if (root) {
    var id = new URLSearchParams(location.search).get('p') || 'greeting';
    var pg = S.pages[id] || S.pages.greeting;
    document.title = pg.title + ' | ' + S.name;
    var letters = pg.title.split('').map(function (ch, i) { return '<span style="animation-delay:' + (0.15 + i * 0.09).toFixed(2) + 's">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>'; }).join('');
    root.outerHTML =
      '<div id="subtop' + (pg.n || 1) + '" class="subtop"><div class="inner2"><div class="path"><ul class="path_wrap"><li class="home"><a href="index.html"><img src="' + P + 'img/ico_home.png" alt=""></a></li><li class="s1_tit"><p class="upper light">' + S.name + '</p></li></ul></div>' +
      '<div class="sub_tit"><p class="bold big line1">' + letters + '</p><p class="light small line2">' + pg.sub + '</p></div></div>' +
      '<div class="big_tit ' + (pg.bigCls || '') + '"><p class="gotham upper' + (pg.bigPCls || '') + '">' + pg.big + '</p></div>' +
      (pg.sub2 ? '<div class="inner2 sub_tit2"><p>' + pg.sub2 + '</p></div>' : '') + '</div>' + pg.html;
    (pg.bg || []).forEach(function (b) { probe(b[1], function (src) { var el = $(b[0]); if (el) el.style.backgroundImage = 'url(' + src + ')'; }); });
    if (pg.map && window.daum && daum.roughmap) {
      try { new daum.roughmap.Lander({ timestamp: '1695272247923', key: '2g9ud', mapWidth: '1132', mapHeight: '436' }).render(); } catch (e) { }
    }
    /* 제품 탭 */
    $$('.s30_tab li').forEach(function (li, i) {
      li.addEventListener('click', function () {
        $$('.s30_tab li').forEach(function (x, j) { x.classList.toggle('active', i === j); });
        $$('.s30_cont').forEach(function (x, j) { x.classList.toggle('active', i === j); });
      });
    });
    /* 연구소 원형 탭 */
    $$('.s41-circle').forEach(function (el, i) {
      var pick = function () {
        $$('.s41-circle').forEach(function (x, j) { x.classList.toggle('active', i === j); });
        $$('.s412').forEach(function (x, j) { x.classList.toggle('active', i === j); });
      };
      el.addEventListener('mouseenter', pick);
      el.addEventListener('click', pick);
    });
  }

  /* ---------- 이미지 자리 ---------- */
  function probe(id, ok, fail) {
    var exts = ['webp', 'png', 'jpg'];
    (function next(i) {
      if (i >= exts.length) { if (fail) fail(); return; }
      var im = new Image();
      im.onload = function () { ok(im.src); };
      im.onerror = function () { next(i + 1); };
      im.src = 'assets/img/' + id + '.' + exts[i];
    })(0);
  }
  function ph(label) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e9edf3"/><path d="M0 600 L800 0" stroke="#d5dbe5" stroke-width="2"/><path d="M0 0 L800 600" stroke="#d5dbe5" stroke-width="2"/><text x="400" y="310" font-family="sans-serif" font-size="30" fill="#8793a6" text-anchor="middle">' + label + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  $$('img[data-img]').forEach(function (el) {
    var id = el.dataset.img;
    el.src = ph(id);
    probe(id, function (src) { el.src = src; });
  });
  $$('[data-bgimg]').forEach(function (el) {
    probe(el.dataset.bgimg, function (src) { el.style.backgroundImage = 'url(' + src + ')'; });
  });

  /* ---------- 공통 동작 ---------- */
  $$('.menu_icon').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#nav-icon').forEach(function (n) { n.classList.toggle('open'); });
      $('.nav_box2').classList.toggle('open');
    });
  });
  var nbg = $('.nav_box2 .bg');
  if (nbg) nbg.addEventListener('click', function () { $('.nav_box2').classList.remove('open'); });
  $$('.m_nav .nav_tit').forEach(function (t) {
    t.addEventListener('click', function () { t.parentNode.classList.toggle('on'); var s = t.nextElementSibling; s.style.display = s.style.display === 'block' ? 'none' : 'block'; });
  });
  var header = $('#header');
  var onScroll = function () { if (header) header.classList.toggle('active', window.scrollY > 0 || !$('.section0')); };
  window.addEventListener('scroll', onScroll); onScroll();
  var top = $('#topBtn');
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  var hover = function (q, cls) {
    $$(q).forEach(function (li) {
      li.addEventListener('mouseover', function () {
        $$(q).forEach(function (x) { x.classList.remove(cls); });
        li.classList.add(cls);
      });
    });
  };
  hover('.m_pro_list > li', 'active');
  hover('.newsz', 'on_news');
  hover('.m4_list > li', 'active');

  /* ---------- 메인 슬라이드 ---------- */
  if (window.Swiper && $('.section0 .mySwiper')) {
    new Swiper('.section0 .mySwiper', {
      effect: 'fade', loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.sec0_control .swiper-pagination', type: 'fraction' },
      navigation: { nextEl: '.sec0_control .swiper-button-next', prevEl: '.sec0_control .swiper-button-prev' }
    });
    $$('.section0 .swiper-slide[data-bgimg]').forEach(function (el) {
      probe(el.dataset.bgimg, function (src) { el.style.backgroundImage = 'url(' + src + ')'; });
    });
  }
  if (window.Swiper && $('.swiper1')) {
    var total = S.news.length;
    var sw = new Swiper('.swiper1', {
      slidesPerView: 'auto', spaceBetween: 25, loop: true, loopedSlides: 4,
      pagination: { el: '.pagination_progress', type: 'progressbar' },
      navigation: { nextEl: '.ks_next', prevEl: '.ks_prev' },
      on: { slideChange: function (s) { var c = $('.ks_news_ctrl .cnt b'); if (c) c.textContent = ('0' + (s.realIndex + 1)).slice(-2); } }
    });
    var tt = $('.ks_news_ctrl .cnt span'); if (tt) tt.textContent = ('0' + total).slice(-2);
  }
})();
