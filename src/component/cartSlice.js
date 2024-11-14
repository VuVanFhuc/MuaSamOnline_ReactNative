import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedItem: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
    buyItemToCart: (state, action) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { addItemToCart, removeItemFromCart, buyItemToCart, clearSelectedItem } = cartSlice.actions;

export default cartSlice.reducer;
