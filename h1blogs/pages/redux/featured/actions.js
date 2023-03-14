import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  gettAllCategory,
  updateCategory,
  createCategory,
  deleteCategory,
  login,
} from "../../api/category";
import { getPost, getPostById, createPost } from "../../api/post";

export const getPostList = createAsyncThunk(
  "post/getPostList",
  async (page, { rejectWithValue }) => {
    try {
      const res = await getPost(page);
      // console.log("actions", res.data.posts);
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
  async (id, data) => {
    const res = await updateCategory(id, data);
    // console.log(res);
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
