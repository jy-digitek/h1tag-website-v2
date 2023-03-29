import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Highlight,
  Card,
  Text,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { SlPhone } from "react-icons/sl";

export const QuickContact = () => {
  return (
    <Box sx={{ background: "#101C32 url(/contact-bg.svg)" }}>
      <Box textAlign={"center"} pt={10}>
        <Heading fontWeight={"bold"}>Quick Enquiry</Heading>
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} px={[0, 20]} py={10}>
        <Box>
          <Card align="center">
            <CardBody>
              <Text fontSize={"20px"} fontWeight="bold">
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <SlPhone fontSize={"25px"} /> +91 77700-07683
                </Box>
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card align="center">
            <CardBody>
              <Text fontSize={"20px"} fontWeight="bold">
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <EmailIcon fontSize={"25px"} />{" "}
                  <Text>wsy@ysuedcusdc.scsdc</Text>
                </Box>
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
