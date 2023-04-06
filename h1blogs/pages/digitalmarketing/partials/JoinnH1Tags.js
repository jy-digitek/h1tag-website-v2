import React from "react";

import {
  Container,
  SimpleGrid,
  Box,
  CardHeader,
  CardBody,
  Card,
  Flex,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FcManager, FcRules, FcAssistant, FcSettings } from "react-icons/fc";

export const JoinH1Tags = () => {
  return (
    <Container maxW={"full"} py={5}>
      <SectionTitle children={"Benefits of Joining H1 Tags"} my={10} />
      <Box as="p" my={[3, 5]} maxW={"5xl"} mx={"auto"}>
        Get a globally recognized Digital Marketing Certification. Advance your
        marketing profession by enhancing your digital abilities with the best
        Digital Marketing Training Institute in Delhi.
      </Box>
      <SimpleGrid columns={[1, 4]} spacing={10} px={10}>
        <Box as="card" boxShadow={"sm"}>
          <Card>
            <Flex>
              <CardHeader>
                <FcManager fontSize={50} />
              </CardHeader>
              <CardBody>Interview Preparations</CardBody>
            </Flex>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            <Flex>
              <CardHeader>
                {" "}
                <FcRules fontSize={50} />
              </CardHeader>
              <CardBody>Resume Building</CardBody>
            </Flex>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            <Flex>
              <CardHeader>
                {" "}
                <FcAssistant fontSize={50} />
              </CardHeader>

              <CardBody>100% Placement Assistance</CardBody>
            </Flex>
          </Card>
        </Box>
        <Box boxShadow={"sm"}>
          <Card>
            {" "}
            <Flex>
              <CardHeader>
                {" "}
                <FcSettings fontSize={50} />
              </CardHeader>

              <CardBody>Live Projects</CardBody>
            </Flex>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
