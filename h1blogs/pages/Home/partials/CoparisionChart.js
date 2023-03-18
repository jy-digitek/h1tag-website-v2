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
} from "@chakra-ui/react";

export const ComparisionChar = () => {
  return (
    <Container maxW={"full"} mt={10} px={[0, 20]}>
      <Heading textAlign={"center"} pt={10}>
        <Highlight
          query="Chart"
          styles={{ px: "1", py: "1", color: "#dc3545", fontWeight: "bold" }}
        >
          Why H1 Tags
        </Highlight>
      </Heading>
      <Text textAlign={"center"}>
        What makes H1 Tags the Best Digital Marketing training institute in
        Delhi?
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} pt={10}>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Flexible Fee Structure
                </Heading>
                <Text>
                  H1 Tags offers a reasonable and flexible fee structure (on EMI
                  basis), by which the students don't have to pay the full fee
                  altogether but can make EMI's.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Training Facilities
                </Heading>
                <Text>
                  Easy for students to understand and study. Keen students can
                  stay updated with their personalized Laptops relating to their
                  subjects' latest advancements and curriculum.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Job Placement
                </Heading>
                <Text>
                  Students participating in placement units learn about business
                  standards and improve their job prospects. We give assured
                  placement guarantee to our students.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Paid Internship
                </Heading>
                <Text>
                  We ensure that our students get paid internships from the
                  first month of joining. Unlike many of your friends, you can
                  begin building your collection sooner. You can add this
                  additional expertise to your resume.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Advanced Experience
                </Heading>
                <Text>
                  As H1 Tags is an agency-based institute, we ensure that our
                  students work on practical and live projects, which builds
                  confidence.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"#dc3545"}>
                  Proven Track Record
                </Heading>
                <Text>
                  Our students tend to grow and enhance their careers; in many
                  ways, our students are happy and satisfied as with our
                  institute they got placement in well-known companies.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
