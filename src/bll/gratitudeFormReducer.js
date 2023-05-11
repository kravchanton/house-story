import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "./api/quizApi";

let initialState = {};

export const fetchGratitudeForm = createAsyncThunk(
  "gratitudeForm/fetchGratitudeForm",
  async () => {
    return api.getGratitudeForm((data) => data.data);
  }
);
const gratitudeFormSlice = createSlice({
  name: "gratitudeForm",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchGratitudeForm.fulfilled, (state, action) => {
      state.gratitudeForm = action.payload.data.data;
    });
  },
});

export default gratitudeFormSlice.reducer;
