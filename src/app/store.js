import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/AuthSlice/userSlice";
import cartReducer from "../features/CartSlice/cartSlice";
import productsReducer from "../features/CartSlice/productsSlice";
import uiReducer from "../features/CartSlice/uiSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import productDetailReducer from "../features/CartSlice/productDetailSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  ui: uiReducer,
  auth: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
