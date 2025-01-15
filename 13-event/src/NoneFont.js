import React, { useState } from 'react';

export const NoneFont = () => {
  const [isVisible, setIsVisible] = useState(true); // 텍스트의 표시 여부 상태 관리

  // 버튼 클릭 시 상태를 반전시켜 보여주거나 숨기기
  const toggleText = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? '사라져라' : '보여라'}  {/* 상태에 따라 버튼 텍스트 변경 */}
      </button>
      {isVisible && <p><h1>안녕하세용</h1></p>}  {/* isVisible 상태에 따라 텍스트 표시/숨기기 */}
    </div>
  );
};
