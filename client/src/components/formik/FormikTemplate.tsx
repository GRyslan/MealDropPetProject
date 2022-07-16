import React, {useState} from 'react';
import {Grid, IconButton, TextField} from '@mui/material';
import {IFormik, IValues} from '../../types/IFormik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const VisibilityIcon = ({setVisibility, visibility}: any) => {
  return (<IconButton
    onClick={() => setVisibility(!visibility)}>{visibility ? <Visibility/> : <VisibilityOff/>}
  </IconButton>);
};
const FormikTemplate = ({config, handleChange, touched, errors, handleBlur, values}: IFormik) => {
  const [visibility, setVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);
  const builder = (individualConfig: IValues) => {
    const GenericTextField = (props:any) => {
      return (
        <Grid item xs={12} >
      <TextField id={individualConfig.value} required
                 name={individualConfig.value}
                 label={individualConfig.label}
                 value={values[individualConfig.value]} fullWidth
                 onChange={handleChange}
                 error={touched[individualConfig.value] && Boolean(errors[individualConfig.value])}
                 helperText={touched[individualConfig.value] && errors[individualConfig.value]}
                 onBlur={handleBlur} {...props}
      />
        </Grid>
      )
    }
    switch (individualConfig.type) {
      case('password'):
        return (
          <GenericTextField key={individualConfig.label}
                     autoComplete="new-password"
                     type={individualConfig.value === 'password' ? (visibility ? 'text' : 'password')
                       : (visibilityConfirm ? 'text' : 'password')}
                     InputProps={{
                       endAdornment: individualConfig.value === 'password' ?
                         <VisibilityIcon setVisibility={setVisibility} visibility={visibility}/>
                         :
                         <VisibilityIcon setVisibility={setVisibilityConfirm} visibility={visibilityConfirm}/>
                     }}/>);
      default:
        return (
          <GenericTextField key={individualConfig.label}
            type={individualConfig.type}
            autoComplete="username"
          />);
    }
  };
  return (
    <>
      {config.map((c: IValues) => {
        return builder(c);
      })}
    </>
  );
};

export default FormikTemplate;
