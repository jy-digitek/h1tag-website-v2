import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
import { PlacementPartner } from "../../../components/DATA";
import { AdvertisingPartner } from "../../../components/DATA";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
const TrustedPartner = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <SectionTitle
        desc={
          "  Our Digital Marketing Institute in Delhi is trusted by the following partners"
        }
        py={10}
      >
        Our Trusted Partners
      </SectionTitle>

      <Heading as={"h3"} px={[0, 10]} size="md">
        Our Placement Partners
      </Heading>
      <SimpleGrid bg={"white"} mx={["auto"]} columns={[1, 5]} spacing={5}>
        <Fade cascade>
          {PlacementPartner.map((item, i) => {
            return (
              <Box key={i}>
                <Card align="center">
                  <CardBody>
                    <Image src={item.src} boxSize={40} alt={item.name} />
                  </CardBody>
                </Card>
              </Box>
            );
          })}
        </Fade>
      </SimpleGrid>

      <Heading as={"h3"} px={[0, 10]} size="md">
        Our Advertising Partners
      </Heading>
      <SimpleGrid bg={"white"} mx={["auto"]} columns={[1, 5]} spacing={5}>
        <Fade cascade>
          {AdvertisingPartner.map((item, i) => {
            return (
              <Box key={i}>
                <Card align="center">
                  <CardBody>
                    <Image src={item.src} boxSize={40} alt={item.name} />
                  </CardBody>
                </Card>
              </Box>
            );
          })}
        </Fade>
      </SimpleGrid>
    </Container>
  );
};

export default TrustedPartner;
