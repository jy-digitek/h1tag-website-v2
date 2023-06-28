import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const Decorator = () => {
  return (
    <Center>
      <Box sx={{ borderBottom: "4px solid #3950a1", width: 10 }} mt={2}></Box>
    </Center>
  );
};

export function SectionTitle({ children, desc, ...rest }) {
  return (
    <>
      <Box {...rest} textAlign={"center"}>
        {children && (
          <Box fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            {children}
          </Box>
        )}

        {desc && <Text>{desc}</Text>}
        <Decorator />
      </Box>
    </>
  );
}
