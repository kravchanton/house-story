import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aboutApi } from "./api/quizApi";

const initialState = {
  aboutData: {},
};

export const fetchAboutData = createAsyncThunk(
  "aboutData/fetchAboutData",
  async () => {
    return aboutApi.getAboutData((data) => data.data);
  }
);

const aboutSlice = createSlice({
  name: "aboutData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAboutData.fulfilled, (state, action) => {
      state.aboutData = action.payload.data.data;
    });
  },
});

export default aboutSlice.reducer;
