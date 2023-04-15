import { CartItems } from "@/types/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any | CartItems[] = [];

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => [...state, action.payload],
    removeProduct: (state, action) => initialState,
  },
});

export const { addProduct, removeProduct } = cartReducer.actions;
