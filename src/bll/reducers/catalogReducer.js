import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogApi } from "../api/quizApi";

let initialState = {};

export const fetchCatalog = createAsyncThunk(
  "Catalog/fetchCatalog",
  async () => {
    return catalogApi.getCatalogData((data) => data.data);
  }
);
const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.catalog = action.payload.data.data;
    });
  },
});

export const { changeData } = catalogSlice.actions;

export default catalogSlice.reducer;
