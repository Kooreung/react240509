import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>모달 버튼</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader> Title </ModalHeader>
            <ModalBody>모달 콘텐츠</ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme={"blue"}>
                확인
              </Button>
              <Button onClick={onClose}>닫기</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
