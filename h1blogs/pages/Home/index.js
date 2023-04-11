import Layout from "../../components/layout";
import {
  Container,
  Image,
  SimpleGrid,
  Box,
  WrapItem,
  Wrap,
  Card,
  CardBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Flex,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  FcMoneyTransfer,
  FcOrgUnit,
  FcApproval,
  FcOnlineSupport,
} from "react-icons/fc";
import ContactForm from "../../components/contactform";
import { Benefits, comparision, CareerOptionData } from "../../components/DATA";
import { GlobalButton } from "../../components/GlobalButton";
import { SectionTitle } from "../../components/SectionTitle";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import ListCardImg from "../../components/ListCardImg";
import { CustomCard } from "../../components/CustomCard";
const Home = () => {
  return (
    <Layout>
      <Container maxW={"full"} p={0}>
        <Image boxSize="100%" src="/h1banner.jpg" alt="h1" />
        <Box>
          <SimpleGrid
            columns={[1, null, 4]}
            spacing={6}
            mx={2}
            px={10}
            textAlign={"center"}
            py={8}
            style={{ background: "#f0f0f0" }}
          >
            <Fade cascade damping={0.1}>
              <Box
                bg="#fff"
                sx={{ borderLeft: "5px solid #3950a1" }}
                boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
                display={"flex"}
                p={5}
                borderRadius={8}
                alignItems="center"
                justifyContent={"center"}
              >
                <FcOnlineSupport size={30} style={{ marginRight: 10 }} /> 100%
                Placement
              </Box>
              <Box
                bg="#fff"
                sx={{ borderLeft: "5px solid #3950a1" }}
                boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
                display={"flex"}
                p={5}
                alignItems="center"
                justifyContent={"center"}
                borderRadius={8}
              >
                <FcMoneyTransfer size={30} style={{ marginRight: 10 }} />
                Paid Internship
              </Box>
              <Box
                bg="#fff"
                sx={{ borderLeft: "5px solid #3950a1" }}
                boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
                display={"flex"}
                p={5}
                alignItems="center"
                justifyContent={"center"}
                borderRadius={8}
              >
                <FcOrgUnit size={30} style={{ marginRight: 10 }} />
                Classroom Training
              </Box>
              <Box
                bg="#fff"
                sx={{ borderLeft: "5px solid #3950a1" }}
                boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
                display={"flex"}
                p={5}
                alignItems="center"
                justifyContent={"center"}
                borderRadius={8}
              >
                <FcApproval size={30} style={{ marginRight: 10 }} />
                Experienced Instructors
              </Box>
            </Fade>
          </SimpleGrid>
        </Box>

        <Box maxW={"4xl"} mx="auto">
          <SectionTitle py={10}>
            Pick a Course to Enhance to career
          </SectionTitle>
          <SimpleGrid
            columns={[1]}
            spacing="6"
            // px={[0, 10]}
            //mt={5}
            mx={2}
            px={10}
            py={5}
          >
            <Box>
              <Tabs variant="enclosed" isFitted>
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
                    <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
                      Digital Marketing
                    </Box>
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "#3950a1" }}
                    sx={
                      {
                        // backgroundColor: "#3950a1",
                        // color: "white",
                      }
                    }
                  >
                    <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
                      Graphic Designing
                    </Box>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel sx={{ p: 0 }}>
                    <Card>
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
                  <TabPanel sx={{ p: 0 }}>
                    <Card>
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
          </SimpleGrid>
        </Box>

        <Box>
          <SectionTitle py={10}>Benefits to Students</SectionTitle>
          <Wrap
            spacing={["10px", "20px"]}
            py={5}
            px={[0, 10]}
            fontSize={"20px"}
          >
            <SimpleGrid columns={[1, null, 3]} spacing={6} mx={2} px={10}>
              {Benefits.map((item, key) => (
                <Box key={key}>
                  <Fade cascade damping={0.25}>
                    <WrapItem
                      key={key}
                      fontWeight={"bold"}
                      fontSize={15}
                      width={["100%", "auto"]}
                      rounded={8}
                      // border={`1px solid ${item.bg}`}
                      color={item.bg}
                      p={[2, 5]}
                      alignItems="center"
                      background={item.bg + ".50"}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#fff",
                          height: 16,
                          minWidth: 16,
                          textAlign: "center",
                          rounded: "50%",
                          marginRight: 2,
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                          border: `1px solid ${item.bg}`,
                        }}
                      >
                        {item.icon}
                      </Box>

                      {item.label}
                    </WrapItem>
                  </Fade>
                </Box>
              ))}
            </SimpleGrid>
          </Wrap>
        </Box>

        <Box>
          <SectionTitle
            desc={
              "What makes H1 Tags the Best Digital Marketing training institute in Delhi?"
            }
          >
            Why H1 Tags
          </SectionTitle>
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            pt={10}
            px={[0, 10]}
            fontSize={"20px"}
          >
            {comparision.map((item, key) => {
              return (
                <Fade cascade>
                  {/* <CustomCard
                    heading={
                      <AttentionSeeker pulse>{item.title}</AttentionSeeker>
                    }
                    icon={item.icon}
                    description={item.text}
                    // href={"#"}
                    // actionText={"Learn more"}
                  /> */}
                  <Box
                    maxW={{ base: "full" }}
                    w={"full"}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    className="customCard"
                    p={5}
                  >
                    <Stack align={"start"} spacing={2}>
                      <Flex
                        w={16}
                        h={16}
                        align={"center"}
                        justify={"center"}
                        color={"white"}
                        rounded={"full"}
                        marginBottom={5}
                        bg={useColorModeValue("gray.100", "gray.700")}
                      >
                        {item.icon}
                      </Flex>
                      <Box mt={2}>
                        <Heading size="md">{item.title}</Heading>
                        <Text mt={1} fontSize={"md"}>
                          {item.text}
                        </Text>
                      </Box>
                      {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            {actionText}
          </Button> */}
                    </Stack>
                  </Box>
                </Fade>
              );
            })}
          </SimpleGrid>
        </Box>

        <Box
          maxW={"full"}
          px={[5, 10]}
          sx={{
            backgroundImage:
              "linear-gradient(to left, rgb(130 146 244 / 81%), rgb(23 33 87 / 80%)),url(crbg.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <SimpleGrid
            columns={[0, 2]}
            px={[0, 10]}
            spacing={5}
            fontSize={"20px"}
            padding={[0, 20]}
          >
            <Box
              sx={{
                // p: 5,
                py: 12,
                background: "#ffffffb8",
                backdropFilter: "blur(8px)",
                rounded: 8,
              }}
              boxShadow={8}
            >
              <SectionTitle mb={1}>
                Career Options after Digital Marketing Course
              </SectionTitle>
              {CareerOptionData &&
                CareerOptionData.map((item, index) => {
                  return (
                    <Flex
                      px={[5, 10]}
                      py={4}
                      key={index}
                      alignItems={"center"}
                      borderBottom={"1px solid #dcd7e3"}
                      sx={{
                        ":hover": {
                          background: "#e3e1e5",
                          transition: ".5s",
                        },
                      }}
                    >
                      <Box
                        boxSize={12}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        bg={"#e3f2fd"}
                        border={"4px solid #3950a1"}
                        borderRadius={40}
                        textAlign={"center"}
                      >
                        {index + 1}
                      </Box>
                      <Box as="h3" fontWeight={"bold"} px={3}>
                        {item.label}
                      </Box>
                    </Flex>
                  );
                })}
              <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
                <GlobalButton
                  label={"Kick Start Your Career"}
                  maxW="100%"
                  background="#3950a1"
                  _hover={{ background: "#101C32" }}
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};
export default Home;
