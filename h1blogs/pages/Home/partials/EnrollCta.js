import React from "react";
import {
  Container,
  Box,
  Heading,
  Center,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";

const EnrollCta = () => {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Container
      maxW={"full"}
      background={
        "linear-gradient(45deg, rgb(3 10 46), rgb(0 0 0 / 75%)),url(/cta-bg.jpg)"
      }
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      color={"white"}
    >
      <SimpleGrid columns={[1, 2]}>
        <Box>
          <SectionTitle pt={10}>
            The Best Place to Enroll for Digital Marketing Institute in Delhi
          </SectionTitle>
          <Box py={10}>
            <Box>
              <Center>
                <ReturnFocus
                  btnText={`Get a Call back`}
                  children={<ContactForm />}
                  openModalSet={openModalSet}
                  // isEditingSet={isEditingSet}
                  label="Explore Now"
                  color="white"
                  //   sx={{ width: "100%", color: "#fff" }}
                  px={5}
                  rounded="full"
                />
                <ReturnFocus
                  btnText={`Get a Call back`}
                  children={<ContactForm />}
                  openModalSet={openModalSet}
                  // isEditingSet={isEditingSet}
                  label="Book A Free Demo"
                  color="white"
                  mx={5}
                  rounded={"full"}
                />
              </Center>
            </Box>
          </Box>
        </Box>
        <Box />
      </SimpleGrid>
    </Container>
  );
};

export default EnrollCta;
