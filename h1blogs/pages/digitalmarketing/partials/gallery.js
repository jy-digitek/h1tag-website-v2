import React from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { Modal } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

import { galleryimage } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";

export default function Gallery() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container maxW="full" py={[5]} bg="gray.100">
            <Box textAlign={"center"} maxW={"7xl"} mx={"auto"}>
                <SectionTitle children={" Our Gallery"} my={10} />

                <SimpleGrid columns={[2, 3]} spacing={5}>
                    {galleryimage.map((item, index) => {
                        return (
                            <Box mt={3} onClick={onOpen}>
                                <Card maxW={["lg", "sm"]}>
                                    <Box
                                        key={index}
                                        border="3px solid"
                                        borderColor="#3950a1"
                                        // borderWidth={[5, 20]}
                                        // p={1}
                                    >
                                        <Image
                                            objectFit="cover"
                                            src={item.img}
                                            alt="galleryimage"
                                        />
                                    </Box>
                                </Card>
                            </Box>
                        );
                    })}
                    <Modal onClose={onClose} isOpen={isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box mt={3} onClick={onOpen}>
                                    <Box>
                                        <Image
                                            objectFit="cover"
                                            src={"./test/newgallery1.jpg"}
                                            alt="galleryimage"
                                            width={"1500px"}
                                            height={"500px"}
                                        />
                                    </Box>
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </SimpleGrid>

                <Box pt={10}>
                    <a
                        href="https://www.google.com/maps/place/H1+Tags+Institute+-+Best+Digital+Marketing+Course+in+NSP,+Pitampura,+Delhi/@28.6905841,77.1517968,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPVKYim1g771GQf8S-cM-lrzJ-icFlalID96F4P!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPVKYim1g771GQf8S-cM-lrzJ-icFlalID96F4P%3Dw224-h458-k-no!7i672!8i1376!4m9!3m8!1s0x390d0332a9eb6003:0x11b19c5ca3150063!8m2!3d28.6905841!4d77.1517968!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11s7zznw85?entry=ttu"
                        target="blank"
                    >
                        <Button
                            colorScheme="blue"
                            bg={"#3950a1"}
                            color={"white"}
                            _hover={{ background: "#101C32" }}
                            px={10}
                            rounded={"full"}
                        >
                            view more
                        </Button>
                    </a>
                </Box>
            </Box>
        </Container>
    );
}
