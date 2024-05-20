import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button sx={{ color: "orange" }} colorScheme={"blue"}>
          Lorem.
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
