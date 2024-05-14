import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext("");

function MyBox() {
  const message = useContext(MessageContext);

  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
