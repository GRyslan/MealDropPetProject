import React, {useState} from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {Grid, Pagination, PaginationItem} from '@mui/material';
import {Link,useLocation, useNavigate} from 'react-router-dom';
import {StyledButton} from '../ui/generalComponents/StyledButton';
import {RestaurantModal} from '../components/modals/RestaurantModal';

const Main = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const {data, isLoading, isFetching} = restaurantApi.useGetAllRestaurantsQuery({limit: 12, skip: 12 * page - 12});
  const [open,setOpen] = useState(false);
  const navigate = useNavigate()
  const handleChange = () => {
    setOpen(!open)

  }
  return (
    <>{isFetching && 'Fetching Data'}
      {isLoading && 'Loading Data'}

      {data && <><Grid container margin={5}>

        {data.restaurants.map((e: any) => <Grid item xs={3} key={e.name}>
        <StyledButton onClick={()=>navigate(`/${e.name}`)}>{e.name}</StyledButton></Grid>)}
      </Grid><Pagination
          page={page}
          count={Math.ceil(data.count / 12)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item} />)}/></>}
      <StyledButton onClick={handleChange}>Create Restaurant</StyledButton>
      <RestaurantModal handleClose={handleChange} open={open} />
    </>
  );
};

export default Main;
