import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>red</Button>
        <Button colorScheme={"orange"}>orange</Button>
        <Button colorScheme={"yellow"}>yellow</Button>
        <Button colorScheme={"green"}>green</Button>
        <Button colorScheme={"teal"}>teal</Button>
        <Button colorScheme={"blue"}>blue</Button>
        <Button colorScheme={"cyan"}>cyan</Button>
        <Button colorScheme={"purple"}>purple</Button>
        <Button colorScheme={"pink"}>pink</Button>
        <hr />
        <Button colorScheme={"pink"} isLoading={true}>
          pink
        </Button>
        <hr />
        <Button colorScheme={"pink"} variant={"solid"}>
          pink
        </Button>
        <Button colorScheme={"pink"} variant={"outline"}>
          pink
        </Button>
        <Button colorScheme={"pink"} variant={"ghost"}>
          pink
        </Button>
        <Button colorScheme={"pink"} variant={"link"}>
          pink
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
