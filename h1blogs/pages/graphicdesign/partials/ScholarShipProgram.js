import React from "react";
import { Container, Box, Text, Heading, Center, Image } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";

export default function ScholarShipProgram() {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Box
      backgroundImage={
        "linear-gradient(45deg, rgb(3 10 46), rgb(0 0 0 / 75%)),url(/bg-p.jpg)"
      }
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Container maxw="full">
        {/* <Box>
          <Image src="/bg-p.jpg" width={"full"} minW={"full"} />
        </Box> */}

        <Box
          // position={"absolute"}
          // right={10}
          // zIndex={1}
          // top={10}
          py={20}
          color={"white"}
        >
          <SectionTitle children="Our Scholarship Program" />
          <Text>
            Our scholarship program is for those performing well academically
            but not financially stable. This program is based on your percentage
            and marks, eliminating financial issues. We are the only Graphic
            Design Training Institute in Delhi with a scholarship program
          </Text>
          <Heading size={"sm"} textAlign={"center"} py={3}>
            Don’t let anything come in between your dreams
          </Heading>
          <Center>
            <ReturnFocus
              btnText={`Apply Now`}
              children={<ContactForm />}
              openModalSet={openModalSet}
              // isEditingSet={isEditingSet}
              label="Apply Now"
              color="white"
              rounded={"full"}
              mt={2}
              px={10}
              background="#3950a1"
              _hover={{ background: "#101C32" }}
            />
          </Center>
        </Box>
      </Container>
    </Box>
  );
}
