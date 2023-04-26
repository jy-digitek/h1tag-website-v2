import React from "react";
import Layout from "../components/layout";
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
import styles from "../styles/About.module.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { VscArrowCircleRight } from "react-icons/vsc";
import { SectionTitle } from "../components/SectionTitle";
import { MdCheckCircle } from "react-icons/md";
import { GlobalButton } from "../components/GlobalButton";
import ReturnFocus from "../components/Modal";
import ContactForm from "../components/contactform";
import SEOTags from "../components/Head";
const About = () => {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Layout>
      <SEOTags
        title={"Best Digital Marketing Training Institute in Delhi"}
        description={
          "Best Digital Marketing Training Institute in Delhi- H1 Tags. Offline Classes | Live Projects | 20+ certifications | 3 months duration | Get Future-ready Today!"
        }
      />
      <Container maxW={"full"} p={0}>
        {/* image start here  */}
        <Box position="relative" p={0}>
          <Image src={"/aboutBanner.jpg"} w={"100%"} />
        </Box>

        {/* image end here  */}

        {/* digital marketing Start */}
        <Box
          textAlign={"center"}
          mt={10}
          background={
            "linear - gradient(-100deg,rgba(255, 20, 0, 0.2),rgba(255, 20, 0, 0.7) 95%,rgba(255, 20, 0, 0.1))"
          }
          borderRadius={"1em 0 1em 0"}
        >
          <SectionTitle
            // background={
            //   "linear - gradient(-100deg,rgba(255, 20, 0, 0.2),rgba(255, 20, 0, 0.7) 95%,rgba(255, 20, 0, 0.1))"
            // }
            // borderRadius={"1em 0 1em 0"}

            mx={[0, "80px", 60]}
            color={"black"}
            pb={2}
          >
            Best Digital Marketing Institute in Delhi
          </SectionTitle>

          <Box sx={{ padding: 10 }} px={[0, 20]}>
            <Text px={[0, 20]}>
              <strong>H1 Tags:</strong>An Institute of Digital Marketing
              provides the Best Digital Marketing Course in Delhi with training
              programs in a variety of areas, such as SEO, PPC, Social Media
              Marketing, Content Management, and more, allowing students to
              learn the most current methods in the field of Digital Marketing.
              With over 10+ years of experience in Digital Marketing, our
              institute assists you in achieving your objectives and entering
              the industry. We have a team of Digital Marketing experts who have
              years of knowledge in their field and are well-experienced. Our
              team is dedicated to providing the students with the best
              knowledge possible.
            </Text>
          </Box>
        </Box>
        {/* digital marketing end */}

        {/* Our Vision Start */}
        <SimpleGrid
          columns={[1, 1]}
          sx={{ background: "url(/bg-img.jpeg)" }}
          px={[5, "80px", 60]}
          py={10}
        >
          <Box px={[0, 10]}>
            <Box sx={{ lineHeight: 2, background: "#fff", p: 7, rounded: 5 }}>
              <SectionTitle mb={10}>Our Vision</SectionTitle>
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
        </SimpleGrid>

        {/* our vision end */}

        {/* Track record start */}
        <Box textAlign={"center"} my={10}>
          <SectionTitle mb={10}>Our Track Record…</SectionTitle>
          <Text px={[5, 10, 20]} color={"black"} fontSize={20}>
            We are a Digital Marketing Agency-based Institute that has strong
            partnerships with several IT companies. Well-reputed and known
            organizations actively seek out our students, as we provide on-site
            training.
          </Text>
          <SimpleGrid
            columns={[1, 2, 4]}
            py={10}
            spacing={6}
            px={10}
            color={"#ffffff"}
          >
            <Box
              p={10}
              // boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"radial-gradient(#1fe4f5, #3fbafe)"}
              borderRadius={10}
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
            >
              <Text fontWeight={"bold"} fontSize={"2rem"}>
                {" "}
                300+
              </Text>
              Salary Hike
            </Box>
          </SimpleGrid>
          <Box>
            <ReturnFocus
              btnText={"Book Counselling Today"}
              rounded={"full"}
              children={<ContactForm />}
              openModalSet={openModalSet}
              label={"Book Counselling Today"}
              color="white"
              px={5}
            />
          </Box>
        </Box>
      </Container>
      {/* Track record end */}

      {/* director portfolio starts here */}
      {/* <Container
        maxW={"full"}
        sx={{
          py: 15,
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
        }}
      >
        <Box maxW={"5xl"} mx={"auto"}>
          <SimpleGrid columns={[1, 1, 2]} gap={0} my={10} alignItems={"center"}>
            <Box
              sx={{
                maxW: 450,
              }}
            >
              <Image src={"/Yuvraj_singh.png"} />
            </Box>
            <Box className={styles.about}>
              <SectionTitle fontSize={10}>MESSAGE FROM DIRECTOR</SectionTitle>
              <Text pT={10} pb={5}>
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
              <Highlight
                query="Director"
                styles={{
                  color: "#010b2e",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                py={7}
              >
                Director
              </Highlight>
              <Text>
                Mr. Yuvraj Singh is an accomplished entrepreneur who has made a
                name for himself in the world of digital marketing. Born with an
                innate entrepreneurial spirit, Yuvraj started his career by
                launching several ventures, including H1 TAGS, which is now
                recognized as the top Digital Marketing Institute in Delhi NCR.
              </Text>
              <Text>
                With a proven track record of developing and directing
                high-impact digital marketing strategies, Yuvraj is an expert in
                overseeing web strategy and development, digital engagement, and
                consumer-facing tools. He has a deep understanding of the latest
                trends and best practices in digital marketing and is skilled in
                guiding strategic relationships to achieve company goals.
              </Text>
              <Text>
                Under Yuvraj's leadership, H1 TAGS has become the go-to
                destination for individuals and businesses looking to improve
                their digital marketing skills. The institute offers a
                comprehensive curriculum covering all aspects of digital
                marketing, including SEO, PPC advertising, social media
                marketing, email marketing, content marketing, and more.
              </Text>
              <Text>
                Yuvraj is highly regarded in the industry for his exceptional
                leadership skills and his ability to inspire and motivate his
                team. He is a strategic thinker who is always looking for
                innovative ways to improve the performance of his company and
                his clients' businesses.
              </Text>
              <Text>
                In addition to his work at H1 TAGS, Yuvraj is also involved in
                several other ventures and is a respected thought leader in the
                field of digital marketing. He is known for his dynamic and
                engaging speaking style and has been invited to speak at various
                conferences and events.
              </Text>
              <Text>
                Outside of work, Yuvraj is a fitness enthusiast who enjoys
                playing sports and staying active. He is a true entrepreneur at
                heart and is constantly looking for new and exciting
                opportunities to make a positive impact in the world.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container> */}
      {/* director portfolio ends here */}
      <Container
        maxW={"full"}
        sx={{
          py: 15,
          background: "rgb(2,0,36)",
          background: "linear-gradient(380deg, #101C32 63%, gray 63%)",
        }}
      >
        <SimpleGrid columns={[1, 1, 2]} px={[2, 10]}>
          <Box>
            <Image src={"/Yuvraj_singh.png"} />
          </Box>
          <Box color={"white"}>
            <SectionTitle fontSize={10}>MESSAGE FROM DIRECTOR</SectionTitle>
            <Text pT={10} pb={5}>
              Our sole and complete mission is to teach the value of Digital
              Marketing by utilizing and creating a viable digital career path
              for you. We assist you in providing an understanding of the
              section-wise method so that you can comprehend the process at your
              own pace and put extra efforts into the program that you like.
            </Text>
            <Heading
              fontSize={28}
              // sx={{
              //   fontsize: "12px",
              // }}
            >
              YUVRAJ SINGH
            </Heading>
            <Highlight
              query="Director"
              styles={{
                color: "#010b2e",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              py={7}
            >
              Director
            </Highlight>
            <Text>
              Mr. Yuvraj Singh is an accomplished entrepreneur who has made a
              name for himself in the world of digital marketing. Born with an
              innate entrepreneurial spirit, Yuvraj started his career by
              launching several ventures, including H1 TAGS, which is now
              recognized as the top Digital Marketing Institute in Delhi NCR.
            </Text>
            <Text>
              With a proven track record of developing and directing high-impact
              digital marketing strategies, Yuvraj is an expert in overseeing
              web strategy and development, digital engagement, and
              consumer-facing tools. He has a deep understanding of the latest
              trends and best practices in digital marketing and is skilled in
              guiding strategic relationships to achieve company goals.
            </Text>
            <Text>
              Under Yuvraj's leadership, H1 TAGS has become the go-to
              destination for individuals and businesses looking to improve
              their digital marketing skills. The institute offers a
              comprehensive curriculum covering all aspects of digital
              marketing, including SEO, PPC advertising, social media marketing,
              email marketing, content marketing, and more.
            </Text>
            <Text>
              Yuvraj is highly regarded in the industry for his exceptional
              leadership skills and his ability to inspire and motivate his
              team. He is a strategic thinker who is always looking for
              innovative ways to improve the performance of his company and his
              clients' businesses.
            </Text>
            <Text>
              In addition to his work at H1 TAGS, Yuvraj is also involved in
              several other ventures and is a respected thought leader in the
              field of digital marketing. He is known for his dynamic and
              engaging speaking style and has been invited to speak at various
              conferences and events.
            </Text>
            <Text>
              Outside of work, Yuvraj is a fitness enthusiast who enjoys playing
              sports and staying active. He is a true entrepreneur at heart and
              is constantly looking for new and exciting opportunities to make a
              positive impact in the world.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* cofounder portfolio starts here */}
      <Container
        maxW={"full"}
        sx={{
          py: 15,
          background: "rgb(2,0,36)",
          background: "linear-gradient(380deg,  gray 63%, #101C32 63%)",
        }}
        color={"white"}
      >
        {/* director portfolio starts here */}
        {/* <Box maxW={"5xl"} mx={"auto"}>
          <SimpleGrid columns={[1, 1, 2]} gap={0} my={10} alignItems={"center"}>
            <Box className={styles.about}>
              <Heading fontSize={28}>AKSHAY</Heading>
              <Highlight
                query="Co-Founder"
                styles={{
                  color: "#010b2e",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                py={7}
              >
                Co-Founder
              </Highlight>

              <Text>
                Akshay is a highly skilled digital marketer with over 8 years of
                experience in the field. He is currently working as the Vice
                President at JY Technologies Consulting Pvt Ltd., where he
                oversees the company's digital marketing strategies and ensures
                that their online presence is optimized for maximum impact.
              </Text>
              <Text>
                Apart from his role at JY Technologies, Akshay is also a
                co-founder of a H1 Tags Digital Marketing institute where he is
                committed to providing high-quality education and training to
                students and professionals alike. He has developed a
                comprehensive curriculum covering all aspects of digital
                marketing, including SEO, PPC advertising, social media
                marketing, email marketing, content marketing, and more.
              </Text>
              <Text>
                Akshay is known for his exceptional teaching skills and his
                ability to make complex concepts easy to understand. He has a
                passion for helping others succeed in the fast-paced and
                ever-evolving world of digital marketing.
              </Text>
              <Text>
                In his role as the Vice President at JY Technologies, Akshay is
                responsible for developing and executing digital marketing
                strategies that drive business growth. He is an expert in
                leveraging various digital platforms and tools to help companies
                reach their target audience and achieve their marketing goals.
              </Text>
              <Text>
                With his extensive experience and expertise in digital
                marketing, Akshay is a thought leader in the industry. He has
                published articles and spoken at conferences on various topics
                related to digital marketing, sharing his insights and knowledge
                with others in the field.
              </Text>
              <Text>
                Outside of work, Akshay enjoys traveling and exploring new
                cultures. He is a dedicated professional who is committed to
                helping individuals and businesses succeed in the dynamic world
                of digital marketing.
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
        </Box> */}
        {/* director portfolio ends here */}

        <SimpleGrid columns={[1, 1, 2]} px={[2, 10]}>
          <Box>
            <Heading fontSize={28}>AKSHAY</Heading>
            <Highlight
              query="Co-Founder"
              styles={{
                color: "#010b2e",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              py={7}
            >
              Co-Founder
            </Highlight>

            <Text>
              Akshay is a highly skilled digital marketer with over 8 years of
              experience in the field. He is currently working as the Vice
              President at JY Technologies Consulting Pvt Ltd., where he
              oversees the company's digital marketing strategies and ensures
              that their online presence is optimized for maximum impact.
            </Text>
            <Text>
              Apart from his role at JY Technologies, Akshay is also a
              co-founder of a H1 Tags Digital Marketing institute where he is
              committed to providing high-quality education and training to
              students and professionals alike. He has developed a comprehensive
              curriculum covering all aspects of digital marketing, including
              SEO, PPC advertising, social media marketing, email marketing,
              content marketing, and more.
            </Text>
            <Text>
              Akshay is known for his exceptional teaching skills and his
              ability to make complex concepts easy to understand. He has a
              passion for helping others succeed in the fast-paced and
              ever-evolving world of digital marketing.
            </Text>
            <Text>
              In his role as the Vice President at JY Technologies, Akshay is
              responsible for developing and executing digital marketing
              strategies that drive business growth. He is an expert in
              leveraging various digital platforms and tools to help companies
              reach their target audience and achieve their marketing goals.
            </Text>
            <Text>
              With his extensive experience and expertise in digital marketing,
              Akshay is a thought leader in the industry. He has published
              articles and spoken at conferences on various topics related to
              digital marketing, sharing his insights and knowledge with others
              in the field.
            </Text>
            <Text>
              Outside of work, Akshay enjoys traveling and exploring new
              cultures. He is a dedicated professional who is committed to
              helping individuals and businesses succeed in the dynamic world of
              digital marketing.
            </Text>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <Image src={"/Akshay.png"} />
          </Box>
        </SimpleGrid>
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
                    label={" Get started today"}
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
                      label={"Get started today"}
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
                      Your career matters to us
                    </SectionTitle>
                  </Stack>
                  <Stack direction={"row"} gap={10}>
                    <GlobalButton
                      rounded={"full"}
                      color={"white"}
                      label={"Get started today"}
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
        <Box my={[0, 10]}>
          <SectionTitle mb={10}>FAQ’s</SectionTitle>
          <Accordion allowMultiple mx={[5, 10, 60]}>
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
