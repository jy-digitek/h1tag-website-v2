import {
  Container,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  Button,
  CardFooter,
  Image,
  Highlight,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

export const EndToEnd = () => {
  return (
    <Container maxW="full" mt={10} px={[0, 20]} pb={10}>
      <Heading textAlign={"center"} py={10}>
        <Highlight
          query="Love Our Students"
          styles={{ px: "1", py: "1", color: "#dc3545", fontWeight: "bold" }}
        >
          Companies That Love Our Students
        </Highlight>
      </Heading>

      <SimpleGrid columns={[1, 3, 3]} spacing={10}>
        <Box>
          <Card maxW="sm" align="center">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="5" align={"center"} py={7} color="white">
                <Button variant="solid" bg="#dc3545" borderRadius={20} px={20}>
                  Learn More
                </Button>
                <Button variant="solid" bg="#dc3545" borderRadius={20} px={16}>
                  Learn More
                </Button>
                <Button variant="solid" bg="#dc3545" borderRadius={20} px={10}>
                  Learn More
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm" align="center">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter align="center">
              <Button
                variant="solid"
                bg="#dc3545"
                borderRadius={20}
                px={10}
                color="white"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm" align="center">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter alignItems="center">
              <Button
                variant="solid"
                bg="#dc3545"
                borderRadius={20}
                px={10}
                color="white"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
