import React from "react";

function App(props) {
  const a = {};
  // Object
  console.log("a", typeof a);

  const b = [];
  // 배열 객체, 여러 값을 순서(index)대로 가진 객체
  console.log("b", typeof b);

  const c = ["son", "lee", "kim", "hwang"];
  console.log("c", c);
  console.log("c의 0", c[0]);
  console.log("c의 1", c[1]);
  console.log("c의 2", c[2]);
  console.log("c의 3", c[3]);
  console.log("c의 4", c[4]); // undefined

  return (
    <div>
      <ul>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{c[3]}</li>
      </ul>
    </div>
  );
}

export default App;
