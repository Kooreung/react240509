import React from "react";
import { ArrowComp, MyComps, YourComp } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <MyComps />
      <YourComp />
      <ArrowComp />
    </div>
  );
}

export default App;
