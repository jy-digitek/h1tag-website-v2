import {
  Container,
  // Heading,
  SimpleGrid,
  Box,
  // Center,
  // Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { GlobalButton } from "../../../components/GlobalButton";
import { GlobalButton } from "../../../components/GlobalButton";
import { SectionTitle } from "../../../components/SectionTitle";
import { CareerOptionData } from "../../../components/DATA";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";
const CareerOption = () => {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Container
      maxW={"full"}
      px={[5, 10]}
      py={[10, 10, 10]}
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
        columns={[0, 1, 2]}
        // my={[10]}
        fontSize={"20px"}
        padding={[0, 0, 20]}
        // py={[5]}
      >
        <Box />
        <Box
          sx={{
            // p: 5,
            py: 12,
            background: "#ffffffb8",
            backdropFilter: "blur(8px)",
            rounded: 8,
          }}
          // boxShadow={8}
        >
          <SectionTitle as="h2" mb={1} px={[20, 5]}>
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
                sx={{
                  ":hover": { background: "#e3e1e5", transition: ".5s" },
                }}
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
                <Box as="p" fontWeight={"bold"} px={3}>
                  {item.label}
                </Box>
              </Flex>
            );
          })}
          <Box sx={{ mt: 7, display: "flex", justifyContent: "center" }}>
            {/* <GlobalButton
              label={"Kick Start Your Career"}
              //color={"yellow"}
              maxW="100%"
              background="#3950a1"
              _hover={{ background: "#101C32" }}
            /> */}
            <ReturnFocus
              btnText={`Kick Start Your Career`}
              children={<ContactForm />}
              openModalSet={openModalSet}
              // isEditingSet={isEditingSet}
              label="Kick Start Your Career"
              color="white"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default CareerOption;
