$(function () {
  AOS.init();
  const texts = [
    "HTML/CSS/JS로 구성된 사이트입니다.",
    "flex로 정렬후 after로 hover 상황을 만들었습니다.",
    "AOS 애니메이션을 사용하였습니다.",
    "앨범 이미지 목업후 absolute와 hover로 애니메이션을 넣었습니다.",
    "JS와CSS로 메뉴 기능을 구현하였고 프리미어 프로로 영상 용량을 최대한 줄였습니다.",
  ];

  $('.eg').click(function () {
    $(this).find('p').toggleClass('show');
  });

  let defayltht = $('.mockup').offset().top;
  let ht100 = $(window).height();
  let $egp = $('.eg p');
  console.log(ht100);
  console.log(defayltht);
  $(window).scroll(function () {
    let st = $(this).scrollTop();

    if (st >= (ht100 * 0.01) && st < defayltht + (ht100 * 0.4)) {
      $egp.text(texts[0]);
    } else if (st >= defayltht + (ht100 * 0.4) && st < defayltht + (ht100 * 2.2)) {
      $egp.text(texts[1]);
    } else if (st >= defayltht + (ht100 * 2.2) && st < defayltht + (ht100 * 3.5)) {
      $egp.text(texts[2]);
    } else if (st >= defayltht + (ht100 * 3.5) && st < defayltht + (ht100 * 5)) {
      $egp.text(texts[3]);
    } else if (st >= defayltht + (ht100 * 5) && st < defayltht + (ht100 * 6)) {
      $egp.text(texts[4]);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('responsive-link');

    // 화면 크기에 맞는 URL 설정
    function setLink() {
      const width = window.innerWidth;

      if (width >= 1024) {
        link.href = "../sum41/index.html"; // 웹용 링크
      } else if (width >= 768 && width < 1024) {
        link.href = "../sum41/index.html"; // 태블릿용 링크
      } else {
        link.href = "../sum41/index.html"; // 모바일용 링크
      }
    }

    // 초기화
    setLink();

    // 화면 크기 변경 시 링크 업데이트
    window.addEventListener('resize', setLink);
  });


});