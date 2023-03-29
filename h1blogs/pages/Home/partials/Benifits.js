import {
  Container,
  Wrap,
  WrapItem,
  Center,
  // Heading,
  // Highlight,
  Box,
  Button,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";
import { SectionTitle } from "../../../components/SectionTitle";

export const Benifits = () => {
  return (
    <Container
      // className={`${styles.container} ${styles.border}`}
      maxW={"full"}
      py={10}
      px={[5, 10]}
    >
      <SectionTitle>Benefits to Students</SectionTitle>

      <Wrap spacing={["10px", "20px"]} py={5} px={[0, 10]} fontSize={"20px"}>
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
      <Center>
        <Button px={20} py={5} rounded={20} bg={"yellow"}>
          Book Counseling Session
        </Button>
      </Center>
    </Container>
  );
};
