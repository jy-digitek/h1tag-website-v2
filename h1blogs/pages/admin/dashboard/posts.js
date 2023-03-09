import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import AdminLayout from "../Components/AdminLayout";
import PostForm from "../Components/postForm";
import AddPost from "./addPost";

const DashBoard = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/vi/post/posts?page=${page}`
    );
    //  const data=await response;
    setTotalPages(response.data.totalPages);
    setPosts(response.data.posts);
    console.log(response.data);
  };
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
  const deleteItem = () => {};
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/admin");
    } else {
      getData();
    }
  }, [page]);

  return (
    <AdminLayout>
      <Box>
        <Button
          bg={"blue.500"}
          px={10}
          my={5}
          color={"white"}
          ml={10}
          // onClick={router.push("/admin")}
        >
          <Link href="/admin/dashboard/addPost">add post</Link>
        </Button>
      </Box>
      <TableContainer>
        <Table variant="simple" size={["sm", "lg"]}>
          <Thead>
            <Tr fontWeight={"bold"}>
              <Th>Post</Th>
              <Th>title</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.length > 0 &&
              posts.map((data, i) => {
                return (
                  <Tr key={i}>
                    <Td>i{data._id}</Td>
                    <Td>{data.title}</Td>
                    <Td gap={10}>
                      <Button bg={"yellow.200"} mr={5}>
                        <Link href="/admin/dashboard/updatePost">Edit</Link>
                      </Button>
                      <Button bg="red.500" color="white">
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
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
      </TableContainer>
    </AdminLayout>
  );
};

export default DashBoard;
