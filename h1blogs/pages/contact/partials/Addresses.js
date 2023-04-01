import React from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
  // CardHeader,
  // CardFooter,
  // Button,
  // Highlight,
} from "@chakra-ui/react";

import {
  SiGooglemaps,
  SiYoutube,
  SiInstagram,
  SiFacebook,
  SiLinkedin,
} from "react-icons/si";

import ContactForm from "../../../components/contactform";
import { AddressesData } from "../../../components/DATA";
// import {  } from "@react-icons/md";
import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md";

export default function Addresses() {
  return (
    <Container
      maxW={"full"}
      px={16}
      // style={{
      //   background: "rgb(2,0,36)",
      //   background:
      //     "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
      // }}
    >
      <SimpleGrid
        columns={[1, 2]}
        spacing={[0, 10]}
        alignItems="flex-start"
        py={[12]}
      >
        <Box>
          {AddressesData.map((i, k) => (
            <Card sx={{ mb: 10 }} key={k}>
              <CardBody>
                <>
                  <Text sx={{ fontWeight: "bold", fontSize: 20, mb: 1 }}>
                    {i.branch_location}
                  </Text>
                  <Box
                    sx={{
                      display: "flex",
                      // alignItems: "center",
                    }}
                  >
                    <MdLocationOn
                      style={{ marginRight: "10px", marginTop: "5px" }}
                    />{" "}
                    {i.address}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // alignItems: "center",
                    }}
                  >
                    <MdPhone
                      style={{ marginRight: "10px", marginTop: "5px" }}
                    />{" "}
                    {i.conatct_No}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // alignItems: "center",
                    }}
                  >
                    <MdAttachEmail
                      style={{ marginRight: "10px", marginTop: "5px" }}
                    />{" "}
                    {i.email}
                  </Box>

                  <Box
                    as="iframe"
                    sx={{ mt: 5 }}
                    src={i.map_url}
                    width={`100%`}
                    // height="450"
                    // style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></Box>
                </>
              </CardBody>
            </Card>
          ))}
        </Box>
        <Box>
          <ContactForm />
          <Heading as={"h2"} fontSize="20px" pt={4} textAlign={"center"}>
            Subscribe & Follow us :
          </Heading>
          <Flex pt={3} sx={{ justifyContent: "center" }}>
            <Box mr={5}>
              <SiYoutube fontSize={"20px"} />
            </Box>
            <Box mr={5}>
              <SiInstagram fontSize={"20px"} />
            </Box>
            <Box mr={5}>
              <SiFacebook fontSize={"20px"} />
            </Box>
            <Box mr={5}>
              <SiLinkedin fontSize={"20px"} />
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
