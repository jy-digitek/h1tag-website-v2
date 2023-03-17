import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  gettAllCategory,
  createCategory,
  deleteCategory,
  login,
} from "../../api/category";
import { getPost, getPostById, createPost, updatePost } from "../../api/post";

import { updateCategory } from "../../api/category";

export const getPostList = createAsyncThunk(
  "post/getPostList",
  async (data, { rejectWithValue }) => {
    try {
      console.log("actions", data[0], data[1]);
      const res = await getPost(data[0], data[1]);
      // console.log("actions", res.data.posts);
      console.log("actionresponse", res);
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
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "category/getcategoryList",
  async () => {
    const res = await gettAllCategory();
    //console.log("getcategories", res.data);
    return res.data;
  }
);

export const updateCategories = createAsyncThunk(
  "category/updateCategory",

  async (data) => {
    const res = await updateCategory(data[0], data[1]);
    console.log("action res", res.data);
    return res.data;
  }
);

export const createCategories = createAsyncThunk(
  "category/createcategory",
  async (data) => {
    const res = await createCategory(data);
    //console.log("action", res.data);
    return res.data;
  }
);

export const deleteCategories = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    const res = await deleteCategory(id);
    //console.log("DELETErES", res);
    return id;
  }
);

export const updatePosts = createAsyncThunk(
  "category/updateCategory",
  async (data) => {
    console.log(data[0], data[1]);
    const res = await updatePost(data[0], data[1]);
    console.log("res actioon", res.data.updatePost);

    return res.data.updatePost;
  }
);

export const userLogin = createAsyncThunk(
  "auth/useLogin",

  async (data) => {
    try {
      const res = await login(data);
      if (!res.data.token) {
      }
      window.localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const userLogout = createAsyncThunk("auth/useLogout", () => {
  return window.localStorage.clear();
});
