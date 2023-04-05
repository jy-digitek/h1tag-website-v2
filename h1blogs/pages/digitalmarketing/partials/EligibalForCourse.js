import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const EligibalForCourse = () => {
  return (
    <Container maxW={"full"} my={10}>
      <SectionTitle children={"Who can do this Course?"} />
      <SimpleGrid
        columns={[2, 3]}
        h="200px"
        // templateRows="repeat(6, 1fr)"
        // templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <Box rowSpan={6} bg={"tomato"} colSpan={1}>
          1
        </Box>
        <Box bg={"tomato"} colSpan={4}>
          2
        </Box>
        <Box bg={"tomato"} colSpan={4}>
          3
        </Box>
        <Box bg={"tomato"} colSpan={4}>
          4
        </Box>
        <Box bg={"tomato"} colSpan={4}>
          5
        </Box>
        <Box bg={"tomato"} colSpan={4}>
          6
        </Box>
      </SimpleGrid>
    </Container>
  );
};
