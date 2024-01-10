import React from "react";
import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
const LearnH1tags = () => {
  return (
    <Container maxW={"full"} p={0}>
      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          {" "}
          Learn With <span style={{ color: "#ff5733" }}> H1Tags</span> No.1 Best
          Digital Marketing Course In Rohini
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            Discover why <span style={{ color: "#ff5733" }}>H1Tags</span> is
            recognized as Rohini's #1 Best Digital Marketing Course. We invite
            you to be a part of a community that values excellence, innovation,
            and a commitment to shaping the future of digital marketing. Popular
            digital marketing training provider H1Tags is located in Rohini and
            offers a good selection of the latest tools and strategies.
            <br />
            <br />
            We will provide you with a credential and a live project to assist
            you in launching your digital marketing career.
            <br />
          </Text>
        </Box>
      </Container>
    </Container>
  );
};

export default LearnH1tags;
