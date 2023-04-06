import {
  Container,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Image,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const EligibalForCourse = () => {
  return (
    <Container maxW={"full"} my={10} bg="gray.400">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={[1]} colSpan={[5, 1]} py={2}>
          <SectionTitle children={"Who can do this Course?"} />
        </GridItem>
        <GridItem colSpan={[4]}>
          <SimpleGrid columns={[1, 2]}>
            <Box>
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text textAlign={"center"}>
                College students interested in pursuing a job in Digital
                Marketing.
              </Text>
            </Box>
            <Box>
              {" "}
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text>
                Professionals seeking to advance their jobs in the more hopeful
                field of Digital Marketing.
              </Text>
            </Box>
            <Box>
              {" "}
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text>
                Coaches and trainers who want to expand their training company
                online and attract more students.
              </Text>
            </Box>
            <Box>
              {" "}
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text>
                Homepreneurs who want to improve their digital marketing skills
                and create a source of passive revenue.
              </Text>
            </Box>
            <Box>
              {" "}
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text>
                Entrepreneurs and agency owners who want to develop their
                companies and produce leads on digital platforms.
              </Text>
            </Box>
            <Box>
              {" "}
              <Image src={"/test/demo.jpg"} />
            </Box>
            <Box>
              <Text>
                Freelance marketers seeking more national and foreign customers
                and a stable income.
              </Text>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  );
};
