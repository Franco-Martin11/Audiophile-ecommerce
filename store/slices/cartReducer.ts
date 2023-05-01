import { State } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../UpdateCart";

const initialState: State = {
  items: [],
  totalProducts: 0,
  totalPrice: 0,
};



export const cartReducer = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) =>
      updateCart(state, { ...action.payload, add: true }),
    removeProduct: (state, action) =>
      updateCart(state, { ...action.payload, add: false }),
    resetCart: (state) => (state = initialState),
  },
});

export const { addProduct, removeProduct, resetCart } = cartReducer.actions;
