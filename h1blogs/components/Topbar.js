import { EmailIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Hide, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SlPhone } from "react-icons/sl";

const Topbar = () => {
    return (
        <Box bg="#101C32" color="white" py={2}>
            <Container maxW={("full", "7xl")}>
                <SimpleGrid columns={[1, 1, 2]} spacing={2}>
                    <Box textAlign={["center", "left"]}>
                        <Link display="block" href={"/contact"}>
                            Branches
                        </Link>
                    </Box>

                    <Hide below="md">
                        <Flex gap={5} justifyContent="end">
                            <Flex alignItems={"center"}>
                                <EmailIcon fontSize={"20px"} mr={1} />{" "}
                                info@h1tags.com
                            </Flex>
                            <Flex alignItems={"center"}>
                                <SlPhone fontSize={"20px"} mr={1} />
                                <Text>+91 777 000 7684,777 000 7698</Text>
                            </Flex>
                        </Flex>
                    </Hide>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Topbar;
