export interface IUserGetResponse {
  _id:string,
  name:string,
  password:string,
  email:string
}
export interface IUserPostResponse {
  message:string,
  token?:string,
}
export interface IUserLoginRequest {
  [key: string]: string ;
  password:string,
  email:string
}
export interface UserRegisterRequest extends IUserLoginRequest{
  name:string
}
