import React from "react";
import { Heading } from "@chakra-ui/react";

export function SectionTitle({ children }) {
  return (
    <Heading
      size="xl"
      px={{ base: "0", sm: "10", md: "20" }}
      py={50}
      textAlign={"center"}
    >
      {children}
    </Heading>
  );
}
