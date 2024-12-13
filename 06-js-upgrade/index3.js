// 클래스
// ES6 도입하여 클래스 기반 언어처럼 사용 가능

// 클래스 기본 문법
// #1. class : 클래스를 정의할 때 사용하는 키워드
class House {
    // #2. constructor : 클래스의 생성자
    // - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
    constructor(year, name, window) {
        // #3. this : 클래스 내부에서 현재 인스턴스를 참조하는 객체
        // - 인스턴스 속성, 메서드에 접근할 때 사용
        // - 현재 인스턴스(this)에 속성(name)을 추가하고, 그 값을 매개변수 name으로 설정하는 것
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // #4. 메서드 : 클래스 내부에 정의된 함수
    //  - 해당 클래스의 인스턴스에서 호출 가능

    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년이 되었어요`);
    }
    getwindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

//  #5. 인스턴스 : 클래스로부터 생성된 실제 객체 - new 키워드 사용하여 생성
//  클래스 - 설계도
//  인스턴스  - 설계도로 만들어진 '실제 집'
//  - 각각 독립적인 객체 (= 각각 자신만의 this를 가짐)
const house1 = new House(2000, '롯데', 1);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 함.
console.log(house1); // House {year: 2000, name: '롯데', window: 1}
console.log(typeof house1); //object
console.log(house1.year); //2000
house1.getAge(); // 롯데는 건축한지 24년이 되었어요
house1.getwindow(); // 롯데의 창문은 1개 입니다.

const House2 = new House(1994, '호반', 2);
console.log(House2); //House {year: 1994, name: '호반', window: 2}

/////////////////////////////////////////
// 클래스의 상속
// - 상속을 통해 다른 클래스의 기능을 재사용 가능하다.
// - 'extends' 키워드를 사용하여 상속 구현
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        //#6. super() : 부모 클래스의 생성자를 호출할 때 사용
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의
        총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}이다`;
    }

    //#7. Override 부모의 메소드와 같은 함수를 재정의할때
    //  - 부모 클래스에서 정의된 메서드를 자식 클래스에서 '새롭게 재정의'하거나 '변경'하는 것을 의미
    //  - 주로 부모 클래스에서 제공한 기본 동작을 자식 클래스의 특성에 맞게 수정할때 사용

    // 규칙
    // 메서드 이름, 매개변수 리스트가 부모 클래스와 '동일'해야함!!!!

    getwindow() {
        return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생성되었습니다`;
    }
}

const apt1 = new Apartment(2024, '래미안', 3, 15, '3M');
console.log(apt1);
console.log(apt1.getAptInfo()); // 2024년에 지어진 래미안 아파트의 총 층수는 15이며, 창문의 개수는 3이다
console.log(apt1.getwindow()); // 래미안 아파트의 3 개의 창문은 3M 회사에서 생성되었습니다

// 다음 userInfo 객체에서 구조 분해 할당을 사용해서
// name과 age를 추출하고 나머지 속성은 restInfo객체에 저장하세요

const userInfo = {
    name: 'Lee',
    age: 25,
    job: 'Developer',
    city: 'Seoul',
};

const { name, age, ...restInfo } = userInfo;
console.log(name, age);
console.log(restInfo);

// 아래 두 배열을 스프레드 연산자를 사용하여 병합한 후,
// 구조 분해 할당을 이용해 첫번째와 두번째 숫자를 first와 second 변수에 저장하고,
// 나머지 숫자들을 remaining 배열에 저장하세요

const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];

const sumNumbers = [...evenNumbers, ...oddNumbers];
console.log(sumNumbers);

[first, second, ...remaining] = sumNumbers;
console.log(first);
console.log(second);
console.log(remaining);

// shape(직사각형) 클래스의 속성 : 가로와 세로
// shape 클래스의 메소드 : getArea()
// - 넓이 반환하는 메소드 (가로 * 세로)

// class Shape {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }

// let rec1 = new Shape(3, 4);
// console.log(rec1.getArea()); //12가 나오는지 확인

// Q4)
/**
 * 1. Rectangle(직사각형) 클래스 만들기
 * - Shape 클래스 상속
 * - 사각형의 넓이 구하는 메소드 : getArea()
 * - 직사각형의 대각선 길이 구하는 메소드 추가
 * - Math.sqrt() 이용 : Math.sqrt(n**2) == n // Math.sqrt(9) == 3
 *   제곱근 구하는 함수
 *
 * 2. Triangle(삼각형) 클래스 만들기
 * - 넓이 반환하는 메소드 : getArea()
 *
 * 3. Circle(원) 클래스 만들기
 * - Shape 클래스를 상속
 * - width, height 이외에 radius 생성자 추가
 * - getArea() 메소드는 원의 넓이를 리턴.
 *
 * - Shape를 상속받은 각각의 클래스 Retangel, Triangle, Circle 클래스를
 * 이용해서 인스턴스 하나씩 생성
 * - getArea로 사각형, 삼각형, 원의 넓이가 잘 나오는지 확인하기.
 */


