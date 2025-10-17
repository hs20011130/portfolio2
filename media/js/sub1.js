var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:3,  //단수
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


  var swiper1 = new Swiper('.swiper2', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:2,  //단수
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
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // },
    breakpoints:{
        640 : {   //브라우저가 640이상
          slidesPerView: 2
        },
        768 : {   //브라우저가 768이상
          slidesPerView: 3
        },
        1024 : {  //브라우저가 1024이상
          slidesPerView: 4
        }
      }

  });