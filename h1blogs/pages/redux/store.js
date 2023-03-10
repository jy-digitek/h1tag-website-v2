import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./featured/postSlice";
export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});
