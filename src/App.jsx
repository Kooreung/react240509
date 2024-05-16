import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((res) => {
      console.log(res);
    });
  }

  function handle400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못 된 요청");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생");
        }
      });
  }

  function handle500() {
    axios
      .get("/api/main43/sub500")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못 된 요청");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생");
        }
      });
  }

  return (
    <div>
      <button onClick={handle200}>200 응답</button>
      <button onClick={handle400}>400 응답</button>
      <button onClick={handle500}>500 응답</button>
    </div>
  );
}

export default App;
