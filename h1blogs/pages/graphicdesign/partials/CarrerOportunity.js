import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FcReadingEbook, FcOrganization, FcBriefcase } from "react-icons/fc";
export default function CarrerOportunity() {
  return (
    <Container maxW={"full"} py={[5, 10]}>
      <SectionTitle
        children={"Career Opportunities after Completing the Course"}
        mb={[5, 10]}
      />
      <SimpleGrid columns={[1, 2, 3]} gap={2} px={[0, 10]}>
        <Box>
          <Card
            // color={"#fff"}
            sx={{
              backgroundImage:
                "linear-gradient(to top, #cfd9df 0%, #f0f0f0 100%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <CardHeader>
              <Box
                boxSize={20}
                background={"gray"}
                rounded={"full"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mx={"auto"}
              >
                <FcBriefcase fontSize={30} />
              </Box>
            </CardHeader>
            <CardBody mt={0}>
              <Heading as="h2" size="md">
                Full-Time / Part-Time Job
              </Heading>

              <Text>
                Students can obtain decent-paying Full-Time/Part-Time jobs. With
                our practical learning programs, you can work in a reputable
                organization.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            // color={"#fff"}
            sx={{
              backgroundImage:
                "linear-gradient(to top, #cfd9df 0%, #f0f0f0 100%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <CardHeader>
              <Box
                boxSize={20}
                background={"gray"}
                rounded={"full"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mx={"auto"}
              >
                <FcReadingEbook fontSize={30} />
              </Box>
            </CardHeader>
            <CardBody>
              <Heading as="h2" size="md">
                Become a Freelancer
              </Heading>

              <Text>
                Work independently by pursuing the Graphic Designing Course.
                Working as a freelancer is a wonderful way to increase your
                source of income.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            //  color={"#fff"}
            sx={{
              backgroundImage:
                "linear-gradient(to top, #cfd9df 0%, #f0f0f0 100%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <CardHeader>
              {" "}
              <Box
                boxSize={20}
                background={"gray"}
                rounded={"full"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mx={"auto"}
              >
                <FcOrganization fontSize={30} />
              </Box>
            </CardHeader>
            <CardBody pt={0}>
              <Heading as="h2" size="md">
                Run Your Own Agency
              </Heading>

              <Text>
                Businesses may raise brand recognition using Graphic Designing
                strategies. Once you complete the course duration, you can even
                start your own agency.
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
