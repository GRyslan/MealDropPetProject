import React, {useEffect} from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useTypedDispatch, useTypedSelector} from './hooks/redux';
import {darkTheme, lightTheme} from './ui/themes';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router';
import NavBar from './components/NavBar';
import {toggleAuth} from './store/reducers/authSlice';

const App = () => {
  const dispatch = useTypedDispatch();
  const isAuth = useTypedSelector((state) => state.authSlice.isAuth);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(toggleAuth(true))
    }
  }, [])
  const theme = useTypedSelector((state) => state.themeSlice);
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
          <CssBaseline/>
          <NavBar/>
          <Router/>
        </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

