import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactsApi } from "../api/quizApi";

const initialState = {
  contactsData: {},
};

export const fetchContactsData = createAsyncThunk(
  "contactsData/fetchContactsData",
  async () => {
    return contactsApi.getContactsData((data) => data.data);
  }
);

const contactsSlice = createSlice({
  name: "contactsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContactsData.fulfilled, (state, action) => {
      state.contactsData = action.payload.data.data;
    });
  },
});

export default contactsSlice.reducer;
