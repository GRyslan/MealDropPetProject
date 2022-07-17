import {AppBar, styled, SvgIcon, Switch} from '@mui/material';
import {IStyledSvgIconProps} from '../types/IStyledSvgIconProps';
import {breakpoints} from './themes';
export const APP_BAR_HEIGHT="60px";
export const APP_BAR_HEIGHT_TABLET='55px'
export const APP_BAR_HEIGHT_MOBILE='50px'
export const LIGHT_GRAY = '#808080'
export const DARK_LIGHT_BLUE = "rgba(144,202,249, 0.75)"
export const DARK_WHITE = "rgba(255, 255, 255, 0.75)";
export const LIGHT_BLACK= "rgba(0, 0, 0, 0.75)"
export const StyledAppBar =styled(AppBar)(({theme})=>({
  height: APP_BAR_HEIGHT,
  [`@media only screen and (max-width: ${breakpoints.values.sm}px)`]:{
    height:APP_BAR_HEIGHT_MOBILE
  },
  [`@media only screen and (min-width: ${breakpoints.values.sm}px) and (max-width: ${breakpoints.values.lg}px)`]:{
    height:APP_BAR_HEIGHT_TABLET
  },
  padding: '0 5px',
}));

export const StyledSvgIcon = styled(SvgIcon)<IStyledSvgIconProps>(({ theme }) => ({
   width: "auto", height:APP_BAR_HEIGHT ,fill:theme.palette.mode==='light'? LIGHT_GRAY:DARK_LIGHT_BLUE,
  [`@media only screen and (max-width: ${breakpoints.values.sm}px)`]:{
    height:APP_BAR_HEIGHT_MOBILE
  },
  [`@media only screen and (min-width: ${breakpoints.values.sm}px) and (max-width: ${breakpoints.values.lg}px)`]:{
    height:APP_BAR_HEIGHT_TABLET
  },
}));

// default custom switch from mui with some improvements
export const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,

  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":{
    opacity:0.75,
  },
  "& .MuiSwitch-track": {

    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: "\"\"",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "darkblue"
      )}" d="M11.01 3.05C6.51 3.54 3 7.36 3 12c0 4.97 4.03 9 9 9 4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95-.84.54-1.84.85-2.91.85-2.98 0-5.4-2.42-5.4-5.4 0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z"/></svg>')`,
      left: 12
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "yellow"
      )}" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" /></svg>')`,
      right: 12
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    backgroundColor: theme.palette.mode==="dark" && DARK_WHITE,
    width: 16,
    height: 16,
    margin: 2
  }
}));
