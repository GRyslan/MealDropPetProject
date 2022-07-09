import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_MealDrop_Api+'user'}),
  tagTypes:[],
  endpoints: () => ({}),
})
