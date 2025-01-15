$(function(){
    $('.notice_job section h2').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
});