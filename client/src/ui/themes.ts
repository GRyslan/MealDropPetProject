import {createTheme} from '@mui/material';

export const breakpoints = {
  values: {
    xs: 0,
    sm: 576, // Phone
    md: 768,
    lg: 992,  // Tablet/Laptop
    xl: 1200 // Desktop
  }
};
export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#D3D3D3'
      },
    },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576, // Phone
      md: 768, // Tablet/Laptop
      lg: 1500, // Desktop
      xl: 2000
    }
  },
    typography: {
      allVariants: {
        [`@media only screen and (max-width: ${breakpoints.values.sm}px)`]: {
          fontSize: 12,
        },
        [`@media only screen and (min-width: ${breakpoints.values.sm}px) and (max-width: ${breakpoints.values.lg}px)`]: {
          fontSize: 14,
        }
      }
    },
  });

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#90caf9'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576, // Phone
      md: 768, // Tablet/Laptop
      lg: 1500, // Desktop
      xl: 2000
    }
  },
  typography: {
    allVariants: {
      [`@media only screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 12,
      },
      [`@media only screen and (min-width: ${breakpoints.values.sm}px) and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: 14,
      }
    }
  },
});
