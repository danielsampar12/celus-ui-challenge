import { IComment } from 'modals/comments/Modals';
import { CommentsActions, CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';

export interface CommentsState {
  comments: Array<IComment>;
}

export const initialState: CommentsState = {
  comments: [],
};

const CommentsReducer = (state = initialState, action: CommentsActions) => {
  switch (action.type) {
    case CommentsActionsTypes.GET_COMMENT_BY_POST_ID_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
      };
    default:
      return state;
  }
};
export default CommentsReducer;
