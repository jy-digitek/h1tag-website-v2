import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";

const RohBanner = () => {
    return (
        <Container maxW={"full"} p={0}>
            <Box p={0}>
                <Image src={"/rohini.jpg"} w={"100%"} />
            </Box>
            <SectionTitle pt={[8, 12]}>
                <h1>
                    {" "}
                    Best Digital Marketing Course Training Institute - Rohini
                </h1>
            </SectionTitle>

            <Box sx={{ padding: 5 }} px={[0, 20]}>
                <Text px={[0, 20]}>
                    Looking for the best digital marketing course in Rohini?
                    Look no further! H1 tags Institute is relevant for digital
                    marketing course in Rohini is designed to equip you with the
                    skills and knowledge needed to excel in the dynamic world of
                    online marketing. Join us today and embark on your journey
                    to success!
                </Text>
            </Box>
            <Box maxW={"full"} p={0}>
                <Card
                    style={{
                        backgroundColor: "#3950a1",
                        textAlign: "center",
                    }}
                >
                    <CardBody>
                        <Text
                            fontWeight={"bold"}
                            color={`#fff`}
                            fontSize={"4xl"}
                        >
                            H1 Tags - Most Trusted Institute for Digital
                            Marketing Course
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default RohBanner;
