import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("이름");
  const [hobby, setHobby] = useState("취미");
  const [address, setAddress] = useState("주소");
  const [city, setCity] = useState("도시");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"취미"}
          onChange={(e) => setHobby(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"주소"}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"도시"}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        {name}, {hobby}, {address}, {city}
      </div>
    </div>
  );
}

export default App;
