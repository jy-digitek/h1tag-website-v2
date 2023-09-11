import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Container, Box, Text } from "@chakra-ui/react";
function NextStep() {
    return (
        <>
            <Container maxW={"7xl"} py={5}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">Live Pratice Sessions</SectionTitle>
                </Box>
                <Text>
                    At H1 Tags Digital Marketing Course Institute, we believe in
                    the power of hands-on learning. With live practice sessions,
                    you're not just learning digital marketing but mastering it.
                    Stay ahead of the curve and elevate your skills with
                    practical experience that sets you apart in the competitive
                    digital landscape.
                </Text>
                <br />
                <Text>
                    Contact us today to learn more about our digital marketing
                    courses and the live practice sessions that will empower you
                    to succeed in the exciting world of digital marketing. Your
                    journey to mastery begins here, at H1 Tags
                </Text>
            </Container>
        </>
    );
}

export default NextStep;
