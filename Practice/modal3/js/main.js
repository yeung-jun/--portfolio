window.onload = function() {
  // 페이지의 모든 리소스가 로드되었을 때
  const loadingScreen = document.getElementById('loading-screen');
  
  // 로딩 화면 숨기기
  loadingScreen.classList.add('hidden');
  
  // 로딩 화면을 숨기고 나서 0.5초 후에 페이지가 정상적으로 표시되도록 처리
  setTimeout(function() {
    loadingScreen.style.display = 'none';
  }, 500); // 0.5초 후에 로딩 화면을 아예 숨김
};

const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector(".modal-img");
const modalVideo = modal.querySelector(".modal-video");
const caption = document.getElementById("caption");
const galleryImages = document.querySelectorAll(".gallery-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let images = Array.from(galleryImages);  // 이미지 목록
let videoCurrentTime = 0;  // 동영상 일시 정지 시간

// 페이지 시작 시 모달 숨기기
document.addEventListener("DOMContentLoaded", function () {
  modal.style.display = "none";  // 모달 초기 상태에서 숨김
});

let currentVideoTime = 0;  // 동영상의 현재 시간 상태

// 이미지 클릭 시 모달 띄우기
galleryImages.forEach((img, index) => {
  img.addEventListener("click", function () {
    const imageSrc = this.src;
    const videoSrc = this.getAttribute("data-video");

    modal.style.display = "flex"; // 모달을 보이게 설정
    modalImg.src = imageSrc; // 이미지 소스 설정
    modalVideo.style.display = "none"; // 동영상 숨기기

    // 동영상이 있으면
    if (videoSrc) {
      modalVideo.src = videoSrc;
      modalVideo.style.display = "block"; // 동영상을 보이게 설정
      modalImg.style.display = "none"; // 이미지는 숨기기
      modalVideo.autoplay = true; // 자동 재생 설정
      modalVideo.currentTime = currentVideoTime;  // 이전 동영상 시간부터 시작
      modalVideo.play(); // 동영상 재생
    } else {
      modalImg.style.display = "block"; // 동영상이 없으면 이미지를 보이게 설정
      modalVideo.src = ""; // 동영상 소스 초기화
      modalVideo.autoplay = false; // 자동 재생 설정
    }

    caption.innerText = this.alt; // 이미지의 대체 텍스트를 캡션에 적용
    currentIndex = index; // 현재 인덱스를 설정
  });
});

// Prev 버튼
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Next 버튼
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Prev/Next에서 이미지 표시하는 함수
function showImage(index) {
  const currentImage = images[index];
  const imageSrc = currentImage.src;
  const videoSrc = currentImage.getAttribute("data-video");

  modalImg.src = imageSrc;
  modalVideo.style.display = "none"; // 동영상 숨기기

  // 동영상이 있으면
  if (videoSrc) {
    modalVideo.src = videoSrc;
    modalVideo.style.display = "block"; // 동영상을 보이게 설정
    modalImg.style.display = "none"; // 이미지는 숨기기
    modalVideo.autoplay = true; // 자동 재생 설정
    modalVideo.currentTime = currentVideoTime;  // 동영상 시간 유지
    modalVideo.play(); // 동영상 재생
  } else {
    modalImg.style.display = "block"; // 동영상이 없으면 이미지를 보이게 설정
    modalVideo.src = ""; // 동영상 소스 초기화
    modalVideo.autoplay = false; // 자동 재생 설정
  }

  caption.innerText = currentImage.alt; // 이미지의 대체 텍스트를 캡션에 적용
  currentIndex = index; // 현재 인덱스를 설정
}

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // 모달 숨기기
    currentVideoTime = modalVideo.currentTime; // 동영상 현재 시간 저장
    modalVideo.pause(); // 동영상 일시 정지
    modalVideo.style.display = "none"; // 동영상 숨기기
    modalImg.style.display = "none"; // 이미지는 숨기기
  }
});