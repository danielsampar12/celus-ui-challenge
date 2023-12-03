import { IComment } from 'modals/comments/Modals';
import { CommentsActions, CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';

export type ICommentsWithReplies = {
  replies: Array<IComment>;
} & IComment;

export interface CommentsState {
  comments: Array<ICommentsWithReplies>;
  selectedComment: ICommentsWithReplies | null;
}

export const initialState: CommentsState = {
  comments: [],
  selectedComment: null,
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
    case CommentsActionsTypes.CLOSE_EDIT_COMMENT_DIALOG:
      return {
        ...state,
        selectedComment: null,
      };
    case CommentsActionsTypes.SELECT_COMMENT:
      return {
        ...state,
        selectedComment: action.selectedComment,
      };
    case CommentsActionsTypes.EDIT_COMMENT: {
      const newComments = state.comments.map((comment) =>
        comment.id === action.commentId ? { ...comment, text: action.newText } : comment,
      );
      return {
        ...state,
        comments: newComments,
      };
    }
    default:
      return state;
  }
};
export default CommentsReducer;
