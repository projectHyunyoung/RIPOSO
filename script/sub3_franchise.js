$(function () {
    /* 서브 메뉴 하나씩 내리기 */
    $('.nav>li').mouseover(function () {
      $('.sub, .sub_bg').stop().slideDown();
    });
    $('.nav>li').mouseout(function () {
      $('.sub, .sub_bg').stop().slideUp();
    });

    // filter 소스
    $('.filter li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('#filter1').click(function () {
      $('.filter1').show();
      $('.filter_content> div').not('.filter1').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
    });
    $('#filter2').click(function () {
      $('.filter2').show();
      $('.filter_content> div').not('.filter2').hide();
    });
    $('#filter3').click(function () {
      $('.filter3').show();
      $('.filter_content> div').not('.filter3').hide();
    });
    $('#filter4').click(function () {
      $('.filter4').show();
      $('.filter_content> div').not('.filter4').hide();
    });
    $('#filter5').click(function () {
      $('.filter5').show();
      $('.filter_content> div').not('.filter5').hide();
    });

    AOS.init({
			duration: 1200 //aos 나타나는 속도
		});

  }); 