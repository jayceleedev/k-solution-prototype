/* 기존 사이트 스타일 시트 위에 얹는 K-SOLUTION 전용 보정.
   .css 파일은 사내 문서보안에 의해 암호화되어 .js 안에 담았습니다. */
document.head.insertAdjacentHTML('beforeend', '<style>' + String.raw`
@font-face{font-family:'Gotham';font-weight:400;src:url('https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-500-normal.woff2') format('woff2');}
@font-face{font-family:'Gotham';font-weight:700;src:url('https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-700-normal.woff2') format('woff2');}
@font-face{font-family:'Gotham';font-weight:900;src:url('https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-900-normal.woff2') format('woff2');}

html{background:#fff;color-scheme:light;}

/* 로고: K-SOLUTION 가로형은 기존 사이트 로고보다 길다 */
.header_inner .logo{max-width:172px;width:172px;}
.header_inner .logo a img{margin-top:3px;}
#nav{width:calc(100% - 172px);}
.f_bot > .f_logo{width:230px;}
.nav_box2 .h_logo{width:62%;}

/* 메인 히어로: 기존 사이트 소총 사진 대신 자체 이미지 */
.section0 .swiper .swiper-slide.ms1,.section0 .swiper .swiper-slide.ms2{background:#0b0e14 center/cover no-repeat;}
.section0 .swiper .swiper-slide::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.68) 0%,rgba(0,0,0,.28) 55%,rgba(0,0,0,0) 100%);}
.section0 .swiper .swiper-slide .move{opacity:1;}

/* 소개 */
.section1 .inner2 .right img{border-radius:22px 0 110px 0;aspect-ratio:1/1;object-fit:cover;}
.section1 .inner2 .left .sec1_logo img:first-child{opacity:.16;}

/* 제품 패널: 기존 사이트와 같은 4칸(공중ㆍ지상ㆍ해상ㆍ체계). 이미지 크기와 버튼 위치만 보정 */
.section2 .m_pro_list > li .pro_inner .pro_top .pro_tit2{font-family:'Pretendard',sans-serif;}
.section2 .m_pro_list > li .pro_inner .pro_top .pro_tit3{font-size:.95rem;line-height:1.6;color:#555;}
.section2 .m_pro_list > li.active .pro_inner .pro_top .pro_tit3{color:#fff;opacity:.85;}
.section2 .m_pro_list > li.active .pro_inner .pro_top .left{width:100%;}
.section2 .m_pro_list > li .pro_inner .pro_img{width:100%;margin-left:-7% !important;}
.section2 .m_pro_list > li .pro_inner .pro_img img{aspect-ratio:4/3;object-fit:contain;transform:none !important;}
.section2 .m_pro_list > li .pro_inner .pro_img img.pro_img2{min-width:0;width:100%;}
.section2 .m_pro_list > li.active .pro_inner .pro_img{width:60%;margin:10px auto 20px !important;}
.section2 .m_pro_list > li:nth-last-of-type(1) .pro_inner,.section2 .m_pro_list > li:nth-last-of-type(1).active .pro_inner{top:50%;}
.section2 .m_pro_list > li .ks_more{display:none;}
.section2 .m_pro_list > li.active .ks_more{display:flex;align-items:center;width:170px;height:40px;margin-left:15%;padding-left:25px;border-radius:0 25px 25px 0;background:#fff;font-size:.7rem;font-weight:300;color:#333;text-transform:uppercase;}
.section2 .m_pro_list > li.active .ks_more span{flex:1;line-height:28px;border-right:1px solid rgba(204,204,204,.5);}
.section2 .m_pro_list > li.active .ks_more i{padding:0 9px;font-size:1rem;color:#808080;}
.section2 .m_pro_list > li.active .ks_more:hover span,.section2 .m_pro_list > li.active .ks_more:hover i{color:#002d82;}

/* 제품 페이지: 설명 문장, 요격드론의 발견→추적→대응 구간 */
.s30 .s30_tit_box_left .ks_desc{margin-top:18px;font-size:.95rem;line-height:1.7;color:#555;max-width:420px;word-break:keep-all;}
.s30 .ks_flow{margin:70px 0 80px;}
.s30 .ks_flow_img{position:relative;margin-top:26px;border-radius:10px;overflow:hidden;background:#0c1017;}
.s30 .ks_flow_img img{width:100%;display:block;aspect-ratio:21/9;object-fit:cover;}
.s30 .ks_flow_img span{position:absolute;right:14px;bottom:12px;font-size:.7rem;color:rgba(255,255,255,.75);letter-spacing:.04em;}
.s30 .ks_flow ol{display:grid;grid-template-columns:repeat(3,1fr);gap:0 28px;margin-top:30px;}
.s30 .ks_flow ol li{position:relative;padding:22px 0 0;border-top:2px solid #002d82;}
.s30 .ks_flow ol li::after{content:'';position:absolute;right:-18px;top:-7px;border-left:9px solid #002d82;border-top:6px solid transparent;border-bottom:6px solid transparent;}
.s30 .ks_flow ol li:last-child::after{display:none;}
.s30 .ks_flow ol b{font-family:'Gotham',sans-serif;font-size:.8rem;color:#378fff;letter-spacing:.1em;}
.s30 .ks_flow ol strong{display:block;margin:6px 0 10px;font-size:1.3rem;color:#1c2b4a;}
.s30 .ks_flow ol p{font-size:.9rem;line-height:1.7;color:#555;}

/* 뉴스 카드(메인) */
.section4 .m_news{width:85%;margin-left:15%;position:relative;}
.section4 .m_news .swiper1{overflow:hidden;}
.section4 .m_news .swiper-slide{width:330px;cursor:pointer;}
.section4 .m_news .sw_img{width:100%;aspect-ratio:330/300;background:#e6ebf2 center/cover no-repeat;}
.section4 .m_news .sw_tit{font-size:1rem;font-weight:600;line-height:1.45;margin:22px 8px 0;min-height:2.9em;}
.section4 .m_news .sw_date{display:flex;align-items:center;gap:10px;margin:18px 8px 0;font-size:.85rem;font-family:'Gotham',sans-serif;letter-spacing:.04em;}
.section4 .m_news .ks_news_ctrl{display:flex;align-items:center;gap:30px;width:82%;margin:60px 0 0;}
.section4 .m_news .ks_news_ctrl .cnt{font-family:'Gotham',sans-serif;font-size:.8rem;white-space:nowrap;}
.section4 .m_news .ks_news_ctrl .cnt b{font-weight:700;}
.section4 .m_news .pagination_progress{position:static;flex:1;height:2px;background:#ddd;}
.section4 .m_news .pagination_progress .swiper-pagination-progressbar-fill{background:#000;}
.section4 .m_news .ks_btns{display:flex;box-shadow:0 2px 10px rgba(0,0,0,.18);border-radius:30px;overflow:hidden;}
.section4 .m_news .ks_btns button{width:42px;height:38px;border:0;background:#fff;cursor:pointer;font-size:1rem;}
.section4 .m_news .ks_btns button + button{border-left:1px solid #eee;}

/* 문의(메인) */
.section5 .inner2 .left .ks_slide .slide_txt{margin-bottom:40px;padding-left:1%;}
.section5 .inner2 .left .ks_slide .slide_txt .address{font-size:1rem;font-weight:200;margin:5px 0 0;}
.section5 .inner2 .left .ks_slide .slide_img img{width:100%;display:block;}

/* 하위 페이지 상단: 기존 사이트는 스크립트로 글자를 나타나게 한다 */
.subtop .path,.subtop .sub_tit .light{opacity:1 !important;transform:none !important;}
.subtop .sub_tit .line1,.subtop .sub_tit .line1 > span{opacity:1 !important;transform:none !important;}

/* 자체 이미지를 넣는 배경 자리 */
.ks_bg{background:#dfe6f0 center/cover no-repeat;}
.s211 .s211-top.s221-top{background:#0c1017 center/cover no-repeat;}

.s131 .right img{aspect-ratio:2/1;object-fit:cover;width:100%;}
.s124 .s124_con{opacity:1 !important;}
.s212 .s212-tit h3{white-space:nowrap;}
.s214 .ks_info img{aspect-ratio:16/9;object-fit:cover;}
.line_sec .line_imgs img,.gal_page .gal_grid img{background:#e9edf3;}

/* 사업영역: 영상 자리에 인포그래픽 */
.s214 .ks_info{width:100%;border-radius:6px;overflow:hidden;background:#f3f5f9;}
.s214 .ks_info img{width:100%;display:block;}

.s214 .ks_info2{margin-top:70px;margin-bottom:90px;}
.s214 .ks_info2:has(svg){position:relative;left:50%;transform:translateX(-50%);}

/* 연구소 원형 도식: 가운데 사진을 자체 이미지로 쓰므로 둥글게 자르고 글자가 보이게 어둡게 한다 */
.ks_lab .s412 .s412-inner img{aspect-ratio:1/1;object-fit:cover;border-radius:50%;filter:brightness(.5) saturate(.9);}

/* 연구소 흐름 도식(SVG) */
.ks_flowsec{padding:40px 0 150px;}
.ks_flowsec .inner2{margin:0 auto;}
.ks_flowsec .c_label{font-family:'Gotham',sans-serif;font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#378fff;}
.ks_flowsec .c_title{font-size:1.9rem;font-weight:700;margin:8px 0 14px;color:#111;}
.ks_flowdesc{font-size:.95rem;color:#555;margin-bottom:30px;}
.ks_flowsvg{width:100%;height:auto;display:block;overflow:visible;}
.ks_flowsvg text{font-family:'Pretendard',sans-serif;text-anchor:middle;}
.ks_flowsvg .plus{stroke:#c3cde0;stroke-width:1;fill:none;}
.ks_flowsvg .rail{stroke:#9fb2d8;stroke-width:1;}
.ks_flowsvg .pill{fill:#002d82;}
.ks_flowsvg .pilltx{fill:#fff;font-size:15px;font-weight:600;letter-spacing:-.01em;}
.ks_flowsvg .base{stroke:#9fb2d8;stroke-width:1;}
.ks_flowsvg .ticks{stroke:#c9d3e6;stroke-width:9;stroke-dasharray:1 11;}
.ks_flowsvg .runner{fill:#378fff;}
.ks_flowsvg .arrow{fill:none;stroke:#002d82;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;}
.ks_flowsvg .drop{stroke:#9fb2d8;stroke-width:1;stroke-dasharray:2 5;}
.ks_flowsvg .pin{fill:#fff;stroke:#002d82;stroke-width:1.5;}
.ks_flowsvg .ring3{fill:#fff;stroke:#9fb2d8;stroke-width:1;stroke-dasharray:1.5 6;}
.ks_flowsvg .ring2{fill:#fff;stroke:#002d82;stroke-opacity:.28;stroke-width:1;}
.ks_flowsvg .core{filter:drop-shadow(0 6px 10px rgba(0,45,130,.25));transition:transform .3s;transform-box:fill-box;transform-origin:center;}
.ks_flowsvg .ico{fill:none;stroke:#fff;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.ks_flowsvg .no{font-family:'Gotham',sans-serif;font-size:13px;font-weight:700;letter-spacing:.14em;fill:#378fff;}
.ks_flowsvg .tit{font-size:21px;font-weight:700;fill:#111;}
.ks_flowsvg .desc{font-size:14.5px;fill:#666;}
.ks_flowsvg .ks_node:hover .core{transform:scale(1.08);}
.ks_flowsvg .ks_node:hover .ring3{stroke:#378fff;}
@media screen and (max-width:1000px){
  .ks_flowsec .inner2{width:92%;overflow-x:auto;}
  .ks_flowsvg{min-width:900px;}
}

.ks_flowsvg text.l{text-anchor:start;}
.ks_flowsvg .conn{fill:none;stroke:#9fb2d8;stroke-width:1.2;stroke-dasharray:2 5;}
.ks_flowsvg .conn2{fill:none;stroke:#9fb2d8;stroke-width:1;}
.ks_flowsvg .ico2{fill:none;stroke:#002d82;stroke-width:1.8;stroke-linecap:round;}
.ks_flowsvg .opc{fill:#fff;stroke:#002d82;stroke-opacity:.3;stroke-width:1;}
.ks_flowsvg .orb{fill:none;stroke:#9fb2d8;stroke-width:1;}
.ks_flowsvg .orb.o3{stroke-dasharray:1.5 6;}
.ks_flowsvg .orb.o2{stroke:#002d82;stroke-opacity:.3;}
.ks_flowsvg .orb.o1{fill:rgba(55,143,255,.07);stroke:#378fff;stroke-opacity:.6;}
.s214 .ks_info:has(svg){background:none;overflow:visible;padding:10px 0;flex:none;width:min(1060px,90vw);margin:0;}
.ks_flowsvg.ks_big .tit{font-size:24px;}
.ks_flowsvg.ks_big .desc{font-size:16.5px;}
.ks_flowsvg.ks_big .no{font-size:14px;}
.s214 .cont .txt .tit h4{white-space:nowrap;}
@media screen and (min-width:1001px){.s214 .cont .txt{gap:40px !important;}.s214 .cont .txt .tit{flex:none !important;width:180px !important;}.s214 .cont .txt .detail{flex:1 1 0 !important;min-width:0;}}
@media screen and (max-width:1000px){.s214 .ks_info:has(svg){width:100%;margin-left:0;overflow-x:auto;}}

/* 제품 페이지 */
.s30 .s30_img_box .img_placeholder img{max-width:92%;max-height:340px;object-fit:contain;}
.s30 .ks_wide{margin:60px 0 0;}
.s30 .ks_wide img{width:100%;display:block;border-radius:10px;border:1px solid #e8ebf0;}

/* 보도자료 목록 */
.ks_newslist{width:70%;margin:0 auto;padding:50px 0 150px;}
.ks_newslist .head{display:flex;justify-content:space-between;align-items:center;margin-bottom:70px;font-size:.9rem;}
.ks_newslist .head b{color:#002d82;}
.ks_newslist .head .search{width:37%;height:38px;background:#f2f2f2;display:flex;align-items:center;justify-content:space-between;padding:0 14px;color:#999;font-size:.85rem;}
.ks_newslist ul{display:grid;grid-template-columns:repeat(3,1fr);gap:70px 34px;}
.ks_newslist li a .thumb{aspect-ratio:3/2;background:#e6ebf2 center/cover no-repeat;}
.ks_newslist li a .tit{font-weight:600;font-size:1rem;line-height:1.5;margin:26px 20px 0;min-height:3em;}
.ks_newslist li a .src{display:flex;justify-content:space-between;align-items:center;margin-top:34px;padding:0 0 18px;border-bottom:1px solid #002d82;color:#999;font-size:.8rem;}
.ks_newslist li a .src span + span{margin-left:14px;padding-left:14px;border-left:1px solid #ccc;}
.ks_newslist li a .src i{font-size:1.3rem;color:#666;margin-right:26px;}

/* 예시 표시 */
.ks_proto{position:fixed;left:14px;bottom:14px;z-index:99999999;background:rgba(0,45,130,.92);color:#fff;font-size:12px;line-height:1;padding:9px 14px;border-radius:20px;letter-spacing:.02em;box-shadow:0 4px 14px rgba(0,0,0,.25);}
.ks_note{font-size:.8rem;color:#999;margin-top:18px;}

@media screen and (max-width:1000px){
  .section2 .m_pro_list{height:auto;flex-direction:column;}
  .section2 .m_pro_list > li,.section2 .m_pro_list > li.active{width:100%;height:170px;}
  .section2 .m_pro_list > li.active{height:420px;}
  .section2 .m_pro_list > li .pro_inner .pro_img{width:42%;position:absolute;right:4%;top:50%;transform:translateY(-50%);margin:0 !important;}
  .section2 .m_pro_list > li .pro_inner .pro_top .pro_tit2{min-height:0;}
  .section2 .m_pro_list > li.active .pro_inner .pro_top .right{position:static;margin-top:16px;}
  .section2 .m_pro_list > li.active .pro_inner .pro_img{position:static;transform:none;width:70%;margin:20px auto !important;}
  .section4 .m_news{width:92%;margin-left:8%;}
  .section4 .m_news .swiper-slide{width:260px;}
  .ks_newslist{width:90%;}
  .ks_newslist ul{grid-template-columns:1fr;}
  .header_inner .logo{max-width:140px;width:140px;}
}
` + '</style>');
