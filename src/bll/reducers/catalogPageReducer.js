import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogApi } from "../api/quizApi";

let initialState = {};

export const fetchCatalogPage = createAsyncThunk(
  "CatalogPage/fetchCatalogPage",
  async () => {
    return catalogApi.getCatalogPageData((data) => data.data);
  }
);
const catalogPageSlice = createSlice({
  name: "catalogPage",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCatalogPage.fulfilled, (state, action) => {
      state.catalogPage = action.payload.data.data;
    });
  },
});

export const { changeData } = catalogPageSlice.actions;

export default catalogPageSlice.reducer;
