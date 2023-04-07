import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

export const CourseTabs = () => {
  return (
    <Container>
      <SectionTitle
        children={"Top Graphic Design Course from the Best Instructors"}
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
      <Text textAlign="center">
        Learn the most demanding career skill, and secure your future
      </Text>
      <GlobalButton
        rounded={"full"}
        color={"white"}
        label={"Enroll Now"}
        background={"#3950a1"}
        _hover={{ background: "#101C32" }}
      />
      <Tabs
        defaultTab="one"
        onChange={(tabId) => {
          console.log(tabId);
        }}
        vertical
        background={"blue"}
      >
        <TabList>
          <Tab tabFor="one">BASIC COURSE</Tab>
          <Tab tabFor="two">ADVANCE COURSE</Tab>
        </TabList>
        <TabPanel tabId="one">
          <Box>
            <SectionTitle
              children="BASIC COURSE"
              desc="Module Info & Overview"
            />
          </Box>
        </TabPanel>
        <TabPanel tabId="two">
          <Box>tab2 content</Box>
        </TabPanel>
      </Tabs>
    </Container>
  );
};
