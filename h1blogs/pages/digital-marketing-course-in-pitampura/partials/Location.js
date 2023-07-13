import React from "react";
import ContactForm from "../../../components/contactform";
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
} from "@chakra-ui/react";
import { ImCheckmark, ImLocation2, ImPhone, ImEnvelop } from "react-icons/im";
import { AddressesData, NspLocation } from "../../../components/DATA";

const Location = () => {
    return (
        <Container maxW={"8xl"} py={[5, 0]}>
            <SimpleGrid
                columns={[1, 1, 1, 2]}
                mx={[0, 10]}
                p={[0, 10]}
                spacing={5}
            >
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
                                Pitampura Training Location
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={"bold"} fontSize={"2xl"}>
                                Netaji Subhash Place
                            </Text>
                            <List>
                                <ListItem display={"flex"}>
                                    <ImLocation2 />
                                    <Text pl={3}>
                                        FF 18, First Floor, Pearls Omaxe Tower
                                        Netaji Subhash Place, Delhi-110034
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
                    {NspLocation.map((i, k) => (
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

export default Location;
