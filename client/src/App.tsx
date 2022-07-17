import React, {useEffect} from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useTypedDispatch, useTypedSelector} from './hooks/redux';
import {darkTheme, lightTheme} from './ui/themes';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router';
import NavBar from './components/NavBar';
import {setToken, toggleAuth} from './store/reducers/authSlice';
import {toggleTheme} from './store/reducers/themeSlice';
import {usersApi} from './services/userApi';

const App = () => {
  const dispatch = useTypedDispatch();
  const token = useTypedSelector((state) => state.authSlice.token);
  const isAuth = useTypedSelector((state) => state.authSlice.isAuth);
  const reduxTheme = useTypedSelector((state) => state.themeSlice.darkTheme);
  const [refresh] = usersApi.useRefreshUserMutation()
  useEffect(() => {
      console.log("THEME MIDDLEWARE")
      localStorage.setItem('theme', String(reduxTheme));
    }, [reduxTheme]);

const  checkAuth = async() =>{
  try {
    const response = await refresh().unwrap()
    dispatch(setToken({token:response.accessToken,user:response.user}));
    dispatch(toggleAuth(true));
  } catch (e) {
    console.log(e)
  }
}
  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth()
    }

  },[])
  return (
    <BrowserRouter>
        <ThemeProvider theme={reduxTheme ? darkTheme : lightTheme}>
          <CssBaseline/>
          <NavBar/>
          <Router/>
        </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

