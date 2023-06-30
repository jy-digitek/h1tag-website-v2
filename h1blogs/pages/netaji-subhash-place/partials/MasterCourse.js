import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import {
    Text,
    SimpleGrid,
    Box,
    Card,
    Image,
    CardBody,
    Heading,
    List,
    ListItem,
    CardFooter,
    Button,
    Container,
} from "@chakra-ui/react";

const MasterCourse = () => {
    return (
        // <div>MasterCourse</div>
        <>
            <Container maxW={"7xl"}>
                <Box style={{ textAlign: "center" }}>
                    <Text fontWeight={"bold"} fontSize={"3xl"}>
                        MASTER IN DIGITAL MARKETING COURSE IN PITAMPURA
                    </Text>
                    <Text fontSize="3xl">
                        <strong>Hybrid </strong> Training Program conducted by{" "}
                        <strong>DIDM</strong>
                    </Text>
                    <Text>
                        The main reasons to join digital marketing training
                        program in pitampura. In DIDM Pitampura training centre,
                        you will get both In-Class and Online digital marketing
                        training session. DIDM Pitampura cover almost 50+
                        digital marketing module specially design to fulfill the
                        market needs..
                    </Text>
                </Box>
                <SimpleGrid columns={[2, null, 3]} pt={10}>
                    <Box>
                        {" "}
                        <Card maxW="sm">
                            <Image
                                src="/marketing.jpg"
                                alt="red double couch with wooden legs"
                                // borderRadius="lg"
                                mx={0}
                                px={0}
                            />
                            <CardBody>
                                <Heading size={"md"}>
                                    Master in Digital Marketing (MIDM)
                                </Heading>
                                <Text>
                                    Unique type of digital marketing training
                                    program design to suit all market needs.
                                    This training program Include three types of
                                    training program in single training program
                                    course fees.
                                </Text>
                                <List>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}>
                                            <strong>In-Class - </strong>{" "}
                                            Training Program (140hrs training
                                            session)
                                        </Text>
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
                                            <strong>LMS - </strong> Training
                                            Session (Multiple experts training
                                            session).
                                        </Text>
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
                                            {" "}
                                            <strong>On-board - </strong>{" "}
                                            Training Session (360hrs Program).
                                        </Text>
                                    </ListItem>
                                </List>
                                <Text>
                                    Master In digital marketing course
                                    <strong>(MIDM)</strong> design for all
                                    profile so that everyone can learn digital
                                    marketing core concept in depth and in
                                    return to fulfil all dreams to become
                                    excellent digital marketers.
                                </Text>
                                <List>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}>
                                            Working & Marketing Professionals -
                                            Upgrading Skill development
                                        </Text>
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
                                            {" "}
                                            Business Owners & Entrepreneurs -
                                            Manage Business and Increase ROI.
                                        </Text>
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
                                            {" "}
                                            Students & Job Seekers - Multiple
                                            Job Opportunities across world.
                                        </Text>
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
                                            {" "}
                                            Housewife & Freelancers - Gateway to
                                            make money Online.
                                        </Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    colorScheme="red"
                                    style={{ textAlign: "center" }}
                                >
                                    Take a Free Session
                                </Button>
                            </CardFooter>
                        </Card>
                    </Box>
                    <Box>
                        <Card maxW="sm">
                            <Image
                                src="/marketing.jpg"
                                alt="red double couch with wooden legs"
                                // borderRadius="lg"
                                mx={0}
                                px={0}
                            />
                            <CardBody>
                                <Heading size="md">
                                    Advanced in Digital Marketing
                                </Heading>
                                <Text>
                                    DIDM Pitampura provide one more additttional
                                    training program - Advanced Internet
                                    Marketing Training Program (AIMTP). In this
                                    training program you can learn core concepts
                                    of digital marketing related to all
                                    important module in the market. Advanced
                                    Internet Marketing Training Program (AIMTP)
                                    is in both Online and In-Class Session.
                                </Text>

                                <List spacing={3}>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> 50+ Modules.</Text>
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
                                            {" "}
                                            Complete Practical Session.
                                        </Text>
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
                                            Practice on Live Projects.
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}>Case Studies.</Text>
                                    </ListItem>

                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> E-notes.</Text>
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
                                            {" "}
                                            Tools & Software Support.
                                        </Text>
                                    </ListItem>

                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> Assignments.</Text>
                                    </ListItem>

                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> Capstone Projects.</Text>
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
                                            20+ Globally Recognised
                                            Certifications.
                                        </Text>
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
                                            {" "}
                                            Placement Assistance.
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> Job Preparation.</Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    colorScheme="red"
                                    style={{ textAlign: "center" }}
                                >
                                    Take a Free Session
                                </Button>
                            </CardFooter>
                        </Card>
                    </Box>
                    <Box>
                        <Card maxW="sm">
                            <Image
                                src="/marketing.jpg"
                                alt="red double couch with wooden legs"
                                // borderRadius="lg"
                                mx={0}
                                px={0}
                            />
                            <CardBody>
                                <Heading size="md">
                                    Customized in Digital Marketing
                                </Heading>
                                <Text>
                                    DIDM Pitampura also provide customised
                                    digital marketing session as per the need of
                                    customer or market demand. In Customised
                                    Program, you can choose your training
                                    program from of all important modules as per
                                    your need.
                                </Text>

                                <List spacing={3}>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}>
                                            Customized Training Modules.
                                        </Text>
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
                                            {" "}
                                            Practical Oriented Session.
                                        </Text>
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
                                            {" "}
                                            Practical Oriented Session.
                                        </Text>
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
                                            {" "}
                                            Practice on Live Projects.
                                        </Text>
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
                                            {" "}
                                            Practice on Live Projects.
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> E-notes.</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> Assignments.</Text>
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
                                            {" "}
                                            DIDM + Globally Recognise
                                        </Text>
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
                                            {" "}
                                            DIDM + Globally Recognised
                                            Certifications.
                                        </Text>
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
                                            Placement Assistance.
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image
                                            src={"/check point.jpg"}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                        <Text pl={3}> Job Preparation.</Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    colorScheme="red"
                                    style={{ textAlign: "center" }}
                                >
                                    Take a Free Session
                                </Button>
                            </CardFooter>
                        </Card>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    );
};

export default MasterCourse;
