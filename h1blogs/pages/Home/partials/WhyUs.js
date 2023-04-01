import { Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../components/CustomCard";

import { comparision } from "../../../components/DATA";
import { SectionTitle } from "../../../components/SectionTitle";

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
export const WhyUs = () => {
  return (
    <>
      <Stack spacing={0} as={Container} maxW={"3xl"} textAlign={"center"}>
        <SectionTitle desc={<Description />}>Why H1Tags</SectionTitle>
      </Stack>
      <Container maxW={"full"} mt={5}>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={10}
          pt={10}
          px={[0, 10]}
          fontSize={"20px"}
        >
          {comparision.map((item, key) => {
            return (
              <CustomCard
                key={key}
                heading={item.title}
                icon={item.icon}
                description={item.text}
                // href={"#"}
                // actionText={"Learn more"}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};
