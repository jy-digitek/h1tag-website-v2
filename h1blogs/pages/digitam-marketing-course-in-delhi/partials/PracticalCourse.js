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
import { Text } from "@chakra-ui/react";
const PracticalCourse = () => {
    return (
        <Box py={10} bg="gray.100" my={10}>
            <Container maxW={"6xl"}>
                <SectionTitle
                    children={
                        "100% practical digital marketing course with experts "
                    }
                    my={5}
                />
                <Box
                    as="p"
                    my={[3, 5]}
                    maxW={"5xl"}
                    mx={"auto"}
                    textAlign={"center"}
                    // px={[20]}
                >
                    <Text>
                        {" "}
                        Transform your passion for digital marketing into a
                        flourishing career. Look only as far as the{" "}
                        <strong>
                            best digital marketing course in Delhi.
                        </strong>{" "}
                        Our program is designed to provide you with hands-on
                        experience and expert guidance that will propel you to
                        success in the ever-evolving digital landscape.
                    </Text>
                </Box>
                <SimpleGrid columns={[1, 2, 4]} gap={4}>
                    <Box position={"relative"}>
                        <Card
                            minH={"340px"}
                            boxShadow={"xl"}
                            className={styled.serviceBox}
                        >
                            <CardBody>
                                <strong>Hands-On Learning :</strong> More than
                                Theory alone will be required in the dynamic
                                world of digital marketing. Our course is built
                                on a foundation of practical application,
                                ensuring you gain real-world skills that are
                                immediately transferable to your career.
                            </CardBody>
                        </Card>
                    </Box>
                    <Box>
                        <Card
                            minH={"360px"}
                            // my={2}
                            boxShadow={"xl"}
                            className={styled.serviceBox}
                            //   _hover={{ color: "white" }}
                            textAlign={"center"}
                        >
                            <CardBody>
                                <strong>Expert Guidance : </strong> Learn from
                                industry experts who have mastered digital
                                marketing concepts and thrived in the field.
                                Their insights and experiences will guide you
                                toward effective strategies and best practices.
                            </CardBody>
                        </Card>
                    </Box>
                    <Box>
                        <Card
                            textAlign={"center"}
                            minH={"340px"}
                            boxShadow={"xl"}
                            className={styled.serviceBox}
                        >
                            <CardBody>
                                <strong> Comprehensive Curriculum :</strong> Our
                                curriculum covers every facet of digital
                                marketing, from SEO and social media marketing
                                to content creation and data analytics. You'll
                                graduate with a holistic understanding of the
                                field.
                            </CardBody>
                        </Card>
                    </Box>
                    <Box>
                        <Card
                            minH={"360px"}
                            boxShadow={"xl"}
                            className={styled.serviceBox}
                            textAlign={"center"}
                        >
                            <CardBody>
                                <strong> Live Projects : </strong> Put your
                                knowledge into action by working on live
                                projects that mimic real client scenarios. This
                                experience will boost your confidence and equip
                                you to handle diverse challenges.
                            </CardBody>
                        </Card>
                    </Box>
                </SimpleGrid>
                <Text
                    as="p"
                    my={[3, 5]}
                    maxW={"5xl"}
                    mx={"auto"}
                    textAlign={"center"}
                >
                    Don't just learn about digital marketing—immerse yourself in
                    it. Enroll in the{" "}
                    <strong> best digital marketing course in Delhi </strong>
                    with h1 tags and embark on a transformative journey that
                    will prepare you for success in the digital world.
                </Text>
            </Container>
        </Box>
    );
};

export default PracticalCourse;
