import React from "react";
import { Container, Box, Text, Card } from "@chakra-ui/react";
import { SectionTitle } from "../../components/SectionTitle";

function Program() {
    return (
        <>
            <Container maxW={"7xl"} mt={5}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">
                        Internship program Build your knowledge and skills
                    </SectionTitle>
                </Box>
                <Card p={5}>
                    {/* <Text fontSize={"3xl"} mx={5} pt={2}></Text> */}
                    <Text pt={[5, 5]}>
                        <strong>
                            Learn the fundamentals of digital marketing
                        </strong>{" "}
                        Learn the fundamentals of digital marketing to get
                        started. Learn about the many digital marketing channels
                        available, including pay-per-click (PPC) advertising,
                        social media marketing, email marketing, and search
                        engine optimization (SEO).
                    </Text>
                    {/* <Text fontSize={"3xl"} mx={5} pt={2}>
                        Your Path to a Bright Future :
                    </Text> */}
                    <Text pt={[5, 5]}>
                        <strong>Develop analytical skills</strong> because data
                        analysis is a crucial component of online marketing.
                        Learn about technologies like Google Analytics, which
                        can offer insightful information about user behavior,
                        website traffic, and campaign performance. Learn to
                        analyze facts and come to informed judgments.
                    </Text>
                    <Text pt={[5, 5]}>
                        <strong>Learn search engine optimization (SEO)</strong>{" "}
                        strategies to increase your website's organic traffic.
                        Recognize the foundational concepts of SEO, such as
                        technical SEO, link building, on-page optimization, and
                        keyword research. Keep up with the most recent
                        developments in algorithmic SEO.
                    </Text>
                    <Text pt={[5, 5]}>
                        <strong>Gain social media marketing expertise</strong>{" "}
                        Social networking sites are practical marketing tools.
                        Learn how to design plans, produce compelling content,
                        and evaluate social media metrics. Learn about
                        well-known websites, including Facebook, Instagram,
                        Twitter, LinkedIn, and YouTube.
                    </Text>
                </Card>
            </Container>
        </>
    );
}

export default Program;
