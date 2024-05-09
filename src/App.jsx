import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "john doe",
    email: "john@example.com",
    password: "1234567890",
  };

  return (
    <div>
      <div>
        {obj.name} 의 나이는 {obj.age} 살
      </div>
      <div>
        {obj.name} 의 이메일 주소는 {obj.email} 이며, 비밀번호는 {obj.password}{" "}
        이다.
      </div>
      <ul>
        <li>age : {obj.age}</li>
        <li>name : {obj.name}</li>
        <li>email : {obj.email}</li>
        <li>password : {obj.password}</li>
      </ul>
    </div>
  );
}

export default App;
