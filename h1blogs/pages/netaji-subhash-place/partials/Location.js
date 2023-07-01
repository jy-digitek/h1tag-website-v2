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
    Button,
    Image,
} from "@chakra-ui/react";
import { ImCheckmark, ImLocation2, ImPhone, ImEnvelop } from "react-icons/im";
import { AddressesData, NspLocation } from "../../../components/DATA";

const Location = () => {
    return (
        <Container maxW={"7xl"} py={[5, 0]}>
            <SimpleGrid columns={[2]} mx={10} p={10}>
                <Card
                    style={{
                        width: "500px",
                        height: "350px",
                    }}
                >
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
                        <Box display={"flex"} justifyContent={"center"} pt={5}>
                            {/* <Button
                                style={{
                                    backgroundColor: "#3950a1",
                                    color: "white",
                                    // display: "flex",
                                    // justifyContent: "end",
                                }}
                            >
                                Get Direction
                            </Button> */}
                        </Box>
                    </CardBody>
                </Card>

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
                                    width={"500px"}
                                    height="250"
                                    // style="border:0;"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></Box>
                            </>
                        </CardBody>
                    </Card>
                ))}
                {/* <CardBody> */}
                {/* <Text>
                            Get in Touch with Our Team to Get more detail about
                            Admission formalities and Fees!
                        </Text>
                        <Text fontWeight={"bold"} fontSize="2xl">
                            Rs. 48490/- + 8728/- (18% GST) Total Rs 57218/-
                        </Text>
                        <Text fontSize="2xl">In 2 Easy Instalments</Text>
                        <Text fontSize="2xl">
                            51490/- + 9268/- (18% GST) = Rs 60758/-
                        </Text>
                        <Box display={"flex"} justifyContent={"center"} pt={2}>
                            {" "}
                            <Button
                                style={{
                                    backgroundColor: "#3950a1",
                                    color: "white",
                                }}
                            >
                                Enroll Here
                            </Button>
                        </Box> */}
                {/* </CardBody> */}
                {/* </Card> */}
            </SimpleGrid>
        </Container>
    );
};

export default Location;