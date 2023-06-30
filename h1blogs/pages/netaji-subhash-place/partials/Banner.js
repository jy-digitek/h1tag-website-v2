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
                <h1>
                    {" "}
                    Best Digital Marketing Course Training Institute - Pitampura
                </h1>
            </SectionTitle>

            <Box sx={{ padding: 5 }} px={[0, 20]}>
                <Text px={[0, 20]}>
                    Looking for the best digital marketing course in Pitampura?
                    Look no further! H1 tags Institute is relevant for digital
                    marketing course in Pitampura is designed to equip you with
                    the skills and knowledge needed to excel in the dynamic
                    world of online marketing. Join us today and embark on your
                    journey to success!
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
                            H1 Tags - Most Trusted Institute for Digital
                            Marketing Course
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default Banner;
