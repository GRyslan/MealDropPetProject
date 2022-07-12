import {Button, styled} from '@mui/material';
import {DARK_LIGHT_BLUE, DARK_WHITE,LIGHT_BLACK} from '../StyledNavBar';

export const StyledButton = styled(Button)(({theme}) => (
  theme.palette.mode === 'light' ? {
      backgroundColor: '#888888',
      color: 'white',
      borderRadius: 0,
      margin: '2px',
      '&:hover': {
        backgroundColor: LIGHT_BLACK,
    }} : {
      backgroundColor: DARK_LIGHT_BLUE,
      color: 'darkBlue',
      borderRadius: 0,
      margin: '2px',
      '&:hover': {
        backgroundColor: DARK_WHITE
      }
    }
));
