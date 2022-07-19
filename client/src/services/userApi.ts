import { coreApi } from "./coreApi";
import {
  IUserGetResponse,
  IUserLoginRequest,
  IUserRegisterRequest,
  IUserPostResponseUnwrap
} from '../types/IUserApi';


const USER_URL=process.env.REACT_APP_MealDrop_Api + "user";
export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<IUserGetResponse[],void>({
      query: () => ({
        url:  USER_URL+`/`,
      }),
    }),
    loginUser: build.mutation<IUserPostResponseUnwrap,IUserLoginRequest>({
      query: (post) => ({
        url: USER_URL+`/login`,
        method: 'POST',
        body: post
      }),
    }),
    registerUser: build.mutation<IUserPostResponseUnwrap,IUserRegisterRequest>({
      query: (post) => ({
        url: USER_URL+`/register`,
        method: 'POST',
        body: post
      }),
    }),
    logoutUser: build.mutation<IUserPostResponseUnwrap,void>({
      query: () => ({
        url: USER_URL+`/logout`,
        method: 'POST',
      }),
    }),
    refreshUser: build.mutation<IUserPostResponseUnwrap,void>({
      query: (post) => ({
        url: USER_URL+`/refresh`,
        method: 'POST',
        body: post
      }),
    }),
  }),
  overrideExisting: false
});
