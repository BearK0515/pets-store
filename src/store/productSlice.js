import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    //添加商品到購物車
    addTocart: (state, action) => {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        let preCount = Number(itemInCart.count);
        let newCount = Number(action.payload.count);
        itemInCart.count = preCount + newCount;
      } else {
        state.cart?.push({ ...action.payload });
      }
    },
    //購物車中移除商品
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    //select改變商品數量
    setCount: (state, action) => {
      const { productId, count } = action.payload;
      const productIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      state.cart[productIndex].count = count;
    },
    //清空購物車
    setClearCart: (state) => {
      state.cart = [...initialState.cart];
    }
  }
});

export const { addTocart, removeItem, setCount, setClearCart } =
  productSlice.actions;

export default productSlice.reducer;
