import React from "react";
import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { Benefits } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";
import { JobRolesData } from "../../../components/DATA";
import { Si1001Tracklists } from "react-icons/si";

export default function JobRoles() {
  const DataItem = ({ item, key }) => (
    <WrapItem
      key={key}
      fontWeight={"bold"}
      fontSize={15}
      width={["100%", "auto"]}
      rounded={8}
      // border={`1px solid ${item.bg}`}
      color={item.bg}
      p={[2, 5]}
      alignItems="center"
      background={item.bg + ".50"}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          height: 16,
          minWidth: 16,
          textAlign: "center",
          rounded: "50%",
          marginRight: 2,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          border: `1px solid ${item.bg}`,
        }}
      >
        {item.icon}
      </Box>
      {item.label}
    </WrapItem>
  );
  return (
    <Container maxW={"full"}>
      <SectionTitle children="Job Roles After Graphic Design Course" />

      <SimpleGrid
        columns={[1, null, 3]}
        spacing={6}
        mx={[5, 10]}
        px={[5, 10]}
        py={[5, 10]}
      >
        {JobRolesData.map((item, key) => (
          <Box key={key}>
            <DataItem item={item} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
