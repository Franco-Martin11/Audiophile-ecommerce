import { CartItems, State } from "@/types/type";

export const updateCart = (
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