import React, { useEffect } from "react";
import AdminLayout from "../Components/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Table,
  SimpleGrid,
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
import { getCategories, createCategories } from "../../redux/featured/actions";

import CategoryForm from "../../admin/Components/CategoryForm";

import ReturnFocus from "../Components/modal";
const categories = () => {
  const dispatch = useDispatch();

  const [isEditing, isEditingSet] = React.useState(false);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onAddHandle = (e) => {
    e.preventDefault();
    dispatch(createCategories({ name, description }));
    dispatch(getCategories());
  };
  const onUpdateHandle = (e) => {
    e.preventDefault();
  };
  const categoriesData = useSelector((state) => state.category);
  console.log("category", categoriesData.category);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <AdminLayout>
      <Box>
        <Link href="/admin/dashboard/createcategory">
          <Button bg={"blue.500"} px={10} my={5} color={"white"} ml={10}>
            Add Category
          </Button>
        </Link>
      </Box>

      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <CategoryForm
            isEditing={false}
            onClickEvent={onAddHandle}
            setName={setName}
            setDescription={setDescription}
          />
        </Box>
        <Box>
          <TableContainer>
            <Table variant="simple" size={["sm", "lg"]}>
              <Thead>
                <Tr fontWeight={"bold"}>
                  <Th>Category</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>

              <Tbody>
                {!categoriesData.isLoading &&
                  categoriesData.isSuccess &&
                  categoriesData.category.map((item, key) => (
                    <Tr key={key}>
                      <Td>{item.name}</Td>
                      <Td gap={10}>
                        <ReturnFocus
                          catID={item._id}
                          modalTitle={`Update Category - ${item.name}`}
                          btnText={`Edit`}
                          isEditing={isEditing}
                          isEditingSet={isEditingSet}
                          onClickEvent={
                            isEditing ? onAddHandle : onUpdateHandle
                          }
                          children={
                            <CategoryForm
                              item={item}
                              isEditing={true}
                              onClickEvent={
                                isEditing ? onUpdateHandle : onAddHandle
                              }
                              setName={setName}
                              setDescription={setDescription}
                              name={item.name}
                              description={item.description}
                            />
                          }
                        />

                        <Button bg="red.500" color="white">
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SimpleGrid>
    </AdminLayout>
  );
};

export default categories;
