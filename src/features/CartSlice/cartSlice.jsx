import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;
      const { quantity } = payload;
      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + (quantity ? quantity : 1) } : item
        );
      } else {
        state.push({ ...payload, quantity: quantity ? quantity : 1 });
      }
    },
    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    deleteItem(state, { payload }) {
      return (state = state.filter((item) => item.id !== payload));
    },
    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increament, decrement, deleteItem, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
