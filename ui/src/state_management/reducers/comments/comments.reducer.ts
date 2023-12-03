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
      // ! I could put this directly on db.json but it would make its structure more complex
      // ! since the challenge is for the UI part I tried to keep most of the logic here
      // ! even if I know this is not the best approach
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
    case CommentsActionsTypes.CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, { ...action.newComment, replies: [] }],
      };
    default:
      return state;
  }
};
export default CommentsReducer;
