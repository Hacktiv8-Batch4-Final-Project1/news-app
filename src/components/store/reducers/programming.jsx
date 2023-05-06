import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    programming: null,
    isLoading: false,
};

const programmingSlice = createSlice({
    name: "programming",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.programming = action.payload;
        },
        resetData: (state) => {
            state.programming = initialState.data;
        },
    },
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

export const { setData, resetData } = programmingSlice.actions;
export default programmingSlice.reducer;

export const getProgramming = createAsyncThunk("programming/getData", async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}top-headlines?q=program&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});
