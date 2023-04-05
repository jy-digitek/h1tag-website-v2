import { Container, Box, Center } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";

export const ScholarshipProgram = () => {
  return (
    <Container maxW={"full"}>
      <SectionTitle children={"Our Scholarship Program"} my={10} />
      <Box>
        <Box as="p">
          Our scholarship program is for those performing well academically but
          not financially stable. This program is based on your percentage and
          marks, eliminating financial issues. We are the only Digital Marketing
          Training Institute in Delhi with a scholarship program
        </Box>
        <Box as="h3" fontWeight={"bold"} textAlign={"center"}>
          Don’t let anything hold your dreams back
        </Box>
        <Center>
          <GlobalButton
            label={"Download Brochure"}
            //color={"yellow"}
            // sx={{ width: "350px" }}

            maxW="100%"
            background="#3950a1"
            _hover={{ background: "#101C32" }}
          />
        </Center>
      </Box>
    </Container>
  );
};
