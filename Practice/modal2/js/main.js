const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector("img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = Array.from(document.querySelectorAll(".gallery-img"));
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  modal.style.display = "none"; // 초기화 상태 명확히 설정
});

// 이미지 클릭 시 모달 열기
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "flex"; // 모달을 보이게 설정
    modalImg.src = this.src; // 클릭한 이미지의 소스를 모달 이미지에 적용
    caption.innerText = this.alt; // 이미지의 대체 텍스트를 캡션에 적용
  });
});

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // 모달 숨기기
  }
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // 모달 숨기기
});

// 이전 버튼
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  const currentImage = images[currentIndex];
  modalImg.src = currentImage.src;
  caption.innerText = currentImage.alt;
});

// 다음 버튼
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  const currentImage = images[currentIndex];
  modalImg.src = currentImage.src;
  caption.innerText = currentImage.alt;
});

// 방향키로 이미지 전환 (왼쪽: Prev, 오른쪽: Next)
document.addEventListener("keydown", (event) => {
  if (modal.style.display === "flex") { // 모달이 열려있을 때만 반응
    if (event.key === "ArrowLeft") { // 왼쪽 화살표 (Prev)
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      const currentImage = images[currentIndex];
      modalImg.src = currentImage.src;
      caption.innerText = currentImage.alt;
    } else if (event.key === "ArrowRight") { // 오른쪽 화살표 (Next)
      currentIndex = (currentIndex + 1) % images.length;
      const currentImage = images[currentIndex];
      modalImg.src = currentImage.src;
      caption.innerText = currentImage.alt;
    }
  }
});