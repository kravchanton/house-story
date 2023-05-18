import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/quizApi";

let initialState = {};

export const fetchBlog = createAsyncThunk("Blog/fetchBlog", async () => {
  return api.getBlogData((data) => data.data);
});
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.blog = action.payload.data.data;
    });
  },
});

export const { changeData } = blogSlice.actions;

export default blogSlice.reducer;
