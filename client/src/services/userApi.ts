import { coreApi } from "./coreApi";


export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: `/`,
      }),
    }),
    loginUser: build.mutation({
      query: (post) => ({
        url: `/login`,
        method: 'POST',
        body: post
      }),
    }),

  }),
  overrideExisting: false
});
