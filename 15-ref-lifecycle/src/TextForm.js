import React from 'react';

export default function TextForm() {
    // 기본 데이터, 아이디, 이름, 이메일 = const가 총 4개

    const [data, setData] = useState([
        { id: 1, name: '코디', email:'codi@gamil.com'}
        { id: 2, name: '윤소희', email:'yoonsohee@gamil.com'}
    ]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="이메일" />
            <button>등록</button>
        </div>
    );
}
