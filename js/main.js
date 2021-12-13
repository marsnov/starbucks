const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log (window.scrollY);
    if (window.scrollY > 500) {
        //배지숨기기
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
        //배지보이기
          } else {
          gsap.to(badgeEl, .6, {
              opacity: 1,
              display: 'block'
          });
          //버튼 숨기기!
          gsap.to(toTopEl, .2, {
              x: 100
          });
    }
}, 300));
//_,throttle(함수, 몇초에 한번에 실행되면 되는지 시간을 추가,300이라는 밀리세컨드 단위의 시간을 추가한 것)


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0 //화면의 위치를 .7초동안 0픽셀 지점으로 이동시켜 주겠다는 의미
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.7
        opacity: 1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데로 보이기
    loop: true,
    autoplay: {
    delay: 5000 //500밀리세컨드 단위= 5초
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지, 번호, 요소  선택자
        clickale: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev', //이전버튼에 해당하는 선택자
        nextEl: '.awards .swiper-next'  //다음버튼에 해당하는 선택자
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //지금 프로모션이 숨겨져 있니? = 아니.
promotionToggleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion //느낌표는 느낌표가 붙어있는 값이 반대가 되게 해달라는 것 :
    if (isHidePromotion) {
        //숨김처리! 
        promotionEl.classList.add('hide');
    } else {
        //보임 처리!
        promotionEl.classList.remove('hide');
    }

})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작 시간
        { //옵션
        y: size,
        repeat: -1, //무한반복
        yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생하는 구조를 만드는 것
        ease: Power1.easeInOut,
        delay: random(0, delay) //몇초 뒤에 애니메이션을 시작하겠다는 의미
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


