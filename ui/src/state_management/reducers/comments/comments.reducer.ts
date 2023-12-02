import { IComment } from 'modals/comments/Modals';
import { CommentsActions, CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';

export type ICommentsWithReplies = {
  replies: Array<IComment>;
} & IComment;

export interface CommentsState {
  comments: Array<ICommentsWithReplies>;
}

export const initialState: CommentsState = {
  comments: [],
};

const CommentsReducer = (state = initialState, action: CommentsActions) => {
  switch (action.type) {
    case CommentsActionsTypes.GET_COMMENT_BY_POST_ID_SUCCESS: {
      const comments = action.payload.data;

      const parsedCommentsWithReplies = comments.reduce((acc, comment) => {
        if (comment.repliedToCommentId) {
          const newAcc = acc.map((accumuletedComment: ICommentsWithReplies) => {
            if (accumuletedComment.id === comment.repliedToCommentId) {
              return {
                ...accumuletedComment,
                replies: [...accumuletedComment.replies, comment],
              };
            }

            return {
              ...accumuletedComment,
              replies: [],
            };
          });

          return newAcc;
        }

        return [...acc, { ...comment, replies: [] }];
      }, [] as Array<ICommentsWithReplies>);

      return {
        ...state,
        comments: parsedCommentsWithReplies,
      };
    }
    default:
      return state;
  }
};
export default CommentsReducer;
