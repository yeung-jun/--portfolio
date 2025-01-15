$(function(){
    // 아래 조명 토글
    $('.turn_off').click(function(){
        $(this).css('display','none');
        $('.turn_on').css('display','block');
        $('.poster1_on').css('display','block');
        $('.poster2_on').css('display','block');
        $('.radio_on').css('display','block');
        $('.phone_on').css('display','block');
    });
    $('.turn_on').click(function(){
        $(this).css('display','none');
        $('.poster1_on').css('display','none');
        $('.poster2_on').css('display','none');
        $('.turn_off').css('display','block');
        $('.radio_on').css('display','none');
        $('.phone_on').css('display','none');
    });
    // 라디오(앨범) 모달
    $('.radio_on').click(function(){
        $('.modal_music').fadeIn();
    });
    $('.modal_music').click(function(){
        $(this).fadeOut();
    });
    // 포스터(영화) 모달
    $('.poster2_on').click(function(){
        $('.modal_movie').fadeIn();
    });
    $('.modal_movie').click(function(){
        $(this).fadeOut();
    });
    // 포스터(작품) 모달
    $('.phone_on').click(function(){
        $('.modal_work').fadeIn();
    });
    $('.modal_work').click(function(){
        $(this).fadeOut();
    });
    // 작품 디테일 모달 3
    $('.work_img3').click(function(){
        $('.work_detail3').fadeIn();
    });
    $('.work_detail3').click(function(){
        $(this).fadeOut();
    });
    // 포스터(요소) 모달
    $('.poster1_on').click(function(){
        $('.modal_metarial').css('display','flex').hide().fadeIn();
    });
    $('.modal_metarial').click(function(){
        $(this).fadeOut();
    });
}); //ready function