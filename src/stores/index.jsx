import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartstore'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    }
})