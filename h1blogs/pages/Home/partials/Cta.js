import React from "react";
import { Container, Center } from "@chakra-ui/react";
import { GlobalButton } from "../../../components/Button";

export const Cta = () => {
  return (
    <Container p={20} maxW={"full"}>
      <Center>
        <GlobalButton children={"Book Counseling Session"} color={"yellow"} />
      </Center>
    </Container>
  );
};
