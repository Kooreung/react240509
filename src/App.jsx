import React from "react";
import axios from "axios";

function App(props) {
  function handleClick() {
    console.log("버튼 클릭");
    // get request
    // 첫 Parameter : 요청 경로
    axios.get("/someURL");
  }

  function handleClick2() {
    const qs = "name=son&age=33";
    axios.get("/someURL2?" + qs);
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "흥민");
    qs.append("age", "33");
    qs.append("country", "한국");
    axios.get("/someURL3?" + qs.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>Get 요청 with QueryString</button>
      </div>
      <div>
        <button onClick={handleClick3}>Get 요청 with QueryString</button>
      </div>
    </div>
  );
}

export default App;
