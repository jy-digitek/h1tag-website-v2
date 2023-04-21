import {
  Container,
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "../../../styles/box.module.css";
const CarrerOption = () => {
  return (
    <Box py={10} bg="gray.100">
      <Container maxW={"6xl"}>
        <SectionTitle
          children={"Career Scope after Digital Marketing Course"}
          my={10}
        />
        <SimpleGrid columns={[1, 2, 4]} gap={4}>
          <Box position={"relative"}>
            <Card
              minH={"210px"}
              boxShadow={"xl"}
              className={styled.serviceBox}
              _hover={{ color: "white" }}
            >
              <CardBody>
                With our practical learning programs, students can acquire
                well-paying Full-Time/Part-Time Work in a reputable company. We
                ensure we educate top talents that will get them high-paying
                employment.
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card
              minH={"340px"}
              // my={2}
              // boxShadow={"xl"}
              className={styled.serviceBox}
              //   _hover={{ color: "white" }}
              textAlign={"center"}
            >
              <CardBody>
                After finishing this course, you can launch your Digital
                Marketing Agency and establish your future. It may allow you to
                demonstrate your abilities as a qualified digital marketer.
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card
              textAlign={"center"}
              minH={"340px"}
              className={styled.serviceBox}
            >
              <CardBody>
                You can build your freelance business by doing the Digital
                Marketing Course. It provides an excellent opportunity to work
                as a freelancer, supplementing your income.
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card
              minH={"340px"}
              boxShadow={"xl"}
              className={styled.serviceBox}
              textAlign={"center"}
            >
              <CardBody>
                As an entrepreneur, doing the Digital Marketing Course can
                polish your skills. Keeping up with the new skills is essential
                to make your business successful
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CarrerOption;
