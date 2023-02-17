import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    //添加商品到購物車
    addTocart: (state, action) => {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cart?.push({ ...action.payload });
      }
    },
    //購物車商品數量+1
    // incrementcount: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   item.count++;
    // },
    //購物車商品數量-1
    // decrementcount: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   if (item.count === 1) {
    //     item.count = 1;
    //   } else {
    //     item.count--;
    //   }
    // },
    //購物車中移除商品
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    //select改變商品數量
    setCount:(state,action)=>{
      const { productId, count } = action.payload;
      const productIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      state.cart[productIndex].count = count;
    },
  },
});

export const { addTocart, removeItem, setCount } = productSlice.actions;

export default productSlice.reducer;
