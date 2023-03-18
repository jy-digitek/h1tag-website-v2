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
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  getCategories,
  createCategories,
  deleteCategories,
  updateCategories,
} from "../../redux/featured/actions";

import { updateCategory } from "../../api/category";

import CategoryForm from "../../admin/Components/CategoryForm";

import ReturnFocus from "../Components/modal";

const categories = () => {
  const dispatch = useDispatch();

  const [isEditing, isEditingSet] = React.useState(false);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [updateName, setUpdateName] = React.useState("");
  const [updateDescription, setUpdateDescription] = React.useState("");
  const [id, setId] = React.useState("");
  const onAddHandle = (e) => {
    e.preventDefault();
    dispatch(createCategories({ name, description }));
    dispatch(getCategories());
  };
  const onUpdateHandle = (e) => {
    e.preventDefault();
    //console.log(id);
    //dispatch(updateCategories(id, name, description));
    // console.log("avdibjh", updateName, updateDescription);
    // const data = updateCategory(id, {
    //   name: updateName,
    //   description: updateDescription,
    // });
    console.log("asads", updateName, updateDescription);
    const data = { name: updateName, description: updateDescription };
    console.log("data1", data);
    dispatch(updateCategories([id, data]));
    dispatch(getCategories());
  };
  const categoriesData = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <AdminLayout>
      {/* <Box>
        <Link href="/admin/dashboard/createcategory">
          <Button bg={"blue.500"} px={10} my={5} color={"white"} ml={10}>
            Add Category
          </Button>
        </Link>
      </Box> */}

      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading p={0} textAlign={"center"}>
            Add New Category
          </Heading>

          <CategoryForm
            isEditing={false}
            onClickEvent={onAddHandle}
            setName={setName}
            setDescription={setDescription}
          />
        </Box>
        <Box>
          <Heading p={0} textAlign={"center"}>
            All Category
          </Heading>

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
                              onClickEvent={onUpdateHandle}
                              setName={setUpdateName}
                              setDescription={setUpdateDescription}
                              name={item.name}
                              description={item.description}
                              setId={setId}
                              id={item._id}
                            />
                          }
                        />

                        <Button
                          bg="red.500"
                          color="white"
                          onClick={() => dispatch(deleteCategories(item._id))}
                        >
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
