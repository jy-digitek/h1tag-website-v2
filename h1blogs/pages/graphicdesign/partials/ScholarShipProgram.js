import React from "react";
import { Container, Box, Text, Heading, Center, Image } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";

export const ScholarShipProgram = () => {
  return (
    <Box
      background={" #3950a1 url(/bg-p.jpg)"}
      backgroundPosition={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundColor={"#3950a1"}
      opacity={".7"}
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
          //color={"#fff"}
          py={20}
        >
          <SectionTitle children="Our Scholarship Program" />
          <Text textAlign={"center"} fontWeight={"bold"} fontSize={"14px"}>
            Our scholarship program is for those performing well academically
            but not financially stable. This program is based on your percentage
            and marks, eliminating financial issues. We are the only Graphic
            Design Training Institute in Delhi with a scholarship program
          </Text>
          <Heading size={"sm"} textAlign={"center"} py={3}>
            Don’t let anything come in between your dreams
          </Heading>
          <Center>
            <GlobalButton
              rounded={"full"}
              color={"white"}
              label={" Apply Now"}
              background="#3950a1"
              _hover={{ background: "#101C32" }}
              mt={2}
              px={10}
            />
          </Center>
        </Box>
      </Container>
    </Box>
  );
};
