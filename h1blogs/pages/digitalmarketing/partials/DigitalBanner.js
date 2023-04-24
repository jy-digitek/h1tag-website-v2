import React from "react";
import { Container, Image } from "@chakra-ui/react";
const DigitalBanner = () => {
  return (
    <Container maxW={"full"} p={0}>
      <Image
        src={"/digitalMarketingBanner.jpg"}
        alt="digitalBanner"
        w={"100%"}
      />
    </Container>
  );
};

export default DigitalBanner;
