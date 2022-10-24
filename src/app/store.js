import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice/cartSlice";
import productsReducer from "../features/CartSlice/productsSlice";
import uiReducer from "../features/CartSlice/uiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});
