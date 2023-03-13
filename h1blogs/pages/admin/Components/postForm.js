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

import { postCreate } from "../../redux/featured/actions";
import { useDispatch } from "react-redux";
const PostForm = (props) => {
  console.log(props.data);
  const [category, setCategory] = useState([]);
  const gettAllCategory = async () => {
    try {
      const category = await axios.get(
        `http://localhost:5000/api/vi/category/getallcategory`
      );
      // console.log(category.data);
      setCategory(category.data);
    } catch (error) {}
  };
  const [data, setData] = useState([]);
  const [image, setImage] = useState(undefined);
  const dispatch = useDispatch();

  const AddsubmitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("image", image);
    formData.append("summary", data.summary);
    formData.append("categories", data.categories);
    formData.append("body", data.body);
    console.log(formData.getAll("image"));

    dispatch(postCreate(formData));
  };
  const onChangeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const updateSubmitHandle = () => {};

  const bodyHandleChanged = (data) => {
    setData({ ...data, body: data });
  };

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
          {/* Selected category -{} */}
          {/* {console.log("props", props.data.categories[0].name)} */}
          <FormControl enctype="multipart/form-data">
            <Select
              placeholder="Select Category"
              onChange={onChangeHandle}
              size="lg"
              name="categories"
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
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              my={4}
            />
            <Input
              type="file"
              placeholder="give imag "
              name="image"
              my={4}
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* <img src={`uploads/${props.data.image}`} /> */}
            <Textarea
              placeholder="Text your summary here"
              my={4}
              name="summary"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />

            <Textarea
              placeholder="Text your body here"
              my={4}
              name="body"
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
