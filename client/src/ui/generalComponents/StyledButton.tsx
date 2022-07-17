import {Button, styled} from '@mui/material';
import {DARK_LIGHT_BLUE, DARK_WHITE, LIGHT_BLACK} from '../StyledNavBar';

export const LIGHT_DARK_GRAY = '#888888'
export const StyledButton = styled(Button)(({theme}) => (
  Object.assign({
    borderRadius: 0,
    margin: '2px',
  }, theme.palette.mode === 'light' ? {
    backgroundColor: LIGHT_DARK_GRAY,
    color: 'white',
    '&:hover': {
      backgroundColor: LIGHT_BLACK,
    }
  } : {
    backgroundColor: DARK_LIGHT_BLUE,
    color: 'darkBlue',
    '&:hover': {
      backgroundColor: DARK_WHITE
    }
  })

));
export const StyledButtonAuth = styled(Button)(({theme}) => (
  {
    borderRadius: 0,
    textDecoration: 'underline',
    color: theme.palette.mode === 'light' ? "black" : 'white',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
      textShadow: 'none',
      color: theme.palette.mode === 'light' ? "blue" : DARK_LIGHT_BLUE
    }
  }

));
