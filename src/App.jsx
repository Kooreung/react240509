import React from "react";

function MyButton({ name, sx }) {
  return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton
        name={"버튼1"}
        sx={{
          color: "gray",
          backgroundColor: "skyblue",
          padding: "10px",
          width: "50%",
          fontSize: "2rem",
        }}
      />
      <br />
      <MyButton
        name={"버튼2"}
        sx={{
          color: "white",
          backgroundColor: "darkgreen",
          padding: "10px",
          width: "50%",
          fontSize: "2rem",
          textAlign: "right",
        }}
      />
    </div>
  );
}

export default App;
