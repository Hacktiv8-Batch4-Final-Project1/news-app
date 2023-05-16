import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    programming: null,
    isLoading: false,
};

const programmingSlice = createSlice({
    name: "programming",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProgramming.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProgramming.fulfilled, (state, action) => {
                state.isLoading = false;
                state.programming = action.payload;
            })
            .addCase(getProgramming.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export default programmingSlice.reducer;

export const getProgramming = createAsyncThunk("programming/getData", async () => {
    try {
        const date = new Date();
        const fromDate = new Date().toISOString();
        const monthAgo = new Date(date.setMonth(date.getMonth() - 1)).toISOString();
        // console.log('hari ini : ', fromDate, 'sebulan yang lalu : ', monthAgo);
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}everything?q=programming&from=${monthAgo}&to=${fromDate}&sortBy=publishedAt&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});
