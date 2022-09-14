import React, {useState} from 'react';
import {restaurantApi} from '../services/restaurantApi';
import {Box, Button, Grid, Pagination, PaginationItem} from '@mui/material';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {StyledButton} from '../ui/generalComponents/StyledButton';
import {RestaurantModal} from '../components/modals/RestaurantModal';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const Main = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const {data, isLoading, isFetching} = restaurantApi.useGetAllRestaurantsQuery({limit: 12, skip: 12 * page - 12});


  const [deleteOne] = restaurantApi.useDeleteOneRestaurantMutation();
  const [open, setOpen] = useState(false);
  const [dataForPass, setData] = useState({name: ''});
  const [isCreate, setFlag] = useState(true);
  const navigate = useNavigate();
  const handleChange = (flag = true, name = '') => {
    setData({name});
    if (flag) setFlag(true);
    else setFlag(false);
    setOpen(!open);
  };
  return (
    <>{isFetching && 'Fetching Data'}
      {isLoading && 'Loading Data'}

      {data && <><Grid container margin={5}>

        {data.restaurants.map((e: any) => <Grid item xs={3} key={e.name}>
          <StyledButton onClick={() => navigate(`/${e.name}`)}>{e.name}</StyledButton>
          <Box>
            <Button onClick={() => handleChange(false, e.name)}><ArrowCircleUpRoundedIcon/></Button>
            <Button onClick={()=>deleteOne(e.name)}><HighlightOffRoundedIcon/></Button>
          </Box></Grid>)}
      </Grid><Pagination
          page={page}
          count={Math.ceil(data.count / 12)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item} />)}/></>}
      <StyledButton onClick={() => handleChange()}>Create Restaurant</StyledButton>
      <RestaurantModal handleClose={() => setOpen(!open)} open={open} flag={isCreate} data={dataForPass}/>
    </>
  );
};

export default Main;
