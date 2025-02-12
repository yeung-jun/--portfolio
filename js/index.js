$(function(){
    AOS.init();
    $('.hamburger').click(function(){
        $('header').toggleClass('view');
    });
    $(window).on('scroll', function () {
        const scrollY = $(window).scrollTop(); // 현재 스크롤 위치
        if (scrollY > 0) {
          $('header').addClass('scrolled');
        } else {
          $('header').removeClass('scrolled');
        }
    });
    $('#project article').click(function(){
        $(this).toggleClass('view').siblings().removeClass('view')
    });
    const screenWidth = $(window).width();
    if(screenWidth >= 1201) {
      $('#project article.sum41').click(function(){
        window.location.href= "../sum41/index.html";
      });
      $('#project article.han').click(function(){
        window.location.href= "../hanchangboo/index.html";
      });
      $('#project article.synth').click(function(){
        window.location.href= "../synth_wave_ani/index.html";
      });
    }
});