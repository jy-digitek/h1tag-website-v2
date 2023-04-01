import React from "react";
import { Box } from "@chakra-ui/react";

export function SectionTitle({ children, desc, ...rest }) {
  return (
    <>
      <Box
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        mb={4}
        {...rest}
        textAlign={"center"}
      >
        {children}

        {desc}
      </Box>
    </>
  );
}
