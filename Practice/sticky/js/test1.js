$(document).ready(function () {
    const texts = [
      "텍스트 1",
      "텍스트 2",
      "텍스트 3",
      "텍스트 4",
      "텍스트 5",
      "텍스트 6",
      "텍스트 7",
    ];
  
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const sectionHeight = $(window).height(); // 100vh 높이
      const index = Math.min(
        Math.floor(scrollTop / sectionHeight),
        texts.length - 1
      );
  
      const $dynamicText = $("#dynamic-text");
      const $stickyBox = $(".sticky-box");
  
      if ($dynamicText.text() !== texts[index]) {
        // 애니메이션을 추가하여 텍스트가 변경되도록 함
        $stickyBox.addClass("animate");
  
        setTimeout(() => {
          $dynamicText.text(texts[index]); // 텍스트 업데이트
          $stickyBox.removeClass("animate"); // 애니메이션 제거
        }, 100); // 애니메이션 효과 후 텍스트 전환
      }
    });
  });
  