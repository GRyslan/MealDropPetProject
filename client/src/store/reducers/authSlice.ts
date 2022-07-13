import { createSlice } from "@reduxjs/toolkit";
import {toggleTheme} from './themeSlice';

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
    token: localStorage.getItem('token')
  } as AuthState,
  reducers: {
    toggleAuth: (state,{payload}) => {
      state.isAuth = payload;
    },
    setToken:(state, {payload})=>{
      state.user="SOMETHING"
      state.token=payload

    }
  },
});
export const { toggleAuth, setToken } = authSlice.actions;

export default authSlice.reducer;
