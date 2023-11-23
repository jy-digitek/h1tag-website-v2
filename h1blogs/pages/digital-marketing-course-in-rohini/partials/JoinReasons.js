import React from "react";
import { CourseBuiltForData, ReasonData } from "../../../components/DATA";
import { CustomCard } from "../../../components/CustomCard";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
import ReturnFocus from "../../../components/Modal";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from "@chakra-ui/react";
import Placement from "./viewpage/Placement";
const JoinReasons = () => {
  return (
    <>
      <Container maxW={"7xl"} mt={5}>
        <Box style={{ textAlign: "center" }} py={10}>
          <SectionTitle as="h3">
            Reasons To Join Digital Marketing Institute in Rohini
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
            ReasonData.map((item, index) => (
              <Link href={item.href} key={index}>
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

              // <Card key={i} m={2} border={"3px solid blue"}>
              //     <CardHeader ml={10}>
              //         <Heading size="md"> {item.title}</Heading>
              //     </CardHeader>

              //     <CardFooter>
              //         <Box
              //             style={{
              //                 marginLeft: "90px",
              //                 border: "1px solid blue",
              //                 padding: "10px",
              //                 borderRadius: "10px",
              //             }}
              //         >
              //             <Link href={item.href}>view more</Link>{" "}
              //         </Box>
              //     </CardFooter>
              // </Card>
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default JoinReasons;
