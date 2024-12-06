// 실습 -1 //

// TODO: 아래 조건을 만족하도록 js 파일을 수정하기
// 문제
// - [ ] 버튼을 클릭하면 배경 색상이 변경됩니다.
//    - 문서 전체의 색상을 변경하려면 어떤 태그의 배경 색이 변해야 될까요?
//    - 버튼을 "클릭" 했을 때, 색상이 변경되려면 어떤 이벤트가 필요한가요?
// - [ ] 버튼을 클릭했을 때 h2 태그의 색상 값이 변경됩니다.
//    - h2 태그의 content(내용)을 변경하려면 어떤 속성값을 변경해야 할까요?
// - [ ] 색상을 나타내는 방식에는 헥스 코드(#RRGGBB)와 10진 코드 (R,G,B) 두 가지 방식이 있습니다.
//    - 이 프로젝트에서는 10진 코드(r, g, b) 방식을 사용합니다.
//    - rgb(r, g, b)에서 red, green, blue 숫자 범위는 0이상 255이하 입니다.
//      즉, 각 색상마다 0 ~ 255 사이의 랜덤한 값을 생성해야 합니다.

// const h2 = document.querySelector('h2');
// const btn = document.querySelector('button');

// // 랜덤 색상 생성 함수
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256); // 0 ~ 255
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`; // RGB 포맷 반환
// }

// btn.addEventListener('click', () => {
//     // 1. 문서 전체 배경 색상 변경
//     const randomBackgroundColor = getRandomColor();
//     document.body.style.backgroundColor = randomBackgroundColor;

//     // 2. h2 텍스트와 색상 변경
//     const textRandomColor = getRandomColor(); // 함수 호출
    
//     h2.textContent = `Random Color: ${textRandomColor}`;
// });







///////////////////// 실습-2 //////////////////////
