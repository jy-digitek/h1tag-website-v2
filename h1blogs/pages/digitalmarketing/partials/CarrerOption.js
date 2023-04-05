import React from "react";
import {
  Container,
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
export const CarrerOption = () => {
  return (
    <Container maxW={"full"} bg={"blue.100"} py={10}>
      <SectionTitle
        children={"Career Scope after Digital Marketing Course"}
        my={10}
      />
      <SimpleGrid columns={[1, 2]}>
        <Box></Box>
        <Box px={10}>
          <Center display={"flex-block"}>
            <Card maxW={"400px"} my={2}>
              <CardBody>
                With our practical learning programs, students can acquire
                well-paying Full-Time/Part-Time Work in a reputable company. We
                ensure we educate top talents that will get them high-paying
                employment.
              </CardBody>
            </Card>
            <Card maxW={"400px"} my={2}>
              <CardBody>
                After finishing this course, you can launch your Digital
                Marketing Agency and establish your future. It may allow you to
                demonstrate your abilities as a qualified digital marketer.
              </CardBody>
            </Card>
            <Card maxW={"400px"} my={2}>
              <CardBody>
                You can build your freelance business by doing the Digital
                Marketing Course. It provides an excellent opportunity to work
                as a freelancer, supplementing your income.
              </CardBody>
            </Card>
            <Card maxW={"400px"} my={2}>
              <CardBody>
                As an entrepreneur, doing the Digital Marketing Course can
                polish your skills. Keeping up with the new skills is essential
                to make your business successful
              </CardBody>
            </Card>
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
