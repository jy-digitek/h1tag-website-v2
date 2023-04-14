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
import { GlobalButton } from "./GlobalButton";
export default function ReturnFocus({
  btnText,
  modalTitle,
  isEditingSet,
  // openModalSet,
  w,
  children,
  ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [openModal, openModalSet] = React.useState(false);
  return (
    <>
      <GlobalButton
        display={{ base: "block", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        onClick={(e) => {
          openModalSet(true);
          onOpen(e);
        }}
        label={btnText}
        background="#3950a1"
        _hover={{ background: "#101C32" }}
        {...rest}
      />
      {/* {btnText}
      </Button> */}
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          {/* <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
