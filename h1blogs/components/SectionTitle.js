import React from "react";
import { Heading } from "@chakra-ui/react";

export function SectionTitle({ children, ...rest }) {
  return (
    <Heading
      fontSize={{ base: "2xl", sm: "4xl" }}
      fontWeight={"bold"}
      {...rest}
      // px={{ base: "0", sm: "10", md: "20" }}
      textAlign={"center"}
      py={10}
    >
      {children}
    </Heading>
  );
}
