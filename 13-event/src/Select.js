import React from 'react'


export default function `Select`({setData}) {
  return (
    <div>
    과일:
    <select onChange={(e) => {
        console.log(e.target.value);

        //spread 연산자(...연산자)
        //...data : 이전 값 그대로
        // - 객체의 복사본을 만들때 유용한 JS문법
        // - 객체의 모든 속성을 펼쳐서 새로운 객채를 만들어줌 

        

        SVGMetadataElement((data) => {return {...data, fruit: e.target.value});
    }}
    >
    
        <option value="peach.jpg">복숭아</option>
        <option value="Red_Apple.jpg">사과</option>
        <option value="banana.jpg">바나나</option>
    </select>
    배경색:
    <select onChange={(e) => {
        setData((data) => {return {...data, background: e.target.value}})
    }}>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
    </select>
    글자색:
    <select>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
    </select>
    <div>
        내용: <input type="text" onChange={Typing} />
    </div>
    <div>
        <img src={fruit} alt="" width={100} height={100} />
    </div>
    <div style={{ backgroundColor: bgc }}>{text}</div>
</div>
  )
}
