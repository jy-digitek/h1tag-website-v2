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
import { GlobalButton } from "../../../components/Button";
export const StudentFeedback = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} my={10}>
        Students’ Feedback
      </Heading>
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
            <GlobalButton children={" Let’s Get Started"} color="yellow" />
          </Center>
          <Text my={5}>Join the Best Digital Marketing Institute in Delhi</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
