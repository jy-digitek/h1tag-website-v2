import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";

import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

import Link from "next/link";
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
                    {ReasonData &&
                        ReasonData.map((item, i) => (
                            <Card key={i} m={2} border={"3px solid blue"}>
                                <CardHeader ml={10}>
                                    <Heading size="md"> {item.title}</Heading>
                                </CardHeader>

                                <CardFooter>
                                    <Box
                                        style={{
                                            marginLeft: "90px",
                                            border: "1px solid blue",
                                            padding: "10px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <Link href={item.href}>view more</Link>{" "}
                                    </Box>
                                </CardFooter>
                            </Card>
                        ))}
                </SimpleGrid>
            </Container>
        </>
    );
};

export default JoinReasons;
