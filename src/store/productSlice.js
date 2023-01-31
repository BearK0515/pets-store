import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProduct: {
    name: "",
    price: 0,
    style: "",
    category: "",
    image:{},
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProduct(state, action) {
      const { name, price, style, category, image } = action.payload;
      state.value = {
        name,
        price,
        style,
        category,
        image,
      };
    },
  },
});

export const { setProduct } = productSlice.actions

export default productSlice.reducer