import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  CardHeader,
  CardFooter,
  Button,
  Highlight,
} from "@chakra-ui/react";
import ContactForm from "../../../components/contactform";
import { Address } from "../../../components/DATA";
export const Map = () => {
  return (
    <Container maxW={"full"} py={10}>
      <Box align="center">
        <Heading>
          <Highlight
            query="career"
            styles={{ px: "1", py: "1", color: "#101C32" }}
          >
            Map your career with
          </Highlight>
          <Highlight
            query="DIDM"
            styles={{ px: "1", py: "1", color: "#101C32" }}
          >
            DIDM
          </Highlight>
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <Box></Box>
        <Box>
          <ContactForm />
        </Box>
      </SimpleGrid>
      <SimpleGrid spacing={4} columns={[1, 2]} px={[0, "15%"]}>
        {Address.map((item, key) => {
          return (
            <Box>
              <Card py={10}>
                <CardHeader py={1}>
                  <Heading size="md" color={"#101C32"}>
                    {" "}
                    {item.branch_location}
                  </Heading>
                </CardHeader>
                <CardBody py={3}>
                  <Text>{item.address}</Text>
                  <Text py={1}>{item.conatct_No}</Text>
                  <Text py={3}>{item.email}</Text>
                  <Text py={3}></Text>
                </CardBody>
                <CardFooter>{<iframe src={item?.map_url}></iframe>}</CardFooter>
              </Card>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
