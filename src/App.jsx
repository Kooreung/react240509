import React, { useState } from "react";

function MyNumber() {
  const [number, setNumber] = useState(1000);

  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={() => setNumber(number - 1)}>1씩 감소</button>
        <button onClick={() => setNumber(number - 10)}>10씩 감소</button>
        <button onClick={() => setNumber(number / 10)}>10씩 나누기</button>
      </div>
      <div>
        <button onClick={() => setNumber(number + 1)}>1씩 증가</button>
        <button onClick={() => setNumber(number + 10)}>10씩 증가</button>
        <button onClick={() => setNumber(number * 10)}>10씩 곱하기</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyNumber />
    </div>
  );
}

export default App;
