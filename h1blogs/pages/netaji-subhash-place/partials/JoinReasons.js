import React from "react";
import { CourseBuiltForData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";

const JoinReasons = () => {
    return (
        <>
            <Container maxW={"7xl"}>
                <Box style={{ textAlign: "center" }}>
                    <Text fontSize={"4xl"} fontWeight={"bold"}>
                        Reasons To Join Digital Marketing Institute in Pitampura
                    </Text>
                    <Text>
                        The Digital Marketing program will prepare you to become
                        a complete digital marketer. One of the world’s
                        fastest-growing disciplines, this Digital Marketing
                        certification course will increase your job market value
                        and enable you to handle end-to-end marketing campaigns.
                    </Text>
                </Box>
                <SimpleGrid
                    py={10}
                    columns={[1, 2, 3]}
                    px={[0, 10]}
                    spacing={6}
                    fontSize={"20px"}
                >
                    {CourseBuiltForData.map((item, key) => (
                        <CustomCard
                            key={key}
                            heading={item.title}
                            icon={item.icon}
                            description={item.text}
                            boxShadow={"lg"}
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
