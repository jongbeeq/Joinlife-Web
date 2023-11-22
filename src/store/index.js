import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./slice/homePageSlice";

const store = configureStore({
    reducer: {
        homePage: homePageSlice
    },
});

export default store;