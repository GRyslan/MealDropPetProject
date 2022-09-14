import {coreApi} from './coreApi';
import {IUserLoginRequest, IUserPostResponseUnwrap} from '../types/IUserApi';
import {IRestaurantCreate} from '../types/IRestaurantApi';

const RESTAURANT_URL = process.env.REACT_APP_MealDrop_Delivery + 'agent';
export const agentApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllRestaurants: build.query({
      query: ({limit, skip}) => ({
        url: RESTAURANT_URL + `/showAll`,
        params: {limit, skip}
      }),
      providesTags:["Restaurant",],
    }),
    createRestaurant: build.mutation<IUserPostResponseUnwrap,IRestaurantCreate>({
      query: (post) => ({
        url: RESTAURANT_URL +`/create`,
        method: 'POST',
        body: post
      }),
      invalidatesTags:["Restaurant",],
    }),
    getOneRestaurant: build.query({
      query: (arg) => ({
        url: RESTAURANT_URL + `/showAll/${arg}`,
      }),
    }),
  })
});
