import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 10,
}
export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add(state){
            state.value++;
        },
        subtract(state){
            state.value--;
        },
        clear(state){
            state.value = 0;
        },
    }
})
export const {add,subtract,clear} = countSlice.actions;
export default countSlice.reducer