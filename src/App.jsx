import React from "react";

function App(props) {
  // a 클릭 시
  // form 서브밋 시

  function handleClick(e) {
    e.preventDefault();
    console.log("다른일");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("다른일");
  }

  // 기본 동작 막고,, 콘솔에 간단한 메세지 출력
  return (
    <div>
      <a href="https://www.google.com" onClick={handleClick}>
        구글
      </a>
      <hr />
      <form action="https://www.google.com" onSubmit={handleSubmit}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
