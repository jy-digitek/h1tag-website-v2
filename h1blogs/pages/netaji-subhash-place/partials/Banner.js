import React from "react";
import { Container, Box, Image, Card, CardBody, Text } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

const Banner = () => {
    return (
        <Container maxW={"full"} p={0}>
            <Box position="relative" p={0}>
                <Image src={"/image1.jpg"} w={"100%"} />
            </Box>
            <SectionTitle pt={[8, 12]}>
                <h1> Digital Marketing Training Institute - Pitampura</h1>
            </SectionTitle>

            <Box sx={{ padding: 5 }} px={[0, 20]}>
                <Text px={[0, 20]}>
                    <strong>
                        {" "}
                        Delhi Institute of Digital Marketing (DIDM),
                    </strong>{" "}
                    a top digital marketing training provider across India
                    running multiple training center in{" "}
                    <strong>Delhi/NCR</strong> and cover almost every part of
                    the South Delhi | North Delhi | East Delhi | West Delhi |
                    Noida | Gurgaon and other important location both Online &
                    Offline mode with different training program in{" "}
                    <strong>Digital Marketing Course.</strong>
                </Text>
            </Box>
            <Box maxW={"full"} p={0}>
                <Card
                    style={{
                        backgroundColor: "#5477a6",
                        textAlign: "center",
                    }}
                >
                    <CardBody>
                        <Text fontSize="6xl" color={"white"}>
                            India's Most Promising Brand
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default Banner;
