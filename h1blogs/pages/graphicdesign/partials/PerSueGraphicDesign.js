import React from "react";
import { Container, SimpleGrid, Box, Card, CardBody } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
export const PerSueGraphicDesign = () => {
  return (
    <Container maxW={"6xl"}>
      <SectionTitle
        children={"Why to pursue Graphic Designing Course?"}
        py={10}
      />
      <SimpleGrid columns={[1, 3]} gap={3}>
        <Box>
          <Card py={10} bg={"green.100"}>
            <CardBody>
              The field of graphic design is in high demand. And it is expected
              to expand in the future.
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card py={7}>
            <CardBody>
              50,000 jobs are available in Graphic Designing and are certain to
              be in high demand in future.
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card py={10}>
            <CardBody>
              It is one of the most desired and in-demand skills on LinkedIn.
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
