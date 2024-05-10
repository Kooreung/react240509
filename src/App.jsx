import React from "react";

function MyButton(props) {
  // props : properties
  // props : { name : "클릭3" }
  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "lightskyblue",
        color: "black",
      }}
    >
      {props.name}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <button
        style={{
          padding: "10px",
          backgroundColor: "deepskyblue",
          color: "white",
        }}
      >
        클릭1
      </button>
      <br />
      <button
        style={{
          padding: "10px",
          backgroundColor: "deepskyblue",
          color: "white",
        }}
      >
        클릭2
      </button>
      <br />
      <MyButton name="클릭3" />
      <MyButton name="클릭4" />
    </div>
  );
}

export default App;
