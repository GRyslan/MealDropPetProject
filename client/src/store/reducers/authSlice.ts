import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    toggleAuth: (state) => {
      console.log("dispatched")
      state.isAuth = !state;
    },
  },
});

export const { toggleAuth } = authSlice.actions;

export default authSlice.reducer;
