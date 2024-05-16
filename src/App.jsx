import React, { useState } from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const obj1 = { name: "son", age: 34 };
    // axios 를 사용할 때 별도 직렬화를 해주지 않아도 된다.
    // axios post 에서 두 번째 파라미터가 객체라면 자동으로 직렬화를 해준다.
    // const json1 = JSON.stringify(obj);

    // get 은 json 데이터를 붙여서 사용 못한다.
    // post 를 활용해야 한다.
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = { id: 30, name: "김답답", age: 34, sex: "male" };

    axios.post("/api/main41/sub2", obj2);
  }

  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleClick3() {
    const data = {
      name: name,
      city: city,
      // 이름이 같을 경우 생략 가능
      // name, city,
    };

    axios.post("/api/main41/sub3", data);
    // axios.post("/api/main41/sub3", { name , city }); 로 입력 가능
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (JSON 데이터 포함)</button>
      <button onClick={handleClick2}>요청2 (JSON 데이터 포함)</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청 (input 입력 값)</button>
      </div>
    </div>
  );
}

export default App;
