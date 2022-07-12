import { coreApi } from "./coreApi";
import {UserGetResponse, UserPostResponse, UserLoginRequest,UserRegisterRequest} from '../interfaces/UserInterface';


export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<UserGetResponse[],void>({
      query: () => ({
        url: `/`,
      }),
      providesTags:["Auth"],
    }),
    loginUser: build.mutation<UserPostResponse,UserLoginRequest>({
      query: (post) => ({
        url: `/login`,
        method: 'POST',
        body: post
      }),
      invalidatesTags:["Auth"],
    }),
    registerUser: build.mutation<UserPostResponse,UserRegisterRequest>({
      query: (post) => ({
        url: `/register`,
        method: 'POST',
        body: post
      }),
    }),
  }),
  overrideExisting: false
});
