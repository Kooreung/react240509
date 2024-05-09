import React from "react";

function App(props) {
  const foodList = ["pizza", "burger", "noodle", "coffee"];

  return (
    <div>
      <ul>
        {foodList.map(function (food) {
          return <li>{food}</li>;
        })}
      </ul>
      <ul></ul>
    </div>
  );
}

export default App;
