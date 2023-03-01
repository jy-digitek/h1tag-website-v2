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
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import axios from "axios";
import AdminLayout from "../Components/AdminLayout";
import PostForm from "../Components/postForm";

const DashBoard = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/vi/post/posts");
    //  const data=await response;
    setPosts(response.data);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/admin");
    } else {
      getData();
    }
  }, []);

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
          <TableCaption>Imperial to metric conversion factors</TableCaption>
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
      </TableContainer>
    </AdminLayout>
  );
};

export default DashBoard;
