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
                            backgroundColor: "#ae1212",
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
                            <Button
                                style={{
                                    backgroundColor: "#ae1212",
                                    color: "white",
                                    // display: "flex",
                                    // justifyContent: "end",
                                }}
                            >
                                Get Direction
                            </Button>
                        </Box>
                    </CardBody>
                </Card>
                <Card mx={10}>
                    <CardHeader
                        style={{
                            backgroundColor: "#ae1212",
                            textAlign: "center",
                        }}
                    >
                        <Text color={"white"} fontSize="2xl">
                            Program Course Fee
                        </Text>
                    </CardHeader>{" "}
                    <Image
                        src={"/digitalMarketingBanner.jpg"}
                        alt="Green double couch with wooden legs"
                        spacing={2}
                    />
                    <CardBody>
                        <Text>
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
                                    backgroundColor: "#ae1212",
                                    color: "white",
                                }}
                            >
                                Enroll Here
                            </Button>
                        </Box>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Container>
    );
};

export default Location;
