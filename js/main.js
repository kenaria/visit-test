$(function Scroll(){
  let header = document.querySelector('.header__content--main'),
      headerH = document.querySelector('.header__content--main').clientHeight;

  document.onscroll = function(){
    let scroll = window.scrollY;

    if(scroll > headerH){
      header.classList.add('header-scroll');
      document.body.style.paddingTop = headerH + 'px';
    }else{
      header.classList.remove('header-scroll');
      document.body.removeAttribute('style');
    }
  }    
});

$(function Menu(){
  $('.burger').on('click', function(){
      $('.burger').toggleClass('burger--open');
      $('.header__menu').toggleClass('header__menu--open');
      $('body').toggleClass('lock');
    });
});   
  
  
  $(function sliderSwiperProgramms(){
    var swiper = new Swiper('.programms__slider',{
      slidesPerGroup: 1,
      slidesPerView: 1,
      grabCursor: true,
      freeMode: true,
      speed: 1000,
      watchOverflow: true,
      pagination: {
        el: ".programms__slider-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".programms__slider-navigation--button-next",
        prevEl: ".programms__slider-navigation--button-prev",
      },
  
    //   breakpoints:{
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 20
    //     },
  
    //     576:{
  
    //     },
  
    //     768: {
    //       slidesPerView:1,
    //       spaceBetween:40,
    //     },
  
    //     992: {
    //       slidesPerView:2,
    //       spaceBetween: 20,
    //     },
  
    //     1276: {
    //       slidesPerView:2,
    //       spaceBetween: 30,
    //     },     
  
    //     1635: {
    //       slidesPerView:2,
    //       spaceBetween: 40,
    //     },
    //     1920: {
    //       slidesPerView:2,
    //       spaceBetween: 80,
    //     },
    //   },
    });
  });
  $(function sliderSwiperInteresting(){
    var swiper = new Swiper('.interesting__slider',{
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      grabCursor: true,
      freeMode: true,
      watchOverflow: true,      
      pagination: false,
      navigation: {
        nextEl: ".interesting__slider-navigation--button-next",
        prevEl: ".interesting__slider-navigation--button-prev",
      },
  
      breakpoints:{
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
  
        // 576:{
  
        // },
  
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
  
        992: {
          slidesPerView:3,
          spaceBetween: 24,
        },
  
        // 1276: {
        //   slidesPerView:2,
        //   spaceBetween: 30,
        // },     
  
        // 1635: {
        //   slidesPerView:2,
        //   spaceBetween: 40,
        // },
        // 1920: {
        //   slidesPerView: 3,
        //   spaceBetween: 24,
        // },
      },
    });
  });
  $(function sliderSwiperEntertainment(){
    var swiper = new Swiper('#sightseing .entertainment__tabs-content--slider',{
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      speed: 1000,
      grabCursor: true,
      freeMode: true,
      watchOverflow: true,      
      pagination: false,
      navigation: {
        nextEl: ".entertainment__slider-navigation--button-next",
        prevEl: ".entertainment__slider-navigation--button-prev",
      },
  
      breakpoints:{        
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
  
        992: {
          slidesPerView:3,
          spaceBetween: 10,
        },
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
  
        // 576:{
  
        // },
  
        // 768: {
        //   slidesPerView:1,
        //   spaceBetween:40,
        // },
  
        // 992: {
        //   slidesPerView:2,
        //   spaceBetween: 20,
        // },
  
        // 1276: {
        //   slidesPerView:2,
        //   spaceBetween: 30,
        // },     
  
        // 1635: {
        //   slidesPerView:2,
        //   spaceBetween: 40,
        // },
        // 1920: {
        //   slidesPerView:2,
        //   spaceBetween: 80,
        // },
      },
    });
  });
  $(function sliderSwiperEntertainment(){
    var swiper = new Swiper('#hotels .entertainment__tabs-content--slider',{
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      speed: 1000,
      grabCursor: true,
      freeMode: true,
      watchOverflow: true,      
      pagination: false,
      navigation: {
        nextEl: ".entertainment__slider-navigation--button-next",
        prevEl: ".entertainment__slider-navigation--button-prev",
      },
  
      breakpoints:{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
  
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 20
    //     },
  
    //     576:{
  
    //     },
  
    //     768: {
    //       slidesPerView:1,
    //       spaceBetween:40,
    //     },
  
    //     992: {
    //       slidesPerView:2,
    //       spaceBetween: 20,
    //     },
  
    //     1276: {
    //       slidesPerView:2,
    //       spaceBetween: 30,
    //     },     
  
    //     1635: {
    //       slidesPerView:2,
    //       spaceBetween: 40,
    //     },
    //     1920: {
    //       slidesPerView:2,
    //       spaceBetween: 80,
    //     },
      },
    });
  });