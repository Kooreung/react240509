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

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "email@mail.com");
    axios.get(`/api/someurl3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "서울");
    params.append("country", "한국");

    axios.post("/api/someurl3", params);
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("id", 7);
    params.append("name", "김답답");
    params.append("email", "email@mail.com");
    params.append("birthDate", "2000-01-01");

    axios.get(`/api/someurl4?${params})`);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("foods", "pizza");
    params.append("foods", "burger");
    params.append("foods", "chicken");
    params.append("items", "spoon");

    axios.post("/api/someurl4", params);
  }

  return (
    <div>
      <div>
        <button onClick={handleClickButton1}>get 요청</button>
        <button onClick={handleClickButton2}>post 요청</button>
      </div>
      <div>
        <button onClick={handleClickButton3}>get 요청2</button>
        <button onClick={handleClickButton4}>post 요청2</button>
        <div>
          <button onClick={handleClickButton5}>
            get 요청 with query String
          </button>
          <button onClick={handleClickButton6}>
            post 요청 with query String
          </button>
        </div>
      </div>
      <div>
        <button onClick={handleClickButton7}>get 요청 처리 버튼</button>
        <button onClick={handleClickButton8}>post 요청 처리 버튼</button>
      </div>
    </div>
  );
}

export default App;
