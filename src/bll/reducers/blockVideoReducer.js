import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/quizApi";

let initialState = {};

export const fetchBlockVideo = createAsyncThunk(
  "BlockVideo/fetchBlockVideo",
  async () => {
    return api.getBlockVideoData((data) => data.data);
  }
);
const blockVideoSlice = createSlice({
  name: "blockVideo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBlockVideo.fulfilled, (state, action) => {
      state.blockVideo = action.payload.data.data;
    });
  },
});

export const { changeData } = blockVideoSlice.actions;

export default blockVideoSlice.reducer;
