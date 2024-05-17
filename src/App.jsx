import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [username, setUsername] = useState("unknown");
  const [scope, setScope] = useState("admin manager");

  function handleLogin() {
    axios.post("/api/main44/login", { username, scope }).then((res) => {
      localStorage.setItem("token", res.data);
    });
  }

  function handleLogout() {
    localStorage.removeItem("token");
  }

  function handleAccessAll() {
    axios.get("/api/main44/all").then((res) => alert(res.data));
  }

  function handleAccessUser() {
    axios
      .get("/api/main44/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
    // 토큰을 전송 할 코드가 필요함
    // Request Header 나 Payload 에 작성해야함
    // Axios API - Request Config 내용 참고해야함
    // Get 에서 config 에 header 를 통한 token 가져오는 걸 작성
  }

  function handleAccessAdmin() {
    axios
      .get("/api/main44/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
  }

  function handleAccessManager() {
    axios
      .get("/api/main44/manager", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => alert(res.data));
  }

  function handleAccessManagerOrAdmin() {
    axios
      .get("/api/main44/ma", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => alert(res.data));
  }

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <input
          type="text"
          defaultValue={scope}
          onChange={(e) => setScope(e.target.value)}
        />
      </div>
      <hr />
      <div>
        <button onClick={handleLogin}>로그인</button>
        <br />
        <button onClick={handleLogout}>로그아웃</button>
        <br />
        <button onClick={handleAccessAll}>누구나</button>
        <br />
        <button onClick={handleAccessUser}>로그인유저만</button>
        <br />
        <button onClick={handleAccessAdmin}>어드민만</button>
        <br />
        <button onClick={handleAccessManager}>매니저만</button>
        <br />
        <button onClick={handleAccessManagerOrAdmin}>
          어드민 또는 매니저만
        </button>
      </div>
    </div>
  );
}

export default App;
