// 스니펫 단축 명령어
// - 내가 지은 파일명을 클래스 이름으로 가져감

// import React, { Component } from 'react';

// export default class CounterClass extends Component {
//     // state 클래스 필드로 선언
//     // state란? 컴포넌트의 상태를 관리할 수 있도록 도와주는 객체

//     state = {
//         count: 0,
//     };
//     render() {
//         console.log('State :', this.state); // state 객체 형태
//         console.log('State :', this.state.count); // state 객체 형태
//         const { count } = this.state;
//         return (
//             <>
//                 <div>CounterClass</div><h1>Count : {this.state.count}</h1>
//                 <h1>Count : {count}</h1>
//                 {/* state 값 변경하기 */}
//                 {/* 직접 변경은 불가능 */}
//                 {/* 직접 변경시, react가 상태 변경을 감지하지 못해 컴포넌트가 리렌더링 되지 않음 */}
//                 {/* setState 메서드 사용 */}
//                 {/* 컴포넌트의 state 변경하고  */}
//                 <button
//                     onClick={() => {
//                         this.setState({ count: this.state.count + 1 });
//                     }}
//                 >
//                     + 1
//                 </button>
//                 <button
//                     onClick={() => {
//                         alert(count);
//                     }}
//                 >
//                     Alert Number
//                 </button>
//             </>
//         );
//     }
// }

import React, { Component } from 'react';

export default class CounterClass extends Component {
    state = { count: 0 };
    render() {
        const { count } = this.state;
        return (
            <>
                <div>CounterClass</div>
                <h1>Count : {this.state.count}</h1>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 2 });
                    }}
                >
                    +2
                </button>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count - 1 });
                    }}
                >
                    -1
                </button>
            </>
        );
    }
}
