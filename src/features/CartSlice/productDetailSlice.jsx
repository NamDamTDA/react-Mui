import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../api/instance";

const initialState = { loading: false, product: {} };
const productDetailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.product = payload;
    },
  },
});

export const { startFetch, save } = productDetailSlice.actions;

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const product = await getProduct(id);

  dispatch(save(product.data));
};

const productDetailReducer = productDetailSlice.reducer;

export default productDetailReducer;
