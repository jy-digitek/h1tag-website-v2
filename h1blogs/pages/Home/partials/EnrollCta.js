import React from "react";
import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { GlobalButton } from "../../../components/GlobalButton";
import ReturnFocus from "../../../components/Modal";
import ContactForm from "../../../components/contactform";
import styles from "../../../styles/hero.module.css";

const EnrollCta = () => {
  const [openModal, openModalSet] = React.useState(false);
  return (
    <Container
      maxW={"full"}
      backgroundImage={"url(/topbanner.jpg)"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      color={"white"}
      backgroundPosition={"center right"}
      px={[0, "auto"]}
      py={[20, "0"]}
    >
      <Box
        color={"black"}
        px={[5, 20]}
        py={[6, 20]}
        className={styles.bannerText}
      >
        <Box pt={[1, 5]}>
          <Box as="p" fontSize={["sm", "2xl"]} py={[0, 1]}>
            The Best Place to Enroll for{" "}
          </Box>
          <Heading as="h1" fontSize={["xl", "45px"]}>
            Digital Marketing Institute in Delhi
          </Heading>
        </Box>
        <Box>
          <Text pt={[1, 5]} fontSize={["sm", "16px"]}>
            Get trained by top industry experts with the best Digital Marketing
            Training Institute in Delhi.
          </Text>
          <Text fontSize={["sm", "16px"]}>
            Our comprehensive course will help you unlock the secrets of Digital
            Marketing.
          </Text>
        </Box>

        <Box py={[5, 10]}>
          <Box display={"flex"}>
            <ReturnFocus
              py={[0, 2]}
              px={[4, 10]}
              fontSize={["14px", "20px"]}
              btnText={`Get a Call back`}
              children={<ContactForm />}
              openModalSet={openModalSet}
              // isEditingSet={isEditingSet}
              label="Book A Free Demo"
              color="white"
              mx={[2, 5]}
              rounded={"full"}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EnrollCta;
