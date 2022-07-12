import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean,
  user: string | null
  token: any
}
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    token:null
  } as AuthState,
  reducers: {
    toggleAuth: (state) => {
      console.log("dispatched")
      state.isAuth = !state;
    },
    setToken:(state, {payload})=>{
      state.user="SOMETHING"
      state.token=payload

    }
  },
});

export const { toggleAuth, setToken } = authSlice.actions;

export default authSlice.reducer;
