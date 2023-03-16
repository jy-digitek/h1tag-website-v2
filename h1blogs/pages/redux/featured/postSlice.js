import { createSlice } from "@reduxjs/toolkit";
import { getPostList, getSinglePost, postCreate, updatePosts } from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getPostList.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getPostList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    [getSinglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getSinglePost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    // [createPost.fulfilled]: (state, action) => {
    //   state.push(action.payload);
    // },
    [postCreate.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [postCreate.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = [payload];
    },
    [postCreate.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },

    [updatePosts.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [updatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.find((item, index) => {
        if (item._id === action.payload._id) {
          state.data[index] = action.payload;
        }
      });
    },
    [updatePosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});
