import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice/cartSlice";
import productsReducer from "../features/CartSlice/productsSlice";
import uiReducer from "../features/CartSlice/uiSlice";
import authReducer from "../features/UserSlice/auth";
import messageReducer from "../features/UserSlice/message";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
    auth: authReducer,
    message: messageReducer,
  },
});
