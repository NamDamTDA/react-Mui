import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: false, list: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { startFetch, save } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const products = await axios.get("http://localhost:3001/products");
  console.log(products.data);

  dispatch(save(products.data));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;
