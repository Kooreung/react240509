import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((response) => console.log("200응답"));
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((response) => console.log("400응답"))
      .catch(() => console.log("catch 의 Method, 400 응답 시"));
  }

  function handleClick404() {
    axios
      .get("/api/main43/sub404")
      .then((response) => console.log("404응답"))
      .catch(() => console.log("catch 의 Method, 404 응답 시"));
  }

  function handleClick500() {
    axios
      .get("/api/main43/sub500")
      .then((response) => console.log("500번 응답 시"))
      .catch(() => console.log("catch Method , 500 응답 시"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <button onClick={handleClick400}>400 응답</button>
      <button onClick={handleClick404}>404 응답</button>
      <button onClick={handleClick500}>500 응답</button>
    </div>
  );
}

export default App;
