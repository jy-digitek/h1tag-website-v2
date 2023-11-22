import React from "react";
import { SectionTitle } from "../../components/SectionTitle";

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
        <Container maxW={"7xl"} mt={5} pt={5}>
            <Box>
                <SectionTitle as="h3">
                    H1 Tags Institute with 100% Placement Assistance
                </SectionTitle>
                <Text pt={[5, 5]} mx={10}>
                    Are you looking to kickstart or upgrade your career in the
                    dynamic field of digital marketing? The right training
                    institute can make all the difference in achieving your
                    goals. At H1 Tags Institute, we not only provide top-notch
                    digital marketing education but also offer a guarantee of
                    <strong> 100% placement assistance,</strong> setting you on
                    the path to a successful and rewarding career.
                </Text>{" "}
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
                                    <strong>Placement Assistance : </strong> We
                                    understand that your ultimate goal is to
                                    secure a fulfilling job in the digital
                                    marketing industry. That's why we offer 100%
                                    placement assistance to all our students.
                                    Our dedicated placement cell works
                                    tirelessly to connect you with top employers
                                    and assist you throughout recruitment.
                                </Text>
                                <Text pt={5}>
                                    <strong>
                                        {" "}
                                        Your Path to a Bright Future :{" "}
                                    </strong>{" "}
                                    Investing in your education at H1 Tags
                                    Institute is an investment in your future.
                                    With our comprehensive training, expert
                                    guidance, and unwavering commitment to your
                                    success, you can confidently embark on a
                                    rewarding digital marketing career.
                                </Text>

                                <Text pt={5}>
                                    Don't settle for less. Choose H1 Tags
                                    Institute for a transformative learning
                                    experience and secure your dream job in the
                                    digital marketing industry. Your success is
                                    our priority, and with our 100% placement
                                    assistance, you're one step closer to
                                    achieving it. Contact us today to learn more
                                    about our programs and how we can help you
                                    realize your career aspirations in the
                                    dynamic world of digital marketing. Your
                                    journey to success starts here at H1 Tags
                                    Institute.
                                </Text>
                                <Text pt={5}>
                                    Are you ready to transform your career and
                                    step into the dynamic world of digital
                                    marketing? At H1 Tags, we're not just a
                                    digital marketing training institute; we're
                                    your pathway to professional success. Our
                                    commitment to your career is unwavering, and
                                    we proudly offer 100% placement assistance
                                    to ensure your journey to success is smooth
                                    and rewarding.
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}

export default Placement;
