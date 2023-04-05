import {
  Container,
  // Heading,
  SimpleGrid,
  Box,
  // Center,
  // Button,
  Flex,
} from "@chakra-ui/react";

// import { FaArrowRight } from "react-icons/fa";
// import { GlobalButton } from "../../../components/GlobalButton";
import { GlobalButton } from "../../../components/GlobalButton";
import { SectionTitle } from "../../../components/SectionTitle";
import { CareerOptionData } from "../../../components/DATA";
export const CareerOption = () => {
  return (
    <Container
      maxW={"full"}
      px={[5, 10]}
      // linear-gradient(to left, rgb(130 146 244 / 81%), rgb(23 33 87 / 80%)),url(crbg.jpg)
      // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      sx={{
        // background: "url(/crbg.jpg)",
        backgroundImage:
          "linear-gradient(to left, rgb(130 146 244 / 81%), rgb(23 33 87 / 80%)),url(crbg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      // className="ooo"
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
            // p: 5,
            py: 12,
            background: "#ffffffb8",
            backdropFilter: "blur(8px)",
            rounded: 8,
          }}
          boxShadow={8}
        >
          <SectionTitle mb={1}>
            Career Options after Digital Marketing Course
          </SectionTitle>
          {CareerOptionData.map((item, key) => {
            return (
              <Flex
                // my={10}
                px={[5, 10]}
                py={4}
                key={key}
                alignItems={"center"}
                borderBottom={"1px solid #dcd7e3"}
                sx={{ ":hover": { background: "#e3e1e5", transition: ".5s" } }}
              >
                <Box
                  boxSize={12}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#e3f2fd"}
                  border={"4px solid #3950a1"}
                  borderRadius={40}
                  textAlign={"center"}
                >
                  {key + 1}
                </Box>
                <Box as="h3" fontWeight={"bold"} px={3}>
                  {item}
                </Box>
              </Flex>
            );
          })}
          <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
            <GlobalButton
              label={"Kick Start Your Career"}
              //color={"yellow"}
              maxW="100%"
              background="#3950a1"
              _hover={{ background: "#101C32" }}
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
