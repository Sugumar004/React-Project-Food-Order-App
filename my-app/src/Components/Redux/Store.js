import {configureStore} from "@reduxjs/toolkit"
import swiggyReducer from "./Slice"

export const store = configureStore({
    reducer : {
        food : swiggyReducer
    },
})