import React, {ChangeEventHandler, FocusEventHandler} from 'react';
import {FormikErrors, FormikTouched} from 'formik';
import {IUserLoginRequest, IUserRegisterRequest} from './IUserApi';

export interface IValues {
  value:string,
  label:string,
  type:string,
  autoComplete?:string,
}

export interface IFormik {
  config:IValues[],
  handleChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  touched:FormikTouched<IUserRegisterRequest | IUserLoginRequest>,
  errors:FormikErrors<IUserRegisterRequest | IUserLoginRequest>,
  handleBlur:FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  values:{ [field: string]: string }
}
