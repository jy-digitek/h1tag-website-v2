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
            <Box key={key}>
              <Card maxW="sm">
                <CardBody>
                  <Center>{item.icon}</Center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md" color={"#101C32"}>
                      {item.title}
                    </Heading>
                    <Text>{item.text}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
