import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  // 여러 파일 선택해야해서 기본값을 배열로 변경
  // 배열의 file 이름을 받도록 하단에 file.array 생성

  const fileNames = [];
  for (let i = 0; i < file.length; i++) {
    fileNames.push(<li>{file.item(i).name}</li>);
  }

  function handleSubmit(e) {
    // 기본 파일 전송 말고 axios 로 전송을 시킨다.
    // 원래는 config 에서 header 에 content type 을 설정해줘야하는데,
    // axios post 말고 postform 을 사용하면
    // conte-type:mulpart... 를 자동으로 세팅해준다.
    e.preventDefault();
    axios.postForm("/api/main45/sub2", { name, file });
    console.log("axios 로 파일 전송");
  }

  return (
    <div>
      {/*file 은 항상 post 방식으로 전송해야 한다.*/}
      {/*추가로 enctype = multipart/form-data 를 꼭 해야한다.*/}
      {/*그렇지 않으면 파일명이 url 로 남기만 하고 파일 전송은 안된다.*/}
      <form
        onSubmit={handleSubmit}
        // action="/"
        // method="POST"
        // encType="multipart/form-data"
        // axios 로 보냈기 때문에 위 내용들은 필요가 없어졌다.
      >
        이름{" "}
        <input
          type="text"
          name={"name"}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        파일 {/* 여러개의 파일을 선택할 수 있도록 하는 multiple */}
        <input
          multiple={true}
          type="file"
          name={"file"}
          onChange={(e) => setFile(e.target.files)}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
        <ul>{fileNames}</ul>
      </div>
    </div>
  );
}

export default App;
