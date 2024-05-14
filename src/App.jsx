import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div style={{ width: "100%", border: "1px solid gray" }}>
      <button onClick={() => setCount(count + 1)}>버튼</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [view, setView] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="checkbox"
        checked={view}
        onChange={(e) => setView(e.target.checked)}
      />
      {view && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
