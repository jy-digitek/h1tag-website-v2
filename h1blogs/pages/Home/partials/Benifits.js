import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";

import { Benefits } from "../../../components/DATA";
import { IoBulb } from "react-icons/io5";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

// import { GlobalButton } from "../../../components/GlobalButton";

const Benifits = () => {
  const DataItem = ({ item, key }) => (
    <Fade cascade damping={0.25}>
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
        as="div"
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            height: 16,
            minWidth: 16,
            textAlign: "center",
            rounded: "50%",
            marginRight: [2],
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            border: `1px solid ${item.bg}`,
          }}
        >
          {item.icon}
        </Box>

        {item.label}
      </WrapItem>
    </Fade>
  );
  return (
    <Container
      // className={`${styles.container} ${styles.border}`}
      maxW={"full"}
      px={[5, 10]}
    >
      <SectionTitle my={10}>Benefits to Students</SectionTitle>

      <Wrap spacing={["10px", "20px"]} py={5} px={[0, 10]} fontSize={"20px"} as="div" className='wrapper'>
        <SimpleGrid columns={[1, null, 3]} spacing={6} mx={[0, 2]} px={[0, 0, 10]} w="100%" as={'li'}>
          {Benefits.map((item, index) => (
            <DataItem item={item} key={index} />
          ))}
        </SimpleGrid>
      </Wrap>
    </Container>
  );
};

export default Benifits;
