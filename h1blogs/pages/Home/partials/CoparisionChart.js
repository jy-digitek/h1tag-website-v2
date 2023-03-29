import {
  Container,
  Heading,
  Highlight,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Center,
  Avatar,
} from "@chakra-ui/react";

import { comparision } from "../../../components/DATA";
export const ComparisionChar = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"}>
        <Highlight
          query="Chart"
          styles={{ px: "1", py: "1", color: "#101C32", fontWeight: "bold" }}
        >
          Why H1 Tags
        </Highlight>
      </Heading>
      <Text textAlign={"center"}>
        What makes H1 Tags the Best Digital Marketing training institute in
        Delhi?
      </Text>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={10}
        pt={10}
        px={[0, 10]}
        fontSize={"20px"}
      >
        {comparision.map((item, key) => {
          return (
            // <Box key={key}>
            //   <Card maxW="sm">
            //     <CardBody>
            //       <Center>{item.icon}</Center>
            //       <Stack mt="6" spacing="3">
            //         <Heading size="md" color={"#101C32"}>
            //           {item.title}
            //         </Heading>
            //         <Text>{item.text}</Text>
            //       </Stack>
            //     </CardBody>
            //   </Card>
            // </Box>
            <Box
              // maxW={"445px"}
              w={"full"}
              //bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                // h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                {/* <Image
                  src={
                    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                  layout={"fill"}
                /> */}
                {item.icon}
              </Box>
              <Stack>
                {/* <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text> */}
                <Heading
                  //color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  {item.title}
                </Heading>
                <Text color={"gray.500"}>
                  {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. */}
                  {item.text}
                </Text>
              </Stack>
              {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                  alt={"Author"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack> */}
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
