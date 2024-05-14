import React, { useState } from "react";

function MyBox() {
  const [text, setText] = useState("내용을 입력하세요");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
