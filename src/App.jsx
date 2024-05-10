import React from "react";

function App(props) {
  return (
    <div>
      <button
        onClick={() => console.log("clicked")}
        onMouseEnter={() => console.log("mouse Entered")}
        onMouseLeave={() => console.log("mouse Leaved")}
      >
        클릭1
      </button>
      <input type="text" onChange={() => console.log("changed")} />
    </div>
  );
}

export default App;
