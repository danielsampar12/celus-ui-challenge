import { IComment } from 'modals/comments/Modals';
import {
  CloseEditCommentDialogAction,
  CommentsActionsTypes,
  CreateCommentAction,
  DeleteCommentAction,
  EditCommentAction,
  GetCommentsByPostIdAction,
  SelectCommentAction,
} from './actionTypes';
import { ICommentsWithReplies } from 'state_management/reducers/comments/comments.reducer';

export const getCommentsByPostId = (postId: string): GetCommentsByPostIdAction => {
  return {
    type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID,
    payload: {
      request: {
        method: 'get',
        url: `/comments?postId=${postId}`,
      },
    },
  };
};

export const createComment = (comment: IComment): CreateCommentAction => {
  return {
    newComment: comment,
    type: CommentsActionsTypes.CREATE_COMMENT,
  };
};

export const closeEditCommentDialog = (): CloseEditCommentDialogAction => {
  return {
    type: CommentsActionsTypes.CLOSE_EDIT_COMMENT_DIALOG,
  };
};

export const selectComment = (comment: ICommentsWithReplies): SelectCommentAction => {
  return {
    selectedComment: comment,
    type: CommentsActionsTypes.SELECT_COMMENT,
  };
};

export const editComment = (commentId: string, newText: string): EditCommentAction => {
  return {
    commentId,
    newText,
    type: CommentsActionsTypes.EDIT_COMMENT,
  };
};

export const deleteComment = (commentId: string): DeleteCommentAction => {
  return {
    commentId,
    type: CommentsActionsTypes.DELETE_COMMENT,
  };
};
