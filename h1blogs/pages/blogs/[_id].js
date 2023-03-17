import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Image,
  Text,
  Box,
  Heading,
  ChakraProvider,
} from "@chakra-ui/react";
import { getSinglePost } from "../redux/featured/actions";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
const Post = ({}) => {
  const router = useRouter();
  const { _id } = router.query;
  const post = useSelector((state) => state.post);
  console.log("post", post);

  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getSinglePost(_id));
    }
  }, [_id]);

  return (
    <ChakraProvider>
      <Container maxW={"full"}>
        {!post.isLoading && post.data.isVisible && (
          <Box mx={[0, "20%"]}>
            <Heading textAlign={"center"} my={10}>
              {post.data.title}{" "}
            </Heading>

            <Box style={{ alignItems: "center" }}>
              <Image
                src={`../uploads/${post.data.image}`}
                alt="Dan Abramov"
                boxSize={"100%"}
                maxH={"400px"}
                position={"cover"}
              />
            </Box>

            <Text>{post.data.slug}</Text>
            <Text
              style={{ fontSize: "17px" }}
              dangerouslySetInnerHTML={{ __html: post.data.body }}
            ></Text>
            <Box>
              <Heading as={"h4"} fontSize={"18px"}>
                Summary
              </Heading>
              <Text>{post.data.summary}</Text>
            </Box>
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
};
export default Post;
