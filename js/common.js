const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');//setAttribute 메소드는 함수에 html속성을 지정할때 쓰는 메소드.
});//placeholder는 속성의 이름, 통합검색은 안에 들어갈 내용

searchInputEl.addEventListener('blur', function() {//인풋요소에 포커스가 해제되었을때를 의미
    searchEl.classList.remove('focused');//제거하겠다는 의미
    searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021이 .this-year요소에 들어가서 내용으로 삽입이 된다는 의미