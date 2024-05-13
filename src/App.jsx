import React from "react";
import val, { v1 } from "./MyValues.jsx";
import someValue from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{val}</div>
      <div>{someValue}</div>
    </div>
  );
}

export default App;
