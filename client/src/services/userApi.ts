import { coreApi } from "./coreApi";


export const usersApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: `/`,
      }),
    }),
  }),
  overrideExisting: false
});
