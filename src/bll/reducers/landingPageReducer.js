import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/quizApi";

let initialState = {};

export const fetchLandingPage = createAsyncThunk(
  "landingPage/fetchLandingPage",
  async () => {
    return api.getLandingPage((data) => data.data);
  }
);
const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchLandingPage.fulfilled, (state, action) => {
      state.landingPage = action.payload.data.data;
    });
  },
});

export default landingPageSlice.reducer;
