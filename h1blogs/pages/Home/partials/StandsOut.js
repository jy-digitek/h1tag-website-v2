import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/Button";

export const StandsOut = () => {
  return (
    <Box sx={{ background: "url(/bg-img.jpeg)" }}>
      <Container maxW={"full"} px={[5, 10]}>
        <SimpleGrid columns={[1, 2, 2]} px={[0, 10]}>
          <Box>{/* <Image src={"/h1Standout.png"} boxSize={"100%"} /> */}</Box>
          <Box px={[0, 10]} my={10}>
            <Box sx={{ lineHeight: 2, background: "#fff", p: 7, rounded: 5 }}>
              <SectionTitle lineHeight="50px" mb={2}>
                How H1 Tags stands out from others?
              </SectionTitle>
              <Box as="p" sx={{ mb: 2 }}>
                H1 Tags is an agency-based Digital Marketing Institute in Delhi
                that provides top Digital Marketing Courses and a solid platform
                for students to build a strong future for themselves. We ensure
                that our students get a decent package once they enroll in our
                training.
              </Box>
              <Box as="p" sx={{ mb: 2 }}>
                Our training programs will help to distinguish yourself from the
                competition to have a great job in an ever-competitive area. To
                be successful in Digital Marketing, you must deliver your
                A-game. You must demonstrate to your potential that you are a
                confident professional and have the skills to hold your own at
                their company.
              </Box>
              One of the most difficult choices students must make is where to
              study. Many students receive assistance from the educational
              institute. H1 Tags: An Agency-based institute provides its
              students the ladder they need to fulfill their goals.
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <GlobalButton
                  sx={{ width: "100%", background: "#16acff", color: "#fff" }}
                >
                  Call Now
                </GlobalButton>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
