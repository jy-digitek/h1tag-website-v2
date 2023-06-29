import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    Image,
    ListItem,
    SimpleGrid,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Thead,
    Tr,
    Th,
    Tfoot,
    UnorderedList,
    ButtonGroup,
    List,
    ListIcon,
    Input,
    CardHeader,
    ChakraProvider,
    TableCaption,
} from "@chakra-ui/react";
import React from "react";
// import Carousel from "../../../components/Carousel";
// import ReturnFocus from "../../components/Modal";
// import ContactForm from "../../components/contactform";
// import Carousel from "../components/Carousel";
import { CustomCard } from "../components/CustomCard";
import { CourseBuiltForData } from "../components/DATA";
import Carousel from "../components/Carousel";
import { SectionTitle } from "../components/SectionTitle";
import ContactForm from "../components/contactform";
import Layout from "../components/layout";
import { MdCheckCircle } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { ImCheckmark, ImLocation2, ImPhone, ImEnvelop } from "react-icons/im";

const AreaCourse = () => {
    const [openModal, openModalSet] = React.useState(false);
    return (
        <Layout>
            <Container maxW={"full"} p={0}>
                <Box position="relative" p={0}>
                    <Image src={"/image1.jpg"} w={"100%"} />
                </Box>
                <SectionTitle pt={[8, 12]}>
                    <h1> Digital Marketing Training Institute - Pitampura</h1>
                </SectionTitle>

                <Box sx={{ padding: 5 }} px={[0, 20]}>
                    <Text px={[0, 20]}>
                        <strong>
                            {" "}
                            Delhi Institute of Digital Marketing (DIDM),
                        </strong>{" "}
                        a top digital marketing training provider across India
                        running multiple training center in{" "}
                        <strong>Delhi/NCR</strong> and cover almost every part
                        of the South Delhi | North Delhi | East Delhi | West
                        Delhi | Noida | Gurgaon and other important location
                        both Online & Offline mode with different training
                        program in <strong>Digital Marketing Course.</strong>
                    </Text>
                </Box>
                <Box maxW={"full"} p={0}>
                    <Card
                        style={{
                            backgroundColor: "#5477a6",
                            textAlign: "center",
                        }}
                    >
                        <CardBody>
                            <Text fontSize="6xl" color={"white"}>
                                India's Most Promising Brand
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
            </Container>
            <Container maxW={"7xl"} p={0}>
                <SimpleGrid
                    columns={[1, 1, 1, 2]}
                    px={[0, 10]}
                    mb={[10]}
                    fontSize={"20px"}
                    mx={10}
                    pt={50}
                >
                    <Card px={10}>
                        <CardBody>
                            <Text fontSize="3xl">
                                <strong>Key Highlights</strong>
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    A practical based course designed by
                                    experts.
                                </ListItem>
                                <ListItem>
                                    In-depth practical digital marketing
                                    training sessions will make you job-ready
                                    with a good salary package.
                                </ListItem>
                                <ListItem>
                                    Taking up our digital marketing course with
                                    50+ Modules can help working professionals
                                    have an edge over their colleagues.
                                </ListItem>
                                <ListItem>
                                    Hands on practical experience on Live
                                    Projects.
                                </ListItem>

                                <ListItem>
                                    Support by online Learning Management System
                                    (LMS).
                                </ListItem>
                                <ListItem>Tools and Software support.</ListItem>
                                <ListItem>
                                    Internship and Placement support.
                                </ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>{" "}
                    <Card mx={10}>
                        <CardBody>
                            {" "}
                            <TableContainer style={{ textAlign: "center" }}>
                                <Table variant="simple">
                                    <Thead> </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>inches</Td>
                                            <Td>millimetres (mm)</Td>
                                            <Td isNumeric>25.4</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>feet</Td>
                                            <Td>centimetres (cm)</Td>
                                            <Td isNumeric>30.48</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>yards</Td>
                                            <Td>metres (m)</Td>
                                            <Td isNumeric>0.91444</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
                    {/* </Show> */}
                </SimpleGrid>

                <Box maxW={"full"} px={[5, 10]} id={"review"} pb={10}>
                    {" "}
                    <SectionTitle as="h2" py={10}>
                        Students’ Feedback
                    </SectionTitle>
                    <SimpleGrid
                        columns={[1, 1, 2]}
                        textAlign={"center"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Carousel />
                        </Box>

                        <Card>
                            <CardBody> {<ContactForm />}</CardBody>
                        </Card>
                    </SimpleGrid>
                    <Box>
                        <SectionTitle pt={[8, 12]}>
                            Digital Marketing Course In Pitampura
                        </SectionTitle>
                        <Text noOfLines={[1, 2, 3]}>
                            Learn digital skills to implement them on your
                            website and social media to generate traffic and get
                            maximum ROI. We are providing 50+ modules in our
                            Masters in Digital Marketing Course- an all in one
                            digital marketing program for Students, Working
                            Professionals & Entrepreneurs.
                        </Text>
                        <SimpleGrid minChildWidth="120px" spacing="20px">
                            <Box>
                                <Card maxW="sm">
                                    <CardBody>
                                        <Stack mt="6">
                                            <IoIosApps />
                                            <Text>
                                                <strong>
                                                    {" "}
                                                    Digital Marketing Course
                                                </strong>
                                            </Text>
                                            <Text> 50+ Modules</Text>{" "}
                                            <Text> 118 hrs Training</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>{" "}
                            <Box>
                                <Card maxW="sm">
                                    <CardBody>
                                        <Stack mt="6">
                                            <IoIosApps />
                                            <Text>
                                                <strong>
                                                    {" "}
                                                    Digital Marketing Course
                                                </strong>
                                            </Text>
                                            <Text> 50+ Modules</Text>{" "}
                                            <Text> 118 hrs Training</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>{" "}
                            <Box>
                                <Card maxW="sm">
                                    <CardBody>
                                        <Stack mt="6">
                                            <IoIosApps />
                                            <Text>
                                                <strong>
                                                    {" "}
                                                    Digital Marketing Course
                                                </strong>
                                            </Text>
                                            <Text> 50+ Modules</Text>{" "}
                                            <Text> 118 hrs Training</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>{" "}
                            <Box>
                                <Card maxW="sm">
                                    <CardBody>
                                        <Stack mt="6">
                                            <IoIosApps h={20} />
                                            <Text>
                                                <strong>
                                                    {" "}
                                                    Digital Marketing Course
                                                </strong>
                                            </Text>
                                            <Text> 50+ Modules</Text>{" "}
                                            <Text> 118 hrs Training</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>{" "}
                        </SimpleGrid>
                        <Box style={{ textAlign: "center" }} pt={10}>
                            <SectionTitle>
                                MASTER IN DIGITAL MARKETING COURSE IN PITAMPURA
                            </SectionTitle>
                            <Text fontSize="3xl">
                                <strong>Hybrid </strong> Training Program
                                conducted by <strong>DIDM</strong>
                            </Text>
                            <Text>
                                The main reasons to join digital marketing
                                training program in pitampura. In DIDM Pitampura
                                training centre, you will get both In-Class and
                                Online digital marketing training session. DIDM
                                Pitampura cover almost 50+ digital marketing
                                module specially design to fulfill the market
                                needs..
                            </Text>

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
                                                Master in Digital Marketing
                                                (MIDM)
                                            </Heading>
                                            <Text>
                                                Unique type of digital marketing
                                                training program design to suit
                                                all market needs. This training
                                                program Include three types of
                                                training program in single
                                                training program course fees.
                                            </Text>
                                            <List>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    <Text>
                                                        <strong>
                                                            In-Class -{" "}
                                                        </strong>{" "}
                                                        Training Program (140hrs
                                                        training session)
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    <strong>LMS - </strong>{" "}
                                                    Training Session (Multiple
                                                    experts training session).
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    <strong>On-board</strong>{" "}
                                                    Training Session (360hrs
                                                    Program).
                                                </ListItem>
                                            </List>
                                            <Text>
                                                Master In digital marketing
                                                course
                                                <strong>(MIDM)</strong> design
                                                for all profile so that everyone
                                                can learn digital marketing core
                                                concept in depth and in return
                                                to fulfil all dreams to become
                                                excellent digital marketers.
                                            </Text>
                                            <List>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    Working & Marketing
                                                    Professionals - Upgrading
                                                    Skill development
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    Business Owners &
                                                    Entrepreneurs - Manage
                                                    Business and Increase ROI.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    Students & Job Seekers -
                                                    Multiple Job Opportunities
                                                    across world.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    Housewife & Freelancers -
                                                    Gateway to make money
                                                    Online.
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
                                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt="red double couch with wooden legs"
                                            mx={0}
                                            px={0}
                                        />
                                        <CardBody>
                                            <Heading size="md">
                                                Advanced in Digital Marketing
                                            </Heading>
                                            <Text>
                                                DIDM Pitampura provide one more
                                                additttional training program -
                                                Advanced Internet Marketing
                                                Training Program (AIMTP). In
                                                this training program you can
                                                learn core concepts of digital
                                                marketing related to all
                                                important module in the market.
                                                Advanced Internet Marketing
                                                Training Program (AIMTP) is in
                                                both Online and In-Class
                                                Session.
                                            </Text>

                                            <List spacing={3}>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    50+ Modules.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Complete Practical Session.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Practice on Live Projects.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Case Studies.
                                                </ListItem>

                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    E-notes.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    Tools & Software Support.
                                                </ListItem>

                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Assignments.
                                                </ListItem>

                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Capstone Projects.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    20+ Globally Recognised
                                                    Certifications.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Placement Assistance.
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    Job Preparation.
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
                                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt="red double couch with wooden legs"
                                            mx={0}
                                            px={0}
                                        />
                                        <CardBody>
                                            <Heading size="md">
                                                Customized in Digital Marketing
                                            </Heading>
                                            <Text>
                                                DIDM Pitampura also provide
                                                customised digital marketing
                                                session as per the need of
                                                customer or market demand. In
                                                Customised Program, you can
                                                choose your training program
                                                from of all important modules as
                                                per your need.
                                            </Text>

                                            <List spacing={3}>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        Customized Training
                                                        Modules.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Practical Oriented
                                                        Session.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Practical Oriented
                                                        Session.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Practice on Live
                                                        Projects.
                                                    </Text>
                                                </ListItem>
                                                {/* You can also use custom icons from react-icons */}
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Practice on Live
                                                        Projects.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        E-notes.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Assignments.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        DIDM + Globally
                                                        Recognise
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        DIDM + Globally
                                                        Recognised
                                                        Certifications.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        Placement Assistance.
                                                    </Text>
                                                </ListItem>
                                                <ListItem
                                                    display={"flex"}
                                                    py={2}
                                                >
                                                    <Image
                                                        src={"/check point.jpg"}
                                                    />
                                                    <Text pl={3}>
                                                        {" "}
                                                        Job Preparation.
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
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <SectionTitle pt={[8, 12]}>
                        <h1>
                            DIGITAL MARKETING TRAINING SCHEDULE IN PITAMPURA
                        </h1>
                    </SectionTitle>
                    <Text style={{ textAlign: "center" }}>
                        In Pitampura Training Centre Our Session will be
                        conducted through out the day with all time flexibility
                        & multiple batches options both online & offline mode.
                    </Text>

                    <Card m={20}>
                        <CardBody>
                            <Text>
                                <strong>Training Centre Timing : </strong> 9:00
                                AM TO 9:OO PM
                            </Text>
                            <Text>
                                <strong>Batch Type : </strong> Weekdays |
                                Weekends | Sunday only
                            </Text>
                            <Text>
                                <strong>Training Mode : </strong> In-Class |
                                Online Mode
                            </Text>
                            <Text>
                                <strong>Education Qualification : </strong> Any
                                Level
                            </Text>
                            <Text pt={10}>
                                <strong>
                                    Technical & Professional Qualification -
                                </strong>{" "}
                                Basic elementary knowledge is enough to join
                                this training program. Any one who can easily
                                handle smart phone or know about how to use
                                internet or browser surfing.
                            </Text>
                            <Text pt={10}>
                                <strong>Profile Criteria -</strong>Any One can
                                join our courses - Working Professionals | Job
                                Seekers | House Wife | Students | Freelancers
                                and others
                            </Text>
                            <Text fontSize="lg">
                                <strong>Program or Course Level </strong>
                            </Text>
                            <List pt={3}>
                                <ListItem display={"flex"} py={2}>
                                    <Image src={"/check point.jpg"} />
                                    <Text pl={3}>
                                        Master In Digital marketing course
                                    </Text>
                                    <strong>( MIDM )</strong>
                                </ListItem>
                                <ListItem display={"flex"} py={2}>
                                    <Image src={"/check point.jpg"} />
                                    <Text pl={3}>
                                        Advanced Internet Marketing Training
                                        Program
                                    </Text>

                                    <strong>( AIMTP )</strong>
                                </ListItem>
                                <ListItem display={"flex"} py={2}>
                                    <Image src={"/check point.jpg"} />
                                    <Text pl={3}> Customised Course</Text>

                                    <strong>( Customized )</strong>
                                </ListItem>
                            </List>
                            <Text>
                                Delhi institute of digital marketing (DIDM) was
                                Awarded “ Most Promising Brand “ by Assocham. We
                                are follow all kind of standard training norms,
                                we are certified by ISO 9001 and also registered
                                under MSME ( Ministry of MSME, Govt. of India ).
                                In didm gurgaon training centre, you will get
                                high quality of digital marketing training
                                session through our industrial professionals and
                                experts.
                            </Text>
                            <Box textAlign={"center"} pt={10} spacing={20}>
                                <Button colorScheme="red">
                                    Take a Free Session
                                </Button>
                                <Button colorScheme="red">
                                    Take a Free Session
                                </Button>
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box style={{ textAlign: "center" }} m={20}>
                    <Text fontSize="3xl">
                        <strong>
                            {" "}
                            Delhi Institute of Digital Marketing (DIDM) in
                            Pitampura - Covers 50+ modules that you will learn
                            in Master in digital marketing training program in
                            pitampura.
                        </strong>
                    </Text>

                    <SimpleGrid columns={[2, null, 3]} spacing="40px" pt={10}>
                        <Card>
                            <CardBody>
                                <List>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Digital Marketing Strategy
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Web Designing with no codes
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Practical Approach</Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Email Marketing</Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Inbound Marketing</Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Search Engine Optimization (SEO)
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Google Webmaster Tool
                                        </Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Search Engine Algorithms
                                        </Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Local Business Listning
                                        </Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Google Analytics</Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Content Marketing</Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <List>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Competitors Analysis</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Social Meda Marketing
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Video Marketing Fundamentals
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Media Buying & Planning
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>E-commerce Marketing</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Mobile Marketing</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Optimization Converstion Rate
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Google Adwords</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Online Display Advertising
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Online Reputation Management (ORM)
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Creating Marketing Strategy
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Lead Generation for Business
                                        </Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <List>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Live Practical Session
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Case Study Discussion
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            Digital Marketing Interview
                                            Preperation
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Blogging</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Adsense</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Affiliate Marketing</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Freelancer Pushups</Text>
                                    </ListItem>{" "}
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Black Hat Techniques</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>
                                            {" "}
                                            Search Engine & Social Marketing
                                        </Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Remarketing Concept</Text>
                                    </ListItem>
                                    <ListItem display={"flex"} py={2}>
                                        <Image src={"/check point.jpg"} />
                                        <Text pl={3}>Other Modules</Text>
                                    </ListItem>
                                </List>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                <Box m={20}>
                    <SectionTitle>
                        Digital Marketing Training Course Module in Pitampura
                    </SectionTitle>
                    <Text>
                        Delhi Institute of Digital Marketing (DIDM) in Pitampura
                        - Covers 50+ modules that you will learn in Master in
                        digital marketing training program in pitampura.
                    </Text>
                    <SimpleGrid columns={[2]} mx={10} p={10}>
                        <Card>
                            <CardBody>
                                <Stack spacing={5}>
                                    <Input
                                        placeholder="Digital marketing"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Google  AdWords/ PPC"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Online Reputation Management"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Affiliate Marketing"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Social Media Marketing"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Search Engine Optimization"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                    <Input
                                        placeholder="Adsense"
                                        size="lg"
                                        bg={"#ae1212"}
                                    />
                                </Stack>
                            </CardBody>
                        </Card>
                        <Card mx={10}>
                            <CardBody>
                                <Text fontSize="2xl">
                                    {" "}
                                    <strong>Email Marketing</strong>
                                </Text>
                                <Text>
                                    Email Marketing has now emerged as the most
                                    effective marketing tool to reach a number
                                    of targeted audiences at the lowest cost.
                                    This is the most feasible advertising
                                    technique that makes use of Social Media to
                                    reach internet users in bulk. It is also the
                                    best way to gain customer’s trust and is now
                                    widely used as the method of marketing that
                                    is producing a high response rate. This is
                                    the reason we have introduced an email
                                    marketing course. After successful
                                    completion of this course, the trainees will
                                    be able to understand the techniques
                                    required to effectively interact and draft
                                    emails for the targeted audience.
                                </Text>
                                <Text pt={5}>
                                    Our email marketing training courses teach
                                    trainees the fundamentals that are behind
                                    email marketing campaigns, email
                                    deliverability, email copywriting, and more.
                                    We provide trainers who are already in this
                                    industry and their experiences and best
                                    practices are well shared in the sessions.
                                    Trainees also get to know the best use of
                                    social media, analytics, and mobile
                                    strategies to create a unified, integrated
                                    email marketing strategy.
                                </Text>
                                <Text>
                                    <strong>Important Course Objectives</strong>
                                    <UnorderedList>
                                        <ListItem>
                                            Learn tactics to draw more traffic
                                            by generating brand awareness and
                                            get high visibility
                                        </ListItem>
                                        <ListItem>
                                            Understand effective tactics of
                                            email marketing
                                        </ListItem>
                                        <ListItem>
                                            Learn to build an email list and
                                            email campaigns
                                        </ListItem>
                                        <ListItem>
                                            Understanding the Marketing Process
                                        </ListItem>
                                        <ListItem>
                                            Learn skills to market a business
                                            with the use of an email marketing
                                            platform
                                        </ListItem>{" "}
                                        <ListItem>
                                            In-depth knowledge of the email
                                            marketing rules and regulations
                                        </ListItem>
                                        <ListItem>
                                            Learn the best ways to send mass
                                            emails to various people who look
                                            for a particular product or service
                                        </ListItem>
                                    </UnorderedList>
                                </Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>
                <Box style={{ textAlign: "center" }} m={20}>
                    <Text fontSize="3xl">
                        <strong>
                            {" "}
                            Delhi Institute of Digital Marketing (DIDM) in
                            Pitampura - Covers 50+ modules that you will learn
                            in Master in digital marketing training program in
                            pitampura.
                        </strong>
                    </Text>

                    <SimpleGrid columns={[2, null, 3]} spacing="40px" pt={10}>
                        <Card>
                            <CardBody>
                                <Image src={"/DIDM(1).png"} />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Image src={"/DIDM(2).png"} />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Image src={"/DIDM(3).png"} />
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                    {/* <SimpleGrid>
                        <Card>
                            <CardBody></CardBody>
                        </Card>
                        <Card>
                            <CardHeader
                                style={{
                                    backgroundColor: "gray",
                                    textAlign: "center",
                                }}
                            >
                                <Text>Program Course Fee</Text>
                            </CardHeader>
                            <CardBody></CardBody>
                        </Card>
                    </SimpleGrid> */}
                    <SimpleGrid columns={[2]} mx={10} p={10}>
                        <Card>
                            <CardBody>
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
                                <Text fontWeight={"bold"} fontSize={"2xl"}>
                                    Netaji Subhash Place
                                </Text>
                                <List>
                                    <ListItem display={"flex"}>
                                        <ImLocation2 />
                                        <Text pl={3}>
                                            FF 18, First Floor, Pearls Omaxe
                                            Tower Netaji Subhash Place,
                                            Delhi-110034
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
                                <Button
                                    style={{
                                        backgroundColor: "#ae1212",
                                        color: "white",
                                    }}
                                >
                                    Get Direction
                                </Button>
                            </CardBody>
                        </Card>
                        <Card mx={10}>
                            <CardBody>
                                <CardHeader
                                    style={{
                                        backgroundColor: "#ae1212",
                                        textAlign: "center",
                                    }}
                                >
                                    <Text color={"white"} fontSize="2xl">
                                        Program Course Fee
                                    </Text>
                                </CardHeader>
                                <Image
                                    src={"/digitalMarketingBanner.jpg"}
                                    alt="Green double couch with wooden legs"
                                    spacing={2}
                                />
                                <Text>
                                    Get in Touch with Our Team to Get more
                                    detail about Admission formalities and Fees!
                                </Text>
                                <Text fontWeight={"bold"} fontSize="2xl">
                                    Rs. 48490/- + 8728/- (18% GST) Total Rs
                                    57218/-
                                </Text>
                                <Text fontSize="2xl">
                                    In 2 Easy Instalments
                                </Text>
                                <Text fontSize="2xl">
                                    51490/- + 9268/- (18% GST) = Rs 60758/-
                                </Text>
                                <Button
                                    style={{
                                        backgroundColor: "#ae1212",
                                        color: "white",
                                    }}
                                >
                                    Enroll Here
                                </Button>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                    <Text fontSize={"4xl"}>
                        Pitampura Training Center Upcoming Batches Details
                    </Text>

                    <Table
                        style={{
                            border: "2px solid black",
                            borderCollapse: "collapse",
                        }}
                        pt={10}
                    >
                        <Thead
                            style={{
                                border: "2px solid black",
                                borderCollapse: "collapse",
                            }}
                        >
                            <Tr>
                                <Th>BATCH</Th>
                                <Th>DURATION</Th>
                                <Th>NEXT BATCH</Th>
                                <Th>DURATION </Th>
                                <Th> FEES</Th>
                                <Th> DOWNLOADS</Th>
                            </Tr>
                        </Thead>
                        {/* border: 1px solid black; */}
                        <Tbody
                            style={{
                                border: "2px solid black",
                                borderCollapse: "collapse",
                            }}
                        >
                            <Tr
                                style={{
                                    border: "2px solid black",
                                    borderCollapse: "collapse",
                                }}
                            >
                                <Td>Regular Batches</Td>
                                <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                                <Td>
                                    08th June 2023 Tuesday to Friday - 10:30am -
                                    12:30pm
                                </Td>
                                <Td>12 Weeks</Td>
                                <Td>
                                    Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                    Easy Instalments- 51490/- + 9268/- (18% GST)
                                    = Rs 60758/-
                                </Td>{" "}
                                <Td>
                                    <Button
                                        style={{
                                            backgroundColor: "#ae1212",
                                            color: "white",
                                        }}
                                    >
                                        DOWNLOADS
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr
                                style={{
                                    border: "2px solid black",
                                    borderCollapse: "collapse",
                                }}
                            >
                                <Td>Regular Batches</Td>
                                <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                                <Td>
                                    23rd May 2023 Tuesday to Friday - 03:00am -
                                    05:00pm
                                </Td>
                                <Td>12 Weeks</Td>
                                <Td>
                                    Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                    Easy Instalments- 51490/- + 9268/- (18% GST)
                                    = Rs 60758/-
                                </Td>{" "}
                                <Td>
                                    <Button
                                        style={{
                                            backgroundColor: "#ae1212",
                                            color: "white",
                                        }}
                                    >
                                        DOWNLOADS
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr
                                style={{
                                    border: "2px solid black",
                                    borderCollapse: "collapse",
                                }}
                            >
                                <Td>Weekend Batches</Td>
                                <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                                <Td>
                                    20th May 2023 Saturday & Sunday - 10:30am -
                                    12:30pm
                                </Td>
                                <Td>20 Weeks</Td>
                                <Td>
                                    Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                    Easy Instalments- 51490/- + 9268/- (18% GST)
                                    = Rs 60758/-
                                </Td>{" "}
                                <Td>
                                    <Button
                                        style={{
                                            backgroundColor: "#ae1212",
                                            color: "white",
                                        }}
                                    >
                                        DOWNLOADS
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    {/* </CardBody> */}
                    {/* </Card> */}
                    <Box pt={10}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Reasons To Join Digital Marketing Institute in
                            Pitampura
                        </Text>
                        <Text>
                            The Digital Marketing program will prepare you to
                            become a complete digital marketer. One of the
                            world’s fastest-growing disciplines, this Digital
                            Marketing certification course will increase your
                            job market value and enable you to handle end-to-end
                            marketing campaigns.
                        </Text>

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
                        <SimpleGrid
                            columns={[2, null, 3]}
                            spacing="40px"
                            pt={10}
                        >
                            <Box>
                                {" "}
                                <Card maxW="sm">
                                    <Image
                                        src="/cardimage2.avif"
                                        alt="Green double couch with wooden legs"
                                    />
                                    <CardBody>
                                        <Stack mt="6" spacing="3">
                                            <Heading size="md">
                                                Living room Sofa
                                            </Heading>
                                            <Text>
                                                This sofa is perfect for modern
                                                tropical spaces, baroque
                                                inspired spaces, earthy toned
                                                spaces and for people who love a
                                                chic design with a sprinkle of
                                                vintage design.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                    <CardFooter>
                                        <Button
                                            style={{
                                                backgroundColor: "#ae1212",
                                                color: "white",
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Box>

                            <Box>
                                {" "}
                                <Card maxW="sm">
                                    <Image
                                        src="/cardimage2.avif"
                                        alt="Green double couch with wooden legs"
                                    />
                                    <CardBody>
                                        <Stack mt="6" spacing="3">
                                            <Heading size="md">
                                                Living room Sofa
                                            </Heading>
                                            <Text>
                                                This sofa is perfect for modern
                                                tropical spaces, baroque
                                                inspired spaces, earthy toned
                                                spaces and for people who love a
                                                chic design with a sprinkle of
                                                vintage design.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                    <CardFooter>
                                        <Button
                                            style={{
                                                backgroundColor: "#ae1212",
                                                color: "white",
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Box>
                            <Box>
                                {" "}
                                <Card maxW="sm">
                                    <Image
                                        src="/cardimage3.avif"
                                        alt="Green double couch with wooden legs"
                                    />
                                    <CardBody>
                                        <Stack mt="6" spacing="3">
                                            <Heading size="md">
                                                Living room Sofa
                                            </Heading>
                                            <Text>
                                                This sofa is perfect for modern
                                                tropical spaces, baroque
                                                inspired spaces, earthy toned
                                                spaces and for people who love a
                                                chic design with a sprinkle of
                                                vintage design.
                                            </Text>
                                        </Stack>
                                    </CardBody>

                                    <CardFooter>
                                        <Button
                                            style={{
                                                backgroundColor: "#ae1212",
                                                color: "white",
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
                <Box my={[0, 10]}>
                    <SectionTitle mb={10}>
                        Digital Marketing Course in Pitampura FAQ’S
                    </SectionTitle>
                    <Accordion allowMultiple mx={[5, 10, 60]}>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                What salary package will I get
                                                after completing the course?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Digital marketing is a well-paying
                                        career, with salaries varying according
                                        to work roles such as SEO, SMO, PPC,
                                        Google Adwords, Email Marketing, etc. A
                                        Digital Marketer's monthly salary
                                        package starts from Rs.15,000 -
                                        Rs.25,000.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                Does your Institute provide
                                                Laptops?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        We provide laptops during lessons so
                                        students can easily understand and
                                        practice. We provide practical training
                                        to them so that it becomes relatively
                                        easy for them when they work on-site.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                After what duration can I expect
                                                to get the internship? And, is
                                                it paid or unpaid?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Yes, we provide paid internships from
                                        the first month of joining the course.
                                        We provide a stipend and practical
                                        training in the internship.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                Do you also provide weekend
                                                batches?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Yes, we offer weekend batches. Weekend
                                        batches are special classes for working
                                        professionals or students who cannot
                                        attend the weekday batches.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                Are there any placement
                                                opportunities after the
                                                completion of the course?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        We provide the Best Digital Marketing
                                        Course in Delhi, which ensures 100%
                                        employment. After the training, you will
                                        be placed in a good company; our primary
                                        goal is to place students in their dream
                                        jobs. We assist you in becoming fully
                                        proficient.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                            >
                                                Can I pay the fee on an EMI
                                                basis?
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Yes, you can pay the fee in easy
                                        installments. You won't have to pay the
                                        total amount this way. Whereas you can
                                        pay some amount and the rest, you can
                                        pay later in installments.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Container>
        </Layout>
    );
};

export default AreaCourse;
