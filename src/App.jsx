import React, { useState } from "react";

function MyComp() {
  const [val1, setVal1] = useState(0);
  let val2 = 0;

  function updateVal1() {
    setVal1(val1 + 1);
    // 상태를 업데이트
  }

  function updateVal2() {
    val2++;
    // 변수를 업데이트
  }

  console.log("다시 호출");
  /*
  상태가 업데이트 되면 함수가 다시 호출 된다.
  updateVal1 은 상태가 업데이트 되므로 console log 가 매번 호출 된다.
  함수가 다시 호출되니까.
  updateVal2 는 변수만 업데이트 시키는 거라서 함수를 다시 호출하지 않는다.
  */

  return (
    <div>
      <button onClick={updateVal1}>val1 {val1}</button>
      <button onClick={updateVal2}>val2 {val2}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
