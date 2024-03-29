import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import Carousel from "../../../components/Carousel";
import { GlobalButton } from "../../../components/GlobalButton";
import { SectionTitle } from "../../../components/SectionTitle";
const StudentFeedback = () => {
  return (
    <Container maxW={"full"} px={[5, 10]} id={"review"} pb={10}>
      <SectionTitle py={10}>Students’ Feedback</SectionTitle>
      <SimpleGrid columns={[1, 2]} textAlign={"center"} alignItems={"center"}>
        <Box>
          <Carousel />
        </Box>
        <Box px={10}>
          <Text fontSize={"3xl"} my={5} fontWeight={"bold"}>
            Digital is The Future and We Care for Your Future
          </Text>
          <Text fontSize={"22px"} my={5}>
            Get A Free Demo Class Today!
          </Text>
          <Center>
            <GlobalButton
              label={"Let’s Get Started"}
              background="#3950a1"
              _hover={{ background: "#101C32" }}
            />
          </Center>
          <Text my={5}>Join the Best Digital Marketing Institute in Delhi</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default StudentFeedback;
