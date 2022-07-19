import React from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {Grid, Pagination, PaginationItem} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const {data, isLoading, isFetching} = restaurantApi.useGetAllRestaurantsQuery({limit: 12, skip: 12 * page - 12});

  return (
    <>{isFetching && 'Fetching Data'}
      {isLoading && 'Loading Data'}
      {data && <><Grid container margin={5}>

        {data.restaurants.map((e: any) => <Grid item xs={3} key={e.name}>{e.name}</Grid>)}
      </Grid><Pagination
          page={page}
          count={Math.ceil(data.count / 12)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item} />)}/></>}
    </>
  );
};

export default Main;
