import React from "react";
// import { SectionTitle } from "../../../components/SectionTitle";
import { SectionTitle } from "../../components/SectionTitle";
import { SimpleGrid, Box, Card, CardBody } from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
import ContactForm from "../../components/contactform";

const RohFeedback = () => {
    return (
        <>
            <Box maxW={"full"} px={[5, 10]} id={"review"} pb={10} m={[10]}>
                {" "}
                <SectionTitle as="h2" py={10}>
                    Students’ Feedback
                </SectionTitle>
                <SimpleGrid
                    columns={[1, 1, 2]}
                    textAlign={"center"}
                    alignItems={"center"}
                >
                    <Box>
                        <Carousel />
                    </Box>
                    <Box>
                        <Card mx={[2, 20]}>
                            <CardBody> {<ContactForm />}</CardBody>
                        </Card>
                    </Box>
                </SimpleGrid>
            </Box>{" "}
        </>
    );
};

export default RohFeedback;