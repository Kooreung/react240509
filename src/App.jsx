import React from "react";

function MyButton({ name = "클릭" }) {
  return <button>{name}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton name="버튼1" />
    </div>
  );
}

export default App;
