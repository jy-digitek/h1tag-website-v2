import React, { useState } from "react";
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
// import ContactForm from "../../../components/contactform";
import ContactForm from "../../../components/contactform";
import ReturnFocus from "../../../components/Modal";
const SechduleTime = () => {
    const [openModal, openModalSet] = React.useState(false);
    return (
        <Container maxW={"full"} py={[5, 10]}>
            <Box sx={{ textAlign: "center" }}>
                <Text fontWeight={"bold"} fontSize={"3xl"}>
                    H1 Tags - DIGITAL MARKETING TRAINING SCHEDULE IN PITAMPURA
                </Text>
                <Text pt={[5, 10]}>
                    In Pitampura Training Centre Our Session will be conducted
                    through out the day with all time flexibility & multiple
                    batches offline mode
                </Text>
            </Box>

            <Box m={[10]}>
                <Card m={[10, 10]}>
                    <CardBody mx={10}>
                        <Text>
                            <strong>Training Centre Timing : </strong> 10:00 AM
                            TO 7:00 PM
                        </Text>
                        <Text style={{ letterSpacing: "1px" }}>
                            <strong>Batch Type : </strong> Weekdays | Weekends |
                            Sunday only
                        </Text>
                        <Text style={{ letterSpacing: "1px" }}>
                            <strong>Training Mode : </strong> offline
                        </Text>
                        <Text style={{ letterSpacing: "1px" }}>
                            <strong>Education Qualification : </strong> Any
                            Level
                        </Text>
                        <Text pt={10}>
                            <strong>
                                Technical & Professional Qualification -
                            </strong>{" "}
                            Technical & Professional Qualification-It is not
                            necessary to have advanced expertise to enroll in
                            this training programme. everyone who has experience
                            using a smart phone and is familiar with using the
                            internet and browsers.
                        </Text>
                        <Text pt={10}>
                            <strong>Profile Criteria -</strong>Anyone is welcome
                            to enrol in our classes, including freelancers,
                            students, housewives, working professionals, and job
                            seekers.
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
                            Delhi institute of digital marketing (DIDM) was
                            Awarded “ Most Promising Brand “ by Assocham. We are
                            follow all kind of standard training norms, we are
                            certified by ISO 9001 and also registered under MSME
                            ( Ministry of MSME, Govt. of India ). In didm
                            gurgaon training centre, you will get high quality
                            of digital marketing training session through our
                            industrial professionals and experts.
                        </Text>
                        <Box textAlign={"center"} pt={5}>
                            <ReturnFocus
                                btnText={`Take a Free Session`}
                                children={<ContactForm />}
                                openModalSet={openModalSet}
                                // isEditingSet={isEditingSet}
                                label="Take a Free Session"
                                color="white"
                                rounded={"full"}
                            />
                          
                        </Box>
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default SechduleTime;
