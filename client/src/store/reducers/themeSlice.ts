import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: localStorage.getItem('theme') ==="true",
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const themeMiddleware = (store:any) => (next:any) => (action:any) => {

  if(toggleTheme.match(action)) {
    console.log("THEME MIDDLEWARE")
    localStorage.setItem('theme', String(!store.getState().themeSlice.darkTheme));

  }
  return next(action);
};
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
