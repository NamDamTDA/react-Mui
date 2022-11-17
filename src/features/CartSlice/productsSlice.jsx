import { createSlice } from "@reduxjs/toolkit";
import { getListProducts } from "../../api/product";


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

  const products = await getListProducts();
  dispatch(save(products.data));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;
