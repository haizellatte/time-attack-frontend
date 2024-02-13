import ProductType from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialValueType extends ProductType {
  amount?: number;
}

type CartStore = {
  carts: initialValueType[];
};

const initialState: CartStore = { carts: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInsertProduct(state, action: PayloadAction<ProductType>) {
      const index = state.carts.findIndex((product: ProductType) => {
        return product.id === action.payload.id;
      });
      if (index === -1) {
        state.carts.push(action.payload);
      } else {
        state.carts[index].amount = 1;
      }
    },
    setDeleteProduct(state, action: PayloadAction<number>) {
      const index = state.carts.findIndex((product: ProductType) => {
        return product.id === action.payload;
      });
      state.carts.splice(index, 1);
    },

    // setIncreaseAmount(state, action: PayloadAction<ProductType>) {
    //   const index = state.findIndex((obj: ProductType) => {
    //     return obj.id === action.payload.id;
    //   });
    //   state[index].amount += 1;
    // },
    // setDecreaseAmount(state, action: PayloadAction<ProductType>) {
    //   const index = state.findIndex((obj: ProductType) => {
    //     return obj.id === action.payload.id;
    //   });
    //   if (state[index].amount < 2) {
    //     state[index].amount = 1;
    //   } else {
    //     state[index].amount -= 1;
    //   }
    // },
  },
});

export const {
  setInsertProduct,
  setDeleteProduct,
  // setIncreaseAmount,
  // setDecreaseAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
