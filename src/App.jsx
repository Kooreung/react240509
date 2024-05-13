import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState(0);
  console.log("다시 그려짐");
  return (
    <div>
      <button onClick={() => setVal(val + 1)}>클릭 {val}</button>
      {/* react 가 이전 상태와 비교하는데,
    이전과 상태가 같다면 업데이트가 되지 않는다.
    setVal 값을 0 으로 두면 이전값도 0으로, 업데이트가 되지 않는다. */}
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
