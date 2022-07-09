import React from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useTypedSelector} from './hooks/redux';
import {darkTheme, lightTheme} from './ui/themes';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router';
import NavBar from './components/NavBar';

const App = () => {
  const theme = useTypedSelector((state) => state.themeSlice);
  return (
    <BrowserRouter>
      <NavBar/>
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
          <CssBaseline/>
          <Router/>
        </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

