import React from "react";
import { Container, Image, Grid, Hide, Box, GridItem } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const Eligibility = () => {
  return (
    <Box py={10}>
      <Container maxW={"6xl"} backgroundColor={"#e4f0e7"}>
        <Grid templateColumns="repeat(6, 1fr)" gap={5}>
          <GridItem colSpan={[1, 5]}>
            <Box position={"relative"} p={8}>
              <SectionTitle children="Who can do this Course?" />
              <Box as="p">
                No Need for a Specific Qualification or Degree, Our Graphic
                Designing course is open to students who have completed their
                12th graduation (from any stream) and working professionals who
                want to switch careers. Anyone who has a passion for designing
                and is of a creative mind is welcome to join this course and can
                get a high-paying job.
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Hide below="sm">
              <Image
                src="https://web.moxcreative.com/ekursus/wp-content/uploads/sites/24/2023/03/img_1.png"
                alt=""
                minWidth={"450px"}
                marginTop={"-2.5rem"}
              />
            </Hide>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
