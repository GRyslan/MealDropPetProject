import React from 'react';
import {FormikErrors, FormikTouched} from 'formik';
import {UserLoginRequest, UserRegisterRequest} from './UserInterface';

export interface ValuesInterface{
  value:string,
  label:string,
}

export interface FormikInterface{
  config:ValuesInterface[],
  handleChange(e: React.ChangeEvent<any>): void,
  touched:FormikTouched<UserRegisterRequest | UserLoginRequest>,
  errors:FormikErrors<UserRegisterRequest | UserLoginRequest>,
  handleBlur(e: any): void,
  values:{ [field: string]: string }
}
