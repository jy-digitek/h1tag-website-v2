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

import { SectionTitle } from "../../../components/SectionTitle";

export const PickCourseTab = () => {
  return (
    <Container maxW={"768px"}>
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
                      <Stack>
                        <Heading size="md" my={3}>
                          Digital Marketing
                        </Heading>
                      </Stack>

                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Job Oriented Course
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Foundation Course
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdSettings} color="green.500" />
                          Customized Course
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Master Course
                        </ListItem>
                      </List>
                    </CardBody>

                    <Box sx={{ mb: 3, mx: 3 }}>
                      <Link href="#!">
                        <Button bg={"yellow.300"} width={"full"}>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card W={"100%"}>
                    <CardBody>
                      <Stack>
                        <Heading size="md" my={3}>
                          Graphic Designing
                        </Heading>
                      </Stack>
                      <List>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Foundation Course
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Master Course
                        </ListItem>
                      </List>
                    </CardBody>

                    <Box sx={{ mb: 3, mx: 3 }}>
                      <Link href="#!">
                        <Button bg={"yellow.300"} width={"full"}>
                          Learn More
                        </Button>
                      </Link>
                    </Box>
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
