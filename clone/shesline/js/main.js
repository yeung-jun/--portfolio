$(function(){
    /* language change */
    $('header ul.l_box li').first().click(function(){
        $(this).siblings().slideToggle().css('display','flex');
        $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
    });
    /* swiper */
    // let swiper = new Swiper(".main_banner", {
    //     loop: true,
    //     navigation: {
    //       nextEl: ".main_banner .prev_next .next",
    //       prevEl: ".main_banner .prev_next .prev",
    //     },
    //     pagination: {
    //         el: ".main_banner .swiper-pagination",
    //         clickable: true,
    //       },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });
    /* hanbuger menu */
    $('header .ham_all ul').click(function(){
        $(this).removeClass('on').siblings().addClass('on');
        $('.all_menu').fadeToggle();
    });
    /* scroll event start */
    let evTop = $('.event').offset().top - 500; // 이벤트가 스크롤 될 위치를 저장
    let linTop = $('.line_up').offset().top - 400; // 라인업이 스크롤 될 위치를 저장
    let prTop = $('.product').offset().top - 400;
    $(window).scroll(function(){
        let st = $(this).scrollTop(); // 스크롤 탑 위치를 st에 저장
        // event content start
        if(st >= evTop) {
            $('main .event article').eq(0).addClass('on').siblings().addClass('on').css({
                'transition-delay':'0.3s'
            })
        } else {
            $('main .event article').removeClass('on');
        }
        // event content end
        // line up content start
        for(let i=0; i<$('main .line_up .container ul.move li').length; i++){
            if(st >= linTop + (i*50)){
                $('main .line_up .container ul.move li').eq(i).addClass('on').css({
                    'transition-delay':(i * 0.5)+'s',
                });
            } else {
                $('main .line_up .container ul.move li').removeClass('on')
            }
        }
        // line up content end
        // product action start
        for(let i=0; i<$('main .product ul li').length; i++){
            if(st >= prTop + (i)){
                $('main .product ul li').eq(i).addClass('on').css({
                    'animation-delay':(i * 0.1)+'s',
                });
            } else {
                $('main .product ul li').removeClass('on')
            }
        }
        // product action end
    }); 
    /* scroll event end */
    $('.video button').click(function(){
        $('.vid_modal').fadeIn();
    });
    $('.vid_modal i').click(function(){
        $('.vid_modal').fadeOut();
    });
    $('footer .family p').eq(0).click(function(){
        $(this).siblings().slideToggle();
        $('footer .family p i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    });
    $('aside.top').click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
}); // ready function