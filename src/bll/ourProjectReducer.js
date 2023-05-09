import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "./api/quizApi";

let initialState = {};

export const fetchOurProject = createAsyncThunk(
  "ourProject/fetchOurProject",
  async () => {
    return api.getOurProject((data) => data.data);
  }
);
const ourProjectSlice = createSlice({
  name: "ourProject",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchOurProject.fulfilled, (state, action) => {
      state.ourProject = action.payload.data.data;
    });
  },
});

export default ourProjectSlice.reducer;
