import { Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../components/CustomCard";

import { comparision } from "../../../components/DATA";

export const WhyUs = () => {
  return (
    <>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Why H1Tags
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          What makes <strong>H1 Tags</strong> the Best Digital Marketing
          training institute in Delhi?
        </Text>
      </Stack>
      <Container maxW={"full"} mt={12}>
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
