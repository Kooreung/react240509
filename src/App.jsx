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

  function handleCode() {
    const r = Math.random();
    let path = "";
    if (r < 1 / 3) {
      path = "/api/main43/sub1";
    } else if (r < 2 / 3) {
      path = "/api/main43/sub401";
    } else {
      path = "/api/main43/sub403";
    }
    axios
      .get("path")
      .then((res) => {
        console.log("200번 실행");
      })
      .catch((err) => {
        const code = err.response.status;

        switch (code) {
          case 401:
            console.log("401 응답 입니다. 로그인되지 않았습니다.");
            break;
          case 403:
            console.log("403 응답 입니다. 권한이 없습니다.");
            break;
        }
      })
      .finally(() => {
        console.log("항상 실행");
      });
  }

  return (
    <div>
      <button onClick={handle200}>200 응답</button>
      <button onClick={handle400}>400 응답</button>
      <button onClick={handle500}>500 응답</button>
      {/* 200, 401, 403 응답일 때 코드 작성 */}
      <button onClick={handleCode}>응답 코드에 따라 다른 일</button>
    </div>
  );
}

export default App;
