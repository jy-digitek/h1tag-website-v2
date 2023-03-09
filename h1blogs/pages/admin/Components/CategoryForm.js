import { useState } from "react";
import {
  Container,
  Box,
  FormControl,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import AdminLayout from "./AdminLayout";
const Category = (props) => {
  const [data, setData] = useState({});
  const onChangeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const onAddHandle = (e) => {
    e.preventDefault();
    console.log(1);
    console.log(data);
  };
  const onUpdateHandle = (e) => {
    e.preventDefault();
    console.log("update");
  };
  return (
    <AdminLayout>
      <Container maxW={"full"} py={10}>
        <Heading textAlign={"center"}>{props.title}</Heading>
        <FormControl>
          <Input
            mt={10}
            type="text"
            placeholder={"Enter category name"}
            onChange={onChangeHandle}
            name={"name"}
          />
          <Input
            mt={10}
            type="text"
            placeholder={"Enter category name"}
            onChange={onChangeHandle}
            name={"description"}
          />

          <Box textAlign="center" py={10}>
            {props._id ? (
              <Button px={10} onClick={onUpdateHandle}>
                Update Category
              </Button>
            ) : (
              <Button px={10} onClick={onAddHandle}>
                add Category
              </Button>
            )}
          </Box>
        </FormControl>
      </Container>
    </AdminLayout>
  );
};

export default Category;
