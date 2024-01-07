import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../features/counter/countSlice'

const store = configureStore({
    reducer: {
        counter : countReducer,
    }
})
export default store;