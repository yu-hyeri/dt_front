import React from 'react';
import apple from './assets/Red_Apple.jpg';
import banana from './assets/banana.jpg';
import peach from './assets/peach.jpg';

const images = {
    apple,
    banana,
    peach,
};

// 동적 require 방식
// webpack에서 이를 지원함
// 런타임시에 동적으로 단일 파일을 가져올 수 있음
// 경로를 동적으로 설정가능
// 즉 파일이나 폴더 경로가 변수로 지정될 때 유용

// require.context 방식

// webpack에서 제공
// 특정 디렉토리의 파일들을 자동으로 탐색, 한번에 가져옴

// [구문 분석]
// require.context(directory, useSubdiretories,regExp)

const images = require.context('./assets'.false, /\.(png|jpe?g|svg)$/);

/** 
 * . : 임의의 한 특수문자
 * \. : 점을 일반 문자로 취급하여 실제 점(.)을 찾음
 * ? : 앞에 글자가 있을수도 없을수도 있다는 의미
 * $ : 문자열의 끝을 의미 -> 끝에 .png로 끝나야만 매칭
 * 
*/
console.log();

export default function Result({ data }) {
    const { fruit, background, color, content } = data;

    return (
        <div>
            <img src={images[fruit]} alt="" width={100} height={100} />
            <div style={{ backgroundColor: background, color: color }}>
                {content}
            </div>
        </div>
    );
}
