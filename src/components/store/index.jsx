import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import indonesiaReducer from "./reducers/indonesia";
import cariReducer from "./reducers/cari";
import covidReducer from "./reducers/covid";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
    reducer: {
        indonesia: indonesiaReducer,
        covid: covidReducer,
        form: formReducer,
        cari: cariReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
