import React, {useState} from 'react';
import {usersApi} from '../services/userApi';
import {UserGetResponse} from '../interfaces/UserInterface';
import {Grid,  Toolbar, Tooltip} from '@mui/material';
import {toggleTheme} from '../store/reducers/themeSlice';
import {StyledAppBar, StyledSvgIcon, StyledSwitch} from '../ui/StyledNavBar';
import {ReactComponent as Logo} from '../assets/logoCL.svg'
import {useTypedDispatch} from '../hooks/redux';
import {NavLink} from 'react-router-dom';
import {StyledButton} from '../ui/generalComponents/StyledButton';
import {AuthModal} from './modals/AuthModal';
const NavBar = () => {
  const dispatch = useTypedDispatch();
  const {data} =  usersApi.useGetAllUsersQuery();
  const [open,setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open)
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
            <StyledSwitch onChange={() => dispatch(toggleTheme())} />
            <StyledButton onClick={handleChange}>Login</StyledButton>
            <AuthModal handleClose={handleChange} open={open}/>
          </Grid>
        </Toolbar>
      </StyledAppBar>
      Where?
      {data?.map((e:UserGetResponse)=>e.name)}
    </div>
  );
};

export default NavBar;
