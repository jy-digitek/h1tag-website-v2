import React from "react";
import { Container, Box, Text, SimpleGrid, Center } from "@chakra-ui/react";
import { render } from "react-dom";
import { SectionTitle } from "../../../components/SectionTitle";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import {
  FoundationCourse,
  MasterCourseData,
  JobOrientedData,
  CustomizedCourseData,
} from "../../../components/DATA";

import { GlobalButton } from "../../../components/GlobalButton";

export default function Tabs2() {
  return (
    <Container maxW={"full"}>
      <SectionTitle children={"Courses We Offer"} mb={10} />
      <Box as="p" my={[3, 5]} maxW={"5xl"} mx={"auto"}>
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
        vertical
      >
        <TabList>
          <Tab tabFor="one">MASTER COURSE</Tab>
          <Tab tabFor="two">FOUNDATION COURSE</Tab>
          <Tab tabFor="three"> JOB ORIENTED PROGRAM</Tab>
          <Tab tabFor="fourth">CUSTOMIZED COURSE</Tab>
        </TabList>
        <TabPanel tabId="one">
          <Box>
            <SectionTitle
              children={"MASTER COURSE"}
              desc="Module Info & Overview"
            />
            <Text as="p">
              This program is designed to make you an expert in Digital
              Marketing; with this course, we provide deep learning of Digital
              Marketing.
            </Text>
            <SimpleGrid columns={2}>
              {MasterCourseData.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text>{item.level}</Text>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                //color={"yellow"}
                // sx={{ width: "350px" }}

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
              children={"FOUNDATION COURSE"}
              desc="Module Info and Overview"
            />
            <Text as="p">
              Get practical experiences using Digital Marketing tools to manage
              and optimize a Digital Marketing campaign with our Foundation
              Course, which combines theory and practice.
            </Text>
            <SimpleGrid columns={2}>
              {FoundationCourse.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text>{item.level}</Text>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                //color={"yellow"}
                // sx={{ width: "350px" }}

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
              children={"JOB ORIENTED PROGRAM "}
              desc="Module Info & Overview"
            />
            <Text as="p">
              Our job-oriented course is mainly created with the intention that
              a reputable organization can hire you following the training;
              finding your ideal job is our top priority.
            </Text>
            <SimpleGrid columns={2}>
              {JobOrientedData.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text>{item.level}</Text>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                //color={"yellow"}
                // sx={{ width: "350px" }}

                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
              />
            </Center>
          </Box>
        </TabPanel>
        <TabPanel tabId="fourth">
          <Box>
            <SectionTitle
              children={"CUSTOMIZED COURSE"}
              desc="Module Info & Overview"
            />
            <Text as="p">
              Our customized course assist in altering our training program
              according to your needs and preferences; you can alter the
              programs according to your choice.
            </Text>
            <SimpleGrid columns={2}>
              {CustomizedCourseData.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text>{item.level}</Text>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Center>
              <GlobalButton
                label={"Download Brochure"}
                //color={"yellow"}
                // sx={{ width: "350px" }}

                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
              />
            </Center>
          </Box>
        </TabPanel>
      </Tabs>
    </Container>
  );
}
