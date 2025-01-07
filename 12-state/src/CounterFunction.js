// // 함수형 컴포넌트 State
// import React, { useState } from 'react';

// export const CounterFunction = ({ value }) => {
//     /**
//      * const [a, b] = useState(""); 형태
//      * a : state에 저장할 자료
//      * b : state 변경을 도와주는 함수
//      * useState('') : 상태 초기값 (숫자, 문자, 배열 등 값의 형태는 자유로움)
//      */
//     const [number, setNumber] = useState(0); // 초기값 = 0
//     const onClickAdd = () => {
//         setNumber(number + 1);
//     };
//     return (
//         <>
//             <div>CounterFunction</div>
//             <h1>Number : {number}</h1>
//             <button onClick={onClickAdd}>{value}</button>
//         </>
//     );
// };

import React, { useState } from 'react';

export const CounterFunction = ({ value }) => {
    const [number, setNumber] = useState(0);
    const plus = () => {
        setNumber(number + 1);
    };
    const minus = () => {
        setNumber(number - 2);
    };

    return (
        <>
            <h1>Count : {number}</h1>
            <button onClick={plus}>increase</button>
            <button onClick={minus}>decrease</button>
        </>
    );
};
