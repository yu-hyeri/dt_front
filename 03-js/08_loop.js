// // 반복문

// // 1. for문

// /*
//     * 구문
//     for([변수 선언 & 초기 값 설정]; [조건식(범위 지정)]; [증감식]) {
//         반복 시킬 코드 내용 입력.
//     }
// */
// for (let i = 0; i < 10; i++) {
//     // i가 0~9 총 10번 반복
//     console.log('안녕', i);
// }

// // Q1) 1 ~ 5 출력
// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }

// // Q2) 5 ~ 1 출력
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// // 1부터 n까지의 합 구하기
// let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
// let sum = 0; // 합을 저장할 변수
// for (let i = 1; i <= 10; i++) {
//     sum += i;
//     console.log(i, sum);
// }
// console.log(sum);
// console.log('-------------------');

// ////////////////////////////////////////////////
// // 2. for ~ if 중첩
// // * 간단 실습
// // Hint 1) 1 ~ 20 까지 숫자를 반복
// // Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// // Hint 3) for문 안에 if문 조합 해보세요.

// // Q) 1 ~ 20 중에서 짝수 일 때의 합을 구하기.
// let sum2 = 0; // 짝수의 합 저장할 변수

// for (let i = 1; i <= 20; i++) {
//     // console.log(i);
//     if (i % 2 === 0) {
//         sum2 = sum2 + i;
//         console.log(i, sum2);
//     }
// }
// console.log(sum2);

// /////////////////////////////////////////
// // 3. while 문
// // Ex1)
// let idx = 0;
// while (idx < 10) {
//     console.log('안녕', idx);
//     // idx = idx + 1;
//     idx += 1;
// }
// console.log('------------------');

// // Ex2) 무한 루프
// let idx2 = 0;
// while (true) {
//     // 의도적으로 무한루프
//     console.log('idx2 안녕', idx2);
//     idx2 += 1;

//     // 무한 루프를 빠져나오는 조건
//     if (idx2 === 10) {
//         break;
//     }
// }
// console.log('------------------');
// Ex3) while문 구구단
// let i = 2,
//     j = 1;
// while (i < 10) {
//     while (j < 10) {
//         // console.log(i, 'x', j, '=', i * j);
//         console.log(`${i} x ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
//     j = 1;
// }

// Q) 1부터 20까지의 홀수 합 구하기 (while 사용)
// let sum = 0;
// let i = 1;

// while (i <= 20) {
//     if (i % 2 == 1) {
//         sum = sum + i;
//     }
//     i++;
// }

// console.log('홀수의 총 합은', sum);

// // 10부터 1까지 역순으로 숫자 출력하기

// let b = 10;

// while (b >= 1) {
//     console.log(b);
//     b--;
// }

// let g = 1;
// do {
//     console.log('g>>>>', g);
//     g++;
// } while (g <= 5);

// let number;
// do {
//     number = parseInt(prompt('숫자를 입력하세요(10보다 큰 숫자)'), 10);
// } while (number <= 10);
// console.log('입력한 숫자 :', number);

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(`i >>>> ${i}`);
// }

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(`i >>>> ${i}`)
// }

///////실습-2/////////
let a = 2,
    b = 1;

while (a < 10) {
    console.log(`------${a}단------`);
    while (b < 10) {
        console.log(`${a} x ${b} = ${a * b}`);
        b++;
    }
    a++;
    b = 1;
}

///////실습-3////////

let sum = 0;
let c = 1;

while (c <= 100) {
    if (c % 2 == 0 || c % 5 == 0) {
        sum = sum + c;
    }
    c++;
}
console.log(sum);

let n = parseInt(prompt('숫자를 입력하세요'), 10); // 숫자 입력 + 정수로 변환 + 10진수

for (let i = 1; i <= n; i++) {
    // i는 1부터 입력된 숫자 n까지 반복
    let star = ''; // 별을 저장할 변수

    // for (let j = 1; j <= n - i; j++) {
    //     // 공백 추가
    //     star += ' ';
    // }

    for (let j = 1; j <= i; j++) {
        // j는 1부터 i까지 반복
        star += '*';
    }
    console.log(star);
}
