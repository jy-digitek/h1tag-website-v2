import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "../../api/post";

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
