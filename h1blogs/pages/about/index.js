import Layout from "../../components/layout";
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Highlight,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Grid,
  GridItem,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import styles from "../../styles/About.module.css";
import { FiArrowRightCircle } from "react-icons/fi";

const About = () => {
  return (
    <Layout>
      <Container maxW={"full"} className={styles.background}>
        {/* image start here  */}
        <Box>
          <Image src={"/test/aboutbanner.jpeg"} />
        </Box>

        {/* image end here  */}

        {/* digital marketing Start */}
        <Box textAlign={"center"} my={10} mx={[5, 20]}>
          <Heading textAlign={"center"} py={5}>
            Best Digital Marketing Course in Delhi
          </Heading>
          <Text>
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
          </Text>
        </Box>
        {/* digital marketing end */}

        {/* Our Vision Start */}
        <SimpleGrid columns={[1, 2]} mx={[5, 20]}>
          <Box>
            <Image src={"/test/ourmission.jpeg"} minH={"330px"} />
          </Box>
          <Box textAlign={"center"} px={5}>
            <Heading textAlign={"center"} py={5}>
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
            </Text>
          </Box>
        </SimpleGrid>

        {/* our vision end */}

        {/* Track record start */}
        <Box textAlign={"center"} my={10} mx={[5, 20]}>
          <Heading py={5}>Our Track Record…</Heading>
          <Text>
            We are a Digital Marketing Agency-based Institute that has strong
            partnerships with several IT companies. Well-reputed and known
            organizations actively seek out our students, as we provide on-site
            training.
          </Text>
          <SimpleGrid columns={[1, 4]} py={20} spacing={6} bg={"white"} px={10}>
            <Box
              p={10}
              // boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"blue.100"}
              borderRadius={10}
            >
              <Text color={"blue"} fontWeight={"bold"} fontSize={"2rem"}>
                1000+
              </Text>{" "}
              Students Trained
            </Box>
            <Box
              p={10} //boxShadow={"10px 10px 5px 12px red"}
              bg={"red.100"}
              borderRadius={10}
            >
              <Text color={"red.300"} fontWeight={"bold"} fontSize={"2rem"}>
                {" "}
                100+
              </Text>
              Hiring Partners
            </Box>
            <Box
              p={10} //</SimpleGrid>boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"green.100"}
              borderRadius={10}
            >
              <Text color={"green.300"} fontWeight={"bold"} fontSize={"2rem"}>
                700+
              </Text>
              Students Placed
            </Box>
            <Box
              p={10}
              //boxShadow={"10px 10px 5px 12px lightblue"}
              bg={"orange.100"}
              borderRadius={10}
            >
              <Text color={"orange.300"} fontWeight={"bold"} fontSize={"2rem"}>
                {" "}
                300+
              </Text>
              Salary Hike
            </Box>
          </SimpleGrid>
        </Box>
        {/* Track record end */}

        {/* director portfolio starts here */}
        <SimpleGrid columns={[1, 2]} my={10} mx={[5, 20]}>
          <Box>
            <Image
              src={"https://via.placeholder.com/600x400"}
              maxH={"500px"}
              w={"100%"}
              //style={{ float: "right" }}
              pr={5}
            />
          </Box>
          <Box
            className={styles.portfolio_background}
            color="white"
            p={5}
            borderRadius={10}
          >
            <Heading>MESSAGE FROM DIRECTOR</Heading>
            <Text>
              Our sole and complete mission is to teach the value of Digital
              Marketing by utilizing and creating a viable digital career path
              for you. We assist you in providing an understanding of the
              section-wise method so that you can comprehend the process at your
              own pace and put extra efforts into the program that you like.
            </Text>
            <Heading>YUVRAJ SINGH</Heading>
            <Highlight query="Director" styles={{ color: "red" }}>
              Director
            </Highlight>
            <Text>
              Mr. Yuvraj Singh, born to be an entrepreneur, began his career by
              accomplishing many ventures like H1 TAGS, the top Digital
              Marketing Institute in Delhi NCR with a proven track record of
              developing and directing high-impact Digital Marketing Strategies.
              Skilled in overseeing web strategy and development, digital
              engagement, and consumer-facing tools. Adept in guiding strategic
              relationships to achieve company goals.
            </Text>
          </Box>
        </SimpleGrid>
        {/* director portfolio ends here */}

        {/* cofounder portfolio starts here */}

        <SimpleGrid columns={[1, 2]} my={10} mx={[5, 20]}>
          <Box
            className={styles.portfolio_background}
            color="white"
            py={5}
            borderRadius={10}
          >
            <Heading ml={5}>AKSHAY </Heading>
            <Highlight
              ml={5}
              query="Co-founder"
              styles={{ px: "1", py: "1", color: "red", ml: "5" }}
            >
              Co-founder
            </Highlight>
            <Text w={"70%"} ml={5}>
              He is very good at organizing Digital Marketing Strategies and
              developing new and innovative SEO strategies. His planning skills
              for digital marketing strategies, SEO (on-page and off-page), and
              coming up with fresh, innovative ideas for SEO development
              strategies are top-notch. He has excellent team administration and
              teaching skills. He has excellent team administration and teaching
              skills, and his ideas for team-building exercises are fantastic.
              Under his guidance, students gain the skills of professional
              Digital Marketers. His mission is to provide the best knowledge
              possible to his students.
            </Text>
          </Box>
          <Box>
            {" "}
            <Image
              src={"https://via.placeholder.com/600x400"}
              maxH={"500px"}
              w={"100%"}
              //style={{ float: "right" }}
              px={5}
            />
          </Box>
        </SimpleGrid>
        {/* cofounder portfolio ends here */}

        {/* why choose us starts here */}

        <Divider />
        <SimpleGrid columns={[1, 2, 2]} mx={[5, 20]} pt={10}>
          <Box>
            <Flex justifyContent="space-around">
              <Heading fontWeight={"normal"}>Why Choose US?</Heading>
              <FiArrowRightCircle fontSize={"30px"} />
            </Flex>
          </Box>
          <Box>
            <Text pl={5}>
              H1 Tags -School of Digital Marketing and Web Development is one of
              India's top Digital Marketing institutions in Delhi-NCR. We
              studied several entry-level marketing job openings and designed
              our syllabus according to the market demand for our students to
              get easy placements. Companies hiring from H1 Tags include Amazon,
              Axis Bank, Google, PC Solutions, DH IT Solutions, Wipro,
              Accenture, Genpact, 360 Realtors, HCL, NVidia, Microsoft, HDFC
              Bank, Ogilvy, and many more.
            </Text>
          </Box>
        </SimpleGrid>
        {/* why choose us ends here */}
        <Divider py={5} />
        {/* your carrer matters starts here */}

        <SimpleGrid
          columns={[1, 2, 2]}
          mx={[5, 20]}
          pt={10}
          bg={"linear - gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"}
        >
          <Box>
            <Flex justifyContent="space-around">
              <Heading fontWeight={"normal"}>
                {" "}
                Your Career Matters to us
              </Heading>
              <FiArrowRightCircle fontSize={"30px"} fontWeight={"normal"} />
            </Flex>
          </Box>
          <Box pl={5}>
            <UnorderedList>
              <ListItem>
                We provide our students with counseling and professional and
                placement services
              </ListItem>
              <ListItem>
                Our work training program makes students easily adjust to the
                actual work culture.
              </ListItem>
              <ListItem>
                Our trainer provides follow-up sessions with each student
                separately so that they can clear every doubt.
              </ListItem>
              <ListItem>
                During training, these sessions include career counseling,
                resume preparation, and practice job interviews with proper
                reports. Our trainers focus on topics mostly asked during
                interviews.
              </ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
        {/* your carrer matters ends here */}
        <Box my={10}>
          <Heading textAlign={"center"} py={5}>
            FAQ’s
          </Heading>
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
