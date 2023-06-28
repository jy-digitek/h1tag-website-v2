import { CustomCard } from "../../../components/CustomCard";
//import { Container } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { digitalMaeketingH1Admission } from "../../../components/DATA";

const H1TagsAdmission = () => {
  return (
    <Container maxW={"full"}>
      <SectionTitle
        py={10}
        children={"Why Should You Take Admission In H1 Tags Institute?"}
      />
      <SimpleGrid columns={[1, 1, 4]} px={[5, 20]} gap={5}>
        {digitalMaeketingH1Admission.map((item, key) => {
          return (
            <CustomCard
              key={key}
              heading={item.title}
              icon={item.icon}
              description={item.text}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
export default H1TagsAdmission;
