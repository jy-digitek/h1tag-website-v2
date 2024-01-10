import React from "react";
import { Container, Box, Text, CardBody, Card } from "@chakra-ui/react";
import { SectionTitle } from "../../components/SectionTitle";
function Pratices() {
    return (
        <>
            <Container maxW={"7xl"}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">Live Pratice Sessions</SectionTitle>
                </Box>
                <Text>
                    Are you eager to master the art of digital marketing and
                    stay ahead in the ever-evolving online landscape? Look no
                    further than H1 Tags Digital Marketing Course Institute,
                    where we provide top-tier education and offer live practice
                    sessions that will empower you with practical skills and
                    real-world experience.
                </Text>
                {/* <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        The Power of Live Practice Sessions
                    </SectionTitle>
                </Box> */}
                <Box pt={10}>
                    <Card bgColor={"#e2e8f0"}>
                        <CardBody>
                            <Text
                                fontSize={"3xl"}
                                fontWeight={"bold"}
                                textAlign={"center"}
                            >
                                The Power of Live Practice Sessions
                            </Text>
                            <Box mx={10} pt={5}>
                                <Text>
                                    <strong>Real-World Application : </strong>{" "}
                                    Our digital marketing course goes beyond
                                    theory. With live practice sessions, you get
                                    hands-on experience applying the concepts
                                    you've learned to real-life scenarios.
                                </Text>
                                <Text pt={5}>
                                    <strong> Interactive Learning : </strong>{" "}
                                    Interact with instructors and fellow
                                    students during live sessions, fostering a
                                    collaborative learning environment where
                                    questions are encouraged and solutions are
                                    explored together
                                </Text>

                                <Text pt={5}>
                                    <strong> Skill Enhancement : </strong> Live
                                    practice sessions are designed to enhance
                                    your digital marketing skills. Whether it's
                                    SEO, social media marketing, or email
                                    campaigns, you'll gain valuable insights and
                                    techniques that work in today's digital
                                    landscape.
                                </Text>
                                <Text pt={5}>
                                    <strong> Adaptability : </strong>
                                    Digital marketing is dynamic, and strategies
                                    evolve rapidly. Live sessions ensure you
                                    stay up-to-date with the latest trends and
                                    can adapt your marketing efforts
                                    accordingly.
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default Pratices;
