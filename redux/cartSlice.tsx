import Product from "@/interface/productInterface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
