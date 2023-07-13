import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
// import { ReasonData } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";
const JoinReasons = () => {
    return (
        <>
            <Container maxW={"7xl"}>
                <Box style={{ textAlign: "center" }}>
                    {/* <Text fontSize={"4xl"} fontWeight={"bold"}>
                        Reasons To Join Digital Marketing Institute in Rohini
                    </Text> */}
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
                >
                    {ReasonData.map((item, key) => (
                        <Box key={key}>
                            <CustomCard
                                key={key}
                                heading={item.title}
                                icon={item.icon}
                                description={item.text}
                                color={"black"}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    );
};

export default JoinReasons;
