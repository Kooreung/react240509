import React, { useState } from "react";

function MyButton({ onClick }) {
  return <button onClick={onClick}>버튼</button>;
}

function MyNumber({ number }) {
  return <div>number : {number}</div>;
}

function App(props) {
  // 이벤트가 발생하고 상태가 변경하는 상위 Component 에서
  // 이벤트와 상태 관리. 고로 상태가 여기 있어야 한다.
  const [number, setNumber] = useState(0);

  function handleNumberChange(number) {
    setNumber(number + 1);
  }

  // 하위 Component 의 상태와 이벤트를 상위 Component 에서 관리
  // 이때 props 를 통해 Event Handler Method 와 상태를 전달해준다.
  // 따라서 MyButton 과 MyNumber 에 prop 을 통해서 전달

  return (
    <div>
      <MyButton onClick={handleNumberChange} /> {/* 이벤트 발생 */}
      <MyNumber number={number} /> {/* 상태 변경 */}
    </div>
  );
}

export default App;
