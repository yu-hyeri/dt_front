function age() {
    let userAge = prompt('나이 입력하기');
    userAge = Number(userAge);

    if (userAge >= 20) {
        console.log('성인');
    } else if (userAge >= 17) {
        console.log('고등학생');
    } else if (userAge >= 14) {
        console.log('중학생');
    } else if (userAge >= 8) {
        console.log('초등학생');
    } else if (userAge >= 0) {
        console.log('유아');
    } else {
        console.log('나이를 잘못 입력하셨습니다.');
    }
}
const result = age();
