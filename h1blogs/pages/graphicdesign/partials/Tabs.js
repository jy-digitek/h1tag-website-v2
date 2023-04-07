import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Center,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import { BasicCourseData, AdvanceCourseData } from "../../../components/DATA";
import { FcNext } from "react-icons/fc";
import Styles from "../../../styles/Tabs.module.css";
export const CourseTabs = () => {
  return (
    <Container maxW={"6xl"} py={10}>
      <SectionTitle
        children={"Top Graphic Design Course from the Best Instructors"}
        mb={10}
      />
      <Box>
        H1 Tags provides Next-Level Education that offers up-to-date graphic
        designing software training in a single place. Students interested in
        learning graphic design course can enroll in our institute to master
        anything from the fundamentals to advanced concepts. Our training
        methods are based on cutting-edge technology and concepts, allowing you
        to comprehend all areas fully. Skilled educators design our courses to
        satisfy the needs of all students.
      </Box>
      <Text textAlign="center" fontWeight={"bold"}>
        Learn the most demanding career skill, and secure your future
      </Text>
      <Center my={5}>
        <GlobalButton
          rounded={"full"}
          color={"white"}
          label={"Enroll Now"}
          background={"#3950a1"}
          _hover={{ background: "#101C32" }}
        />
      </Center>

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
          <Tab tabFor="one">Basic Course</Tab>
          <Tab tabFor="two">Advance Course</Tab>
        </TabList>
        <TabPanel tabId="one">
          <Box>
            <SectionTitle
              children={"Basic Course"}
              desc="Module Info & Overview"
              mb={5}
            />
            <Text as="p" mb={5}>
              Our basic Graphic Design Course introduces students to interface
              design, visual culture, image design, communication and media
              theory, typography, etc.
            </Text>
            <Text fontWeight={"bold"} py={3}>
              Duration: 3 Months
            </Text>
            <SimpleGrid columns={2}>
              {BasicCourseData.map((item, i) => {
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
        <TabPanel tabId="two">
          <Box>
            <SectionTitle
              children={"Advance Course"}
              desc="Module Info & Overview"
              mb={5}
            />
            <Text as="p" mb={5}>
              Our advanced Graphic Design Course combines design ideas, tools
              and software, typography, digital illustration, digital imaging,
              page layout, and composition processes, emphasizing the design
              process from conception to production.
            </Text>
            <Text fontWeight={"bold"} py={3}>
              Duration: 4 Months
            </Text>
            <SimpleGrid columns={2}>
              {AdvanceCourseData.map((item, i) => {
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
};
