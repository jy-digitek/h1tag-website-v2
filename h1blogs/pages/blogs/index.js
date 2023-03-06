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
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import Link from "next/link";

import { getPost } from "../api/post";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const getData = async () => {
  //   const response = await axios.get(
  //     `http://localhost:5000/api/vi/post/posts?page=${page}`
  //   );

  //   console.log(response.data.totalPages);
  //   setTotalPages(response.data.totalPages);
  //   setPosts(response.data.posts);
  // };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    getPost(page)
      .then((response) => {
        //setUsers(response.data);
        console.log(response);
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  // console.log("post", posts);

  return (
    <Layout>
      <Container maxW={"full"}>
        <Box align={"center"} pt={3}>
          <Heading as="h1">Blog</Heading>
        </Box>

        <SimpleGrid columns={[1, 3]} py={10} px={[0, 20]} align="center">
          {posts.length > 0 &&
            posts.map((data, index) => (
              <Box py={[5]} key={index}>
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
                          <Text key={data._id}>{data.title}</Text>
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
                    <Link href={`/blogs/${data._id}`}>next</Link>
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
        <Box m={10}>
          <Flex justify={"space-between"}>
            <Button onClick={prevPage} bg={"yellow.300"}>
              prev
            </Button>
            <Button onClick={nextPage} bg={"green.300"}>
              next
            </Button>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
};
export default Blog;
