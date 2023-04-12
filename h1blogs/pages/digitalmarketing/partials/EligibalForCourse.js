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

const EligibalForCourse = () => {
  return (
    <Container maxW={"full"}>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={[1]} colSpan={[5, 1]} py={2}>
          <SectionTitle
            children={"Who can do this Course?"}
            pos={"sticky"}
            top={120}
          />
        </GridItem>
        <GridItem colSpan={[4]}>
          <SimpleGrid
            columns={[1, 2]}
            backgroundImage={
              "linear-gradient(to left, rgb(130 146 244 / 81%), rgb(23 33 87 / 80%)),url(crbg.jpg)"
            }
            // backgroundSize={"100%"}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundAttachment={"fixed"}
          >
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
                College students interested in pursuing a job in Digital
                Marketing.
              </Text>
            </Box>
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
                Professionals seeking to advance their jobs in the more hopeful
                field of Digital Marketing.
              </Text>
            </Box>
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
                Coaches and trainers who want to expand their training company
                online and attract more students.
              </Text>
            </Box>
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
                Homepreneurs who want to improve their digital marketing skills
                and create a source of passive revenue.
              </Text>
            </Box>
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
                Entrepreneurs and agency owners who want to develop their
                companies and produce leads on digital platforms.
              </Text>
            </Box>
            <Box>
              <Image src={"/test/item-service-1.jpeg"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 20,
                transition: "1s",
                color: "#fff",
                ":hover": { background: "#fff", color: "#000" },
                borderBottom: "1px solid #8a96dfb5",
              }}
            >
              <Text fontSize={20} fontWeight={"semibold"}>
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

export default EligibalForCourse;
