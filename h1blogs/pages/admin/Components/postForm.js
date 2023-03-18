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
import { useEffect } from "react";
import { getCategories } from "../../redux/featured/actions";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const PostForm = (props) => {
  const dispatch = useDispatch();

  const { category, isLoading, isSuccess } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <AdminLayout>
      <Container>
        <Text align={"center"} fontSize="2xl" fontWeight={"bold"}>
          {props.title}
        </Text>
        <Box>
          <FormControl encType="multipart/form-data">
            <Select
              placeholder="Select Category"
              name="categories"
              onChange={(e) =>
                props.setData({
                  ...props.data,
                  [e.target.name]: e.target.value,
                })
              }
              size="lg"
            >
              {!isLoading &&
                isSuccess &&
                category &&
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
              value={props.spost ? props.spost.title : props.data.title}
              my={4}
              name="title"
              onChange={(e) =>
                props.spost
                  ? props.spostSet({
                      ...props.spost,
                      [e.target.name]: e.target.value,
                    })
                  : props.setData({
                      ...props.data,
                      [e.target.name]: e.target.value,
                    })
              }
              // onChange={(e) =>
              // props.spostSet({
              //   ...props.spost,
              // [e.target.name]: e.target.value,
              // })
              // }
            />
            <Input
              type="text"
              placeholder="slug here"
              name="slug"
              value={props.spost ? props.spost.slug : props.data.slug}
              onChange={(e) =>
                props.spostSet
                  ? props.spostSet({
                      ...props.spost,
                      [e.target.name]: e.target.value,
                    })
                  : props.setData({
                      ...props.data,
                      [e.target.name]: e.target.value,
                    })
              }
              my={4}
            />
            <Input
              type="file"
              placeholder="Upload image"
              name="image"
              my={4}
              onChange={(e) =>
                props.spostSet
                  ? props.spostSet({
                      ...props.spost,
                      [e.target.name]: e.target.value,
                    })
                  : props.setData({
                      ...props.data,
                      [e.target.name]: e.target.files[0],
                    })
              }
            />
            {/* <img src={`uploads/${props.data.image}`} /> */}
            <Textarea
              placeholder="Text your summary here"
              my={4}
              name="summary"
              value={props.spost ? props.spost.summary : props.data.summary}
              onChange={(e) =>
                props.spost
                  ? props.spostSet({
                      ...props.spost,
                      [e.target.name]: e.target.value,
                    })
                  : props.setData({
                      ...props.data,
                      [e.target.name]: e.target.value,
                    })
              }
            />

            {/* <Textarea
              placeholder="Text your body here"
              my={4}
              name="body"
              onChange={(e) => props.setBody(e.target.value)}
            />
            {props.body} */}
            <ReactQuill
              theme="snow"
              value={props.spost ? props.body : props.body}
              onChange={props.spost ? props.setBody : props.setBody}
            />

            {props.spost ? (
              <Button onClick={(e) => props.updateSubmitHandle(e)}>
                {" "}
                Update Submit
              </Button>
            ) : (
              <Button
                onClick={(e) => {
                  props.addsubmitHandle(e);
                }}
              >
                Add Submit
              </Button>
            )}
          </FormControl>
        </Box>
      </Container>
    </AdminLayout>
  );
};

export default PostForm;
