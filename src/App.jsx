import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax 형태의 get 요청을 할 것임
    // 우리는 경로에 api 붙일 건데 spring 포트랑 매칭 시키는 역할임
    // vite.config 에서 설정해놨음
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton11() {
    axios.get("/api/someurl2");
  }

  function handleClickButton22() {
    axios.post("/api/someurl2");
  }

  return (
    <div>
      <div>
        <button onClick={handleClickButton1}>get 요청</button>
        <button onClick={handleClickButton2}>post 요청</button>
      </div>
      <div>
        <button onClick={handleClickButton11}>get 요청2</button>
        <button onClick={handleClickButton22}>post 요청2</button>
      </div>
    </div>
  );
}

export default App;
