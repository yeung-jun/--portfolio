const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector("img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = Array.from(document.querySelectorAll(".gallery-img"));
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none"; // 초기화 상태 명확히 설정
});

// 이미지 클릭 시 모달 열기
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = modal.querySelector("img");
    const caption = document.getElementById("caption");

    modal.style.display = "flex"; // 모달을 보이게 설정
    modalImg.src = this.src; // 클릭한 이미지의 소스를 모달 이미지에 적용
    caption.innerText = this.alt; // 이미지의 대체 텍스트를 캡션에 적용
  });
});

// 모달 표시
function showModal() {
  const currentImage = images[currentIndex];
  modal.style.display = "flex";
  modalImg.src = currentImage.src;
  caption.innerText = currentImage.alt;
}

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // 모달 숨기기
    modalImg.src = ""; // 이미지 초기화
    caption.innerText = ""; // 캡션 초기화
  }
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // 모달 숨기기
  modalImg.src = ""; // 이미지 초기화
  caption.innerText = ""; // 캡션 초기화
});

// 이전 버튼
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showModal();
});

// 다음 버튼
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showModal();
});