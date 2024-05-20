import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon, StarIcon } from "@chakra-ui/icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <StarIcon />
      </div>
      <div>
        <Button leftIcon={<EmailIcon />}>Email</Button>
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </ChakraProvider>
  );
}

export default App;
