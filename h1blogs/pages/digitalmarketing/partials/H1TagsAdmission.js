import { CustomCard } from "../../../components/CustomCard";
//import { Container } from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { digitalMaeketingH1Admission } from "../../../components/DATA";
import { Box, Text } from "@chakra-ui/react";

const H1TagsAdmission = () => {
    return (
        <Container maxW={"full"}>
            <SectionTitle
                pt={5}
                children={
                    "Why H1 Tags Is Best Digital Marketing Course in Delhi"
                }
            />
            <Box as="p" my={[4, 4]} maxW={"6xl"} mx={"auto"}>
                <Text>
                    In the Dynamic Landscape of Digital Marketing Education, One
                    Name Stands Head and Shoulders Above the Rest: H1 Tags. If
                    You're in Pursuit of Excellence and Seeking to Master the
                    Art of Digital Marketing, Here's Why H1 Tags Is Undisputedly
                    the Best Digital Marketing Course in Delhi
                </Text>
            </Box>
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
