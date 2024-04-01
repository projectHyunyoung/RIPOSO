$(function () {
    /* 서브 메뉴 하나씩 내리기 */
    $('.nav>li').mouseover(function () {
      $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseout(function () {
      $('.sub, .sub_bg').stop().slideUp();
    });
    // 스크롤 애니메이션
    AOS.init({
          duration: 1200 //aos 나타나는 속도
      });
  }); 

  // IntersectionObserver 를 등록한다.
  const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
              if (entry.intersectionRatio > 0) {
                  entry.target.classList.add('on');
              }
              // 그 외의 경우 'on' 클래스 제거
              else {
                  entry.target.classList.remove('on');
              }
          });
      });

      // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
      const boxElList = document.querySelectorAll('.left, .center, .right');
      boxElList.forEach((el) => {
          io.observe(el);
      });
