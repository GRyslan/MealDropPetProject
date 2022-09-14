import {coreApi} from './coreApi';
import {IUserPostResponseUnwrap} from '../types/IUserApi';
import {IOrderCreate} from '../types/IOrderApi';

const ORDER_URL = process.env.REACT_APP_MealDrop_Api + 'order';
export const orderApi = coreApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation<IUserPostResponseUnwrap,IOrderCreate>({
      query: (post) => ({
        url: ORDER_URL +`/create`,
        method: 'POST',
        body: post,
      }),
    }),
  })
});
