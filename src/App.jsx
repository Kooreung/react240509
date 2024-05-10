import React from "react";

function App(props) {
  // destructuring assignment
  // 구조 분해 할당
  // object({} , []) 를 분해해서 할당
  const a = {
    name: "son",
    age: 33,
  };

  const aName = a.name;
  const aAge = a.age;

  console.log("aName", aName);
  console.log("aAge", aAge);

  const { name: bName, age: bAge } = a;

  console.log("bName", bName);
  console.log("age", bAge);

  // 오른쪽 항 객체의 Property 명과 할당 받는 변수명이 같으면 변수명 생략 가능
  const { name: name, age: age } = a;

  return <div></div>;
}

export default App;
