import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Heading,
  Highlight,
  Box,
} from "@chakra-ui/react";

export const Benifits = () => {
  return (
    <Container maxW={"full"} py={10}>
      <Heading textAlign={"center"} py={10}>
        <Highlight
          query="Benefits"
          styles={{ px: "1", py: "1", color: "#dc3545", fontWeight: "bold" }}
        >
          Benefits to Students
        </Highlight>
      </Heading>
      <Wrap spacing={["10px", "20px"]}>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Earn While You Learning</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>100% Practical Course</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>50+ Modules</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Classroom Training</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>20+ Globally Recognized Certifications</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>EMIs Available</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>100% Placement Assistance </Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Grow Your Startup Business </Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Paid Internship from 1st Month</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Laptop Facility Available</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Live Projects</Center>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
            <Center>Weekday and Weekend Batches</Center>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};
