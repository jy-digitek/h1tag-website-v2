import {
  Box,
  Image,
  Heading,
  Center,
  SimpleGrid,
  Highlight,
  Text,
  Container,
} from "@chakra-ui/react";

import {
  FcMoneyTransfer,
  FcOrgUnit,
  FcOk,
  FcApproval,
  FcComboChart,
  FcOnlineSupport,
} from "react-icons/fc";
import { Fade } from "react-awesome-reveal";

export const TransFormingCourse = () => {
  return (
    <Container
      maxW={"full"}
      textAlign={"center"}
      // mt={5}
      py={8}
      style={{ background: "#f0f0f0" }}
    >
      <SimpleGrid columns={[1, null, 4]} spacing={6} mx={2} px={10}>
        <Fade cascade damping={0.1}>
          <Box
            bg="#fff"
            sx={{ borderLeft: "5px solid #3950a1" }}
            boxShadow="2px 0 35px 0 rgb(68 88 144 / 12%)"
            display={"flex"}
            p={5}
            borderRadius={8}
            alignItems="center"
            justifyContent={"center"}
          >
            <FcOnlineSupport size={30} style={{ marginRight: 10 }} /> 100%
            Placement
          </Box>
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
            <FcMoneyTransfer size={30} style={{ marginRight: 10 }} />
            Paid Internship
          </Box>
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
            <FcOrgUnit size={30} style={{ marginRight: 10 }} />
            Classroom Training
          </Box>
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
            <FcApproval size={30} style={{ marginRight: 10 }} />
            Experienced Instructors
          </Box>
        </Fade>
      </SimpleGrid>
    </Container>
  );
};
