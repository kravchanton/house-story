import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "./api/quizApi";

let initialState = {};

export const fetchBlockArticle = createAsyncThunk(
    "BlockArticle/fetchTopObject",
    async () => {
        return api.getBlockArticleData((data) => data.data);
    }
);
const blockArticleSlice = createSlice({
    name: "blockArticle",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchBlockArticle.fulfilled, (state, action) => {
            state.blockArticle = action.payload.data.data;
        });
    },
});

export const { changeData } = blockArticleSlice.actions;

export default blockArticleSlice.reducer;
