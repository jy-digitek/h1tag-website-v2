import { createAsyncThunk } from "@reduxjs/toolkit";
import { gettAllCategory } from "../../api/category";
import { getPost, getPostById, createPost } from "../../api/post";

export const getPostList = createAsyncThunk(
  "post/getPostList",
  async (page, { rejectWithValue }) => {
    try {
      const res = await getPost(page);
      console.log("actions", res.data.posts);
      return res.data.posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "post/getPostId",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getPostById(id);
      //console.log("actions", res.data.post);
      return res.data.post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postCreate = createAsyncThunk(
  "post/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const res = await createPost(data);
      //console.log("actions", res.data.post);
      //return res.data.post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "category/getcategoryList",
  async () => {
    const res = await gettAllCategory();
    return res.data;
  }
);
