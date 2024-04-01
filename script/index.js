$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
      slidesPerView: 5,//보여지는 갤러리 수
      spaceBetween: 0,//갤러리 사이 간격
      centeredSlides: true,//센터모드
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.gallery-center .swiper-pagination',
        clickable: true,
      },
    });
    // 두번째 슬라이드
    var swiper = new Swiper('.slide ', {
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
      },
    });

    // 맨 밑에 슬라이드 이미지
    var swiper = new Swiper('.flowslide_inner ', {
      slidesPerView: 6,//보여지는 갤러리 수
      spaceBetween: 0,//갤러리 사이 간격
      speed: 5000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
      swiper.autoplay.start();
    });

    // 서브 메뉴 하나씩 내리기
    $('.nav>li').mouseover(function () {
      $('.sub,.sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseout(function () {
      $('.sub,.sub_bg').stop().slideUp();
    });

    // 메인 배너 슬라이드
    var swiper = new Swiper('.slide_banner', {
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide_banner .swiper-button-next',
        prevEl: '.slide_banner .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.slide_banner .swiper-pagination',
        clickable: true,
      },

    });
    // 스크롤 애니메이션
    AOS.init({
      duration: 1200 //aos 나타나는 속도
    });


  });