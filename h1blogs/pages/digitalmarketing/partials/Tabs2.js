import React from "react";
import {
    Container,
    Box,
    Text,
    SimpleGrid,
    Center,
    Flex,
    Show,
} from "@chakra-ui/react";
// import { render } from "react-dom";
import { SectionTitle } from "../../../components/SectionTitle";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import Styles from "../../../styles/Tabs.module.css";
import { FcManager, FcRules, FcAssistant, FcSettings } from "react-icons/fc";
import {
    FoundationCourse,
    MasterCourseData,
    JobOrientedData,
    CustomizedCourseData,
} from "../../../components/DATA";

import { GlobalButton } from "../../../components/GlobalButton";
import { FcAndroidOs, FcNext } from "react-icons/fc";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";
export default function Tabs2() {
    const [openModal, openModalSet] = React.useState(false);
    return (
        <Container maxW={"6xl"} bg="gray.100">
            <SectionTitle
                children={
                    "Course Highlight of Best Digital Marketing Course in Delhi "
                }
                pt={10}
            />
            <Box
                as="p"
                my={[3]}
                maxW={"5xl"}
                mx={"auto"}
                textAlign={"center"}
                px={[20]}
            >
                <Text py={[3]}>
                    We Took Pride in Being Delhi's #1 Offer at{" "}
                    <strong>Best Digital Marketing Course in Delhi.</strong> In
                    2020, We Established H1 Tags to introduce New Standards for
                    Education Around the Globe. We Have Trained Over 1,000
                    Professionals, Scholars, and Organisations Globally to Date
                    So That They Can Stay Abreast of Changes in the Field of
                    Modern Digital Marketing.
                </Text>
            </Box>

            <Show above="md">
                <Tabs
                    defaultTab="one"
                    onChange={(tabId) => {
                        console.log(tabId);
                    }}
                    className={Styles.tabsContainer}
                    vertical
                    background={"blue"}
                >
                    <TabList>
                        <Tab className={Styles.Tab_default} tabFor="one">
                            MASTER COURSE
                        </Tab>
                        <Tab tabFor="two">FOUNDATION COURSE</Tab>
                        <Tab tabFor="three"> JOB ORIENTED PROGRAM</Tab>
                        <Tab tabFor="fourth">CUSTOMIZED COURSE</Tab>
                    </TabList>
                    <TabPanel tabId="one">
                        <Box>
                            <SectionTitle
                                children={"Master Course"}
                                desc="Module Info and Overview"
                            />
                            <Text as="p" py={10} textAlign={"center"}>
                                This program is designed to make you an expert
                                in Digital Marketing; with this course, we
                                provide deep learning of Digital Marketing.
                            </Text>
                            <SimpleGrid columns={[1, 2, 3]}>
                                {MasterCourseData.map((item, i) => {
                                    return (
                                        <Flex
                                            key={i}
                                            alignItems={"center"}
                                            boxShadow={"md"}
                                            py={2}
                                            px={[5]}
                                            cursor={"pointer"}
                                            sx={{
                                                transition: ".5s",
                                                ":hover": {
                                                    backgroundColor: "tomato",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            <Box
                                                rounded={"full"}
                                                boxSize={10}
                                                backgroundColor={"gray.200"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                marginRight={4}
                                            >
                                                <FcNext />{" "}
                                            </Box>
                                            <Text>{item.level}</Text>
                                        </Flex>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                {/* <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
              /> */}
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="two">
                        <Box boxShadow="sm">
                            <SectionTitle
                                mb={5}
                                children={"Foundation Course"}
                                desc="Module Info and Overview"
                            />
                            <Text as="p" py={10}>
                                Get practical experiences using Digital
                                Marketing tools to manage and optimize a Digital
                                Marketing campaign with our Foundation Course,
                                which combines theory and practice.
                            </Text>
                            <SimpleGrid columns={[1, 2, 3]}>
                                {FoundationCourse.map((item, i) => {
                                    return (
                                        <Flex
                                            key={i}
                                            alignItems={"center"}
                                            boxShadow={"md"}
                                            py={2}
                                            px={[5]}
                                            cursor={"pointer"}
                                            sx={{
                                                transition: ".5s",
                                                ":hover": {
                                                    backgroundColor: "tomato",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            <Box
                                                rounded={"full"}
                                                boxSize={10}
                                                backgroundColor={"gray.200"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                marginRight={4}
                                            >
                                                <FcNext />
                                            </Box>
                                            <Text>{item.level}</Text>
                                        </Flex>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="three">
                        <Box>
                            <SectionTitle
                                children={"Job Oriented Program "}
                                desc="Module Info and Overview"
                                mb={5}
                            />
                            <Text as="p" py={10}>
                                Our job-oriented course is mainly created with
                                the intention that a reputable organization can
                                hire you following the training; finding your
                                ideal job is our top priority.
                            </Text>
                            <SimpleGrid columns={[1, 2, 3]}>
                                {JobOrientedData.map((item, i) => {
                                    return (
                                        <Flex
                                            key={i}
                                            alignItems={"center"}
                                            boxShadow={"md"}
                                            py={2}
                                            px={[5]}
                                            cursor={"pointer"}
                                            sx={{
                                                transition: ".5s",
                                                ":hover": {
                                                    backgroundColor: "tomato",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            <Box
                                                rounded={"full"}
                                                boxSize={10}
                                                backgroundColor={"gray.200"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                marginRight={4}
                                            >
                                                <FcNext />
                                            </Box>
                                            <Text>{item.level}</Text>
                                        </Flex>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="fourth">
                        <Box>
                            <SectionTitle
                                children={"Customized Course"}
                                desc="Module Info and Overview"
                                mb={5}
                            />
                            <Text as="p" py={10}>
                                Our customized course assist in altering our
                                training program according to your needs and
                                preferences; you can alter the programs
                                according to your choice.
                            </Text>
                            <SimpleGrid columns={[1, 2, 3]}>
                                {CustomizedCourseData.map((item, i) => {
                                    return (
                                        <Flex
                                            key={i}
                                            alignItems={"center"}
                                            boxShadow={"md"}
                                            py={2}
                                            px={[5]}
                                            cursor={"pointer"}
                                            sx={{
                                                transition: ".5s",
                                                ":hover": {
                                                    backgroundColor: "tomato",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            <Box
                                                rounded={"full"}
                                                boxSize={10}
                                                backgroundColor={"gray.200"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                marginRight={4}
                                            >
                                                <FcNext />
                                            </Box>
                                            <Text>{item.level}</Text>
                                        </Flex>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                </Tabs>
            </Show>

            <Show below="md">
                <Tabs
                    defaultTab="one"
                    onChange={(tabId) => {
                        console.log(tabId);
                    }}
                    className={Styles.tabsContainer}
                    Horizontal
                    background={"blue"}
                >
                    <TabList
                        style={{ display: "flex" }}
                        className={Styles.mTab}
                    >
                        <Tab
                            className={Styles.Tab_default}
                            tabFor="one"
                            style={{ background: "#b1beeb" }}
                        >
                            Master Course
                        </Tab>
                        <Tab tabFor="two">Foundation Course</Tab>
                        <Tab tabFor="three">Job Oriented Program</Tab>
                        <Tab tabFor="fourth">Customized Course</Tab>
                    </TabList>

                    <TabPanel tabId="one">
                        <Box>
                            <SectionTitle
                                mb={5}
                                children={"Master Course"}
                                desc="Module Info and Overview"
                            />
                            <Text as="p" mb={5}>
                                This program is designed to make you an expert
                                in Digital Marketing; with this course, we
                                provide deep learning of Digital Marketing.
                            </Text>
                            <SimpleGrid columns={[1, 2, 3, 3]}>
                                {MasterCourseData.map((item, i) => {
                                    return (
                                        <Box key={i}>
                                            <Flex
                                                key={i}
                                                alignItems={"center"}
                                                boxShadow={"sm"}
                                                py={2}
                                                px={[5]}
                                                cursor={"pointer"}
                                                sx={{
                                                    transition: ".5s",
                                                    ":hover": {
                                                        backgroundColor:
                                                            "tomato",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    rounded={"full"}
                                                    backgroundColor={"gray.200"}
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    justifyContent={"center"}
                                                    marginRight={4}
                                                >
                                                    <FcNext />
                                                </Box>
                                                <Text>{item.level}</Text>
                                            </Flex>
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                {/* <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
              /> */}
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mt={2}
                                    px={10}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="two">
                        <Box boxShadow="sm">
                            <SectionTitle
                                mb={5}
                                children={"Foundation Course"}
                                desc="Module Info and Overview"
                            />
                            <Text as="p" mb={5}>
                                Get practical experiences using Digital
                                Marketing tools to manage and optimize a Digital
                                Marketing campaign with our Foundation Course,
                                which combines theory and practice.
                            </Text>
                            <SimpleGrid columns={[1, 2]}>
                                {FoundationCourse.map((item, i) => {
                                    return (
                                        <Box key={i}>
                                            <Flex
                                                key={i}
                                                alignItems={"center"}
                                                boxShadow={"sm"}
                                                py={2}
                                                px={[5]}
                                                cursor={"pointer"}
                                                sx={{
                                                    transition: ".5s",
                                                    ":hover": {
                                                        backgroundColor:
                                                            "tomato",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    rounded={"full"}
                                                    backgroundColor={"gray.200"}
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    justifyContent={"center"}
                                                    marginRight={4}
                                                >
                                                    <FcNext />
                                                </Box>
                                                <Text>{item.level}</Text>
                                            </Flex>
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                            <Center sx={{ mt: 8, mb: 4 }}>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    // openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    mb={5}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="three">
                        <Box>
                            <SectionTitle
                                children={"Job Oriented Program "}
                                desc="Module Info and Overview"
                                mb={5}
                            />
                            <Text as="p" mb={5}>
                                Our job-oriented course is mainly created with
                                the intention that a reputable organization can
                                hire you following the training; finding your
                                ideal job is our top priority.
                            </Text>
                            <SimpleGrid columns={[1, 2]}>
                                {JobOrientedData.map((item, i) => {
                                    return (
                                        <Box key={i}>
                                            <Flex
                                                key={i}
                                                alignItems={"center"}
                                                boxShadow={"sm"}
                                                py={2}
                                                px={[5]}
                                                cursor={"pointer"}
                                                sx={{
                                                    transition: ".5s",
                                                    ":hover": {
                                                        backgroundColor:
                                                            "tomato",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    rounded={"full"}
                                                    boxSize={10}
                                                    backgroundColor={"gray.200"}
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    justifyContent={"center"}
                                                    marginRight={4}
                                                >
                                                    <FcNext />
                                                </Box>
                                                <Text>{item.level}</Text>
                                            </Flex>
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                            <Center>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel tabId="fourth">
                        <Box>
                            <SectionTitle
                                children={"Customized Course"}
                                desc="Module Info & Overview"
                                mb={5}
                            />
                            <Text as="p" mb={5}>
                                Our customized course assist in altering our
                                training program according to your needs and
                                preferences; you can alter the programs
                                according to your choice.
                            </Text>
                            <SimpleGrid columns={[1, 2]}>
                                {CustomizedCourseData.map((item, i) => {
                                    return (
                                        <Box key={i}>
                                            <Flex
                                                key={i}
                                                alignItems={"center"}
                                                boxShadow={"sm"}
                                                py={2}
                                                px={[5]}
                                                cursor={"pointer"}
                                                sx={{
                                                    transition: ".5s",
                                                    ":hover": {
                                                        backgroundColor:
                                                            "tomato",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    rounded={"full"}
                                                    boxSize={10}
                                                    backgroundColor={"gray.200"}
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    justifyContent={"center"}
                                                    marginRight={4}
                                                >
                                                    <FcNext />
                                                </Box>
                                                <Text>{item.level}</Text>
                                            </Flex>
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                            <Center>
                                <ReturnFocus
                                    btnText={`Apply Now`}
                                    children={<ContactForm />}
                                    openModalSet={openModalSet}
                                    // isEditingSet={isEditingSet}
                                    label="Download Brochure"
                                    color="white"
                                    rounded={"full"}
                                    mt={2}
                                    px={10}
                                    background="#3950a1"
                                    _hover={{ background: "#101C32" }}
                                    mb={5}
                                />
                            </Center>
                        </Box>
                    </TabPanel>
                </Tabs>
            </Show>
        </Container>
    );
}
