import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartReducer";
const store = configureStore({
  reducer: { cart: cartReducer.reducer },
});

export default store;
