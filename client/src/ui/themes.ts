import {createTheme} from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D3D3D3'
    },

  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary:{
      main:"#90caf9"
    }
  }
});
