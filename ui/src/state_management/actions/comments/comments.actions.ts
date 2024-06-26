import { IComment } from 'modals/comments/Modals';
import {
  CloseEditCommentDialogAction,
  CommentsActionsTypes,
  CreateCommentAction,
  DeleteCommentAction,
  EditCommentAction,
  GetCommentsByPostIdAction,
  OpenEditCommentDialogAction,
  SelectCommentAction,
  UnselectCommentAction,
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

export const openEditCommentDialog = (comment: ICommentsWithReplies): OpenEditCommentDialogAction => {
  return {
    isEditing: true,
    selectedComment: comment,
    type: CommentsActionsTypes.OPEN_EDIT_COMMENT_DIALOG,
  };
};

export const selectComment = (comment: ICommentsWithReplies): SelectCommentAction => {
  return {
    selectedComment: comment,
    type: CommentsActionsTypes.SELECT_COMMENT,
  };
};

export const unselectComment = (): UnselectCommentAction => {
  return {
    selectedComment: null,
    type: CommentsActionsTypes.UNSELECT_COMMENT,
  };
};

export const editComment = (commentId: string, newText: string, commentReplyId?: string): EditCommentAction => {
  return {
    commentId,
    newText,
    commentReplyId,
    type: CommentsActionsTypes.EDIT_COMMENT,
  };
};

export const deleteComment = (commentId: string, commentReplyId?: string): DeleteCommentAction => {
  return {
    commentId,
    commentReplyId,
    type: CommentsActionsTypes.DELETE_COMMENT,
  };
};
