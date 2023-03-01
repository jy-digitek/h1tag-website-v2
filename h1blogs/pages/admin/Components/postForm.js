import {
  Box,
  Container,
  FormControl,
  Input,
  Text,
  Textarea,
  Select,
  option,
  Button,
} from "@chakra-ui/react";
import AdminLayout from "./AdminLayout";

const PostForm = (props) => {
  return (
    <AdminLayout>
      <Container>
        <Text align={"center"} fontSize="2xl" fontWeight={"bold"}>
          {props.title}
        </Text>
        <Box>
          <FormControl>
            <Select placeholder="Select Category">
              <option value="option1" name="categories">
                Option 1
              </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Input type="text" placeholder="Give title here" my={4} />
            <Input type="text" placeholder="slug here" my={4} />
            <Input
              type="text"
              placeholder="give image
            "
              my={4}
            />
            <Textarea placeholder="Text Your Body here" my={4} />
            <Textarea placeholder="Text your summary here" my={4} />
            {props._id ? (
              <Button> Update Submit</Button>
            ) : (
              <Button>Add Submit</Button>
            )}
          </FormControl>
        </Box>
      </Container>
    </AdminLayout>
  );
};

export default PostForm;
