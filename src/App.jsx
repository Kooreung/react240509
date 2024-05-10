import React from "react";

function App(props) {
  function action1() {
    console.log("action1");
  }

  const action2 = function () {
    console.log("action2");
  };

  const action4 = () => {
    console.log("action4");
  };

  return (
    <div>
      <button onClick={action1}>click1</button>
      <button onClick={action2}>click2</button>
      <button
        onClick={function () {
          console.log("action3");
        }}
      >
        click3
      </button>
      <button onClick={action4}>click4</button>
      <button
        onClick={() => {
          console.log("action5");
        }}
      >
        click5
      </button>
    </div>
  );
}

export default App;
