import React from "react";

function App(props) {
  function handleLinkClick(e) {
    e.preventDefault();
    // preventDefault
    // 원래 click Event 를 가지고 있는 요소에게
    // (a tag, form tag 등)
    // 기존 역할은 작동하지 않고
    // 지정하는 새로운 동작을 하도록 하는 메소드
    console.log("다른 동작을 진행");
  }

  return (
    <div>
      <a href="/" onClick={handleLinkClick}>
        예
      </a>
      <hr />
      <form action="/" onSubmit={handleLinkClick}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
