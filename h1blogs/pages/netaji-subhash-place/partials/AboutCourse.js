import React from "react";
import {
    Text,
    Card,
    SimpleGrid,
    CardBody,
    Image,
    Container,
    Box,
} from "@chakra-ui/react";
import ContactForm from "../../../components/contactform";

const AboutCourse = () => {
    return (
        <>
            <Container maxW={"7xl"}>
                <Text fontSize="2xl" style={{ textAlign: "center" }} pt={10}>
                    <strong>
                        {" "}
                        Delhi Institute of Digital Marketing (DIDM) in Pitampura
                        - Covers 50+ modules that you will learn in Master in
                        digital marketing training program in pitampura.
                    </strong>
                </Text>

                <SimpleGrid columns={[2, null, 3]} m={20}>
                    <Box>
                        {" "}
                        <Image src={"/DIDM(1).png"} />
                    </Box>{" "}
                    <Box>
                        {" "}
                        <Image src={"/DIDM(2).png"} />
                    </Box>{" "}
                    <Box>
                        {" "}
                        <Image src={"/DIDM(3).png"} />
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    );
};

export default AboutCourse;
