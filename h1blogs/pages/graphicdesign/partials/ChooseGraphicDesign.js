import React from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Flex,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { H1TagsCourseGraphic } from "../../../components/DATA";

export const ChooseGraphicDesign = () => {
  return (
    <Container maxW={"full"} px={20} py={10}>
      <SectionTitle children="Why Choose H1 Tags for Graphic Design Course?" />
      <Box pb={5}>
        H1 Tags is known for guiding its students to have a better future, as it
        assists them in career advising, preparing for interviews, and providing
        a platform for practical exposure in the industry. We provide 100%
        placement for our course students from all around. By completing this
        course, students can choose multiple career options and build a stable
        future.
      </Box>
      <SimpleGrid columns={[1, 3]} gap={3}>
        {H1TagsCourseGraphic.map((item, i) => {
          return (
            <Box key={i}>
              <Card borderLeft={"4px solid blue"} bg="gray.100">
                <Flex>
                  <CardHeader>{item.icon}</CardHeader>
                  <CardBody>{item.label}</CardBody>
                </Flex>
              </Card>
            </Box>
          );
        })}
        <Box></Box>
      </SimpleGrid>
    </Container>
  );
};
