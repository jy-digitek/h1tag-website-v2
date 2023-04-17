import React from "react";
import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";

const EnrollCta = () => {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Container
      maxW={"full"}
      background={"url(/topbanner.jpg)"}
      backgroundSize={["contain", "cover"]}
      backgroundRepeat={"no-repeat"}
      color={"white"}
      paddingInlineStart={[0, "auto"]}
      minH={"100%"}
      backgroundPosition={"center"}
    >
      <SimpleGrid columns={[1, 2]}>
        <Box ml={10} py={[0, 20]} my={[0, 10]} color={"black"}>
          {/* <SectionTitle pt={10}>
            The Best Place to Enroll for Digital Marketing Institute in Delhi
          </SectionTitle> */}
          <Box pt={5}>
            <Heading fontSize={"2xl"}>The Best Place to Enroll for </Heading>
            <Heading as="h1">Digital Marketing Institute in Delhi</Heading>
          </Box>
          <Box>
            <Text pt={[5]}>
              Get trained by top industry experts with the best Digital
              Marketing Training Institute in Delhi. Our comprehensive course
              will help you unlock the secrets of Digital Marketing.
            </Text>
          </Box>

          <Box py={10}>
            <Box display={"flex"}>
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
            </Box>
          </Box>
        </Box>
        <Box />
      </SimpleGrid>
    </Container>
  );
};

export default EnrollCta;
