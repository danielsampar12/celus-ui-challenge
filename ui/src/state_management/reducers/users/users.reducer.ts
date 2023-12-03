import { IUser } from 'modals/users/Modals';
import { UserActions, UsersActionTypes } from 'state_management/actions/users/actionTypes';

export interface UsersState {
  user: IUser | null;
}

export const initialState: UsersState = {
  user: null,
};

const UsersReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case UsersActionTypes.GET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default UsersReducer;
