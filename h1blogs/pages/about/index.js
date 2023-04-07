import Layout from "../../components/layout";
import {
  Container,
  Box,
  Heading,
  useBreakpointValue,
  Text,
  SimpleGrid,
  Highlight,
  List,
  ListItem,
  Stack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Grid,
  GridItem,
  ListIcon,
  Flex,
  Center,
  Hide,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import styles from "../../styles/About.module.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { VscArrowCircleRight } from "react-icons/vsc";
import { SectionTitle } from "../../components/SectionTitle";
import { MdCheckCircle } from "react-icons/md";
import { GlobalButton } from "../../components/GlobalButton";
const About = () => {
  return (
    <Layout>
      <Container maxW={"full"}>
        {/* image start here  */}
        <Box>
          <Image src={"/bg-img.jpeg"} sx={{ rounded: 25, mt: 5 }} />
        </Box>

        {/* image end here  */}

        {/* digital marketing Start */}
        <Box textAlign={"center"} mt={10}>
          <SectionTitle>Best Digital Marketing Course in Delhi</SectionTitle>

          <Box sx={{ padding: 10 }}>
            <strong>H1 Tags:</strong> A School of Digital Marketing provides the
            Best Digital Marketing Course in Delhi with training programs in a
            variety of areas, such as SEO, PPC, Social Media Marketing, Content
            Management, and more, allowing students to learn the most current
            methods in the field of Digital Marketing. With over 10+ years of
            experience in Digital Marketing, we can assist you in achieving your
            objectives and entering the industry. We have a team of Digital
            Marketing experts who have years of knowledge in their field and are
            well-experienced. Our team is dedicated to providing the students
            with the best knowledge possible.
          </Box>
        </Box>
        {/* digital marketing end */}

        {/* Our Vision Start */}
        <SimpleGrid
          columns={[1, 2]}
          sx={{ background: "url(/bg-img.jpeg)" }}
          py={10}
        >
          <Box px={[0, 10]}>
            {/* <Heading textAlign={"center"} py={5}>
              Our Vision
            </Heading>
            <Text fontSize={"18px"} lineHeight={"26px"}>
              We have the vision to expand our Institute's branches all around
              India so we can train the student to acquire the top Digital
              Marketing skill which is essential for building their future.
              Considering the demands of the professional world, we aim to
              provide the Best Digital Marketing Course with practical and
              theoretical knowledge. Digital Marketing is a booming career in
              India, which is expected to provide significant growth to the IT
              sectors.
            </Text> */}
            <Box sx={{ lineHeight: 2, background: "#fff", p: 7, rounded: 5 }}>
              <SectionTitle mb={10}> Our Vision</SectionTitle>
              <Box as="p" sx={{ mb: 2 }}>
                We have the vision to expand our Institute's branches all around
                India so we can train the student to acquire the top Digital
                Marketing skill which is essential for building their future.
              </Box>
              <Box as="p" sx={{ mb: 2 }}>
                Considering the demands of the professional world, we aim to
                provide the Best Digital Marketing Course with practical and
                theoretical knowledge. Digital Marketing is a booming career in
                India, which is expected to provide significant growth to the IT
                sectors.
              </Box>
            </Box>
          </Box>
          <Box>
            {/* <Image src={"/test/ourmission.jpeg"} minH={"330px"} /> */}
          </Box>
        </SimpleGrid>

        {/* our vision end */}

        {/* Track record start */}
        <Box textAlign={"center"} my={10}>
          <SectionTitle mb={10}>Our Track Record…</SectionTitle>
          <Text>
            We are a Digital Marketing Agency-based Institute that has strong
            partnerships with several IT companies. Well-reputed and known
            organizations actively seek out our students, as we provide on-site
            training.
          </Text>
          <SimpleGrid columns={[1, 4]} py={20} spacing={6} px={10}>
            <Box
              p={10}
              // boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"radial-gradient(#1fe4f5, #3fbafe)"}
              borderRadius={10}
              color={"#fff"}
            >
              <Text fontWeight={"bold"} fontSize={"2rem"}>
                1000+
              </Text>{" "}
              Students Trained
            </Box>
            <Box
              p={10} //boxShadow={"10px 10px 5px 12px red"}
              bg={"radial-gradient(#fbc1cc, #fa99b2)"}
              borderRadius={10}
              color="#fff"
            >
              <Text fontWeight={"bold"} fontSize={"2rem"}>
                {" "}
                100+
              </Text>
              Hiring Partners
            </Box>
            <Box
              p={10} //</SimpleGrid>boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"radial-gradient(#76b2fe, #b69efe)"}
              borderRadius={10}
              color={"#fff"}
            >
              <Text fontWeight={"bold"} fontSize={"2rem"}>
                700+
              </Text>
              Students Placed
            </Box>
            <Box
              p={10}
              //boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"radial-gradient(#60efbc, #58d5c9)"}
              borderRadius={10}
              color={"#fff"}
            >
              <Text fontWeight={"bold"} fontSize={"2rem"}>
                {" "}
                300+
              </Text>
              Salary Hike
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
      {/* Track record end */}

      {/* director portfolio starts here */}
      <Container
        maxW={"full"}
        sx={{
          py: 15,
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
        }}
      >
        <Box maxW={"5xl"} mx={"auto"}>
          <SimpleGrid columns={[1, 2]} gap={0} my={10} alignItems={"center"}>
            <Box
              sx={{
                maxW: 450,
              }}
            >
              <Image src={"/Yuvraj_singh.png"} w={"100%"} />
            </Box>
            <Box className={styles.about}>
              <SectionTitle mb={10} fontSize={10}>
                MESSAGE FROM DIRECTOR
              </SectionTitle>
              <Text>
                Our sole and complete mission is to teach the value of Digital
                Marketing by utilizing and creating a viable digital career path
                for you. We assist you in providing an understanding of the
                section-wise method so that you can comprehend the process at
                your own pace and put extra efforts into the program that you
                like.
              </Text>
              <Heading
                fontSize={28}
                // sx={{
                //   fontsize: "12px",
                // }}
              >
                YUVRAJ SINGH
              </Heading>
              <Highlight query="Director" styles={{ color: "red" }}>
                Director
              </Highlight>
              <Text>
                Mr. Yuvraj Singh, born to be an entrepreneur, began his career
                by accomplishing many ventures like H1 TAGS, the top Digital
                Marketing Institute in Delhi NCR with a proven track record of
                developing and directing high-impact Digital Marketing
                Strategies. Skilled in overseeing web strategy and development,
                digital engagement, and consumer-facing tools. Adept in guiding
                strategic relationships to achieve company goals.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        {/* director portfolio ends here */}
      </Container>

      {/* cofounder portfolio starts here */}
      <Container
        maxW={"full"}
        sx={{
          py: 15,
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(342deg, rgba(255,255,255,1) 61%, #101C32 61%)",
        }}
      >
        {/* director portfolio starts here */}
        <Box maxW={"5xl"} mx={"auto"}>
          <SimpleGrid columns={[1, 2]} gap={0} my={10} alignItems={"center"}>
            <Box className={styles.about}>
              <Heading fontSize={28}>AKSHAY</Heading>
              <Highlight query="Co-Founder" styles={{ color: "red" }}>
                Co-Founder
              </Highlight>

              <Text>
                He is very good at organizing Digital Marketing Strategies and
                developing new and innovative SEO strategies. His planning
                skills for digital marketing strategies, SEO (on-page and
                off-page), and coming up with fresh, innovative ideas for SEO
                development strategies are top-notch. He has excellent team
                administration and teaching skills. He has excellent team
                administration and teaching skills, and his ideas for
                team-building exercises are fantastic. Under his guidance,
                students gain the skills of professional Digital Marketers. His
                mission is to provide the best knowledge possible to his
                students.
              </Text>
            </Box>
            <Box
              sx={{
                maxW: 450,
                marginLeft: "auto",
              }}
            >
              <Image src={"/Akshay.png"} w={"100%"} />
            </Box>
          </SimpleGrid>
        </Box>
        {/* director portfolio ends here */}
      </Container>

      <Container maxW={"full"}>
        {/* cofounder portfolio ends here */}

        {/* why choose us starts here */}
        <Grid templateColumns="repeat(6, 1fr)" gap={0}>
          <GridItem colSpan={[6, 3]}>
            {/*  */}
            <Box
              w={"full"}
              backgroundImage={
                "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
              }
              h={"full"}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              backgroundAttachment={"fixed"}
              position={"relative"}
            >
              <Hide below="sm">
                <Box
                  position={"absolute"}
                  sx={{
                    width: 0,
                    height: 0,
                    right: 0,
                    top: "25%",
                    borderTop: "40px solid transparent",
                    borderBottom: "40px solid transparent",
                    borderRight: "40px solid #3950a1",
                  }}
                />
              </Hide>
              <VStack
                w={"full"}
                justify={"center"}
                h={"full"}
                mb={14}
                bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
              >
                <Stack maxW={"2xl"} align={"center"} spacing={6}>
                  <SectionTitle py={5} color={"#fff"}>
                    Why Choose us?
                  </SectionTitle>
                </Stack>
                <Stack direction={"row"} gap={10}>
                  <GlobalButton
                    rounded={"full"}
                    color={"white"}
                    label={" Show me more"}
                    background="#3950a1"
                    _hover={{ background: "#101C32" }}
                  />
                </Stack>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={[6, 3]} bg="#3950a1" color={"#fff"}>
            <Box sx={{ p: 10 }}>
              <Text lineHeight={2}>
                H1 Tags -School of Digital Marketing and Web Development is one
                of India's top Digital Marketing institutions in Delhi-NCR. We
                studied several entry-level marketing job openings and designed
                our syllabus according to the market demand for our students to
                get easy placements. Companies hiring from H1 Tags include
                Amazon, Axis Bank, Google, PC Solutions, DH IT Solutions, Wipro,
                Accenture, Genpact, 360 Realtors, HCL, NVidia, Microsoft, HDFC
                Bank, Ogilvy, and many more.
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(6, 1fr)" gap={0}>
          <GridItem colSpan={[6, 3]} bg="papayawhip">
            <Hide above="sm">
              <Box
                w={"full"}
                // h={"100vh"}
                backgroundImage={
                  "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                }
                h={["auto", "full"]}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                backgroundAttachment={"fixed"}
                position={"relative"}
              >
                <Hide below="sm">
                  <Box
                    position={"absolute"}
                    sx={{
                      width: 0,
                      height: 0,
                      left: 0,
                      top: "25%",
                      borderTop: "40px solid transparent",
                      borderBottom: "40px solid transparent",
                      borderLeft: "40px solid papayawhip",
                    }}
                  />
                </Hide>
                <VStack
                  w={"full"}
                  justify={"center"}
                  h={"full"}
                  mb={8}
                  bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                >
                  <Stack maxW={"2xl"} align={"center"} spacing={6}>
                    <SectionTitle py={5} color={"#fff"}>
                      Why Choose us?
                    </SectionTitle>
                  </Stack>
                  <Stack direction={"row"} gap={10}>
                    <GlobalButton
                      rounded={"full"}
                      color={"white"}
                      mb={10}
                      label={" Show me more"}
                      background="#3950a1"
                      _hover={{ background: "#101C32" }}
                    />
                  </Stack>
                </VStack>
              </Box>
            </Hide>
            <Box sx={{ p: [5, 10] }}>
              <List>
                <ListItem
                  sx={{ display: "flex", alignItems: "top", mb: [2, 3] }}
                >
                  <ListIcon as={MdCheckCircle} color="#3950a1" mt={1} />
                  We provide our students with counseling and professional and
                  placement services
                </ListItem>
                <ListItem
                  sx={{ display: "flex", alignItems: "top", mb: [2, 5] }}
                >
                  <ListIcon as={MdCheckCircle} color="#3950a1" mt={1} />
                  Our work training program makes students easily adjust to the
                  actual work culture.
                </ListItem>
                <ListItem
                  sx={{ display: "flex", alignItems: "top", mb: [2, 5] }}
                >
                  <ListIcon as={MdCheckCircle} color="#3950a1" mt={1} />
                  Our trainer provides follow-up sessions with each student
                  separately so that they can clear every doubt.
                </ListItem>
                <ListItem
                  sx={{ display: "flex", alignItems: "top", mb: [2, 5] }}
                >
                  <ListIcon as={MdCheckCircle} color="#3950a1" mt={1} />
                  During training, these sessions include career counseling,
                  resume preparation, and practice job interviews with proper
                  reports. Our trainers focus on topics mostly asked during
                  interviews.
                </ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem colSpan={[6, 3]}>
            <Hide below="sm">
              {/*  */}
              <Box
                w={"full"}
                // h={"100vh"}
                backgroundImage={
                  "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                }
                h={"full"}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                backgroundAttachment={"fixed"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  sx={{
                    width: 0,
                    height: 0,
                    left: 0,
                    top: "25%",
                    borderTop: "40px solid transparent",
                    borderBottom: "40px solid transparent",
                    borderLeft: "40px solid papayawhip",
                  }}
                />

                <VStack
                  w={"full"}
                  justify={"center"}
                  h={"full"}
                  mb={14}
                  // py={useBreakpointValue({ base: 6, md: 12 })}
                  // px={useBreakpointValue({ base: 4, md: 8 })}
                  bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                >
                  <Stack maxW={"2xl"} align={"center"} spacing={6}>
                    <SectionTitle py={5} color={"#fff"}>
                      Why Choose us?
                    </SectionTitle>
                  </Stack>
                  <Stack direction={"row"} gap={10}>
                    <GlobalButton
                      rounded={"full"}
                      color={"white"}
                      label={" Show me more"}
                      background="#3950a1"
                      _hover={{ background: "#101C32" }}
                    />
                  </Stack>
                </VStack>
              </Box>
            </Hide>
          </GridItem>
        </Grid>

        {/* why choose us ends here */}

        {/* your carrer matters ends here */}
        <Box my={10}>
          <SectionTitle mb={10}>FAQ’s</SectionTitle>
          <Accordion allowMultiple mx={[5, 60]}>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        What salary package will I get after completing the
                        course?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Digital marketing is a well-paying career, with salaries
                    varying according to work roles such as SEO, SMO, PPC,
                    Google Adwords, Email Marketing, etc. A Digital Marketer's
                    monthly salary package starts from Rs.15,000 - Rs.25,000.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Does your Institute provide Laptops?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    We provide laptops during lessons so students can easily
                    understand and practice. We provide practical training to
                    them so that it becomes relatively easy for them when they
                    work on-site.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        After what duration can I expect to get the internship?
                        And, is it paid or unpaid?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Yes, we provide paid internships from the first month of
                    joining the course. We provide a stipend and practical
                    training in the internship.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Do you also provide weekend batches?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Yes, we offer weekend batches. Weekend batches are special
                    classes for working professionals or students who cannot
                    attend the weekday batches.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Are there any placement opportunities after the
                        completion of the course?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    We provide the Best Digital Marketing Course in Delhi, which
                    ensures 100% employment. After the training, you will be
                    placed in a good company; our primary goal is to place
                    students in their dream jobs. We assist you in becoming
                    fully proficient.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Can I pay the fee on an EMI basis?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Yes, you can pay the fee in easy installments. You won't
                    have to pay the total amount this way. Whereas you can pay
                    some amount and the rest, you can pay later in installments.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
