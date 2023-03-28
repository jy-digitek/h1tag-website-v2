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
    <Container maxW={"768px"}>
      <Heading
        size="xl"
        px={{ base: "0", sm: "10", md: "20" }}
        py={50}
        textAlign={"center"}
      >
        <Text> Pick a Course to Enhance Your Career</Text>
      </Heading>

      <SimpleGrid columns={[1]} spacing="6" px={[0, 10]}>
        <Hide above="md">
          <Box>
            <Tabs orientation={"horizontal"}>
              <TabList aria-orientation="verticasd">
                <Tab>Digital Marketing jhgwfefjfwje </Tab>
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
              <TabList aria-orientation="verticasd" width={200}>
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
