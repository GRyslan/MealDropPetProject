import { createSlice } from "@reduxjs/toolkit";
import {IAuthState} from '../../types/IUserApi';


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {},
    token: ''
  } as IAuthState,
  reducers: {
    toggleAuth: (state,{payload}) => {
      state.isAuth = payload;
    },
    setToken:(state, {payload:{token,user}})=>{
      state.user=user;
      state.token=token;

    }
  },
});
export const { toggleAuth, setToken } = authSlice.actions;

export default authSlice.reducer;
