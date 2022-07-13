import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {setToken, toggleAuth} from '../store/reducers/authSlice';
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_MealDrop_Api + 'user',
  prepareHeaders: (headers, {getState}: any) => {
    const token = getState().authSlice.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include"
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    console.log("THIS IS REFRESH")
    const refreshResult: any = await baseQuery({url:'/refresh',method:"POST"}, api, extraOptions)
    if (refreshResult.data) {
      // store the new token
      console.log("GOOD REFRESH")

      localStorage.setItem('token', refreshResult.data.accessToken );
      api.dispatch(setToken(refreshResult.data.accessToken))
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      console.log("BAD REFRESH")
      localStorage.removeItem("token")
      await baseQuery({url:'/logout',method:"POST"}, api, extraOptions)
      api.dispatch(toggleAuth(false))

    }
  }
  return result;
};
export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth'],
  endpoints: () => ({}),
});
