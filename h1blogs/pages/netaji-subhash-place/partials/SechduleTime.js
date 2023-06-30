import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import {
    Card,
    Text,
    Box,
    ListItem,
    Container,
    CardBody,
    List,
    Button,
    Image,
} from "@chakra-ui/react";

const SechduleTime = () => {
    return (
        <Container maxW={"7xl"} py={[5, 10]}>
            <Box sx={{ textAlign: "center" }}>
                <Text fontWeight={"bold"} fontSize={"3xl"}>
                    DIGITAL MARKETING TRAINING SCHEDULE IN PITAMPURA
                </Text>
                <Text>
                    In Pitampura Training Centre Our Session will be conducted
                    through out the day with all time flexibility & multiple
                    batches options both online & offline mode.
                </Text>
            </Box>

            <Card m={20}>
                <CardBody ml={10}>
                    <Text>
                        <strong>Training Centre Timing : </strong> 9:00 AM TO
                        9:OO PM
                    </Text>
                    <Text style={{ letterSpacing: "1px" }}>
                        <strong>Batch Type : </strong> Weekdays | Weekends |
                        Sunday only
                    </Text>
                    <Text style={{ letterSpacing: "1px" }}>
                        <strong>Training Mode : </strong> In-Class | Online Mode
                    </Text>
                    <Text style={{ letterSpacing: "1px" }}>
                        <strong>Education Qualification : </strong> Any Level
                    </Text>
                    <Text pt={10}>
                        <strong>
                            Technical & Professional Qualification -
                        </strong>{" "}
                        Basic elementary knowledge is enough to join this
                        training program. Any one who can easily handle smart
                        phone or know about how to use internet or browser
                        surfing.
                    </Text>
                    <Text pt={10}>
                        <strong>Profile Criteria -</strong>Any One can join our
                        courses - Working Professionals | Job Seekers | House
                        Wife | Students | Freelancers and others
                    </Text>
                    <Text fontSize="lg">
                        <strong>Program or Course Level </strong>
                    </Text>
                    <List pt={3}>
                        <ListItem display={"flex"} py={2}>
                            <Image
                                src={"/check point.jpg"}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                            <Text pl={3}>
                                Master In Digital marketing course
                            </Text>
                            <strong>( MIDM )</strong>
                        </ListItem>
                        <ListItem display={"flex"} py={2}>
                            <Image
                                src={"/check point.jpg"}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                            <Text pl={3}>
                                Advanced Internet Marketing Training Program
                            </Text>

                            <strong>( AIMTP )</strong>
                        </ListItem>
                        <ListItem display={"flex"} py={2}>
                            <Image
                                src={"/check point.jpg"}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                            <Text pl={3}> Customised Course</Text>

                            <strong>( Customized )</strong>
                        </ListItem>
                    </List>
                    <Text>
                        Delhi institute of digital marketing (DIDM) was Awarded
                        “ Most Promising Brand “ by Assocham. We are follow all
                        kind of standard training norms, we are certified by ISO
                        9001 and also registered under MSME ( Ministry of MSME,
                        Govt. of India ). In didm gurgaon training centre, you
                        will get high quality of digital marketing training
                        session through our industrial professionals and
                        experts.
                    </Text>
                    <Box textAlign={"center"} pt={5}>
                        <Button colorScheme="red" mx={5}>
                            Take a Free Session
                        </Button>
                        <Button colorScheme="red">Take a Free Session</Button>
                    </Box>
                </CardBody>
            </Card>
        </Container>
    );
};

export default SechduleTime;
