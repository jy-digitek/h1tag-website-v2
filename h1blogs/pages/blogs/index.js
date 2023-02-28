import {
  Container,
  SimpleGrid,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  CardBody,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  // const getData = async () => {
  //     const response = await fetch("http://localhost:5000/api/vi/post/posts");
  //     const data = await response.json();
  //     setPosts(data);
  //   };

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/vi/post/posts");
    //  const data=await response;
    setPosts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("post", posts);

  return (
    <Layout>
      <Container maxW={"full"}>
        <Box align={"center"} pt={3}>
          <Heading as="h1">Blog</Heading>
        </Box>

        <SimpleGrid columns={[1, 3]} py={10} px={[0, 20]} align="center">
          {posts.length > 0 &&
            posts.map((data) => (
              <Box py={[5]}>
                <Card maxW="xs">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Box>
                          <Heading size="sm">Segun Adebayo</Heading>
                          <Text>{data.title}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
                    </Text>
                  </CardBody>
                  <Image
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Chakra UI"
                  />
                </Card>
              </Box>
            ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Blog;
