import React from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {Grid} from '@mui/material';

const Main = () => {
  const {data} = restaurantApi.useGetAllRestaurantsQuery("")
  return (
    <Grid container margin={5}>
      {data?.map((e:any)=><Grid item xs={3} key={e.name}>{e.name}</Grid>)}
    </Grid>
  );
};

export default Main;
