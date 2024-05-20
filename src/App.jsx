import React, { useState } from "react";

function App(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("hello world!");
  const [text3, setText3] = useState("hi world!");
  const [text4, setText4] = useState("안녕");
  const [text5, setText5] = useState("올라");

  return (
    <div>
      <div>
        {/*변경 시 문구*/}
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <input type="text" value={text2} readOnly={true} />
      </div>
      <div>
        <input type="text" defaultValue={text3} />
      </div>
      <div>
        {/*첫 로딩할 때 문구 + 변경 시 문구*/}
        <input
          type="text"
          value={text4}
          onChange={(e) => setText4(e.target.value)}
        />
      </div>
      <div>
        {/*변경해도 소용 없다*/}
        <input type="text" value={text5} />
      </div>
    </div>
  );
}

export default App;
