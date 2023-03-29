import React from "react";
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

export default function Addresses() {
  return (
    <Container
      maxW={"full"}
      px={16}
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
      }}
    >
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <Box sx={{ p: 10 }}>
          <Card sx={{ mb: 10 }}>
            <CardBody>
              <Heading as="h1" size="xl" noOfLines={1}>
                Visit Us
              </Heading>
            </CardBody>
          </Card>
          <Card sx={{ mb: 10 }}>
            <CardBody>
              <Heading as="h1" size="xl" noOfLines={1}>
                Visit Us
              </Heading>
            </CardBody>
          </Card>
        </Box>
        <ContactForm />
      </SimpleGrid>
    </Container>
  );
}
