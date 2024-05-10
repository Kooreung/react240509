import React from "react";

function App(props) {
  // [] : 배열, 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];

  console.log(v1, v2, v3);

  const [x, y, z] = a;

  console.log(x, y, z);

  const b = ["pizza", 3.14, "lunch"];

  const [x1, x2, x3] = b;

  console.log("x1", x1);
  console.log("x2", x2);
  console.log("x3", x3);

  return <div></div>;
}

export default App;
