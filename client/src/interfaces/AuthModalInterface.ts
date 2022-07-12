import {UserPostResponse, UserLoginRequest} from './UserInterface';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';


export interface InitialValuesInterface {

}
export interface MutationLogin {
  func: MutationTrigger<MutationDefinition<UserLoginRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError,
    {}, FetchBaseQueryMeta>, never, UserPostResponse, 'coreApi'>>;
}

export interface AuthModalInterface  {
  handleClose(): void,
  open: boolean,
}

