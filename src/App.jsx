import React from "react";
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

  return (
    <div>
      <button onClick={handleClick1}>요청 (JSON 데이터 포함)</button>
    </div>
  );
}

export default App;
