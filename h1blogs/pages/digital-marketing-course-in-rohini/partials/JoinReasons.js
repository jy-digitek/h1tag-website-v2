import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
// import { ReasonData } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";
import ReturnFocus from "../../../components/Modal";
import Link from "next/link";
// import Placement from "./viewpage/Placement";
// import Placements from "../../placement-assistance/Placements";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Button,
} from "@chakra-ui/react";
import Placement from "./viewpage/Placement";
const JoinReasons = () => {
    return (
        <>
            <Container maxW={"7xl"} mt={5}>
                <Box style={{ textAlign: "center" }} py={10}>
                    <SectionTitle as="h3">
                        Reasons To Join Digital Marketing Institute in Rohini
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
                                        {console.log("item---", item)}
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
