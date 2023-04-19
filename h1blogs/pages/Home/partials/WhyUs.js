import { Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../components/CustomCard";

import { comparision } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
const Description = () => {
  return (
    <Text
      color={"gray.600"}
      fontSize={{ base: "sm", sm: "lg" }}
      fontWeight="normal"
    >
      What makes <strong>H1 Tags</strong> the Best Digital Marketing training
      institute in Delhi?
    </Text>
  );
};
const WhyUs = () => {
  return (
    <>
      <Container maxW={"full"} pb={10}>
        <Stack spacing={0} as={Container} maxW={"3xl"} textAlign={"center"}>
          <SectionTitle as="h2" desc={<Description />} my={10}>
            Why H1Tags
          </SectionTitle>
        </Stack>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={10}
          px={[0, 10]}
          fontSize={"20px"}
        >
          {comparision.map((item, key) => {
            return (
              <Fade cascade key={key}>
                <CustomCard
                  minH={"290px"}
                  key={key}
                  heading={item.title}
                  icon={item.icon}
                  description={item.text}
                  boxShadow="lg"
                  // href={"#"}
                  // actionText={"Learn more"}
                />
              </Fade>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default WhyUs;
