$(function () {
    /*     $('.album .album_imgs .album_cover div').find('.cover').hover(function(){
            $(this).prev('.lp').stop().animate({
                marginLeft : '272px'
            }, 'slow')
        },function(){
            $(this).prev('.lp').stop().animate({
                marginLeft : '130px'
            });
        }); */

    let vid = document.querySelectorAll('.youtube .container figure div video');
    let vidSrc = $.map(vid, function (o) {
        return $(o).attr('src');
    })

    //console.log(vidSrc);

    $('.youtube ul li').click(function () {
        let i = $(this).index();
        $('.youtube ul li,.youtube .youtube_tit h2,.youtube .container figure div').removeClass('on');
        $(this).addClass('on');
        $('.youtube .youtube_tit h2').eq(i).addClass('on');
        $('.youtube .container figure div').eq(i).addClass('on');
        $('.youtube .container figure div video').attr('src','');
        $('.youtube .container figure div').eq(i).addClass('on').find('video').attr('src',vidSrc[i]);
    });

    let openArr = ['https://en.wikipedia.org/wiki/Deryck_Whibley', 'https://en.wikipedia.org/wiki/Steve_Jocz', 'https://en.wikipedia.org/wiki/Dave_Baksh', 'https://en.wikipedia.org/wiki/Jason_McCaslin']

    $('.members .band .band_box .img_box').click(function open() {
        let i = $(this).parent().index();
        window.open(openArr[i]);
    });

    $('header .container div ul.header_left li img.hambuger').click(function () {
        $('.hambuger_menu').animate({ left: 0 }, 300);
    });

    $('.hambuger_menu .menu_top .close').click(function () {
        $('.hambuger_menu').animate({ left: '-70%' }, 300);
    });

    AOS.init();
});