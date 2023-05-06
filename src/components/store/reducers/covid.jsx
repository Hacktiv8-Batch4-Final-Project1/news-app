import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    covid: null,
    isLoading: false,
};

const covidSlice = createSlice({
    name: "covid",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.covid = action.payload;
        },
        resetData: (state) => {
            state.covid = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCovid.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getCovid.fulfilled, (state, action) => {
                state.isLoading = false;
                state.covid = action.payload;
            })
            .addCase(getCovid.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export const { setData, resetData } = covidSlice.actions;
export default covidSlice.reducer;

export const getCovid = createAsyncThunk("covid/getData", async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}top-headlines?q=covid-19&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});