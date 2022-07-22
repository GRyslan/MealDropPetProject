import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import Main from '../pages/Main';
import RestaurantDetails from '../pages/RestaurantDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route path="" element={<Main/>}/>
        <Route path=":restaurantId" element={<RestaurantDetails/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>

  );
};

export default Router;
