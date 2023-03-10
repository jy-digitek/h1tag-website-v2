import { createSlice } from "@reduxjs/toolkit";
import { getPostList } from "./actions";

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
  },
});
