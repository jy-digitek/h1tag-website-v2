import { createSlice } from "@reduxjs/toolkit";
import { getCategories, createCategories, deleteCategories } from "./actions";
//import { gettAllCategory } from "../../api/category";
import { userLogin, userLogout } from "./actions";

const initialState = {
  isLoading: false,
  userToken: "",
  error: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userLogin.pending]: (state) => {
      console.log(state);
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogin = true;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogin = false;
      state.error = payload;
    },
    [userLogout.pending]: (state) => {
      // console.log(state);
      state.isLoading = true;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogin = false;
      state.userToken = payload;
    },
    [userLogout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogin = false;
      state.error = payload;
    },
  },
});
