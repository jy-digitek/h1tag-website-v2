import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";

import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from "@chakra-ui/react";

const JoinReasons = () => {
  return (
    <>
      <Container maxW={"7xl"} mt={5}>
        <Box style={{ textAlign: "center" }} py={10}>
          <SectionTitle as="h3">
            Reasons To Join Digital Marketing Institute in Pitampura
          </SectionTitle>
        </Box>
        <SimpleGrid
          py={10}
          columns={[1, 2, 3]}
          px={[0, 10]}
          spacing={6}
          fontSize={"20px"}
          sx={{
            // backgroundImage: "/bgimage.jpg",
            background: "#f0f0f0",
          }}
        >
          {ReasonData &&
            ReasonData.map((item, i) => (
              <Link href={item.href}>
                <Box
                  bg="#fff"
                  sx={{ borderLeft: "5px solid #3950a1" }}
                  boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
                  display={"flex"}
                  p={5}
                  alignItems="center"
                  justifyContent={"center"}
                  borderRadius={8}
                >
                  {/* <FcApproval size={30} style={{ marginRight: 10 }} /> */}
                  {item.title}
                </Box>
              </Link>
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default JoinReasons;
