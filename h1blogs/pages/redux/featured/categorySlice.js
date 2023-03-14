import { createSlice } from "@reduxjs/toolkit";
import { getCategories, createCategories, deleteCategories } from "./actions";
//import { gettAllCategory } from "../../api/category";

const initialState = {
  category: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.category = payload;
      //console.log(state.data);
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    [createCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [createCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.category = [action.payload];
    },
    [createCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    [deleteCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // state.category = [action.payload];
      state.category = state.category.filter(
        (item) => item._id !== action.payload
      );

      // console.log("slice", action.payload);
    },
    [deleteCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});
