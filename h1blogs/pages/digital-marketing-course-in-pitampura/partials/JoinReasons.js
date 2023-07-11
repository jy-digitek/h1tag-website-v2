import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
// import { ReasonData } from "../../../components/DATA";

const JoinReasons = () => {
    return (
        <>
            <Container maxW={"full"}>
                <Box style={{ textAlign: "center" }} pt={10}>
                    {/* <Text fontSize={"4xl"} fontWeight={"bold"}>
                        Reasons To Join Digital Marketing Institute in Pitampura
                    </Text> */}
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
                >
                    {ReasonData.map((item, key) => (
                        <CustomCard
                            key={key}
                            heading={item.title}
                            icon={item.icon}
                            description={item.text}
                            color={"black"}

                            // href={"#"}
                            // actionText={"Learn more"}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </>
    );
};

export default JoinReasons;
