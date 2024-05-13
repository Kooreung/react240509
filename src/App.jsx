import React, { useState } from "react";
import { Button, ChakraProvider, Input } from "@chakra-ui/react";

function App(props) {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function handleUpload() {
    if (text.length > 0) {
      // 공백은 추가 안하게 함
      let [...nextList] = list;
      nextList.push(text);
      setList(nextList);
      setText(""); // 입력 칸 초기화
    }
  }

  return (
    <ChakraProvider>
      <div>
        <Input
          value={text} // 입력 칸 초기화
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleUpload}>등록</Button>
      </div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </ChakraProvider>
  );
}

export default App;
