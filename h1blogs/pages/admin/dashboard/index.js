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
  Link,
  Flex,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import AdminLayout from "../Components/AdminLayout";
import PostForm from "../Components/postForm";

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
        <Link href={<PostForm />}>
          <Button
            bg={"blue.500"}
            px={10}
            my={5}
            color={"white"}
            ml={10}
            // onClick={router.push("/admin")}
          >
            Add Post
          </Button>
        </Link>
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
              posts.map((data) => {
                return (
                  <>
                    <Tr>
                      <Td>i{data._id}</Td>
                      <Td>{data.title}</Td>
                      <Td gap={10}>
                        <Button bg={"yellow.200"} mr={5}>
                          Edit
                        </Button>
                        <Button bg="red.500" color="white">
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  </>
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
