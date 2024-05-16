import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState("");

  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }
  // 리턴하는 객체를 then method 로 받으면 된다.
  // then 은 파라미터를 함수로 받는다.
  // 애로우 펑션이나, 익명 함수나 이름 함수나 쓰면 됨
  // Axios API - Response Schema 확인 필요

  function handleClick2() {
    axios.get("/api/main42/sub2").then((param) => setResult(param.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((result) => console.log(result.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      {/* 버튼이 클릭되면 main42/sub2 get 요청 후 응답 본문을 콘솔에 출력 */}
      <button onClick={handleClick2}>응답 받기</button>
      <br />
      <div>{result}</div>
      <button onClick={handleClick3}>JSON 응답 받기</button>
    </div>
  );
}

export default App;
