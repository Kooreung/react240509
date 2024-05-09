import React from "react";

function App(props) {
  const a = {
    name: "john",
  };

  const b = a;

  console.log(a === b);

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  b.name = "jane";
  console.log(a === b);

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  return <div></div>;
}

export default App;
