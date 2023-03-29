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

import { Benefits } from "../../../components/DATA";

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
        {Benefits.map((item, key) => (
          <WrapItem key={key}>
            <Box boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)" p={[2, 5]}>
              <Center>{item.label}</Center>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Center>
        <Button px={20} py={5} rounded={20} bg={"yellow"}>
          Book Counseling Session
        </Button>
      </Center>
    </Container>
  );
};
