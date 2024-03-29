import { Stack, Flex, Box, Button, Text, VStack } from "@chakra-ui/react";

import { GlobalButton } from "./GlobalButton";
import { Fade } from "react-awesome-reveal";
const CTA = ({ title, ...rest }) => {
  return (
    <Box
      {...rest}
      w={"full"}
      // h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        py={[6, 12]}
        px={[4, 8]}
        {...rest}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Fade cascade>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={["3xl", "4xl"]}
            >
              {title}
            </Text>
          </Fade>
          <Stack direction={"row"} gap={10}>
            <GlobalButton
              rounded={"full"}
              color={"white"}
              label={" Show me more"}
              background="#3950a1"
              _hover={{ background: "#101C32" }}
            />

            <GlobalButton
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              label={"Show me more"}
            />
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default CTA;
