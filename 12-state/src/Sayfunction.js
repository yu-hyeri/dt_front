import React, { useState } from 'react';

export const Sayfunction = () => {
    console.log(useState('Welcome'));

    const [message, setMessage] = useState('welcome');
    //message

    const onClickEnter = () => {
        setMessage('안녕하세요');
    };

    const onClickLeave = () => {
        setMessage('안녕히가세요');
    };

    const handleClick = () => {
        setMessage((currentMessage) => {
            return currentMessage === 'welcome' ? '환영합니다' : 'Hi';
        });
    };
    return (
        <>
            <div>Sayfunction</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={handleClick}>Hi로 바꾸기</button>
            <h1>{message}</h1>
        </>
    );
    