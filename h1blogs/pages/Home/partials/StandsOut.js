import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";

export const StandsOut = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} py={10}>
        How H1 Tags stands out from others?
      </Heading>
      <SimpleGrid
        columns={[1, 2, 2]}
        px={[0, 10]}
        fontFamily="bold"
        fontSize={"20px"}
      >
        <Box>
          <Image src={"/h1Standout.png"} boxSize={"100%"} />
        </Box>
        <Box px={[0, 10]}>
          <Text>
            H1 Tags is an agency-based Digital Marketing Institute in Delhi that
            provides top Digital Marketing Courses and a solid platform for
            students to build a strong future for themselves. We ensure that our
            students get a decent package once they enroll in our training. Our
            training programs will help to distinguish yourself from the
            competition to have a great job in an ever-competitive area. To be
            successful in Digital Marketing, you must deliver your A-game. You
            must demonstrate to your potential that you are a confident
            professional and have the skills to hold your own at their company.
            One of the most difficult choices students must make is where to
            study. Many students receive assistance from the educational
            institute. H1 Tags: An Agency-based institute provides its students
            the ladder they need to fulfill their goals.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
