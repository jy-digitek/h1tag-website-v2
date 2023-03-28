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
import Head from "next/head";

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
          <>
            <Head>
              <title>
                Add a Shopping Cart to Any Website in Minutes - Snipcart
              </title>
              <meta name="description" content={post.data.summary} />
              <meta
                property="og:title"
                content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
              />
              <meta
                property="og:description"
                content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
              />
              <meta property="og:url" content="https://snipcart.com/" />
              <meta property="og:type" content="website" />
            </Head>
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
          </>
        )}
      </Container>
    </ChakraProvider>
  );
};
export default Post;
