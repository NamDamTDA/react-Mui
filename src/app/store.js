import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import hobbyReducer from "../reducers/hobby";
import userReducer from "../reducers/user";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hobby: hobbyReducer,
    user: userReducer,
  },
});
