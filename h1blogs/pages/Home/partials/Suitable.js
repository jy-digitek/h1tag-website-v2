import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const Suitable = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} py={10}>
        This Course is suitable for
      </Heading>
      <SimpleGrid
        columns={[1, 3]}
        px={[0, 10]}
        spacing={6}
        fontFamily="bold"
        fontSize={"20px"}
      >
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Students/Fresher’s</Heading>
                <Text>
                  College students interested in pursuing a job in Digital
                  Marketing
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Professionals</Heading>
                <Text>
                  Professionals seeking to advance their jobs in the more
                  hopeful field of Digital Marketing.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Coaches</Heading>
                <Text>
                  Coaches and trainers who want to expand their training company
                  online and attract more students.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Homepreneurs</Heading>
                <Text>
                  Homepreneurs who want to improve their digital marketing
                  skills and create a source of passive revenue.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Agency Owners</Heading>
                <Text>
                  Entrepreneurs and agency owners who want to develop their
                  companies and produce leads on digital platforms.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">⦁ Freelancers</Heading>
                <Text>
                  Freelance marketers seeking more national and foreign
                  customers and a stable income.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
