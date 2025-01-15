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
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('image-modal');
  const modalImage = modal.querySelector('.modal-img');
  const modalVideo = document.getElementById('modal-video');
  const caption = document.getElementById('caption');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let currentIndex = 0;
  let images = document.querySelectorAll('.gallery-img');
  
  // 모달 열기 함수
  function openModal(index) {
    const currentImage = images[index];
    
    if (currentImage.dataset.video) {
      // 비디오가 있는 경우
      modalVideo.style.display = 'block';
      modalImage.style.display = 'none';
      modalVideo.src = currentImage.dataset.video;
      modalVideo.autoplay = true;  // 자동 재생
      modalVideo.load();  // 비디오를 새로 로드하여 자동 재생
    } else {
      // 이미지가 있는 경우
      modalImage.style.display = 'block';
      modalVideo.style.display = 'none';
      modalImage.src = currentImage.src;
    }
    
    caption.innerText = currentImage.alt;
    modal.style.display = 'flex';
  }

  // 모달 닫기 함수
  function closeModal() {
    modal.style.display = 'none';
    modalVideo.src = '';  // 비디오를 끄기 위해 src를 비워둡니다.
    modalVideo.autoplay = false;  // 자동 재생 끄기
  }

  // Prev/Next 버튼 클릭 시 이미지 전환
  function showNextImage() {
    // 현재 비디오가 재생 중이라면 멈추기
    if (!modalVideo.paused) {
      modalVideo.pause();
      modalVideo.currentTime = 0;  // 비디오를 처음부터 재시작할 수 있도록
    }
  
    currentIndex = (currentIndex + 1) % images.length;  // 순환
    openModal(currentIndex);
  }

  function showPrevImage() {
    // 현재 비디오가 재생 중이라면 멈추기
    if (!modalVideo.paused) {
      modalVideo.pause();
      modalVideo.currentTime = 0;  // 비디오를 처음부터 재시작할 수 있도록
    }
  
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // 순환
    openModal(currentIndex);
  }

  // 이미지 클릭 시 모달 열기
  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index;
      openModal(currentIndex);
    });
  });

  // Prev/Next 버튼 클릭 시 이미지 전환
  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);

  // 방향키로 모달 전환
  document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'flex') { // 모달이 열려 있을 때만
      if (event.key === 'ArrowRight') {
        showNextImage();  // 오른쪽 화살표 -> 다음 이미지
      } else if (event.key === 'ArrowLeft') {
        showPrevImage();  // 왼쪽 화살표 -> 이전 이미지
      }
    }
  });

  // 모달을 닫을 수 있는 이벤트 추가 (예: 모달 밖 클릭 시 닫기)
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});


// **************************************************************

//자주 수정이 일어날 정보 값들을 상단에 전역 변수로 설정
const frame = 'section';
const box = 'article';
const speed = '0.5s';
const activeClass = 'on';
const btn = document.querySelectorAll('main ul li');
let grid; //플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

window.addEventListener('load',()=>{
  init();
  filter(btn);
});

//화면 초기화 함수 정의
function init(){
  grid = new Isotope(frame,{
    itemSelector: box,//배치할 요소 명
    culumnWidth: box, //너비값을 구할 요소 명
    trasitionDuration: speed, //화면 재배치시 요소가 움직이는 속도
  })
}

function filter(arr){//매개변수 arr을 통해 반복하는 버튼 그룹을 인수로 전달
  for(let el of arr){
    el.addEventListener('click',(e) => {
      e.preventDefault();
      const sort =  e.currentTarget.querySelector('a').getAttribute('href');
      grid.arrange({
        filter : sort,
      });
      for(let el of arr){
        el.classList.remove(activeClass);
      }
      e.currentTarget.classList.add(activeClass);
    });
  }
}