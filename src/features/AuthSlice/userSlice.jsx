import { Alert } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebaseConfig";

const initialState = { user: null, error: null };

export const register = createAsyncThunk(
  "auth/signup",
  async (data) =>
    await createUserWithEmailAndPassword(auth, data.username, data.email, data.password)
);
export const login = createAsyncThunk(
  "auth/login",
  async (data) => await signInWithEmailAndPassword(auth, data.email, data.password)
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      return [];
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      toast.success("Register successfully _ Have a good day bros!");
    },
    [register.rejected]: (state, action) => {
      state.error = action.error.code;
      <Alert severity="error" variant="filled">
        {state.error}
      </Alert>;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      toast.success("Login successfully _ Have a good day bros!");
    },
    [login.rejected]: (state, action) => {
      state.error = action.error.code;
      <Alert severity="error" variant="filled">
        {state.error}
      </Alert>;
    },
  },
});

export const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
