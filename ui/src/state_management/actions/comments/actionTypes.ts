import { AxiosErrorPayload, AxiosRequestPayload, AxiosSuccessPayload } from 'modals/axios/Modals';
import { IComment } from 'modals/comments/Modals';

export enum CommentsActionsTypes {
  GET_COMMENT_BY_POST_ID = 'GET_COMMENT_BY_POST_ID',
  GET_COMMENT_BY_POST_ID_SUCCESS = 'GET_COMMENT_BY_POST_ID_SUCCESS',
  GET_COMMENT_BY_POST_ID_FAIL = 'GET_COMMENT_BY_POST_ID_FAIL',
  CREATE_COMMENT = 'CREATE_COMMENT',
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

export type CommentsActions =
  | GetCommentsByPostIdAction
  | GetCommentsByPostIdActionSuccess
  | GetCommentsByPostIdActionFail
  | CreateCommentAction;
