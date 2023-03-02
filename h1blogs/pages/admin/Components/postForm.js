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
import { useState } from "react";

const PostForm = (props) => {
  const gettAllCategory = async () => {
    try {
    } catch (error) {}
  };
  const [selectData, setSelectData] = useState([]);
  let arr = [];
  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(selectData);
  };
  // const onChangeHandle = (e) => {
  //   arr.push(e.target.value);
  //   setSelectData(arr);
  //   console.log(selectData);
  // };

  return (
    <AdminLayout>
      <Container>
        <Text align={"center"} fontSize="2xl" fontWeight={"bold"}>
          {props.title}
        </Text>
        <Box>
          <FormControl>
            <Select
              placeholder="Select Category"
              multiple
              onChange={(e) => arr.push(e.target.value)}
              value={selectData}
              size="xl"
              // options={data}
            >
              <option value={1}>option1</option>
              <option value={2}>option2</option>
              <option value={3}>option3</option>
            </Select>
            <Button onClick={submitHandle}>submit</Button>
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
