import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GlobalButton } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
export const CarrerOption = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      {/* <Heading textAlign={"center"} py={10}>
       
      </Heading> */}
      <SectionTitle mb={10}>
        Career Options after Digital Marketing Course
      </SectionTitle>
      <SimpleGrid
        columns={[0, 5]}
        px={[0, 10]}
        spacing={5}
        fontWeight={"bold"}
        fontSize={"20px"}
      >
        <Box p={10} boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)">
          Full Time/Part Time Job
        </Box>
        <Box p={10} boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)">
          Start Your Own Global Digital Marketing Agency
        </Box>
        <Box p={10} boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)">
          Become A Freelancer
        </Box>
        <Box p={10} boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)">
          Grow Your Own Business
        </Box>
        <Box p={10} boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)">
          Become Blogger / Vlogger / Influencer
        </Box>
      </SimpleGrid>
      <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
        <GlobalButton children={"Kick Start Your Career"} color={"yellow"} />
      </Box>
    </Container>
  );
};
