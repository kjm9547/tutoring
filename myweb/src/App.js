import React, { useState } from 'react'
import './App.css';
import CntButton from './component/1weeks/CntButton';
import UserInfo from './component/1weeks/UserInfo';

function App() {

  const [count, setCount] = useState(0) // 문자도 가능 불리언 가능 배열 구조체 등등등 가능하다

  const onPressUpButton = () => {
    console.log("up")
    setCount(count+1)
  }

  const onPressDownButton = () => {
    console.log("down")
    setCount(count-1)
  }

  return (
    <div style={{ paddingTop: 20 }} className="App">
      <button style={{
        width: 100,
        height: 80
      }}
        onClick={()=>{onPressUpButton()}}
      >up</button>
      <p style={{ fontWeight: 'bold', fontSize: 44 }}>{count}</p>
      <button style={{
        width: 100,
        height: 80
      }}
        onClick={()=>{onPressDownButton()}}
      >down</button>
      <div> 
      <UserInfo name="김재민" age={24} callNum="010-8749-1620"/>
      <UserInfo name="아무개" age={64} callNum="010-8312-1620"/>
      <UserInfo name="김흥식" age={21} callNum="010-8761-1620"/>
      <UserInfo name="김태완" age={33} callNum="010-8124-1620"/>
      </div>
      
      

    </div>
  );
}

export default App;
