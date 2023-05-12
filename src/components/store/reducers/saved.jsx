import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saved: [],
};

const savedSlice = createSlice({
    name: "saved",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.saved.push(action.payload);
        },
        removeData: (state, action) => {
            state.saved = state.saved.filter((item) => item.url !== action.payload);
        }
    },
});

export const { setData, removeData } = savedSlice.actions;
export default savedSlice.reducer;
