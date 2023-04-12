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

export default function QuickContact() {
  return (
    <Box backgroundColor={"#101C32"}>
      <Box textAlign={"center"} pt={10}>
        <Heading fontWeight={"bold"} color={`#fff`}>
          Quick Enquiry
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} px={[0, 20]} py={10}>
        <Box>
          <Card align="center" sx={{ background: "#fff", py: [2, 4] }}>
            <CardBody as={"div"} display={"flex"}>
              <SlPhone fontSize={"25px"} style={{ marginRight: 8 }} />
              <Text fontSize={"20px"} fontWeight="bold">
                +91 77700-07683
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card align="center" sx={{ background: "#fff", py: [2, 4] }}>
            <CardBody as="div" display={"flex"}>
              <EmailIcon fontSize={"25px"} mr={[3]} />{" "}
              <Text>wsy@ysuedcusdc.scsdc</Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
