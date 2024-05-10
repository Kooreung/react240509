import React from "react";

function App(props) {
  // 이름있는 함수
  function action1() {
    console.log("action1");
  }

  // 이름 없는 함수
  const action2 = function () {
    console.log("anonymous action");
  };

  return (
    <div>
      <button onClick={action1}>클릭1</button>
      <br />
      <button onClick={action2}>클릭2</button>
      <br />
      <button
        onClick={function () {
          console.log("anonymous action 2");
        }}
      >
        클릭3
      </button>
    </div>
  );
}

export default App;
