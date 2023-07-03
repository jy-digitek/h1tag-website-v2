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
            >
                <Box mx={[0, 10]}>
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
                <Box mx={[0, 10]}>
                    <Card>
                        <CardBody>
                            <Text fontSize="1xl">
                                <strong>Only Key Highlights</strong>
                            </Text>
                            <UnorderedList>
                                <ListItem>Learn From Experts</ListItem>
                                <ListItem>Proven Track Records</ListItem>
                                <ListItem>
                                    FREE Doubt-Clearing Sessions
                                </ListItem>
                                <ListItem>High-Quality Training</ListItem>
                                <ListItem>
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
