import { Box, Image, Container } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <>
      <Container maxW={"full"} p={0}>
        <Image boxSize="100%" src="/h1banner.jpg" alt="h1" />
      </Container>
    </>
  );
};
