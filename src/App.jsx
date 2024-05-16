import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입 6가지

  function handleClick1() {
    const data = {
      name: "son",
      age: 33,
      married: false,
      team: {
        location: "london",
        name: "토트넘",
      },
      item: ["shirt", "pants", "shoes", "phone"],
      address: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", {
      name: "son",
      age: 33,
    });
  }

  function handleClick3() {
    const data = {
      name: "김답답",
      age: 34,
      married: false,
      info: {
        nickName: "다비",
        use: 315,
      },
      foods: ["burger", "cola"],
    };

    axios.post("/api/main41/sub7", data);
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <br />
      <button onClick={handleClick2}>json 데이터와 요청</button>
      <br />
      <button onClick={handleClick3}>JSON 데이터와 요청</button>
    </div>
  );
}

export default App;
