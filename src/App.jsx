import React from "react";

function App(props) {
  // style props
  // react 에서는 style 에 객체를 넣어야 한다.
  // lowerCamelCase
  return (
    <div>
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "2rem",
          border: "2px dotted red",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </div>
  );
}

export default App;
