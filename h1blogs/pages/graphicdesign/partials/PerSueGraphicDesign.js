import React from "react";
import { Container, SimpleGrid, Box, Card, CardBody } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
export default function PerSueGraphicDesign() {
  return (
    <Container maxW={"6xl"}>
      <SectionTitle
        children={"Why to pursue Graphic Designing Course?"}
        py={10}
      />
      <SimpleGrid columns={[1, 3]} gap={3} mb={10}>
        <Box color={"black"} fontWeight={"bold"}>
          <Card
            py={[5, 10]}
            bg={"radial-gradient(#1fe4f5, #3fbafe)"}
            minH={["auto", 200]}
          >
            <CardBody>
              The field of Graphic Design is in high demand. And it is expected
              to expand in the future.
            </CardBody>
          </Card>
        </Box>
        <Box color={"black"} fontWeight={"bold"}>
          <Card
            py={[5, 10]}
            bg={"radial-gradient(#fbc1cc, #fa99b2)"}
            minH={["auto", 200]}
          >
            <CardBody>
              50,000 jobs are available in Graphic Designing and are certain to
              be in high demand in future.
            </CardBody>
          </Card>
        </Box>
        <Box color={"black"} fontWeight={"bold"}>
          <Card
            py={[5, 10]}
            bg={"radial-gradient(#76b2fe, #b69efe)"}
            minH={["auto", 200]}
          >
            <CardBody>
              It is one of the most desired and in-demand skills on LinkedIn.
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
