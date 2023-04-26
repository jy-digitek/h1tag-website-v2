import { Container, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
const DigitalmarketingBox = () => {
  return (
    <Container maxW={"full"}>
      <SectionTitle
        as={"h1"}
        pt={[8, 12]}
        children={"Best Digital Marketing Course in Delhi"}
      />
      <SimpleGrid columns={[1, 2, 4]} py={20} spacing={6} px={10}>
        <Box
          p={10}
          // boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"radial-gradient(#1fe4f5, #3fbafe)"}
          borderRadius={10}
          color={"#fff"}
        >
          <Text fontWeight={"bold"} fontSize={"2rem"}>
            1000+
          </Text>{" "}
          Students Trained
        </Box>
        <Box
          p={10} //boxShadow={"10px 10px 5px 12px red"}
          bg={"radial-gradient(#fbc1cc, #fa99b2)"}
          borderRadius={10}
          color={"#fff"}
        >
          <Text fontWeight={"bold"} fontSize={"2rem"}>
            {" "}
            100+
          </Text>
          Hiring Partners
        </Box>
        <Box
          p={10} //</SimpleGrid>boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"radial-gradient(#76b2fe, #b69efe)"}
          borderRadius={10}
          color={"#fff"}
        >
          <Text
            //color={"radial-gradient(#76b2fe, #b69efe)"}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            700+
          </Text>
          Students Placed
        </Box>
        <Box
          p={10}
          //boxShadow={"10px 10px 5px 12px lightblue"}
          bg={"radial-gradient(#60efbc, #58d5c9)"}
          borderRadius={10}
          color={"#fff"}
        >
          <Text color={"#ffffff"} fontWeight={"bold"} fontSize={"2rem"}>
            {" "}
            300+
          </Text>
          Employees Salary Hike
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default DigitalmarketingBox;
