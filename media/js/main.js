//index 스크립트 파일

var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 15,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    // autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });


  var swiper2 = new Swiper('.swiper2', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 4,  //단수
    spaceBetween: 20,  //단사이 여백
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //news처리
  $('#content .sec4 .news_box div:eq(0)').show();
  $('#content .sec4 ul li:eq(0) img').css('filter','grayscale(0)');
  $('#content .sec4 ul li a').click(function(e){
      e.preventDefault();
      var ind = $(this).index('#content .sec4 ul li a');
      $('#content .sec4 .news_box div').hide();
      $('#content .sec4 .news_box div:eq('+ ind +')').fadeIn('fast');
      $('#content .sec4 ul li img').css('filter','grayscale(100%)');
      $(this).find('img').css('filter','grayscale(0)');
  });

  //shop
  var swiper3 = new Swiper('.swiper3', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:4,  //단수
    spaceBetween: 5,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {   //페이지 네이션
    //   el: '.swiper-pagination',
    //   dynamicBullets: true,
    //   clickable: true,
    //   //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    // },
    // autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    scrollbar: {  //하단 스크롤바
      el: '.swiper-scrollbar',
      hide: true
    }
  });
