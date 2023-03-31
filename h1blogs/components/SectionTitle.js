import React from "react";
import { Heading } from "@chakra-ui/react";

export function SectionTitle({ children }) {
  return (
    <Heading
      fontSize={{ base: "2xl", sm: "4xl" }}
      fontWeight={"bold"}
      // px={{ base: "0", sm: "10", md: "20" }}
      textAlign={"center"}
    >
      {children}
    </Heading>
  );
}
