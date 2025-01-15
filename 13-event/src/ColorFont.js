import React, { useState } from 'react';

export const ColorFont = () => {
    const [message, setMessage] = useState('검정색 글씨');
    const [color, setColor] = useState('black');

    const onClickRed = () => {
        setMessage('빨간색 글씨');
        setColor('red');
    };

    const onClickBlue = () => {
        setMessage('파란색 글씨');
        setColor('blue');
    };

    // const handleClick = () => {
    //     setMessage((currentMessage) => {
    //         return currentMessage === '검정색 글씨'
    //             ? '빨간색 글씨'
    //             : '파란색 글씨';
    //     });
    // };

    return (
        <>
            <h1 style={{ color: color }}>{message}</h1>
            <button onClick={onClickRed}>빨간색</button>
            <button onClick={onClickBlue}>파란색</button>
        </>
    );
};
