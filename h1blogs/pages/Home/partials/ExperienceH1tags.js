import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Image,
  Stack,
  Show,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
const ExperienceH1tags = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Stack>
        <SectionTitle as="h2" py={10} desc={"Real-world marketing work experience"}>
          Experience at H1 Tags
        </SectionTitle>
      </Stack>
      <SimpleGrid columns={[1, 1, 1, 2]} px={[0, 10]} mb={[10]} fontSize={"20px"}>
        <Box px={[0, 0, 5]}>
          <Box as="p"
            sx={{
              lineHeight: 2,


              pb: 5,
              fontSize: "16px",
            }}
          >
            H1 TAGS is the only Digital Marketing Institute in Delhi to give you
            real-world marketing work experience immediately.{" "}
          </Box>
          <Box as="p"
            sx={{
              lineHeight: 2,


              pb: 5,
              fontSize: "16px",
            }}
          >
            Work experience is the #1 thing hiring managers look at in
            determining who to hire, and you will now be able to give hiring
            managers the same marketing work experience they are asking for
            line-by-line in their job requirements section to help you get hired
            faster, by better companies, and for a better salary. Internships
            will be the same types of marketing projects you will get once you
            are hired (and then some).
          </Box>
          <Box as="p"
            sx={{
              lineHeight: 2,


              pb: 5,
              fontSize: "16px",
            }}
          >
            By the end of our program, you will be able to show on your resume
            under your work experience section that you have work experience in
            Social Media Marketing, Email Marketing, PPC Marketing, SEQ
            Marketing, Lead Generation, Data Analytics, Content Creation, and
            Copywriting which is way more than 99% of your competition can say
            for entry-level marketing jobs it's because of this work experience
            that H1 TAGS immediately gives you.
          </Box>
        </Box>
        <Show below="sm">

          <Image src={"/classroom-image.png"} />

        </Show>
      </SimpleGrid>
    </Container>
  );
};

export default ExperienceH1tags;
