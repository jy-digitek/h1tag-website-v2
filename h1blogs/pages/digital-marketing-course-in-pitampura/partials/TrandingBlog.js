import { Container } from "@chakra-ui/react";
import React from "react";
import {
    SimpleGrid,
    Card,
    Stack,
    CardBody,
    Heading,
    Text,
    Image,
    Box,
    CardFooter,
    Button,
} from "@chakra-ui/react";

const TrandingBlog = () => {
    return (
        <>
            <Text fontSize={"3xl"} textAlign={"center"}>
                Trending Blogs
            </Text>

            <SimpleGrid columns={[2, null, 3]} spacing="40px" pt={10} mx={20}>
                <Box>
                    {" "}
                    <Card maxW="sm">
                        <Image
                            src="/cardimage2.avif"
                            alt="Green double couch with wooden legs"
                        />
                        <CardBody>
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <Button
                                style={{
                                    backgroundColor: "#ae1212",
                                    color: "white",
                                }}
                            >
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>

                <Box>
                    {" "}
                    <Card maxW="sm">
                        <Image
                            src="/cardimage2.avif"
                            alt="Green double couch with wooden legs"
                        />
                        <CardBody>
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <Button
                                style={{
                                    backgroundColor: "#ae1212",
                                    color: "white",
                                }}
                            >
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    {" "}
                    <Card maxW="sm">
                        <Image
                            src="/cardimage3.avif"
                            alt="Green double couch with wooden legs"
                        />
                        <CardBody>
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <Button
                                style={{
                                    backgroundColor: "#ae1212",
                                    color: "white",
                                }}
                            >
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>
            </SimpleGrid>
        </>
    );
};

export default TrandingBlog;
