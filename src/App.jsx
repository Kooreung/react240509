import React from "react";
import * as PropTypes from "prop-types";

function MyButton(props) {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
}

MyButton.propTypes = { children: PropTypes.node };

function App(props) {
  return (
    <div>
      <MyButton>클릭1</MyButton>
      <MyButton>클릭2</MyButton>
    </div>
  );
}

export default App;
