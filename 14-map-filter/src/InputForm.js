import React, { useState } from 'react';

export const InputForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userList, setUserList] = useState([])

    return (
        <>
            <h2>InputForm</h2>
            <br />
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="이메일" />
            <button>등록</button>
        </>
    );
};
