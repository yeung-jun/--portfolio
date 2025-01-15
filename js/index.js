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
});