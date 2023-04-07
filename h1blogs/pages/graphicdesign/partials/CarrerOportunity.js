import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const CarrerOportunity = () => {
  return (
    <Container>
      <SectionTitle
        children={"Career Opportunities after Completing the Course"}
      />
      <SimpleGrid columns={[1, 2, 3]} gap={2}>
        <Box bg="tomato">
          <Card>
            <CardHeader>ICON</CardHeader>
            <CardBody>
              <Heading>Full-Time / Part-Time Job</Heading>

              <Text>
                Students can obtain decent-paying Full-Time/Part-Time jobs. With
                our practical learning programs, you can work in a reputable
                organization.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box bg="tomato" h={"80px"}></Box>
        <Box bg="tomato" h={"80px"}></Box>
      </SimpleGrid>
    </Container>
  );
};
