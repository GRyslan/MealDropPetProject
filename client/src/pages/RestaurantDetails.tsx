import React from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {useParams} from 'react-router-dom';

const RestaurantDetails = () => {

  const { restaurantId } = useParams();
  console.log(restaurantId)
  const {data} = restaurantApi.useGetOneRestaurantQuery(restaurantId)
  console.log(data)
  return (
    <>
      {data?.categories.map((e:any)=><div key={e}>{e}</div>)}
    </>
  );
};

export default RestaurantDetails;
