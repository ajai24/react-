import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruit: " "
}
export const fruitSlice = createSlice({
    name: "fruit",
    initialState,
    reducers: {
        setFruit: (state, action) => {
            state.fruit = [...state.fruit, action.payload];
        }
    }
})

export const { setFruit } = fruitSlice.actions
export default fruitSlice.reducer
