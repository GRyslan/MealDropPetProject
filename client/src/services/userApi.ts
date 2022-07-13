import { coreApi } from "./coreApi";
import {IUserGetResponse, IUserPostResponse, IUserLoginRequest,UserRegisterRequest} from '../interfaces/IUserApi';


export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<IUserGetResponse[],void>({
      query: () => ({
        url: `/`,
      }),
    }),
    loginUser: build.mutation<IUserPostResponse,IUserLoginRequest>({
      query: (post) => ({
        url: `/login`,
        method: 'POST',
        body: post
      }),
    }),
    registerUser: build.mutation<IUserPostResponse,UserRegisterRequest>({
      query: (post) => ({
        url: `/register`,
        method: 'POST',
        body: post
      }),
    }),
    logoutUser: build.mutation<IUserPostResponse,void>({
      query: () => ({
        url: `/logout`,
        method: 'POST',
      }),
    }),
    refreshUser: build.mutation<IUserPostResponse,UserRegisterRequest>({
      query: (post) => ({
        url: `/refresh`,
        method: 'POST',
        body: post
      }),
    }),
  }),
  overrideExisting: false
});
