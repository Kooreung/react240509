import React from "react";

function MyButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

// function MyButton({onClick, name}) {
//   return (
//     <div>
//       <button onClick={onClick}>{name}</button>
//     </div>
//   );
// }

function App(props) {
  return (
    <div>
      <MyButton name={"샾 출력"} onClick={() => console.log("####")} />
      <MyButton name={"느낌표 출력"} onClick={() => console.log("!!!!!")} />
    </div>
  );
}

export default App;
