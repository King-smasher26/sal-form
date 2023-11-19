import { configureStore } from "@reduxjs/toolkit";
import HandleInputReducer from "./HandleInput";
const store = configureStore({
    reducer:HandleInputReducer
})
export default store;