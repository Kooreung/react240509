import React, { createContext, useContext, useState } from "react";

const TextContext = createContext(null);

function MyInput() {
  const textUseContext = useContext(TextContext);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => textUseContext.updateText(e.target.value)}
      />
      <p>{textUseContext.text}</p>
    </div>
  );
}

function MyText() {
  const textUseContext = useContext(TextContext);

  return (
    <div>
      <p>{textUseContext.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }

  return (
    <div>
      <TextContext.Provider value={{ text, updateText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
