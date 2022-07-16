import { coreApi } from "./coreApi";
import {
  IUserGetResponse,
  IUserLoginRequest,
  IUserRegisterRequest,
  IUserPostResponseUnwrap
} from '../types/IUserApi';


export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<IUserGetResponse[],void>({
      query: () => ({
        url: `/`,
      }),
    }),
    loginUser: build.mutation<IUserPostResponseUnwrap,IUserLoginRequest>({
      query: (post) => ({
        url: `/login`,
        method: 'POST',
        body: post
      }),
    }),
    registerUser: build.mutation<IUserPostResponseUnwrap,IUserRegisterRequest>({
      query: (post) => ({
        url: `/register`,
        method: 'POST',
        body: post
      }),
    }),
    logoutUser: build.mutation<IUserPostResponseUnwrap,void>({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
    refreshUser: build.mutation<IUserPostResponseUnwrap,void>({
      query: (post) => ({
        url: `/refresh`,
        method: 'POST',
        body: post
      }),
    }),
  }),
  overrideExisting: false
});
