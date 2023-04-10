import { useState } from "react";
import {
  Container,
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  FormLabel,
} from "@chakra-ui/react";

const Category = (props) => {
  console.log(props);
  const [name, setName] = useState(props.name ? props.name : null);
  const [description, setDescription] = useState(
    props.description ? props.description : null
  );
  if (props.item) {
    props?.setId(props.item._id);
  }
  props.setName(name);
  props.setDescription(description);
  return (
    <Container maxW={"full"} py={10}>
      <Heading textAlign={"center"}>{props.title}</Heading>

      <FormControl>
        <Input
          mt={10}
          type="text"
          name={"name"}
          placeholder={"Enter Category Name"}
          onChange={(e) => {
            setName(e.target.value);
            props.setName(e.target.value);
          }}
          value={name}
        />

        <Input
          mt={10}
          type="text"
          placeholder={"Enter Category Description"}
          name={"description"}
          onChange={(e) => {
            setDescription(e.target.value);
            props.setDescription(e.target.value);
          }}
          value={description}
        />

        <Box textAlign="center" py={10}>
          {props?.isEditing ? (
            <Button
              px={10}
              bg={"blue.500"}
              onClick={(e) => {
                props.onClickEvent(e);
                setName("");
                setDescription(null);
              }}
            >
              Update Category
            </Button>
          ) : (
            <Button
              px={10}
              bg={"blue.500"}
              onClick={(e) => {
                props.onClickEvent(e);
                setName("");
                setDescription(null);
              }}
            >
              Save Category
            </Button>
          )}
        </Box>
      </FormControl>
    </Container>
  );
};

export default Category;
