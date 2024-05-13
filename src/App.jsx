import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });

  function updateVal() {
    val.name = "lee";
    setVal(val);
  }

  return (
    <div>
      {val.name}
      <button onClick={updateVal}>click</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    // 객체를 복사해서 새 객체를 만들어 써야 한다.
    const { ...newVal } = val;
    // 얕은 복사이므로 깊은 복사도 고려해야 한다.
    newVal.name = "lee";
    setVal(newVal);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>click</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
