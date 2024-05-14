import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정한 순간에 실행되는 메소드를 Parameter 로 받는다.
  // 예) initial render 가 진행 될 때(Mount),
  // re-render 가 될 때,
  // Component 가 Tree 에서 떨어질 때(Unmount),
  // State 가 바뀔 때 등

  // 1번 Parameter : 실행되는 method
  // 2번 Parameter : Dependency (특정 순간)

  // 2번 파라미터가 없을 때는 rendering 될 때마다 실행
  // CLICK 누르면 실행
  useEffect(() => {
    console.log("Component loaded");
  });

  // 2번 파라미터에 빈 배열을 넣으면 initial rendering 때만 실행
  useEffect(() => {
    console.log("첫 렌더링 실행때만 실행");
  }, []);

  // 1번 파라미터 return 은 unmount 될 때 실행
  useEffect(() => {
    return () => {
      console.log("언마운트 될 때 실행 되는 메소드");
    };
  }, []);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    console.log("dependency text1가 바뀔 때");
  }, [text1]);
  useEffect(() => {
    console.log("dependency text2가 바뀔 때");
  }, [text2]);
  useEffect(() => {
    console.log("text1 또는 text2가 바뀔 때");
  }, [text1, text2]);

  const [count, setCount] = useState(0);

  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>CLICK</button>
      <div>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
