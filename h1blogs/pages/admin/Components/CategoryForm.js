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
  const [name, setName] = useState(props.name ? props.name : "");
  const [description, setDescription] = useState(
    props.description ? props.description : ""
  );

  return (
    <Container maxW={"full"} py={10}>
      <Heading textAlign={"center"}>{props.title}</Heading>

      <FormControl>
        <Input
          mt={10}
          type="text"
          placeholder={"Enter category name"}
          onChange={(e) => {
            setName(e.target.value);
            props.setName(e.target.value);
          }}
          name={"name"}
          value={name}
        />

        <Input
          mt={10}
          type="text"
          placeholder={"Enter category name"}
          name={"description"}
          onChange={(e) => {
            setDescription(e.target.value);
            props.setDescription(e.target.value);
          }}
          value={description}
        />

        <Box textAlign="center" py={10}>
          <Button
            px={10}
            bg={"blue.500"}
            onClick={(e) => {
              props.onClickEvent(e);
              setName("");
              setDescription("");
            }}
          >
            {props.isEditing ? "Update" : "Save"} Category
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Category;
