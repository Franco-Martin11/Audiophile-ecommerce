import { CartItems, State } from "@/types/type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create<State>()(
  persist(
    (set) => ({
      items: [],
      totalProducts: 0,
      totalPrice: 0,
      updateCart: ({
        shortName,
        quantityItems,
        price,
        add,
        cartImage,
      }: CartItems & { add: number }) => {
        set(
          (state: {
            items: any[];
            totalPrice: number;
            totalProducts: number;
          }) => {
            const existingItemIndex = state.items.findIndex(
              (item: { shortName: string }) => item.shortName === shortName
            );

            if (existingItemIndex !== -1) {
              const existingItem = state.items[existingItemIndex];
              const updatedQuantity =
                existingItem.quantityItems +
                (add ? quantityItems : -quantityItems);
              const updatedTotalPrice = price * updatedQuantity;

              const updatedItems = [
                ...state.items.slice(0, existingItemIndex),
                {
                  ...existingItem,
                  quantityItems: updatedQuantity,
                  totalPrice: updatedTotalPrice,
                },
                ...state.items.slice(existingItemIndex + 1),
              ];

              return {
                items: updatedItems,
                totalPrice: updatedItems.reduce(
                  (sum, { totalPrice }) => sum + totalPrice,
                  0
                ),
                totalProducts: updatedItems.reduce(
                  (sum, { quantityItems }) => sum + quantityItems,
                  0
                ),
              };
            } else {
              const newCartItem = {
                shortName,
                quantityItems: add ? quantityItems : -quantityItems,
                price,
                cartImage,
                totalPrice: price * (add ? quantityItems : -quantityItems),
              };

              return {
                items: [...state.items, newCartItem],
                totalPrice: state.totalPrice + newCartItem.totalPrice,
                totalProducts: state.totalProducts + newCartItem.quantityItems,
              };
            }
          }
        );
      },
    }),
    { name: "cart-store", storage: createJSONStorage(() => sessionStorage) }
  )
);

const cartReducer = {
  addProduct: (payload: any) =>
    useCartStore.getState().updateCart({ ...payload, add: true }),
  removeProduct: (payload: any) =>
    useCartStore.getState().updateCart({ ...payload, add: false }),
  resetCart: () =>
    useCartStore.setState({
      items: [],
      totalProducts: 0,
      totalPrice: 0,
    }),
};

export default cartReducer;
