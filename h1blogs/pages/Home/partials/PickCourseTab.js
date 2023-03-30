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

import { MdCheckCircle, MdSettings } from "react-icons/md";
import ListCardImg from "../../../components/ListCardImg";

import { SectionTitle } from "../../../components/SectionTitle";

export const PickCourseTab = () => {
  return (
    <Container maxW={"7xl"}>
      <SectionTitle>Pick a Course to Enhance to career</SectionTitle>
      <SimpleGrid columns={[1]} spacing="6" px={[0, 10]}>
        <Hide above="md">
          <Box>
            <Tabs orientation={"horizontal"}>
              <TabList aria-orientation="verticasd">
                <Tab>Digital Marketing</Tab>
                <Tab>Graphic Designing </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Card W={["100%", "100%"]}>
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" my={3}>
                          Digital Marketingsdedcsdc
                        </Heading>
                      </Stack>
                      <List>
                        <ListItem>Job Oriented Course</ListItem>
                        <ListItem>Foundation Course</ListItem>
                        <ListItem>Customized Course</ListItem>
                        <ListItem>Master Course</ListItem>
                      </List>
                    </CardBody>
                    <CardFooter>
                      <Link href="#!">
                        <Button bg={"yellow.300"}>Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card W={"100%"}>
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" my={3}>
                          Graphic Designing
                        </Heading>
                      </Stack>
                      <List>
                        <ListItem>Foundation Course</ListItem>
                        <ListItem>Master Course</ListItem>
                      </List>
                    </CardBody>
                    <CardFooter>
                      <Link href="#!">
                        <Button bg={"yellow.300"}>Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Hide>

        <Show above="md">
          <Box>
            <Tabs orientation={"vertical"}>
              <TabList
                style={{ whiteSpace: "pre", borderInlineStart: "unset" }}
              >
                <Tab>Digital Marketing </Tab>
                <Tab>Graphic Designing </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
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
