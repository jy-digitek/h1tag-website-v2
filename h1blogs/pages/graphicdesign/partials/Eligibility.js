import React from "react";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const Eligibility = () => {
  return (
    <Container sx={{ background: "url(/bg-img.jpeg)" }} maxW={"full"} py={10}>
      <SimpleGrid columns={[1, 2]}>
        <Box />
        <Box sx={{ lineHeight: 2, background: "#fff", p: 7, rounded: 5 }}>
          <SectionTitle children="Who can do this Course?" />
          <Box as="p">
            No Need for a Specific Qualification or Degree, Our Graphic
            Designing course is open to students who have completed their 12th
            graduation (from any stream) and working professionals who want to
            switch careers. Anyone who has a passion for designing and is of a
            creative mind is welcome to join this course and can get a
            high-paying job.
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
