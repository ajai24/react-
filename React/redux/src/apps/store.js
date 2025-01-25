import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../slices/userSlices";
import  fruitReducer  from "../slices/fruitSlice";
import  arrayReducer  from "../slices/arraySlice";


const store = configureStore({
    reducer: {
        userInfo: userReducer,
        fruitInfo: fruitReducer,
        arrayInfo: arrayReducer
    }
})

export default store