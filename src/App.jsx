import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Box
          bgColor={"orange"}
          _hover={{
            bgColor: "yellow",
          }}
        >
          Lorem ipsum dolor.
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
