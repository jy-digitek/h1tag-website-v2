import { Container, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../components/SectionTitle";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
} from "@chakra-ui/react";

import ListCardImg from "../../components/ListCardImg";

const CourseTab = () => {
  return (
    <Container maxW={"full"}>
      <SectionTitle children={"Courses We Offer"} />
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
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>course1</Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>course2</Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>course3</Box>
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3950a1" }}>
              <Box sx={{ fontSize: 20, fontWeight: "bold" }}>course4</Box>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel sx={{ p: 5 }}>hello1</TabPanel>
            <TabPanel sx={{ p: 5 }}>hell02</TabPanel>
            <TabPanel sx={{ p: 5 }}>hell03</TabPanel>
            <TabPanel sx={{ p: 5 }}>hell04</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default CourseTab;
