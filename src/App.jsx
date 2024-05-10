import React from "react";

function App(props) {
  // 1. 이름 있는 함수
  function action(param1, param2) {
    return 1;
  }

  // 2. 이름 없는 함수
  const a = function (param1, param2) {
    return 2;
  };

  // 3. arrow function
  // 3-1. parameter 가 여러 개, 명령문이 여러 개
  const b = (param1, param2, param3) => {
    // 명령문들
  };

  // 3-2. parameter 가 없고 명령문이 여러 개
  const c = () => {
    // 명령문들
  };

  // 3-3. parameter 가 한 개, 명령문이 여러 개
  const d = (param1) => {
    // 명령문들
  };

  // 3-4. 명령문이 하나일 때
  const e = () => {
    console.log("명령문이 하나인 arrow function");
  };
  const f = () => console.log("명령문이 하나인 arrow function");
  const g = () => "중괄호 생략 시 값이 리턴 됨";
  const h = () => {
    "중괄호 생략 시 값이 리턴 됨";
  };

  // 함수 실행
  action(null, null);
  a(null, null);
  b(null, null, null);

  return <div></div>;
}

export default App;
