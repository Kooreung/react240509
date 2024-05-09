import React from "react";

function App(props) {
  const a = {
    name: "흥민",
    team: "토트넘",
    salary: 500,
  };

  return (
    <div>
      {a.name} 은 {a.team} 소속이며 연봉은 {a.salary} 억이다.
    </div>
  );
}

export default App;
