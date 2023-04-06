import React from "react";

import {
  Container,
  SimpleGrid,
  Box,
  CardHeader,
  CardBody,
  Card,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const JoinH1Tags = () => {
  return (
    <Container maxW={"full"} py={5}>
      <SectionTitle children={"Benefits of Joining H1 Tags"} my={10} />
      <Box as="p" my={[3, 5]} maxW={"5xl"} mx={"auto"}>
        Get a globally recognized Digital Marketing Certification. Advance your
        marketing profession by enhancing your digital abilities with the best
        Digital Marketing Training Institute in Delhi.
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <Box as="card" boxShadow={"sm"}>
          <Card>
            <CardHeader>ICON</CardHeader>
            <CardBody>Interview Preparations</CardBody>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            <CardHeader>ICON</CardHeader>
            <CardBody>Resume Building</CardBody>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            <CardHeader>ICON</CardHeader>
            <CardBody>100% Placement Assistance</CardBody>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            <CardHeader>ICON</CardHeader>
            <CardBody>Live Projects</CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
