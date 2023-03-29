import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Text,
  Stack,
  Highlight,
} from "@chakra-ui/react";
import React from "react";

export const Suitable = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <Heading textAlign={"center"} py={10}>
        <Highlight
          query="suitable"
          styles={{ px: "1", py: "1", color: "#101C32" }}
        >
          This Course is suitable for
        </Highlight>
      </Heading>
      <SimpleGrid columns={[1, 3]} px={[0, 10]} spacing={6} fontSize={"20px"}>
        <Box>
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  <Highlight
                    query="⦁ Students/Fresher’s"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Students/Fresher’s
                  </Highlight>
                </Heading>
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
                <Heading size="md">
                  <Highlight
                    query="⦁ Professionals"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Professionals
                  </Highlight>
                </Heading>
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
                <Heading size="md">
                  <Highlight
                    query="⦁ Coaches"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Coaches
                  </Highlight>
                </Heading>

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
                <Heading size="md">
                  <Highlight
                    query="⦁ Homepreneurs"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Homepreneurs
                  </Highlight>
                </Heading>
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
                <Heading size="md">
                  <Highlight
                    query="⦁ Agency Owners"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Agency Owners
                  </Highlight>
                </Heading>

                <Text>
                  Entrepreneurs and agency owners who want to develop their
                  companies and produce leads on digital platforms.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  <Highlight
                    query="⦁ Freelancers"
                    styles={{ px: "1", py: "1", color: "#101C32" }}
                  >
                    ⦁ Freelancers
                  </Highlight>
                </Heading>
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
