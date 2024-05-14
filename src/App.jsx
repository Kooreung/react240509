import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>버튼</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [display, setDisplay] = useState(true);
  // state 를 상위로 옮겨야 한다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => {
          setDisplay(e.target.checked);
        }}
      />
      {display && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
