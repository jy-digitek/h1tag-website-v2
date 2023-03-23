import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  Highlight,
  Text,
  Stack,
  Card,
  CardBody,
  Container,
  CardFooter,
  Button,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  List,
  ListItem,
  Show,
  Hide,
} from "@chakra-ui/react";
import Link from "next/link";
export const Instutute = () => {
  return (
    <Container maxW={"full"} p={0} bg={"#f7f7f7"} pb={10} px={10}>
      <Heading
        size="xl"
        px={{ base: "0", sm: "10", md: "20" }}
        py={50}
        textAlign={"center"}
      >
        <Text> Pick a Course to Enhance Your Career</Text>
      </Heading>

      <SimpleGrid columns={[1]} spacing="6" px={[0, 10]}>
        {/* <Box pl={5}>
          <Heading as="h3">Choose Your Interest</Heading>
          <Text mt={5}>
            <Highlight
              query="Digital Marketing Course"
              styles={{
                px: "1",
                py: "1",
                color: "#dc3545",
                fontWeight: "bold",
              }}
              w
            >
              Let's talk about your interest in Digital Marketing Course.
            </Highlight>
          </Text>

          <Text mt={5}>
            {" "}
            <Highlight
              query="India"
              styles={{
                px: "1",
                py: "1",
                color: "#dc3545",
                fontWeight: "bold",
              }}
            >
              We are a pioneer company in the digital marketing industry that
              provides the best digital marketing course in India..
            </Highlight>
          </Text>

          <Text as="i" mt={10}>
            <Highlight
              query="Have a look"
              py={10}
              styles={{
                px: "1",
                py: "1",
                color: "#dc3545",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Have a look
            </Highlight>
          </Text>
        </Box> */}
        {/* <Box>
          <Card maxW="sm" align={"center"}>
            <CardBody textAlign={"center"}>
              <Image
                src="master-course1.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Digital Marketing</Heading>
                <Text>
                  Job Oriented Course, Foundation Course, Customized Course,
                  Master Course
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Link href="#!">
                <Button bg={"yellow.300"}>Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm" minH={"370px"} align={"center"}>
            <CardBody textAlign={"center"}>
              <Image
                src="professional-certificate-course.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Graphic Designing</Heading>
                <Text>Foundation Course, Master Course</Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Link href="#!">
                <Button bg={"yellow.300"}>Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </Box> */}
        <Hide above="md">
          <Box>
            <Tabs orientation={"horizontal"}>
              <TabList aria-orientation="verticasd">
                <Tab>Digital Marketing </Tab>
                <Tab>Graphic Designing </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Card W={["100%", "100%"]}>
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" my={3}>
                          Digital Marketing
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
              <TabList aria-orientation="verticasd">
                <Tab>Digital Marketing </Tab>
                <Tab>Graphic Designing </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Card W={["100%", "100%"]}>
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" my={3}>
                          Digital Marketing
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
        </Show>
      </SimpleGrid>
    </Container>
  );
};
