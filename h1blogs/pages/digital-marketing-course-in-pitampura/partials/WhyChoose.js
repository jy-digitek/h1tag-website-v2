import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
const WhyChoose = () => {
    return (
        // <Box style={{ textAlign: "center" }}>
        <Container maxW={"7xl"}>
            <Box>
                <SectionTitle as="h3">
                    Why Choose H1 Tags For Digital Marketing Course
                </SectionTitle>
                <Text pt={[5, 10]} mx={10}>
                    H1 Tags Institute of Digital Marketing provides Advance
                    Digital Marketing Training course in pitampura for beginners
                    to master. It is comprised of 50+ Digital Marketing modules
                    and offers 100% placement. H1 Tags Advanced Certification in
                    Digital Marketing was developed by Digital Marketing Agency,
                    JY Technologies Consulting Pvt. Ltd. H1 Tags experts and
                    faculty assist you in understanding business problems,
                    marketing principles, branding, and public relations
                    communications. You will also learn the digital marketing
                    skills necessary for success in the marketing field.
                </Text>
            </Box>
        </Container>
    );
};

export default WhyChoose;
