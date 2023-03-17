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
  Input,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AdminLayout from "../Components/AdminLayout";
import PostForm from "../Components/postForm";
import AddPost from "./addPost";
import { useSelector, useDispatch } from "react-redux";
import { getPostList } from "../../redux/featured/actions";

const DashBoard = () => {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [querySearch, setQuerySearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const posts = useSelector((state) => state.post.data);

  //

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
  const deleteItem = () => {};

  var data = [page, querySearch];
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/admin");
    } else {
      dispatch(getPostList(data));
    }
  }, [page]);

  const onChangeSerachHandel = (e) => {
    data[1] = e.target.value;

    dispatch(getPostList(data));
  };

  return (
    <AdminLayout>
      <SimpleGrid
        columns={[1, 2]}
        position={"sticky"}
        top={0}
        bg={"white"}
        p={0}
        zIndex={1}
      >
        <Box>
          <Link href="/admin/dashboard/addPost">
            {" "}
            <Button
              bg={"blue.500"}
              px={10}
              my={5}
              color={"white"}
              ml={10}
              // onClick={router.push("/admin")}
            >
              add post
            </Button>
          </Link>
        </Box>
        <Box mr={5}>
          <Flex gap={2}>
            <Input
              px={10}
              my={5}
              placeholder="Search......"
              onChange={(e) => {
                // setQuerySearch(e.target.value);
                onChangeSerachHandel(e);
              }}
            />
          </Flex>
        </Box>
      </SimpleGrid>

      <TableContainer>
        <Table variant="simple" size={["sm", "lg"]}>
          <Thead zIndex={1}>
            <Tr fontWeight={"bold"}>
              <Th>title</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.length > 0 &&
              posts.map((data, i) => {
                return (
                  <Tr key={i}>
                    <Td>{data.title}</Td>
                    <Td>{data.isVisible ? "visible" : "Not Visble"}</Td>
                    <Td gap={10}>
                      <Link href={`/admin/dashboard/updatepost/${data._id}`}>
                        <Button bg={"yellow.200"} mr={5}>
                          Edit
                        </Button>
                      </Link>
                      {data.isVisible ? (
                        <Button bg="red.500" color="white" mr={5}>
                          Not Visible
                        </Button>
                      ) : (
                        <Button bg="red.500" color="white" px={8}>
                          Visible
                        </Button>
                      )}
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
