import { IUser } from 'modals/users/Modals';

export enum UsersActionTypes {
  GET_CURRENT_USER = 'GET_CURRENT_USER',
}

export interface GetCurrentUserAction {
  user: IUser;
  type: UsersActionTypes.GET_CURRENT_USER;
}

export type UserActions = GetCurrentUserAction;
