import { Container, Image } from "@chakra-ui/react";

import React from "react";

const Banner = () => {
  return (
    <>
      <Container maxW={"full"} p={0}>
        <Image boxSize="100%" src="/h1banner.jpg" alt="h1" />
      </Container>
    </>
  );
};

export default Banner;
