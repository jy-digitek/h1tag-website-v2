import React from "react";
import {
    Container,
    Box,
    Text,
    Card,
    CardBody,
    CardFooter,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import { SectionTitle } from "../../components/SectionTitle";

function Whychoice() {
    return (
        <>
            <Container maxW={"7xl"} mt={5}>
                <Box pt={5}>
                    <SectionTitle as="h2">
                        Why Choose H1 Tags for Your Digital Marketing Career
                    </SectionTitle>{" "}
                    <Box>
                        <SimpleGrid
                            columns={[1, 1, 1, 2]}
                            mx={[0, 10]}
                            p={[0, 10]}
                            spacing={5}
                        >
                            <Box>
                                <Card>
                                    <CardBody>
                                        <Heading textAlign={"center"}>
                                            Expert Faculty
                                        </Heading>
                                    </CardBody>
                                    <CardFooter>
                                        Our courses are led by seasoned industry
                                        professionals who bring their extensive
                                        knowledge and practical experience to
                                        the classroom. Learn from the best to
                                        become the best in digital marketing.
                                    </CardFooter>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                    <CardBody>
                                        <Heading textAlign={"center"}>
                                            Comprehensive Curriculum
                                        </Heading>
                                    </CardBody>
                                    <CardFooter>
                                        Our curriculum covers the full spectrum
                                        of digital marketing,including SEO, SEM,
                                        social media marketing, content
                                        marketing, email marketing, and
                                        analytics.
                                    </CardFooter>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                    <CardBody>
                                        <Heading textAlign={"center"}>
                                            100% Placement Assistance
                                        </Heading>
                                    </CardBody>
                                    <CardFooter>
                                        Securing your dream job is our top
                                        priority. Our dedicated placement cell
                                        works tirelessly to connect you with top
                                        employers, guiding you through the
                                        recruitment process until you land your
                                        desired role
                                    </CardFooter>
                                </Card>
                            </Box>

                            <Box>
                                <Card>
                                    <CardBody>
                                        <Heading textAlign={"center"}>
                                            Personalized Support
                                        </Heading>
                                    </CardBody>
                                    <CardFooter>
                                        We understand that every student is
                                        unique. We offer personalized support,
                                        including resume building, interview
                                        preparation, and career counseling.
                                        We're here to help you shine.
                                    </CardFooter>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Whychoice;
