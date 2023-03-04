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
import { useEffect, useState } from "react";
import axios from "axios";

const PostForm = (props) => {
  const [category, setCategory] = useState([]);
  const gettAllCategory = async () => {
    try {
      const category = await axios.get(
        `http://localhost:5000/api/vi/category/getallcategory`
      );
      console.log(category.data);
      setCategory(category.data);
    } catch (error) {}
  };
  const [data, setData] = useState([]);
  const AddsubmitHandle = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:5000/api/vi/post/postcreate`,
      { data }
    );
    console.log(response);
  };

  const onChangeHandle = (e) => {
    // console.log(e.target.value);
    //arr.push(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  };
  const updateSubmitHandle = () => {};

  useEffect(() => {
    gettAllCategory();
  }, []);

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
              onChange={onChangeHandle}
              size="xl"
              name="categories"
              //value={data}
            >
              {category &&
                category.map((item, i) => {
                  return (
                    <option value={item._id} key={i}>
                      {item.name}
                    </option>
                  );
                })}
            </Select>

            <Input
              type="text"
              placeholder="Give title here"
              my={4}
              name="title"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="slug here"
              name="slug"
              value={data.title}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: data.title })
              }
              my={4}
            />
            <Input
              type="text"
              placeholder="give image
            "
              name="img"
              my={4}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Textarea
              placeholder="Text Your Body here"
              my={4}
              name="body"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Textarea
              placeholder="Text your summary here"
              my={4}
              name="summary"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            {props._id ? (
              <Button onClick={updateSubmitHandle}> Update Submit</Button>
            ) : (
              <Button onClick={AddsubmitHandle}>Add Submit</Button>
            )}
          </FormControl>
        </Box>
      </Container>
    </AdminLayout>
  );
};

export default PostForm;
