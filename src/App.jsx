import React from "react";

function App(props) {
  return (
    <div>
      {/*file 은 항상 post 방식으로 전송해야 한다.*/}
      {/*추가로 enctype = multipart/form-data 를 꼭 해야한다.*/}
      {/*그렇지 않으면 파일명이 url 로 남기만 하고 파일 전송은 안된다.*/}
      <form action="/" method="POST" enctype="multipart/form-data">
        이름 <input type="text" name={"name"} />
        <br />
        파일 <input type="file" name={"file"} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
