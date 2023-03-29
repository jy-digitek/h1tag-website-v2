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
// import { CheckCircleIcon } from "@chakra-ui/icons";
export const TransFormingCourse = () => {
  return (
    <Container
      maxW={"full"}
      textAlign={"center"}
      // mt={5}
      py={8}
      style={{ background: "#f0f0f0" }}
    >
      <SimpleGrid columns={[1, null, 4]} spacing={6} mx={2} px={10}>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          p={3}
          borderRadius={8}
        >
          <Image src="icon.png" alt="Dan Abramov" />{" "}
          <Center ml={5}>100% Placement </Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          p={3}
          borderRadius={8}
        >
          <Image src="icon.png" alt="Dan Abramov" />{" "}
          <Center ml={5}>Paid Internship</Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          p={3}
          borderRadius={8}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center ml={5}>Classroom Training </Center>
        </Box>
        <Box
          bg="white"
          boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
          display={"flex"}
          px={2}
          borderRadius={8}
        >
          <Image src="icon.png" alt="Dan Abramov" />
          <Center ml={5}>Experienced Instructors</Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
