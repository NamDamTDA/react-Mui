import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import toastr from "toastr";

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
      toastr.success("Register successfully _ Have a good day bros!");
    },
    [register.rejected]: (state, action) => {
      state.error = action.error.code;
      toastr.error(`Register False _ ${state.error}`);
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      toastr.success("Login successfully _ Have a good day bros!");
    },
    [login.rejected]: (state, action) => {
      state.error = action.error.code;
      toastr.error(`Login False _ ${state.error}`);
    },
  },
});

export const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
