import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { SimpleGrid, Box, Card, CardBody, Container } from "@chakra-ui/react";
import Carousel from "../../../components/Carousel";
import ContactForm from "../../../components/contactform";

const Feedback = () => {
    return (
        <>
            <Container maxW={"full"} px={[5, 10]} id={"review"} pb={10}>
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
                        <Card mx={[0, 20]}>
                            <CardBody> {<ContactForm />}</CardBody>
                        </Card>{" "}
                    </Box>
                </SimpleGrid>
            </Container>{" "}
        </>
    );
};

export default Feedback;
