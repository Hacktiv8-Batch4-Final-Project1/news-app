import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import indonesiaReducer from "./reducers/indonesia";

export const store = configureStore({
    reducer: {
        indonesia: indonesiaReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
