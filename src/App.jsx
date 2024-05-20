import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  function handleButtonClick(e) {
    // event bubbling 멈추는 Method 사용
    e.stopPropagation();
    console.log("Button click");
  }

  function handleBoxClick() {
    console.log("Box click");
  }

  return (
    <ChakraProvider>
      <Box w={"100px"} h={"100px"} bgColor={"orange"} onClick={handleBoxClick}>
        <Button onClick={handleButtonClick}>클릭</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
