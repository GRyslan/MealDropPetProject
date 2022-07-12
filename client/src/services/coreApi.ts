import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_MealDrop_Api+'user',
    prepareHeaders: (headers, { getState }:any) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().authSlice.token ;
      console.log("TES")
      console.log(token)
      if (token) {
        headers.set('authorization', `${token}`)
      }
      return headers
    },}),

  tagTypes:["Auth"],
  endpoints: () => ({}),
})
