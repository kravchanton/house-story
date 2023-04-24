import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "./api/quizApi";

let initialState = {};

export const fetchTopObject = createAsyncThunk(
    "TopObject/fetchTopObject",
    async () => {
        return api.getTopObject((data) => data.data);
    }
);
const topObjectSlice = createSlice({
    name: "topObject",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchTopObject.fulfilled, (state, action) => {
            state.topObject = action.payload.data.data;
        });
    },
});

export const { changeData } = topObjectSlice.actions;

export default topObjectSlice.reducer;
