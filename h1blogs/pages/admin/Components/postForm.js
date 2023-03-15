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

import { useDispatch, useSelector } from "react-redux";

import ReactQuill from "react-quill";
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
          <FormControl enctype="multipart/form-data">
            <Select
              placeholder="Select Category"
              onChange={(e) => props.setCategories(e.target.value)}
              size="lg"
              name="categories"
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
              my={4}
              name="title"
              onChange={(e) => props.setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="slug here"
              name="slug"
              onChange={(e) => props.setSlug(e.target.value)}
              my={4}
            />
            <Input
              type="file"
              placeholder="give imag "
              name="image"
              my={4}
              onChange={(e) => props.setImage(e.target.files[0])}
            />
            {/* <img src={`uploads/${props.data.image}`} /> */}
            <Textarea
              placeholder="Text your summary here"
              my={4}
              name="summary"
              onChange={(e) => props.setSummary(e.target.value)}
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
              value={props.body}
              onChange={props.setBody}
            />

            {props.data ? (
              <Button> Update Submit</Button>
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
