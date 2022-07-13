import React from 'react';
import {  Grid, TextField } from '@mui/material';
import {IFormik, IValues} from '../../interfaces/IFormik';

const FormikTemplate = ({ config, handleChange, touched, errors, handleBlur, values }: IFormik) => {
  const builder = (individualConfig: IValues) => {
    return (<Grid item xs={12} key={individualConfig.label}>
        <TextField multiline id={individualConfig.value} required
                   name={individualConfig.value}
                   label={individualConfig.label}
                   value={values[individualConfig.value]} fullWidth
                   onChange={handleChange}
                   error={touched[individualConfig.value] && Boolean(errors[individualConfig.value])}
                   helperText={touched[individualConfig.value] && errors[individualConfig.value]}
                   onBlur={handleBlur}/>
      </Grid>
    );
  }
  return (
    <>
      {config.map((c: IValues) => {
        return builder(c);
      })}
    </>
  );
};

export default FormikTemplate;
