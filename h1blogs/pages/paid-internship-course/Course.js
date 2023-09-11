import React from "react";
// import { SectionTitle } from "../../../../components/SectionTitle";
import { SectionTitle } from "../../components/SectionTitle";
import { InternshipCourese } from "../../components/DATA";
import { SimpleGrid } from "@chakra-ui/react";
import {
    Container,
    Box,
    Text,
    Card,
    CardBody,
    CardFooter,
    Heading,
    CardHeader,
} from "@chakra-ui/react";

function Course() {
    return (
        <>
            <Container maxW={"7xl"} mt={5} py={5}>
                {/* <Box>
                    <SectionTitle as="h3">
                      
                    </SectionTitle>
                </Box> */}
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Digital marketing course with internship
                    </SectionTitle>
                </Box>
                <SimpleGrid
                    py={10}
                    columns={[1, 2, 3]}
                    px={[0, 10]}
                    spacing={6}
                    fontSize={"20px"}
                    sx={{
                        backgroundImage:
                            "https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png",
                    }}
                >
                    {InternshipCourese &&
                        InternshipCourese.map((item, i) => (
                            <Card key={i} m={2} border={"3px solid blue"}>
                                <Heading size="md" ml={10} pt={5}>
                                    {" "}
                                    {item.heading}
                                </Heading>

                                <CardFooter>
                                    <Text>{item.title}</Text>
                                </CardFooter>
                            </Card>
                        ))}
                </SimpleGrid>
                {/* <Text pt={[5, 10]} mx={10}>
                    Are you looking to kickstart or upgrade your career in the
                    dynamic field of digital marketing? The right training
                    institute can make all the difference in achieving your
                    goals. At H1 Tags Institute, we not only provide top-notch
                    digital marketing education but also offer a guarantee of
                    <strong> 100% placement assistance,</strong> setting you on
                    the path to a successful and rewarding career.
                </Text>{" "} */}

                {/* <Box pt={5}>
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
                                        <Heading>Expert Faculty</Heading>
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
                                        <Heading>
                                            Comprehensive Curriculum
                                        </Heading>
                                    </CardBody>
                                    <CardFooter>
                                        Our curriculum covers the full spectrum
                                        of digital marketing, including SEO,
                                        SEM, social media marketing, content
                                        marketing, email marketing, and
                                        analytics. You'll graduate with a
                                        well-rounded skill set that employers
                                        value.
                                    </CardFooter>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                    <CardBody>
                                        <Heading>
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
                                        <Heading>Personalized Support</Heading>
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
                </Box> */}
            </Container>
        </>
    );
}

export default Course;
