import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layoutApi } from "../api/quizApi";

const initialState = {
  layoutData: {},
};

export const fetchLayoutData = createAsyncThunk(
  "layoutData/fetchLayoutData",
  async () => {
    return layoutApi.getLayoutData((data) => data.data);
  }
);

const layoutSlice = createSlice({
  name: "layoutData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLayoutData.fulfilled, (state, action) => {
      state.layoutData = action.payload.data.data;
    });
  },
});

export default layoutSlice.reducer;
