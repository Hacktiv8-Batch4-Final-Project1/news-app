import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    indonesia: null,
    isLoading: false,
};

const indonesiaSlice = createSlice({
    name: "indonesia",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getIndonesia.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getIndonesia.fulfilled, (state, action) => {
                state.isLoading = false;
                state.indonesia = action.payload;
                // console.log(action.payload);
            })
            .addCase(getIndonesia.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export default indonesiaSlice.reducer;

export const getIndonesia = createAsyncThunk("indonesia/getData", async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        throw error;
    }
});
