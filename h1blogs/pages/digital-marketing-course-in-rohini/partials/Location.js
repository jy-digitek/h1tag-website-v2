import React from "react";

import {
    Container,
    SimpleGrid,
    Box,
    Card,
    CardBody,
    CardHeader,
    Text,
    List,
    ListItem,
    Button,
    Image,
} from "@chakra-ui/react";
import { ImCheckmark, ImLocation2, ImPhone, ImEnvelop } from "react-icons/im";
import { RohiniLocation } from "../../../components/DATA";

const RohLocation = () => {
    return (
        <Container maxW={"full"} py={[5, 0]}>
            <SimpleGrid columns={[1, 1, 2]} mx={[0, 10]} p={[0, 10]}>
                <Box px={[0, 10]}>
                    <Card>
                        {" "}
                        <CardHeader
                            style={{
                                backgroundColor: "#3950a1",
                                textAlign: "center",
                            }}
                        >
                            <Text color={"white"} fontSize="2xl">
                                Budh Vihar, Rohini Training Location
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={"bold"} fontSize={"2xl"}>
                                Budh Vihar, Rohini
                            </Text>
                            <List>
                                <ListItem display={"flex"}>
                                    <ImLocation2 />
                                    <Text pl={3}>
                                        D-44, Kanjhawala Rd, Budh Vihar Phase-I
                                        Krishan Vihar, Delhi, 110086
                                    </Text>
                                </ListItem>
                                <ListItem display={"flex"}>
                                    <ImPhone />
                                    <Text pl={3}>+91 77700-07683</Text>
                                </ListItem>
                                <ListItem display={"flex"}>
                                    <ImEnvelop />
                                    <Text pl={3}>info@h1tags.com</Text>
                                </ListItem>
                            </List>
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                                pt={5}
                            ></Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box px={[0, 10]}>
                    {RohiniLocation.map((i, k) => (
                        <Card key={k}>
                            <CardHeader
                                style={{
                                    backgroundColor: "#3950a1",
                                    textAlign: "center",
                                }}
                            >
                                <Text color={"white"} fontSize="2xl">
                                    Program Course maps
                                </Text>{" "}
                            </CardHeader>
                            <CardBody>
                                <>
                                    <Box
                                        as="iframe"
                                        sx={{ mt: 5 }}
                                        src={i.map_url}
                                        width={["auto", "450px"]}
                                        height="210"
                                        // style="border:0;"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></Box>
                                </>
                            </CardBody>
                        </Card>
                    ))}
                </Box>
            </SimpleGrid>
        </Container>
    );
};

export default RohLocation;
