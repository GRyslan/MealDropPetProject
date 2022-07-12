export interface UserGetResponse{
  _id:string,
  name:string,
  password:string,
  email:string
}
export interface UserPostResponse{
  message:string,
  token?:string,
}
export interface UserLoginRequest{
  [key: string]: string ;
  password:string,
  email:string
}
export interface UserRegisterRequest extends UserLoginRequest{
  name:string
}
