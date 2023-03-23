import {
  Box,
  Image,
  Heading,
  Center,
  SimpleGrid,
  Highlight,
  Text,
  Container,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
export const TransFormingCourse = () => {
  return (
    <Container maxW={"full"} textAlign={"center"} mt={2}>
      {/* <Heading>
        <Highlight
          query="Digital Marketing Course"
          styles={{ px: "1", py: "1", color: "#dc3545", fontWeight: "bold" }}
        >
          Digital Marketing Course
        </Highlight>{" "}
        Your Career
      </Heading> */}
      {/* <Text textAlign={"center"} px={[2, 20]} py={[5, 10]}>
        Do you lack the skills you need to move ahead? Now, you can become a
        digital marketing specialist without leaving your job. Boost your career
        with the Delhi Institute of Digital Marketing. A place to learn digital
        marketing from Executive Level to Manager Level in all practical ways.
        The high demand for a digital marketing course is best suited for
        working professionals, job seekers, freelancers, students, and
        entrepreneurs.
      </Text> */}
      <SimpleGrid columns={[1, null, 4]} spacing={6} mx={2} px={10}>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />{" "}
          <Center ml={5}>100% Placement </Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />{" "}
          <Center ml={5}>Paid Internship</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center ml={5}>Classroom Training </Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center ml={5}>Experienced Instructors</Center>
        </Box>
        {/* <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center>100% Placement Asssistance</Center>
        </Box> */}
      </SimpleGrid>
    </Container>
  );
};
