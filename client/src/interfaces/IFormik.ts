import React, {ChangeEventHandler, FocusEventHandler} from 'react';
import {FormikErrors, FormikTouched} from 'formik';
import {IUserLoginRequest, UserRegisterRequest} from './IUserApi';

export interface IValues {
  value:string,
  label:string,
}

export interface IFormik {
  config:IValues[],
  handleChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  touched:FormikTouched<UserRegisterRequest | IUserLoginRequest>,
  errors:FormikErrors<UserRegisterRequest | IUserLoginRequest>,
  handleBlur:FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  values:{ [field: string]: string }
}
