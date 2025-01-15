$(function () {
  AOS.init();
/*   $('.eg').click(function () {
    $('.eg p').stop().toggle('slow');
  }); */

  const texts = [
    "이젠아카데미DX교육센터 프로젝트",
    "자신이 좋아하는 주제선정 및 기획후",
    "반응형 사이트 제작에 대한 프로젝트로",
    "CSS 애니메이션, 자바스크립트 등이 포함되어 있습니다."
  ];

  // .mockup 클래스의 스크롤 이벤트를 감지
  $(".mockup").on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const sectionHeight = $(window).height(); // 100vh 높이
    const index = Math.min(
      Math.floor(scrollTop / sectionHeight),
      texts.length - 1
    );

    const $dynamicText = $(".eg p"); // .eg 안의 p 태그를 선택
    const $stickyBox = $(".sticky-box");

    // 텍스트 변경 및 애니메이션 효과
    if ($dynamicText.text() !== texts[index]) {
      $stickyBox.addClass("animate");

      setTimeout(() => {
        $dynamicText.text(texts[index]); // 텍스트 업데이트
        $dynamicText.addClass("show"); // 텍스트를 보이도록 함
        $stickyBox.removeClass("animate"); // 애니메이션 제거
      }, 100); // 애니메이션 효과 후 텍스트 전환
    }
  });

  // 클릭 이벤트로 텍스트 토글
  $('.eg').click(function () {
    //$('.eg p').stop().toggle('slow'); // 텍스트를 슬로우 애니메이션으로 보이거나 숨김
  });

  document.getElementById('open-popup').addEventListener('click', function(event) {
    event.preventDefault();  // 링크의 기본 동작을 막습니다.
    window.open("../sum41/index.html", "new_tab", "width=1024,height=768");
  });

});