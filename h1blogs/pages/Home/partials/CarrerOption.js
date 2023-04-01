import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GlobalButton } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import { CarrerOptionData } from "../../../components/DATA";
export const CarrerOption = () => {
  return (
    <Container
      maxW={"full"}
      px={[5, 10]}
      sx={{
        background: "url(/crbg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="ooo"
    >
      {/* <Heading textAlign={"center"} py={10}>
       
      </Heading> */}
      <SimpleGrid
        columns={[0, 2]}
        px={[0, 10]}
        spacing={5}
        fontSize={"20px"}
        padding={[0, 20]}
      >
        <Box></Box>
        <Box
          sx={{
            p: 5,
            background: "#ffffffb8",
            backdropFilter: "blur(8px)",
            rounded: 8,
          }}
          boxShadow={8}
        >
          <SectionTitle mb={1}>
            Career Options after Digital Marketing Course
          </SectionTitle>
          {CarrerOptionData.map((item, key) => {
            return (
              <Flex my={10} px={5}>
                <Box
                  boxSize={10}
                  bg={"#e3f2fd"}
                  border={"1px solid #3950a1"}
                  borderRadius={40}
                  textAlign={"center"}
                >
                  {key + 1}
                </Box>
                <Box px={3}>{item}</Box>
              </Flex>
            );
          })}
          <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
            <GlobalButton
              children={"Kick Start Your Career"}
              color={"yellow"}
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
