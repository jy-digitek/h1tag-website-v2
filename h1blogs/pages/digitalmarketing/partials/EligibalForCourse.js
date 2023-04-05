import { Container, Box, Grid, GridItem } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export const EligibalForCourse = () => {
  return (
    <Container maxW={"full"} my={10}>
      <Grid
        // templateRows={["repeat(6, 1fr)", "repeat(2, 1fr)"]}
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={[1, 6]} colSpan={[5, 1]} bg="tomato" py={2}>
          <SectionTitle children={"Who can do this Course?"} />
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            College students interested in pursuing a job in Digital Marketing.
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            Professionals seeking to advance their jobs in the more hopeful
            field of Digital Marketing.
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            Coaches and trainers who want to expand their training company
            online and attract more students.
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            Homepreneurs who want to improve their digital marketing skills and
            create a source of passive revenue.
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            Entrepreneurs and agency owners who want to develop their companies
            and produce leads on digital platforms.
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip">
          Image
        </GridItem>
        <GridItem colSpan={[6, 2]} bg="papayawhip" py={2}>
          <Box>
            Freelance marketers seeking more national and foreign customers and
            a stable income.
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
