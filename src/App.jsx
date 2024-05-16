import React from "react";

function App(props) {
  // Json
  // JavaScript 객체 작성법을 빌린 Text(문자열) 형식의 데이터

  // 직렬화 예
  const obj1 = { name: "son", age: 33 };
  // 수동으로 직렬화를 진행 했을 때 다음과 같다.
  const json1 = `{ "name": "son", "age" : 33 "}`;

  const obj2 = { name: "son", age: 33 };
  // 자동으로 직렬화를 진행해주는 Method (문자열이 되었다.)
  const json2 = JSON.stringify(obj2);

  console.log(obj2);
  console.log(json2);

  return <div></div>;
}

export default App;
