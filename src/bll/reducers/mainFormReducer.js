import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/quizApi";

let initialState = {};

export const fetchMainForm = createAsyncThunk(
  "MainForm/fetchMainForm",
  async () => {
    return api.getMainFormData((data) => data.data);
  }
);
const mainFormSlice = createSlice({
  name: "mainForm",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMainForm.fulfilled, (state, action) => {
      state.mainForm = action.payload.data.data;
    });
  },
});

export const { changeData } = mainFormSlice.actions;

export default mainFormSlice.reducer;
