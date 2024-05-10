import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  // props 의 이름은 lowerCamelCase
  // 예약어 사용 금지
  return (
    <div>
      <label htmlFor="input1"></label>
      <input id="input1" type="text" />
      {/* js 의 for 와 겹치기 때문에 htmlFor 로 변경*/}
      <p className="error note">Lorem</p>
      {/* js 의 class 와 겹치기 때문에 className 으로 변경*/}
      <MyComp number={3} pageNumber={1} />
    </div>
  );
}

export default App;
