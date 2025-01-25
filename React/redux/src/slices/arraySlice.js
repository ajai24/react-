import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: []
}
export const arraySlice = createSlice({
    name: "array",
    initialState,
    reducers: {
        setArray: (state, action) => {
            state.array = [...state.array, action.payload];
        },
        resetArray: (state, action) => {
            state.array = []
        }
    }
})

export const { setArray , resetArray} = arraySlice.actions
export default arraySlice.reducer