import { CartItems, State } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: State = {
  items: [],
  totalProducts: 0,
  totalPrice: 0,
};

const updateCart = (
  state: State,
  {
    shortName,
    quantityItems,
    price,
    add,
    cartImage,
  }: CartItems & { add: number }
) => {
  const existingItem = state.items.find(
    (item: CartItems) => item.shortName === shortName
  );

  if (existingItem) {
    existingItem.quantityItems += add ? quantityItems : -quantityItems;
    existingItem.totalPrice = price * existingItem.quantityItems;
  } else {
    state.items.push({
      shortName,
      quantityItems: add ? quantityItems : -quantityItems,
      price,
      cartImage,
      totalPrice: price * (add ? quantityItems : -quantityItems),
    });
  }

  state.totalPrice = state.items.reduce(
    (sum: number, { totalPrice }: { totalPrice: number }) => sum + totalPrice,
    0
  );
  state.totalProducts = state.items.reduce(
    (sum: number, { quantityItems }: { quantityItems: number }) =>
      sum + quantityItems,
    0
  );
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
