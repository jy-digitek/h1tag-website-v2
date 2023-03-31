import {
  Container,
  Heading,
  Highlight,
  Text,
  SimpleGrid,
  Box,
  Image,
  CardBody,
  Card,
} from "@chakra-ui/react";
export const Tranding = () => {
  return (
    <Container maxW={"full"} px={[0, 20]} textAlign={"center"}>
      <Heading textAlign={"center"} mt={10} px={[5, 20]}>
        Delhi Institute of Digital Marketing -{" "}
        <Highlight
          query="H1Tags Trending News"
          styles={{ px: "1", py: "1", color: "#dc3545", fontWeight: "bold" }}
        >
          H1Tags Trending News
        </Highlight>{" "}
      </Heading>
      <Text textAlign={"center"} px={[5, 20]}>
        HT News and other news portal cover H1Tags "Master in Digital Marketing
        Training Program" is one of the best training program designed in
        Digital Marketing Training Segment. H1Tags also achieved many awards in
        Digital Marketing Training Domain. Some spotlight are IFA Award | WASME
        Award | ASSOCHAM Award.{" "}
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} px={[0, 50]}>
        <Box>
          <Card>
            <CardBody>
              <Image src="IFA AWARD H1Tags.jpg" />
              <Text fontSize={"2xl"} textAlign={"center"}>
                IFA Awards
              </Text>
              <Text>"Best Digital Marketing Training Company"</Text>
            </CardBody>
          </Card>
        </Box>

        <Box p={0}>
          <Card>
            <CardBody>
              <Image
              // src='MSME AWARD H1Tags.jpg'
              />
              <Text fontSize={"2xl"} textAlign={"center"}>
                ASSOCHAM Award
              </Text>
              <Text>"Fair Business Practices"</Text>
            </CardBody>
          </Card>
        </Box>

        <Box bg="tomato" height="80px"></Box>

        <Box p={0} m={0}>
          <Card>
            <CardBody>
              <Image src="wasme award.jpg" />
              <Text fontSize={"2xl"} textAlign={"center"}>
                WASME Award
              </Text>
              <Text>"SME Excellence Awards"</Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
