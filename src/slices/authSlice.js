import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";

function getValidToken() {
  const tokenString = localStorage.getItem("token");
  if (!tokenString) return null;

  try {
    const token = JSON.parse(tokenString);
    const decoded = jwtDecode(token);

    // exp is in seconds; Date.now() returns ms
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null; // expired
    }

    return token; // valid
  } catch (err) {
    console.error("Invalid token:", err);
    localStorage.removeItem("token");
    return null;
  }
}

const initialState = {
  signupData: null,
  loading: false,
  token: getValidToken(),
};


const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;