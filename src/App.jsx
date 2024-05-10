import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"} style={{ marginRight: "1rem" }}>
          확인
        </Button>
        <Button colorScheme={"red"}>취소</Button>
        <Button
          sx={{
            color: "skyblue",
            marginLeft: "1rem",
            fontSize: "2rem",
            padding: "2rem",
          }}
          colorScheme={"gray"}
        >
          정정
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
