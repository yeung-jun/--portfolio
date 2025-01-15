// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector('#circle');

//태그명이 article인 요소를 찾아서 저장
const articles = document.querySelectorAll('article');
// console.log(articles);

// article의 전체 개수만큼 반복하면서 mouseenter, mouseleave 이벤트를 연결 animation-play-state
for(let el of articles) {
    el.addEventListener('mouseenter',e => {
         //article에 마우스 포인터를 올리면 부모인 #circle의 animation-play-state 값을 pause로 변경
        circle.style.animationPlayState = 'paused';
    });
    el.addEventListener('mouseleave',e=> {
        //article에 마우스 포인터를 떠나면 부모인 #circle의 animation-play-state 값을 running으로 변경
        circle.style.animationPlayState = 'running';
    });
}