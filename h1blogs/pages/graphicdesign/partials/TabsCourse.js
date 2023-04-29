import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Center,
  Show,
  Hide,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import Styles from "../../../styles/Tabs.module.css";
import { BasicCourseData, AdvanceCourseData } from "../../../components/DATA";
import { FcNext } from "react-icons/fc";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";
import React from "react";

export default function TabsCourse() {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <>
      <Container
        maxW={"full"}
        py={[5, 3]}
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgb(190 196 227), rgb(0 0 0 / 75%)),url(/graphicsSide.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SimpleGrid columns={[1, 1]}>
          <Box my={[5, 10]} mx={"auto"} textColor={"#fff"} px={[3, 20]}>
            <SectionTitle
              children={"Top Graphic Design Course from the Best Instructors"}
            />
            <Box>
              H1 Tags provides Next-Level Education that offers up-to-date
              graphic designing software training in a single place. Students
              interested in learning the graphic design course can enroll in our
              institute to master anything from the fundamentals to advanced
              concepts. Our training methods are based on cutting-edge
              technology and concepts, allowing you to comprehend all areas
              fully. Skilled educators design our courses to satisfy the needs
              of all students.
            </Box>
            <Text textAlign="center" fontWeight={"bold"} fontSize={22} mt={5}>
              Learn the most demanding career skill, and secure your future
            </Text>
            <Center my={5}>
              {/* <GlobalButton
          rounded={"full"}
          color={"white"}
          label={"Enroll Now"}
          background={"#3950a1"}
          _hover={{ background: "#101C32" }}
        /> */}
              <ReturnFocus
                btnText={`Get Brochure`}
                children={<ContactForm />}
                openModalSet={openModalSet}
                rounded={"full"}
                color={"white"}
                label={"Enroll Now"}
                background={"#3950a1"}
                _hover={{ background: "#101C32" }}
                px={10}
              />
            </Center>
          </Box>
          <Box />
        </SimpleGrid>
      </Container>
      <Container maxW={"6xl"} py={10} bg="gray.100">
        <Show above="md">
          <Box maxW={"6xl"} mx={"auto"}>
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
                    desc="Module Info and Overview"
                    mb={5}
                  />
                  <Text as="p" mb={5} textAlign={"center"}>
                    Our basic Graphic Design Course introduces students to
                    interface design, visual culture, image design,
                    communication and media theory, typography, etc.
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
                          boxShadow={"md"}
                          py={2}
                          px={[5]}
                          cursor={"pointer"}
                          sx={{
                            transition: ".5s",
                            ":hover": {
                              backgroundColor: "tomato",
                              color: "#fff",
                            },
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
                    <ReturnFocus
                      btnText={`Get Brochure`}
                      children={<ContactForm />}
                      openModalSet={openModalSet}
                      rounded={"full"}
                      color={"white"}
                      label={"Download Brochure"}
                      background={"#3950a1"}
                      _hover={{ background: "#101C32" }}
                      px={10}
                      sx={{ mt: 8, mb: 4 }}
                    />
                  </Center>
                </Box>
              </TabPanel>
              <TabPanel tabId="two">
                <Box>
                  <SectionTitle
                    children={"Advance Course"}
                    desc="Module Info and Overview"
                    mb={5}
                  />
                  <Text as="p" mb={5}>
                    Our advanced Graphic Design Course combines design ideas,
                    tools and software, typography, digital illustration,
                    digital imaging, page layout, and composition processes,
                    emphasizing the design process from conception to
                    production.
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
                            ":hover": {
                              backgroundColor: "tomato",
                              color: "#fff",
                            },
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
                    <ReturnFocus
                      btnText={`Get Brochure`}
                      children={<ContactForm />}
                      openModalSet={openModalSet}
                      rounded={"full"}
                      color={"white"}
                      label={"Download Brochure"}
                      background={"#3950a1"}
                      _hover={{ background: "#101C32" }}
                      px={10}
                      sx={{ mt: 8, mb: 4 }}
                    />
                  </Center>
                </Box>
              </TabPanel>
            </Tabs>
          </Box>
        </Show>

        <Show below="md">
          <Tabs
            defaultTab="one"
            onChange={(tabId) => {
              console.log(tabId);
            }}
            className={Styles.tabsContainer}
            Horizontal
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
                  Our basic Graphic Design Course introduces students to
                  interface design, visual culture, image design, communication
                  and media theory, typography, etc.
                </Text>
                <Text fontWeight={"bold"} py={3}>
                  Duration: 3 Months
                </Text>
                <SimpleGrid columns={[1, 2]}>
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
                          ":hover": {
                            backgroundColor: "tomato",
                            color: "#fff",
                          },
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
                  {/* <GlobalButton
                label={"Download Brochure"}
                maxW="100%"
                background="#3950a1"
                _hover={{ background: "#101C32" }}
                sx={{ mt: 8, mb: 4 }}
              /> */}
                  <ReturnFocus
                    btnText={`Get Brochure`}
                    children={<ContactForm />}
                    openModalSet={openModalSet}
                    rounded={"full"}
                    color={"white"}
                    label={"Download Brochure"}
                    background={"#3950a1"}
                    _hover={{ background: "#101C32" }}
                    px={10}
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
                  Our advanced Graphic Design Course combines design ideas,
                  tools and software, typography, digital illustration, digital
                  imaging, page layout, and composition processes, emphasizing
                  the design process from conception to production.
                </Text>
                <Text fontWeight={"bold"} py={3}>
                  Duration: 4 Months
                </Text>
                <SimpleGrid columns={[1, 2]}>
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
                          ":hover": {
                            backgroundColor: "tomato",
                            color: "#fff",
                          },
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
                  <ReturnFocus
                    btnText={`Get Brochure`}
                    children={<ContactForm />}
                    openModalSet={openModalSet}
                    rounded={"full"}
                    color={"white"}
                    label={"Download Brochure"}
                    background={"#3950a1"}
                    _hover={{ background: "#101C32" }}
                    px={10}
                    sx={{ mt: 8, mb: 4 }}
                  />
                </Center>
              </Box>
            </TabPanel>
          </Tabs>
        </Show>
      </Container>
    </>
  );
}
