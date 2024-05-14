import React, { useState } from "react";

function MyBox({ count, onClick }) {
  return (
    <div style={{ width: "100%", border: "1px solid gray" }}>
      <button onClick={onClick}>버튼</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [view, setView] = useState(true);
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={view}
        onChange={(e) => setView(e.target.checked)}
      />
      {view && <MyBox count={count} onClick={handleUpdateCount} />}
    </div>
  );
}

export default App;
