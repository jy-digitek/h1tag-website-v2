import React from "react";
// import Layout from "../../../../components/layout";
// import CTA from "../../../../components/CTA";
import { SectionTitle } from "../../../../components/SectionTitle";
import { SimpleGrid } from "@chakra-ui/react";
import {
    Container,
    Box,
    Text,
    Card,
    CardBody,
    CardFooter,
    Heading,
} from "@chakra-ui/react";

function Placement() {
    return (
        // <Layout>
        <Container maxW={"7xl"} mt={5}>
            <Box>
                <SectionTitle as="h3">
                    H1 Tags Institute with 100% Placement Assistance
                </SectionTitle>
                <Text pt={[5, 10]} mx={10}>
                    Are you looking to kickstart or upgrade your career in the
                    dynamic field of digital marketing? The right training
                    institute can make all the difference in achieving your
                    goals. At H1 Tags Institute, we not only provide top-notch
                    digital marketing education but also offer a guarantee of
                    <strong> 100% placement assistance,</strong> setting you on
                    the path to a successful and rewarding career.
                </Text>{" "}
                <Text fontSize={"3xl"} mx={5} pt={2}>
                    Placement Assistance :
                </Text>
                <Text pt={[5, 5]} mx={10}>
                    We understand that your ultimate goal is to secure a
                    fulfilling job in the digital marketing industry. That's why
                    we offer 100% placement assistance to all our students. Our
                    dedicated placement cell works tirelessly to connect you
                    with top employers and assist you throughout recruitment.
                </Text>
                <Text fontSize={"3xl"} mx={5} pt={2}>
                    Your Path to a Bright Future :
                </Text>
                <Text pt={[5, 5]} mx={10}>
                    Investing in your education at H1 Tags Institute is an
                    investment in your future. With our comprehensive training,
                    expert guidance, and unwavering commitment to your success,
                    you can confidently embark on a rewarding digital marketing
                    career.
                </Text>
                <Text pt={[5, 5]} mx={10}>
                    Don't settle for less. Choose H1 Tags Institute for a
                    transformative learning experience and secure your dream job
                    in the digital marketing industry. Your success is our
                    priority, and with our 100% placement assistance, you're one
                    step closer to achieving it. Contact us today to learn more
                    about our programs and how we can help you realize your
                    career aspirations in the dynamic world of digital
                    marketing. Your journey to success starts here at H1 Tags
                    Institute.
                </Text>
                <Text pt={[5, 5]} mx={10}>
                    Are you ready to transform your career and step into the
                    dynamic world of digital marketing? At H1 Tags, we're not
                    just a digital marketing training institute; we're your
                    pathway to professional success. Our commitment to your
                    career is unwavering, and we proudly offer 100% placement
                    assistance to ensure your journey to success is smooth and
                    rewarding.
                </Text>
            </Box>
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
                                    <Heading>Expert Faculty</Heading>
                                </CardBody>
                                <CardFooter>
                                    Our courses are led by seasoned industry
                                    professionals who bring their extensive
                                    knowledge and practical experience to the
                                    classroom. Learn from the best to become the
                                    best in digital marketing.
                                </CardFooter>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardBody>
                                    <Heading>Comprehensive Curriculum</Heading>
                                </CardBody>
                                <CardFooter>
                                    Our curriculum covers the full spectrum of
                                    digital marketing, including SEO, SEM,
                                    social media marketing, content marketing,
                                    email marketing, and analytics. You'll
                                    graduate with a well-rounded skill set that
                                    employers value.
                                </CardFooter>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardBody>
                                    <Heading>100% Placement Assistance</Heading>
                                </CardBody>
                                <CardFooter>
                                    Securing your dream job is our top priority.
                                    Our dedicated placement cell works
                                    tirelessly to connect you with top
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
                                    We understand that every student is unique.
                                    We offer personalized support, including
                                    resume building, interview preparation, and
                                    career counseling. We're here to help you
                                    shine.
                                </CardFooter>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Container>
        // </Layout>
    );
}

export default Placement;
