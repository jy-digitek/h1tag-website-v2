import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
// import { ReasonData } from "../../../components/DATA";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Button,
} from "@chakra-ui/react";

const JoinReasons = () => {
    return (
        <>
            <Container maxW={"7xl"} mt={5}>
                <Box style={{ textAlign: "center" }} py={10}>
                    <SectionTitle as="h3">
                        Reasons To Join Digital Marketing Institute in Pitampura
                    </SectionTitle>
                </Box>
                <SimpleGrid
                    py={10}
                    columns={[1, 2, 3]}
                    px={[0, 10]}
                    spacing={6}
                    fontSize={"20px"}
                    sx={{
                        backgroundImage: "/bgimage.jpg",
                    }}
                >
                    {ReasonData.map((item, key) => (
                        <Card key={key} m={2}>
                            <CardHeader ml={10}>
                                <Heading size="md"> {item.title}</Heading>
                            </CardHeader>

                            <CardFooter>
                                <Button ml={"90px"}>view more</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    );
};

export default JoinReasons;
