import React, { useState } from 'react';

export default function TestForm() {
    const [text, setText] = useState([]); // 글 목록을 저장할 상태
    const [inputText, setInputText] = useState(''); // 작성자 입력 값
    const [titleText, setTitleText] = useState(''); // 제목 입력 값

    const addClick = () => {
        // 제목과 작성자 입력 값이 비어있지 않으면 추가
        if (inputText.trim().length === 0 || titleText.trim().length === 0) {
            return;
        }

        // 새 항목 추가
        const newText = [
            ...text,
            {
                id: text.length + 1,
                title: titleText,
                author: inputText,
            },
        ];

        setText(newText); // 목록 업데이트
        setInputText(''); // 작성자 입력 필드 초기화
        setTitleText(''); // 제목 입력 필드 초기화
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            {/* 입력 폼 */}
            <div style={{ marginBottom: '20px' }}>
                <span>작성자 : </span>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    style={{ margin: '0 10px' }}
                />
                <span> 제목 : </span>
                <input
                    type="text"
                    value={titleText}
                    onChange={(e) => setTitleText(e.target.value)}
                    style={{ margin: '0 10px' }}
                />
                <button onClick={addClick}>작성</button>
            </div>

            {/* 목록 테이블 */}
            <table
                style={{
                    borderCollapse: 'collapse',
                    width: '80%',
                    textAlign: 'center',
                    borderStyle: 'solid',
                }}
            >
                <thead>
                    <tr style={{ background: 'pink' }}>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {text.map((item) => (
                        <tr key={item.id} style={{ borderStyle: 'solid' }}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
