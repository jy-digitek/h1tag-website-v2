import {
  Box,
  // Image,
  Heading,
  SimpleGrid,
  // Highlight,
  // Text,
  Stack,
  Card,
  CardBody,
  Container,
  CardFooter,
  Button,
  // Center,
  Tabs,
  TabList,
  ListIcon,
  Tab,
  TabPanel,
  TabPanels,
  List,
  ListItem,
  Show,
  Hide,
} from "@chakra-ui/react";
import Link from "next/link";

import { useDisclosure } from "@chakra-ui/react";
// import { MdCheckCircle, MdSettings } from "react-icons/md";
import ListCardImg from "../../../components/ListCardImg";

import { SectionTitle } from "../../../components/SectionTitle";

// Increase tab fonts
// Enclose tabs
const PickCourseTab = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container maxW={"5xl"}>
      <SectionTitle my={10}>Pick a Course to Enhance to career</SectionTitle>
      <SimpleGrid columns={[1]} spacing="6" px={[0, 10]}>
        <Box>
          <Tabs variant="enclosed" isFitted>
            <TabList
              style={{
                whiteSpace: "pre",
                borderInlineStart: "unset",
              }}
            >
              <Tab
                _selected={{ color: "white", bg: "#04113c" }}
                aria-selected={true}
              >
                <Box sx={{ fontWeight: "bold" }} fontSize={[10, 20]}>
                  Digital Marketing
                </Box>
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#04113c" }}
                sx={
                  {
                    // backgroundColor: "#3950a1",
                    // color: "white",
                  }
                }
              >
                <Box sx={{ fontWeight: "bold" }} fontSize={[10, 20]}>
                  Graphic Designing
                </Box>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel sx={{ p: 0 }}>
                <Card color={"black"}>
                  <CardBody>
                    <ListCardImg
                      courseTitle={"Digital Marketing"}
                      description={`We offer a variety of options with our Digital Marketing courses, so you can choose the one that best suits your needs and preferences.`}
                      item_1={`Job Oriented Course`}
                      item_2={`Foundation Course`}
                      item_3={`Customized Course`}
                      item_4={`Master Course`}
                      btnText={"Learn More"}
                      href={"/digitalmarketing"}
                    />
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel sx={{ p: 0 }}>
                <Card>
                  <CardBody>
                    <ListCardImg
                      courseTitle={"Graphic Designing"}
                      description={`Our Graphic Designing courses provide you with a diverse range of options. With our wide range of options, you can gain a solid foundation in graphic designing and take your skills to the next level.`}
                      item_1={`Foundation Course`}
                      item_2={`Master Course`}
                      btnText={"Learn More"}
                      href={"/graphicdesign"}
                    />
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default PickCourseTab;
