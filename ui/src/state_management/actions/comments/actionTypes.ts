import { AxiosErrorPayload, AxiosRequestPayload, AxiosSuccessPayload } from 'modals/axios/Modals';
import { IComment } from 'modals/comments/Modals';
import { ICommentsWithReplies } from 'state_management/reducers/comments/comments.reducer';

export enum CommentsActionsTypes {
  GET_COMMENT_BY_POST_ID = 'GET_COMMENT_BY_POST_ID',
  GET_COMMENT_BY_POST_ID_SUCCESS = 'GET_COMMENT_BY_POST_ID_SUCCESS',
  GET_COMMENT_BY_POST_ID_FAIL = 'GET_COMMENT_BY_POST_ID_FAIL',
  CREATE_COMMENT = 'CREATE_COMMENT',
  CLOSE_EDIT_COMMENT_DIALOG = 'CLOSE_EDIT_COMMENT_DIALOG',
  OPEN_EDIT_COMMENT_DIALOG = 'OPEN_EDIT_COMMENT_DIALOG',
  SELECT_COMMENT = 'SELECT_COMMENT',
  EDIT_COMMENT = 'EDIT_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
}

export interface GetCommentsByPostIdAction extends AxiosRequestPayload {
  type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID;
}

export interface GetCommentsByPostIdActionSuccess
  extends AxiosSuccessPayload<
    Array<IComment>,
    CommentsActionsTypes.GET_COMMENT_BY_POST_ID_SUCCESS,
    GetCommentsByPostIdAction
  > {
  type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID_SUCCESS;
}

export interface GetCommentsByPostIdActionFail
  extends AxiosErrorPayload<CommentsActionsTypes.GET_COMMENT_BY_POST_ID_FAIL, GetCommentsByPostIdAction> {
  type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID_FAIL;
}

// no need to create success or fail since it's just state management
export interface CreateCommentAction {
  newComment: IComment;
  type: CommentsActionsTypes.CREATE_COMMENT;
}

export interface CloseEditCommentDialogAction {
  type: CommentsActionsTypes.CLOSE_EDIT_COMMENT_DIALOG;
}

export interface OpenEditCommentDialogAction {
  isEditing: boolean;
  selectedComment: ICommentsWithReplies;
  type: CommentsActionsTypes.OPEN_EDIT_COMMENT_DIALOG;
}

export interface SelectCommentAction {
  selectedComment: ICommentsWithReplies;
  type: CommentsActionsTypes.SELECT_COMMENT;
}

export interface EditCommentAction {
  commentId: string;
  newText: string;
  type: CommentsActionsTypes.EDIT_COMMENT;
}

export interface DeleteCommentAction {
  commentId: string;
  type: CommentsActionsTypes.DELETE_COMMENT;
}

export type CommentsActions =
  | GetCommentsByPostIdAction
  | GetCommentsByPostIdActionSuccess
  | GetCommentsByPostIdActionFail
  | CreateCommentAction
  | CloseEditCommentDialogAction
  | SelectCommentAction
  | EditCommentAction
  | DeleteCommentAction
  | OpenEditCommentDialogAction;
