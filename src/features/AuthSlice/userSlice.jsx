import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, sendVerified } from "../../firebase/firebaseConfig";
import toastr from "toastr";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const initialState = { user: null, error: null };

export const register = createAsyncThunk("auth/signup", async (data) => {
  await createUserWithEmailAndPassword(auth, data.email, data.password);
  await sendVerified();
  return await signInWithEmailAndPassword(auth, data.email, data.password);
});
export const login = createAsyncThunk(
  "auth/login",
  async (data) => await signInWithEmailAndPassword(auth, data.email, data.password)
);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = createAsyncThunk("auth/logingg", async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
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
    [signInWithGoogle.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      toastr.success("Login successfully _ Have a good day bros!");
    },
    [signInWithGoogle.rejected]: (state, action) => {
      state.error = action.error.code;
      toastr.error(`Login False _ ${state.error}`);
    },
  },
});

export const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
