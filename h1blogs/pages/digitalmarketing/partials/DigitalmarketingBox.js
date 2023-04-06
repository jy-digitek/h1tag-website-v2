import { Container, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
export const DigitalmarketingBox = () => {
  return (
    <Container maxW={"full"}>
      <SectionTitle
        children={"Best Digital Marketing Training Institute in Delhi"}
      />
      <SimpleGrid columns={[1, 4]} py={20} spacing={6} px={10}>
        <Box
          p={10}
          // boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"blue.100"}
          borderRadius={10}
        >
          <Text color={"blue"} fontWeight={"bold"} fontSize={"2rem"}>
            1000+
          </Text>{" "}
          Students Trained
        </Box>
        <Box
          p={10} //boxShadow={"10px 10px 5px 12px red"}
          bg={"red.100"}
          borderRadius={10}
        >
          <Text color={"red.300"} fontWeight={"bold"} fontSize={"2rem"}>
            {" "}
            100+
          </Text>
          Hiring Partners
        </Box>
        <Box
          p={10} //</SimpleGrid>boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"green.100"}
          borderRadius={10}
        >
          <Text color={"green.300"} fontWeight={"bold"} fontSize={"2rem"}>
            700+
          </Text>
          Students Placed
        </Box>
        <Box
          p={10}
          //boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"orange.100"}
          borderRadius={10}
        >
          <Text color={"orange.300"} fontWeight={"bold"} fontSize={"2rem"}>
            {" "}
            300+
          </Text>
          Employees Salary Hike
        </Box>
      </SimpleGrid>
    </Container>
  );
};
