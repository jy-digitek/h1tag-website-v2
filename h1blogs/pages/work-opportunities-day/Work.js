import { Container, Box, Text, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../../components/SectionTitle";

function Work() {
    return (
        <>
            <Container maxW={"7xl"} py={5}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Work Opportunities from Day1
                    </SectionTitle>
                </Box>
                <Text>
                    <strong>
                        Join the Digital Marketing Course at H1 Tags .
                    </strong>{" "}
                    Are you ready to embark on a career in digital marketing and
                    make an impact right from the start? At H1 Tags, we offer a
                    unique digital marketing course that provides you with
                    opportunities to work on real projects and gain valuable
                    experience from day one. Join us to jumpstart your journey
                    to success in digital marketing.
                </Text>
                <Box pt={10}>
                    <Card bgColor={"#e2e8f0"}>
                        <CardBody>
                            <Text
                                fontSize={"3xl"}
                                fontWeight={"bold"}
                                textAlign={"center"}
                            >
                                What Sets Our Digital Marketing Course Apart
                            </Text>
                            <Box mx={10} pt={5}>
                                <Text>
                                    <strong>
                                        Immediate Hands-On Experience :{" "}
                                    </strong>{" "}
                                    Our course is designed to immerse you in the
                                    world of digital marketing from the very
                                    beginning. You won't spend endless hours in
                                    theory; instead, you'll roll up your sleeves
                                    and start working on real projects
                                    immediately.
                                </Text>
                                <Text pt={5}>
                                    <strong> Live Campaigns : </strong> Work on
                                    live digital marketing campaigns, gaining
                                    practical insights into SEO, SEM, social
                                    media marketing, content creation, and more.
                                    Your actions will impact real businesses and
                                    websites
                                </Text>

                                <Text pt={5}>
                                    <strong> Industry Exposure : </strong>
                                    Collaborate with seasoned professionals and
                                    instructors with years of experience in
                                    digital marketing. You'll learn from the
                                    best and receive mentorship that accelerates
                                    your growth.
                                </Text>
                                <Text pt={5}>
                                    <strong> Portfolio Building : </strong>
                                    As you work on real projects, you'll build a
                                    robust portfolio that showcases your skills
                                    and achievements. Having tangible results to
                                    share with potential employers will set you
                                    apart in job interviews.
                                </Text>
                                <Text pt={5}>
                                    <strong>
                                        {" "}
                                        Networking Opportunities :{" "}
                                    </strong>
                                    Our course exposes you to a network of
                                    industry professionals and fellow learners.
                                    Establish valuable connections that can lead
                                    to internships, job offers, and
                                    collaborative projects.
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Start Making an Impact Today
                    </SectionTitle>
                </Box>
                <Text>
                    Don't wait to start your digital marketing career. With H1
                    Tags, you'll seize work opportunities and gain practical
                    experience right from the very first day of our course. Your
                    journey to a successful and fulfilling career in digital
                    marketing begins here. Contact us today to learn more about
                    our digital marketing course and how you can start making an
                    impact from day one. Your future in digital marketing awaits
                    at H1 Tags. Get more information-register now.
                </Text>
            </Container>
        </>
    );
}

export default Work;
