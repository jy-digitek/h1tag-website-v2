import React from "react";
import { Container, Text, Box, Card, CardBody } from "@chakra-ui/react";
import { SectionTitle } from "../../components/SectionTitle";

function ExpertTraining() {
    return (
        <>
            <Container maxW={"7xl"} py={5}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Learn from the Best Real-Time Expert Training
                    </SectionTitle>
                </Box>
                <Text>
                    Digital marketing skills that are not just theoretical but
                    rooted in real-world expertise? At H1 Tags Institute for
                    Digital Marketing, we offer you the invaluable opportunity
                    to learn from real-time experts with hands-on industry
                    experience. Join us for a transformative learning journey
                    that will lead you to success.
                </Text>
                <Box pt={10}>
                    <Card bgColor={"#e2e8f0"}>
                        <CardBody>
                            <Text
                                fontSize={"3xl"}
                                fontWeight={"bold"}
                                textAlign={"center"}
                            >
                                What Makes Our Training Unique
                            </Text>
                            <Box mx={10} pt={5}>
                                <Text>
                                    <strong>
                                        Real-Time Industry Insights :{" "}
                                    </strong>{" "}
                                    Our courses are led by digital marketing
                                    experts actively engaged in the industry.
                                    They bring firsthand knowledge of current
                                    trends, strategies, and best practices
                                    relevant to today's digital landscape.
                                </Text>
                                <Text pt={5}>
                                    <strong> Practical Application : </strong>{" "}
                                    Our training goes beyond theory. You'll gain
                                    practical skills through hands-on exercises,
                                    case studies, and real-life projects,
                                    ensuring you're equipped to excel in
                                    real-world scenarios.
                                </Text>

                                <Text pt={5}>
                                    <strong> In-Depth Knowledge : </strong>
                                    Benefit from the depth of knowledge of
                                    instructors who have successfully navigated
                                    the complexities of digital marketing.
                                    You'll receive insights that textbooks can't
                                    provide
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Learn Digital Marketing the Real Way
                    </SectionTitle>
                </Box>
                <Text>
                    Don't settle for generic training when you can learn from
                    real-time experts at the forefront of the digital marketing
                    industry. Join H1 Tags Institute for Digital Marketing and
                    embark on a journey of knowledge and skill acquisition that
                    will set you on the path to success. Contact us today to
                    learn more about our courses and how you can benefit
                    training by real-time experts. Your digital marketing career
                    begins with us at H1 Tags Institute.
                </Text>
            </Container>
        </>
    );
}

export default ExpertTraining;
