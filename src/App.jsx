import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount 될 때");
  }, []);

  useEffect(() => {
    console.log("count 가 변경 될 때");
    // 해당 param 에서 dependency 가 변경되지 않아야 한다.
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
