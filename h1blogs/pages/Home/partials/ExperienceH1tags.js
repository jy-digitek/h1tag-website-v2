import { Container, Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import React from "react";

export const ExperienceH1tags = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} pt={10}>
        Experience at H1 Tags
      </Heading>
      <Text textAlign={"center"} pb={10} fontSize={"20px"}>
        Real-world marketing work experience
      </Text>
      <SimpleGrid columns={[1, 2]} px={[0, 10]} fontSize={"20px"}>
        <Box px={[0, 5]}>
          <Text>
            H1 TAGS is the only Digital Marketing Institute in Delhi to give you
            real-world marketing work experience immediately.{" "}
          </Text>
          <Text>
            Work experience is the #1 thing hiring managers look at in
            determining who to hire, and you will now be able to give hiring
            managers the same marketing work experience they are asking for
            line-by-line in their job requirements section to help you get hired
            faster, by better companies, and for a better salary. Internships
            will be the same types of marketing projects you will get once you
            are hired (and then some).
          </Text>
          <Text>
            By the end of our program, you will be able to show on your resume
            under your work experience section that you have work experience in
            Social Media Marketing, Email Marketing, PPC Marketing, SEQ
            Marketing, Lead Generation, Data Analytics, Content Creation, and
            Copywriting which is way more than 99% of your competition can say
            for entry-level marketing jobs it's because of this work experience
            that H1 TAGS immediately gives you.
          </Text>
        </Box>
        <Box>ClassRoom Image</Box>
      </SimpleGrid>
    </Container>
  );
};
