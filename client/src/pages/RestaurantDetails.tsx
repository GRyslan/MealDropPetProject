import React from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {useParams} from 'react-router-dom';
import {orderApi} from '../services/orderApi';
import {StyledButton} from '../ui/generalComponents/StyledButton';


const RestaurantDetails = () => {

  const {restaurantId} = useParams();
  console.log(restaurantId);
  const [create] = orderApi.useCreateOrderMutation();
  const {data} = restaurantApi.useGetOneRestaurantQuery(restaurantId);
  console.log(data);
  return (
    <>
      {data?.categories.map((e: any) => <StyledButton
        onClick={() => create({userId: '62d138e3b21cb4734b479d08', restaurantId: data._id, order: e})} key={e}>{e}</StyledButton>)}
      {data?.order.pendingOrder.map((e: any) => <StyledButton
        onClick={() => create({userId: '62d138e3b21cb4734b479d08', restaurantId: data._id, order: e})} key={e._id}>{e.order}</StyledButton>)}
    </>
  );
};

export default RestaurantDetails;
