import { Container } from "@chakra-ui/react";
import React from "react";
import { Box, Text, Card } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

function AboutGraphics() {
    return (
        <>
            <Container maxW={"7xl"} mt={5}>
                <Box style={{ textAlign: "center" }} py={10}>
                    <SectionTitle as="h3">
                        H1tags Your Path to Excellence in Graphic Design Course
                        in Delhi
                    </SectionTitle>
                </Box>

                <Card p={6} backgroundColor={"#e2e8f0"}>
                    <Text>
                        Many Reputed{" "}
                        <strong>Graphic Design Course in Delhi</strong> Have
                        Taught Students for a While. However, Many of These
                        Institutions Put Little Value on Training Fundamental
                        Software Skills, Robbing Students of the Theoretical
                        Understanding and Hands-On Practice in Visual Grammar
                        Necessary for Working Graphic Designers. in Contrast,
                        H1tags Stands Out as One of Delhi's Top Graphic Design
                        Courses, Committed to Offering a Thorough Curriculum
                        That Prioritizes Solid Conceptual Comprehension and
                        Hands-On Training.
                    </Text>
                    <Text pt={3}>
                        Our Offline Graphic Design Course in Delhi at H1tags
                        Goes Beyond Merely Teaching Software by Discussing
                        Current Trends in the Rapidly Changing Graphic Design
                        Sector. This Guarantees Our Students a Comprehensive
                        Design Education That Gives Them the Skills{" "}
                    </Text>
                    <Text pt={3}>
                        Needed for the Always-Changing Industry. Students Who
                        Complete the Course Can Participate in Our Highly
                        Sought-After Internship Program. They Will Work on Real
                        Projects During This Internship, Honing Their Graphic
                        Design Abilities and Earning Useful Experience That Will
                        Help Them When They Enter the Job Market.
                    </Text>
                    <Text pt={3}>
                        H1tags Ensures That Students Receive Specific Assistance
                        and Helpful Insights by Employing a Team of Faculty
                        Members with Extensive Knowledge in the Field. We Are
                        the Best Option for Dedicated Graphic Designers Seeking
                        a Happy and Successful Career Since Our Goal Is to
                        Foster Well-Rounded Designers with a Solid Creative
                        Foundation.
                    </Text>
                    <Text>
                        H1tags Is the Best to Learn from Famous Artists While
                        Advancing Your Skills.
                    </Text>
                </Card>
            </Container>
        </>
    );
}

export default AboutGraphics;
