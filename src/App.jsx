import React, { useState } from "react";

function App(props) {
  // 필요 시 여러 state 사용 가능
  const [age, setAge] = useState("20");
  const [name, setName] = useState("이름");
  const [country, setCountry] = useState("국가");
  const [team, setTeam] = useState("팀");
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder={"나이"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder={"국가"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setTeam(e.target.value)}
          placeholder={"팀"}
        />
      </div>
      <div>
        {name} 의 나이는 {age} 세, {country} 의 {team} 소속입니다.
      </div>
    </div>
  );
}

export default App;
