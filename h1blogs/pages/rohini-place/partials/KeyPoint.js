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
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={[1, 1, 1, 2]}
                px={[0, 0]}
                mb={[10]}
                fontSize={"20px"}
                mx={10}
                // pt={50}
            >
                <Box mx={20}>
                    <Card>
                        <CardBody>
                            <Text fontSize="1xl">
                                <strong>Only Key Highlights</strong>
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Live Projects / Case Studies
                                </ListItem>
                                <ListItem>Free Backup Sessions</ListItem>
                                <ListItem>
                                    20+ Globally Recognized Certifications
                                </ListItem>
                                <ListItem>Weekly Quizzes</ListItem>

                                <ListItem>Laptop Facility Available.</ListItem>
                                <ListItem>Mock Interview</ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>{" "}
                </Box>
                {/* <Card mx={10}> */}{" "}
                {/* <TableContainer>
                        <Table variant="simple">
                            <Tbody>
                                <Tr
                                    style={{
                                        width: "3px",
                                        height: "100px",
                                    }}
                                >
                                    <Td>
                                        <strong>Training Mode</strong> In Class
                                        | Online
                                    </Td>
                                    <Td>Course Duration 3 | 5 Months </Td>
                                    <Td>Course Materials E-Notes & E-Books</Td>
                                </Tr>
                                <Tr
                                    style={{
                                        width: "3px",
                                        height: "100px",
                                    }}
                                >
                                    <Td>
                                        Training Session Recording (LMS) & Live
                                        Session
                                    </Td>
                                    <Td>
                                        Practical Learning Assignment | Case
                                        Studies
                                    </Td>
                                    <Td>Market Exposure Live Projects</Td>
                                </Tr>
                                <Tr
                                    style={{
                                        width: "3px",
                                        height: "100px",
                                    }}
                                >
                                    <Td>
                                        Placement Session Job Preperation &
                                        Placements
                                    </Td>
                                    <Td>
                                        Practical Exposure 02 Months Internship
                                        - Online Strikers
                                    </Td>
                                    <Td>
                                        Certifications & Exams 20+
                                        Certifications
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer> */}
                {/* </Card> */}
                <Card>
                    <CardBody>
                        <Text fontSize="1xl">
                            <strong>Only Key Highlights</strong>
                        </Text>
                        <UnorderedList>
                            <ListItem>Learn From Experts</ListItem>
                            <ListItem>Proven Track Records</ListItem>
                            <ListItem>FREE Doubt-Clearing Sessions</ListItem>
                            <ListItem>High-Quality Training</ListItem>
                            <ListItem>
                                Weekend batches for working professionals
                            </ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>{" "}
            </SimpleGrid>
        </Container>
    );
};

export default KeyPoint;
