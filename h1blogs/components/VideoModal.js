import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
  ModalBody,
  // ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Container,
  Image,
} from "@chakra-ui/react";
// import { FcStart } from "react-icons/fc";
const VideoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Box className="isRippleButton">
        <Button
          onClick={onOpen}
          // background={"white"}
          // _hover={{ background: "red" }}
          p={0}
        >
          <Image src="/youtube-round-color-icon.svg" w={8} />
        </Button>
      </Box>
      <Container maxW={"6xl"}>
        {/* <FcStart fontSize={60} /> */}

        <Modal
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={"2xl"}
          className={"model_container"}
        >
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            <ModalBody p={0} m={0}>
              <Box
                as="iframe"
                overflow="hidden"
                width="560"
                height="450"
                sx={{
                  aspectRatio: "16/9",
                }}
                allow="autoplay"
                src="https://www.youtube.com/embed/jrZzv-vfFAs"
                title="What is
                  Digital Marketing | Introduction of Digital Marketing | H1 Tags"
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write;
                //   encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                objectFit="contain"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default VideoModal;
