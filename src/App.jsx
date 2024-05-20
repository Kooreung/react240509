import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [count, setCount] = useState();
  useEffect(() => {}, []);
  // use... -> 이와 같은 형태의 Method 를 hook 이라고 한다.
  // hook 은 진행 순서가 남는다.
  // if / for 등 반복문 내에서 사용하면 안된다.
  // hook 은 Component 의 최상단에 순서대로 작성하면 안전하게 사용 가능하다.

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
