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
import Link from "next/link";
import { login } from "../api/category";

import { userLogin } from "../redux/featured/actions";

import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../redux/featured/actions";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // const post = useSelector((state) => state.post.data);
  const post = useSelector((state) => state.post.data);

  console.log("getList", post);

  //console.log("post", post);
  const dispatch = useDispatch();

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
    var data = [page, ""];
    dispatch(getPostList(data));
    //login("rajputkdsingh999@gmail.com", "7408822798");
  }, [page]);

  return (
    <Layout>
      <Container maxW={"full"}>
        <Box align={"center"} pt={3}>
          <Heading as="h1">Blog</Heading>
        </Box>
        <SimpleGrid columns={[1, 3]} py={10} px={[0, 20]} align="center">
          {post &&
            post.length > 0 &&
            post.map((data, index) => {
              return (
                <>
                  {data.isVisible && (
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
                    </Box>
                  )}
                </>
              );
            })}
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
