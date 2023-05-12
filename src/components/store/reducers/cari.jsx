import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataCari: null,
    isLoading: false,
};

const cariSlice = createSlice({
    name: "dataCari",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.dataCari = action.payload;
        },
        resetData: (state) => {
            state.dataCari = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCari.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getCari.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dataCari = action.payload;
                // console.log(action.payload);
            })
            .addCase(getCari.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export const { setData, resetData } = cariSlice.actions;
export default cariSlice.reducer;

export const getCari = createAsyncThunk(
    "dataCari/getData",
    async ({ cari }) => {
        if (!cari) {
            return;
        } else {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}everything?q=${cari}&apiKey=${process.env.REACT_APP_API_KEY}`
                );
                return response.data.articles;
            } catch (error) {
                throw error;
            }
        }
    }
);
