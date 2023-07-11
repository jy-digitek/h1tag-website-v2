import React from "react";
import {
    Card,
    CardBody,
    SimpleGrid,
    Text,
    UnorderedList,
    ListItem,
    Stack,
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr,
    Th,
    TableCaption,
    Tfoot,
    Container,
} from "@chakra-ui/react";

const KeyPoint = () => {
    return (
        <Container maxW={"full"}>
            <SimpleGrid
                columns={[1, 1, 1, 2]}
                px={[0, 0]}
                mb={[10]}
                fontSize={"20px"}
                mx={[1, 10]}
                // pt={50}
                spacing={5}
            >
                <Box mx={[0, 10]}>
                    <Card height={"220px"}>
                        <CardBody>
                            <h3>
                                <strong>Only Key Highlights</strong>
                            </h3>
                            <UnorderedList>
                                <ListItem fontSize={"md"}>
                                    Live Projects / Case Studies
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    Free Backup Sessions
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    20+ Globally Recognized Certifications
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    Weekly Quizzes
                                </ListItem>

                                <ListItem fontSize={"md"}>
                                    Laptop Facility Available.
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    Mock Interview
                                </ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>{" "}
                </Box>
                <Box mx={[0, 10]}>
                    <Card height={"220px"}>
                        <CardBody>
                            <Text fontSize="1xl">
                                <strong>Only Key Highlights</strong>
                            </Text>
                            <UnorderedList>
                                <ListItem fontSize={"md"}>
                                    Learn From Experts
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    Proven Track Records
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    FREE Doubt-Clearing Sessions
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    High-Quality Training
                                </ListItem>
                                <ListItem fontSize={"md"}>
                                    Weekend batches for working professionals
                                </ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>{" "}
                </Box>
            </SimpleGrid>
        </Container>
    );
};

export default KeyPoint;
