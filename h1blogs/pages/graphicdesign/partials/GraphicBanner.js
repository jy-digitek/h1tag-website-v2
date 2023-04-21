import React from "react";
import { Container, Image } from "@chakra-ui/react";
const GraphicBanner = () => {
  return (
    <Container maxW={"full"} p={0}>
      <Image src={"/graphicDesignBanner.jpg"} />
    </Container>
  );
};

export default GraphicBanner;
