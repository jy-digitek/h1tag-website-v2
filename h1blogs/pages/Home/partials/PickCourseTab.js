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

// import { MdCheckCircle, MdSettings } from "react-icons/md";
import ListCardImg from "../../../components/ListCardImg";

import { SectionTitle } from "../../../components/SectionTitle";

// Increase tab fonts
// Enclose tabs
export const PickCourseTab = () => {
  return (
    <Container maxW={"5xl"}>
      <SectionTitle>Pick a Course to Enhance to career</SectionTitle>
      <SimpleGrid columns={[1]} spacing="6" px={[0, 10]}>
        <Show above="md">
          <Box>
            <Tabs variant="enclosed" isFitted>
              <TabList
                style={{
                  whiteSpace: "pre",
                  borderInlineStart: "unset",
                }}
              >
                <Tab
                  sx={
                    {
                      // backgroundColor: "#3950a1",
                      // color: "white",
                      // fontsize: "200px",
                    }
                  }
                  _selected={{ color: "white", bg: "blue.500" }}
                  aria-selected={true}
                >
                  Digital Marketing
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "blue.500" }}
                  sx={
                    {
                      // backgroundColor: "#3950a1",
                      // color: "white",
                    }
                  }
                >
                  Graphic Designing
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel sx={{ p: 0 }}>
                  <Card W={["100%", "100%"]}>
                    <CardBody>
                      <ListCardImg
                        courseTitle={"Digital Marketing"}
                        description={`We offer a variety of options with our Digital Marketing courses, so you can choose the one that best suits your needs and preferences.`}
                        item_1={`Job Oriented Course`}
                        item_2={`Foundation Course`}
                        item_3={`Customized Course`}
                        item_4={`Master Course`}
                        btnText={"Learn More"}
                      />
                    </CardBody>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card W={"100%"}>
                    <CardBody>
                      <ListCardImg
                        courseTitle={"Graphic Designing"}
                        description={`Our Graphic Designing courses provide you with a diverse range of options. With our wide range of options, you can gain a solid foundation in graphic designing and take your skills to the next level.`}
                        item_1={`Foundation Course`}
                        item_2={`Master Course`}
                        btnText={"Learn More"}
                      />
                    </CardBody>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Show>
      </SimpleGrid>
    </Container>
  );
};
