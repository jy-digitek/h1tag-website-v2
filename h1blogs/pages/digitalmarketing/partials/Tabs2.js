import React from "react";
import {
  Container,
  Box,
  Text,
  SimpleGrid,
  Center,
  Flex,
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

export default function Tabs2() {
  return (
    <Container maxW={"6xl"}>
      <SectionTitle children={"Courses We Offer"} mb={10} />
      <Box
        as="p"
        my={[3, 5]}
        maxW={"5xl"}
        mx={"auto"}
        textAlign={"center"}
        px={20}
      >
        During your Digital Marketing Course, you will learn different
        techniques of Digital Marketing and how to apply them in real life. We
        will make you a skilled professional, and you will acquire the skills
        you need to succeed in life. You can choose from a variety of courses
        that H1 Tags is offering.
      </Box>

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
              mb={5}
              children={"Master Course"}
              desc="Module Info & Overview"
            />
            <Text as="p" mb={5}>
              This program is designed to make you an expert in Digital
              Marketing; with this course, we provide deep learning of Digital
              Marketing.
            </Text>
            <SimpleGrid columns={2}>
              {MasterCourseData.map((item, i) => {
                return (
                  <Flex
                    key={i}
                    alignItems={"center"}
                    boxShadow={"sm"}
                    py={2}
                    px={[5]}
                    cursor={"pointer"}
                    sx={{
                      transition: ".5s",
                      ":hover": { backgroundColor: "tomato", color: "#fff" },
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
              <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
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
              Get practical experiences using Digital Marketing tools to manage
              and optimize a Digital Marketing campaign with our Foundation
              Course, which combines theory and practice.
            </Text>
            <SimpleGrid columns={2}>
              {FoundationCourse.map((item, i) => {
                return (
                  <Flex
                    key={i}
                    alignItems={"center"}
                    boxShadow={"sm"}
                    py={2}
                    px={[5]}
                    cursor={"pointer"}
                    sx={{
                      transition: ".5s",
                      ":hover": { backgroundColor: "tomato", color: "#fff" },
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
            <Center>
              <GlobalButton
                sx={{ mt: 8, mb: 4 }}
                label={"Download Brochure"}
                maxW="100%"
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
              desc="Module Info & Overview"
              mb={5}
            />
            <Text as="p" mb={5}>
              Our job-oriented course is mainly created with the intention that
              a reputable organization can hire you following the training;
              finding your ideal job is our top priority.
            </Text>
            <SimpleGrid columns={2}>
              {JobOrientedData.map((item, i) => {
                return (
                  <Flex
                    key={i}
                    alignItems={"center"}
                    boxShadow={"sm"}
                    py={2}
                    px={[5]}
                    cursor={"pointer"}
                    sx={{
                      transition: ".5s",
                      ":hover": { backgroundColor: "tomato", color: "#fff" },
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
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
                sx={{ mt: 8, mb: 4 }}
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
              Our customized course assist in altering our training program
              according to your needs and preferences; you can alter the
              programs according to your choice.
            </Text>
            <SimpleGrid columns={2}>
              {CustomizedCourseData.map((item, i) => {
                return (
                  <Flex
                    key={i}
                    alignItems={"center"}
                    boxShadow={"sm"}
                    py={2}
                    px={[5]}
                    cursor={"pointer"}
                    sx={{
                      transition: ".5s",
                      ":hover": { backgroundColor: "tomato", color: "#fff" },
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
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
                sx={{ mt: 8, mb: 4 }}
              />
            </Center>
          </Box>
        </TabPanel>
      </Tabs>
    </Container>
  );
}
