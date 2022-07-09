import React from 'react';
import {usersApi} from '../services/userApi';
import {UserInterface} from '../interfaces/UserInterface';

const NavBar = () => {
  const {data} =  usersApi.useGetAllUsersQuery("");
  console.log(data)
  return (
    <div>
      Where?
      {data?.map((e:UserInterface)=>e.name)}
    </div>
  );
};

export default NavBar;
