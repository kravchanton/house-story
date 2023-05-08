import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "./api/quizApi";

let initialState = {};

export const fetchMainFormVariant = createAsyncThunk(
  "mainFormVariant/fetchMainFormVariant",
  async () => {
    return api.getMainFormVariantData((data) => data.data);
  }
);
const mainFormVariantSlice = createSlice({
  name: "mainFormVariant",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMainFormVariant.fulfilled, (state, action) => {
      state.mainFormVariant = action.payload.data.data;
    });
  },
});

export default mainFormVariantSlice.reducer;
