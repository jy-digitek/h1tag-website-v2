import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";

const Banner = () => {
    return (
        <Container maxW={"full"} p={0}>
            <Box p={0}>
                <Image src={"/pitampura.jpg"} w={"100%"} />
            </Box>
            <SectionTitle as="h1" pt={[8, 12]}>
                {" "}
                Best Digital Marketing Course Institute - Pitampura
            </SectionTitle>
            <Container maxW={"8xl"}>
                <Box sx={{ padding: 5 }} px={[0, 20]}>
                    <Text px={[0, 20]}>
                        Looking for the best digital marketing course in
                        Pitampura? Look no further! H1 tags Institute is
                        relevant for digital marketing course in Pitampura is
                        designed to equip you with the skills and knowledge
                        needed to excel in the dynamic world of online
                        marketing. Join us today and embark on your journey to
                        success!
                    </Text>
                </Box>
            </Container>

            <Box maxW={"full"} p={0}>
                <Card
                    style={{
                        backgroundColor: "#3950a1",

                        textAlign: "center",
                    }}
                >
                    <CardBody>
                        <SectionTitle as="h2" color={"white"}>
                            H1 Tags - Most Trusted Institute for Digital
                            Marketing Course
                        </SectionTitle>
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default Banner;
