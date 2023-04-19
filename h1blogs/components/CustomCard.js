import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const CustomCard = ({
  heading,
  description,
  icon,
  actionText,
  href,
  ...rest
}) => {
  return (
    <>
      <style jsx>{`
        div {
          background: blue;
        }
      `}</style>
      <Box
        maxW={{ base: "full" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        className="customCard"

        p={5}
        {...rest}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            marginBottom={5}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"md"}>
              {description}
            </Text>
          </Box>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            {actionText}
          </Button>
        </Stack>
      </Box>
    </>
  );
};
