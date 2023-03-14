import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./featured/postSlice";
import { categorySlice } from "./featured/categorySlice";
import { authSlice } from "./featured/authSlice";
export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    category: categorySlice.reducer,
    auth: authSlice.reducer,
  },
});
