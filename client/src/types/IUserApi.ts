export interface IUserGetResponse {
  _id: string,
  name: string,
  password: string,
  email: string
}

export interface IUserPostResponseUnwrap {
  message: string,
  accessToken: string,
  user: { name: string, email: string }
}

export interface IUserPostResponse {
  data: IUserPostResponseUnwrap;
}

export interface IAuthState {
  isAuth: boolean,
  user: object
  token: any
}

export interface IUserLoginRequest {
  [key: string]: string;

  password: string,
  email: string
}

export interface IUserRegisterRequest extends IUserLoginRequest {
  name: string;
}
