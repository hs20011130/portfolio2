var product_slide = new Swiper(".latest_slide", {
        loop:true,
        speed:1000,
        slidesPerView: 1.5, 
        spaceBetween : 12,
        centeredSlides:true,
        navigation: {
            prevEl: '.slide_arrow .prev',
            nextEl: '.slide_arrow .next',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints:{
            1025:{
                slidesPerView: 4, 
                spaceBetween : 30,
                centeredSlides:false,
            },
            769:{
                slidesPerView: 3, 
                spaceBetween : 20,
                centeredSlides:true,
            },
            481:{
                slidesPerView: 3, 
                spaceBetween : 15,
                centeredSlides:true,
            },
            381:{
                slidesPerView: 2, 
                spaceBetween : 15,
                centeredSlides:false,
            },
        },
    });