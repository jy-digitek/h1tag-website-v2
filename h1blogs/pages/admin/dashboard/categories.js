import React, { useEffect } from "react";
import AdminLayout from "../Components/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { getCategories } from "../../redux/featured/actions";

const categories = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.category);
  // console.log(categoriesData.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
          <Link href="/admin/dashboard/createcategory">add category</Link>
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
          {/* {console.log()} */}
          <Tbody>
            {categoriesData.category.map((item, key) => (
              <Tr key={key}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td gap={10}>
                  <Button bg={"yellow.200"} mr={5}>
                    <Link href="/admin/dashboard/updatecategory/1">Edit</Link>
                  </Button>
                  <Button bg="red.500" color="white">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default categories;
