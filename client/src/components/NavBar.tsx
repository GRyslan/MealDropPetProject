import React, {useEffect, useState} from 'react';
import {usersApi} from '../services/userApi';
import {IUserGetResponse} from '../types/IUserApi';
import {Button, Grid, Toolbar, Tooltip} from '@mui/material';
import {toggleTheme} from '../store/reducers/themeSlice';
import {StyledAppBar, StyledSvgIcon, StyledSwitch} from '../ui/StyledNavBar';
import {ReactComponent as Logo} from '../assets/logoCL.svg'
import {useTypedDispatch, useTypedSelector} from '../hooks/redux';
import {NavLink} from 'react-router-dom';
import {StyledButton} from '../ui/generalComponents/StyledButton';
import {AuthModal} from './modals/AuthModal';
import {setToken, toggleAuth} from '../store/reducers/authSlice';
const NavBar = () => {

  const dispatch = useTypedDispatch();
  const isAuth = useTypedSelector((state) => state.authSlice.isAuth);
  const darkTheme = useTypedSelector((state) => state.themeSlice.darkTheme);
  const {data,refetch} =  usersApi.useGetAllUsersQuery(undefined,{skip:!isAuth});
  const [open,setOpen] = useState(false);
  const [logout] = usersApi.useLogoutUserMutation()
  const handleChange = () => {
    setOpen(!open)

  }

  const handleExit = async () => {
    localStorage.removeItem("token")
    await logout();
    dispatch(toggleAuth(false))
    return dispatch(setToken({token:"",user:{}}))
  }

  return (
    <div>
      <StyledAppBar position="sticky">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Tooltip title="Return to Main Menu" placement="right" arrow>
              <StyledSvgIcon  component={Logo} inheritViewBox  />
            </Tooltip>
          </NavLink>
          <Grid container justifyContent="flex-end">
            <StyledSwitch onChange={() => dispatch(toggleTheme())} checked={Boolean(darkTheme)}/>
            {isAuth ?  <StyledButton onClick={handleExit}>Logout</StyledButton>
              : <StyledButton onClick={handleChange}>Login</StyledButton>}
            <AuthModal handleClose={handleChange} open={open} />
          </Grid>
        </Toolbar>
      </StyledAppBar>
      Where?
      <StyledButton onClick={refetch}>refetch</StyledButton>
      {isAuth && data?.map((e:IUserGetResponse)=>e.name)}
    </div>
  );
};

export default NavBar;
