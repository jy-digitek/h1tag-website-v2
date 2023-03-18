import { BellIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Highlight,
  SimpleGrid,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";

export const UpSkillCarrier = () => {
  return (
    <Container maxW="full" px={[0, 20]} mt={10} bg={"#fff"}>
      <Box textAlign={"center"} px={[5, 20]}>
        <Heading fontSize="3xl" py={5}>
          <Highlight
            query=" Digital Marketing Course"
            styles={{ px: "1", py: "1", color: "#dc3545" }}
          >
            Upskill Your Career with Digital Marketing Course
          </Highlight>
        </Heading>
        <Highlight
          query={"Digital Marketing training"}
          styles={{ px: "1", py: "1", color: "#dc3545" }}
        >
          You can become a digital marketer & marketing specialist without
          leaving your job. Now upskill your skill with Delhi Institute of
          Digital Marketing. One place to learn from Manager Level Digital
          Marketing to Executive Level Digital Marketing training in Delhi in
          all practical ways. The high demand for digital marketing courses is
          suited for working professionals, job seekers, freelancers, students
          as well as entrepreneurs.
        </Highlight>
      </Box>
      <SimpleGrid columns={[1, 2, 2]} spacing={10} mt={10}>
        <Box>
          <Card display={"flex"} boxShadow={"dark-lg"} rounded={"6px"}>
            <Text>Logo</Text>
            <CardBody>
              <Heading as={"h2"} fontSize={"2xl"} color={"#dc3545"}>
                Advance Knowledge
              </Heading>
              <Text fontWeight={"bold"}>
                <Highlight
                  query="|"
                  styles={{ px: "1", py: "1", color: "#dc3545" }}
                >
                  Make your own website | Run live marketing campaigns | Live
                  projects | Case studies
                </Highlight>
              </Text>
              <Text>
                DIDM has designed a practical oriented advanced digital
                marketing course that best suits from student to a marketing
                specialist. While learning, get exposure to website designing
                without coding, live projects, and case studies to enhance your
                skills.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card display={"flex"} boxShadow="dark-lg" rounded={"6px"}>
            <Text>Logo</Text>
            <CardBody>
              <Heading as={"h2"} fontSize={"2xl"} color={"#dc3545"}>
                Quality Training
              </Heading>
              <Text fontWeight={"bold"}>
                <Highlight
                  query="|"
                  styles={{ px: "1", py: "1", color: "#dc3545" }}
                >
                  Online and Offline Training | Flexible Batch Timings | Weekday
                  and Weekend Batch | Micro Batch Size
                </Highlight>
              </Text>
              <Text>
                DIDM is committed to delivering the best digital marketing
                course learning outcomes with the facility of online/offline
                training and the option of choosing flexible batch timings by
                just dialing a number to our 24x7 customer support.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card display={"flex"} boxShadow="dark-lg" rounded={"6px"}>
            <Text>Logo</Text>
            <CardBody>
              <Heading as={"h2"} fontSize={"2xl"} color={"#dc3545"}>
                Smart Classes
              </Heading>
              <Text fontWeight={"bold"}>
                <Highlight
                  query="|"
                  styles={{ px: "1", py: "1", color: "#dc3545" }}
                >
                  Practical Classes | E-resources | E-learning | LMS learning |
                  Assessments | Deep Learning Experience
                </Highlight>
              </Text>
              <Text>
                Being a professional training institute, DIDM believes in
                high-quality practical training as per market standard. We
                provide online training sessions through LMS and provide study
                materials in video and text format so that students can refer to
                the videos even if they miss any class.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card display={"flex"} boxShadow="dark-lg" rounded={"6px"}>
            <Text>Logo</Text>
            <CardBody>
              <Heading as={"h2"} fontSize={"2xl"} color={"#dc3545"}>
                Certified Expert
              </Heading>
              <Text fontWeight={"bold"}>
                <Highlight
                  query="|"
                  styles={{ px: "1", py: "1", color: "#dc3545" }}
                >
                  Industry Expert | Google Certified Trainers | Top Mentors |
                  Experienced Faculty
                </Highlight>
              </Text>
              <Text>
                Our trainers are qualified Google certified industry experts who
                adopt an interactive approach during training and focuses on
                every individual to make them industry-ready by clearing the
                concepts and doubts. They also help trainees in resume building
                and job placements.
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
