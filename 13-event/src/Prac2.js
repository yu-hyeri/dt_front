import React, { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

// 부모 컴포넌트
// 상태 관리를 한번에 하는 방법
export default function Prac2() {
    const [data, setData] = useState({
        fruit: 'apple',
        background: 'black',
        color: 'White',
        content: 'text',
    });
    return (
        <>
            <div>Prac2</div>
            <div>
                <Select setData={setData}></Select>
            </div>
            <div>
                <Input setData={setData}></Input>
            </div>
            <div>
                <Result data={data}></Result>
            </div>
        </>
    );
}
