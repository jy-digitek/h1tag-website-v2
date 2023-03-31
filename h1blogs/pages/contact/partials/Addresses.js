import React from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  // CardHeader,
  // CardFooter,
  // Button,
  // Highlight,
} from "@chakra-ui/react";

import ContactForm from "../../../components/contactform";
import { AddressesData } from "../../../components/DATA";

export default function Addresses() {
  return (
    <Container
      maxW={"full"}
      px={[5, 16]}
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
      }}
    >
      <SimpleGrid
        columns={[1, 2]}
        spacing={[0, 10]}
        alignItems="flex-start"
        py={[12]}
      >
        <Box>
          {AddressesData.map((i, k) => (
            <Card sx={{ mb: 10 }}>
              <CardBody>
                <>
                  <Text>{i.branch_location}</Text>
                  <Text>{i.address}</Text>
                  <Text>{i.conatct_No}</Text>
                  <Text>{i.email}</Text>
                  <iframe
                    src={i.map_url}
                    width={`100%`}
                    // height="450"
                    // style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </>
              </CardBody>
            </Card>
          ))}
        </Box>
        <ContactForm />
      </SimpleGrid>
    </Container>
  );
}
