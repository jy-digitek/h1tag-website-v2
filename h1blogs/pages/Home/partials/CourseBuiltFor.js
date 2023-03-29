import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Text,
  Stack,
  Highlight,
} from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { CustomCard } from "../../../components/CustomCard";
import { CourseBuiltForData } from "../../../components/DATA";

export const CourseBuiltFor = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <SectionTitle>This Course is suitable for</SectionTitle>
      <SimpleGrid columns={[1, 3]} px={[0, 10]} spacing={6} fontSize={"20px"}>
        {CourseBuiltForData.map((item, key) => (
          <CustomCard
            key={key}
            heading={item.title}
            icon={item.icon}
            description={item.text}
            // href={"#"}
            // actionText={"Learn more"}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};