import React from "react";

function App(props) {
  const a = [6, 7, 8];
  const [x, y, z] = a;
  console.log(x, y, z);

  const [s, ...t] = a;

  console.log(s, t);
  console.log(t[0], t[1]);

  const c = a; // 참조 값을 복사. c 값 바꾸면 a도 변경
  const [...b] = a; // 각 원소를 새 배열에 복사

  c[0] = 66;
  console.log(c[0]);
  console.log(a[0]);
  b[0] = 60;
  console.log(b[0]);
  console.log(a[0]);

  return <div></div>;
}

export default App;
