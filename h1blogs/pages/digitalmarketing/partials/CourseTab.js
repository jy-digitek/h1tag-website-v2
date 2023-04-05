import {
  Container,
  Box,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import { MasterCourseData } from "../../../components/DATA";
import { FoundationCourse } from "../../../components/DATA";
import { JobOrientedData } from "../../../components/DATA";

export const CourseTab = () => {
  return (
    <Container maxW={"full"} py={10}>
      <SectionTitle children={"Courses We Offer"} my={10} />
      <Box as="p">
        During your Digital Marketing Course, you will learn different
        techniques of Digital Marketing and how to apply them in real life. We
        will make you a skilled professional, and you will acquire the skills
        you need to succeed in life. You can choose from a variety of courses
        that H1 Tags is offering.
      </Box>
      <Box>
        <Tabs variant="enclosed" isFitted orientation="vertical">
          <TabList
            style={{
              whiteSpace: "pre",
              borderInlineStart: "unset",
            }}
          >
            <Tab
              _selected={{ color: "white", bg: "#3950a1" }}
              aria-selected={true}
            >
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>MASTER COURSE</Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
                FOUNDATION COURSE
              </Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
                JOB ORIENTED PROGRAM
              </Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
                CUSTOMIZED COURSE
              </Box>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel sx={{ p: 5 }}>
              <Box>
                <SectionTitle
                  children={"MASTER COURSE"}
                  desc="Module Info & Overview"
                />
                <Text as="p">
                  This program is designed to make you an expert in Digital
                  Marketing; with this course, we provide deep learning of
                  Digital Marketing.
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
            <TabPanel sx={{ p: 5 }}>
              {" "}
              <Box boxShadow="sm">
                <SectionTitle
                  children={"FOUNDATION COURSE"}
                  desc="Module Info and Overview"
                />
                <Text as="p">
                  Get practical experiences using Digital Marketing tools to
                  manage and optimize a Digital Marketing campaign with our
                  Foundation Course, which combines theory and practice.
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
            <TabPanel sx={{ p: 5 }}>
              {" "}
              <Box>
                <SectionTitle
                  children={"JOB ORIENTED PROGRAM "}
                  desc="Module Info & Overview"
                />
                <Text as="p">
                  Our job-oriented course is mainly created with the intention
                  that a reputable organization can hire you following the
                  training; finding your ideal job is our top priority.
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
            <TabPanel sx={{ p: 5 }}>
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
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
