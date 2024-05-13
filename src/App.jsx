import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState([]);

  function addItem() {
    val.push("a");
    setVal(val);
    // 출력 안됨. 배열도 객체이기 때문에
    // 같은 참조값을 가지고 있어서 안됨
    // 다른 배열이 되어야 한다.
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState([]);
  function addItem() {
    // 상태가 객체면 새 객체로 복사하여 사용
    const [...newVal] = val;
    newVal.push("a");
    setVal(newVal);
  }
  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
    </div>
  );
}

export default App;
