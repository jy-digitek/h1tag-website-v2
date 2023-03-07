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
import { Spinner } from "@chakra-ui/react";

import { getPost } from "../api/post";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingPosts, loadingPostsSet] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [postIsVisible, postIsVisibleSet] = useState(false);
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
    loadingPostsSet(true);
    getPost(page)
      .then((response) => {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
        loadingPostsSet(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <Layout>
      <Container maxW={"full"}>
        <Box align={"center"} pt={3}>
          <Heading as="h1">Blog</Heading>

          {loadingPosts && <Spinner size="sm" />}
        </Box>
        <SimpleGrid columns={[1, 3]} py={10} px={[0, 20]} align="center">
          {!loadingPosts &&
            posts &&
            posts.length > 0 &&
            posts.map((data, index) => (
              <Box py={[5]} key={index}>
                {/* {data.isVisible != false && ( */}
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
                          <Text>{data.title}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Link href={`/blogs/${data._id}`}>view</Link>
                  </CardBody>
                  <Image
                    objectFit="cover"
                    src={`/${data.image}`}
                    alt="Chakra UI"
                  />
                  {/* {console.log("img", data)} */}
                </Card>
                {/* )} */}
              </Box>
            ))}
        </SimpleGrid>
        {totalPages > 1 && (
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
        )}
      </Container>
    </Layout>
  );
};
export default Blog;
