import React from "react";
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
export const StudentFeedback = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} my={10}>
        Students’ Feedback
      </Heading>
      <SimpleGrid columns={[1, 2]} textAlign={"center"} fontFamily={"bold"}>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Text fontSize={"24px"} my={5}>
            Digital is The Future and We Care for Your Future
          </Text>
          <Text fontSize={"22px"} my={5}>
            Get A Free Demo Class Today!
          </Text>
          <Center>
            <Button bg="yellow" px={20} py={5} rounded={20}>
              Let’s Get Started
            </Button>
          </Center>
          <Text my={5}>Join the Best Digital Marketing Institute in Delhi</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
