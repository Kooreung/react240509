import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log(someProp);
  // 이름만 넘어오는 props 의 값은 true
  console.log(otherProp);

  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={30} someProp otherProp={true} />
    </div>
  );
}

export default App;
