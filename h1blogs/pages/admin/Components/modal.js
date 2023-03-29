import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function ReturnFocus({
  btnText,
  modalTitle,
  isEditingSet,
  openModalSet,
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        p={5}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"#101C32"}
        onClick={(e) => {
          openModalSet(true);
          onOpen(e);
        }}
      >
        {btnText}
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
