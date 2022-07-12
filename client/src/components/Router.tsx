import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Router Main</div>}/>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>

  );
};

export default Router;
