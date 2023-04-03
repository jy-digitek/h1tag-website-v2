import {
  Container,
  Wrap,
  WrapItem,
  Center,
  // Heading,
  // Highlight,
  // SimpleGrid,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
// import styles from "../../../styles/Home.module.css";
import { SectionTitle } from "../../../components/SectionTitle";

import { Benefits } from "../../../components/DATA";
import { IoBulb } from "react-icons/io5";

// import { GlobalButton } from "../../../components/GlobalButton";

export const Benifits = () => {
  const DataItem = ({ item, key }) => (
    <WrapItem
      key={key}
      fontWeight={"bold"}
      fontSize={15}
      width={["100%", "auto"]}
      rounded={8}
      // border={`1px solid ${item.bg}`}
      color={item.bg}
      p={[2, 5]}
      alignItems="center"
      background={item.bg + ".50"}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          height: 16,
          minWidth: 16,
          textAlign: "center",
          rounded: "50%",
          marginRight: 2,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          border: `1px solid ${item.bg}`,
        }}
      >
        <IoBulb size={28} />
      </Box>
      {item.label}
    </WrapItem>
  );
  return (
    <Container
      // className={`${styles.container} ${styles.border}`}
      maxW={"full"}
      px={[5, 10]}
    >
      <SectionTitle>Benefits to Students</SectionTitle>

      <Wrap spacing={["10px", "20px"]} py={5} px={[0, 10]} fontSize={"20px"}>
        <SimpleGrid columns={[1, null, 3]} spacing={6} mx={2} px={10}>
          {Benefits.map((item, key) => (
            <DataItem item={item} key={key} />
          ))}
        </SimpleGrid>
      </Wrap>
    </Container>
  );
};
