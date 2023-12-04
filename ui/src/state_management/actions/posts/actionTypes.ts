import { AxiosErrorPayload, AxiosRequestPayload, AxiosSuccessPayload } from 'modals/axios/Modals';
import { IPost } from 'modals/posts/Modals';

export enum PostsActionTypes {
  GET_ALL_POSTS = 'GET_ALL_POSTS',
  GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
  GET_ALL_POSTS_FAIL = 'GET_ALL_POSTS_FAIL',
  GET_POST_BY_ID = 'GET_POST_BY_ID',
  GET_POST_BY_ID_SUCCESS = 'GET_POST_BY_ID_SUCCESS',
  GET_POST_BY_ID_FAIL = 'GET_POST_BY_ID_FAIL',
  CLOSE_POST_DIALOG = 'CLOSE_POST_DIALOG',
  SEARCH_POSTS = 'SEARCH_POSTS',
  SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS',
  SEARCH_POSTS_FAIL = 'SEARCH_POSTS_FAIL',
}

export interface GetAllPostsAction extends AxiosRequestPayload {
  type: PostsActionTypes.GET_ALL_POSTS;
}

export interface GetAllPostsActionSuccess
  extends AxiosSuccessPayload<Array<IPost>, PostsActionTypes.GET_ALL_POSTS_SUCCESS, GetAllPostsAction> {
  type: PostsActionTypes.GET_ALL_POSTS_SUCCESS;
}

export interface GetAllPostsActionFail
  extends AxiosErrorPayload<PostsActionTypes.GET_ALL_POSTS_FAIL, GetAllPostsAction> {
  type: PostsActionTypes.GET_ALL_POSTS_FAIL;
}

export interface GetPostByIdAction extends AxiosRequestPayload {
  type: PostsActionTypes.GET_POST_BY_ID;
}

export interface GetPostByIdActionSuccess
  extends AxiosSuccessPayload<IPost, PostsActionTypes.GET_POST_BY_ID_SUCCESS, GetPostByIdAction> {
  type: PostsActionTypes.GET_POST_BY_ID_SUCCESS;
}

export interface GetPostByIdActionFail
  extends AxiosErrorPayload<PostsActionTypes.GET_POST_BY_ID_FAIL, GetPostByIdAction> {
  type: PostsActionTypes.GET_POST_BY_ID_FAIL;
}

export interface CloseDialogAction {
  type: PostsActionTypes.CLOSE_POST_DIALOG;
}

export interface SearchPostsAction extends AxiosRequestPayload {
  type: PostsActionTypes.SEARCH_POSTS;
}

export interface SearchPostsActionSuccess
  extends AxiosSuccessPayload<Array<IPost>, PostsActionTypes.SEARCH_POSTS_SUCCESS, SearchPostsAction> {
  type: PostsActionTypes.SEARCH_POSTS_SUCCESS;
}

export interface SearchPostsActionFail
  extends AxiosErrorPayload<PostsActionTypes.SEARCH_POSTS_FAIL, SearchPostsAction> {
  type: PostsActionTypes.SEARCH_POSTS_FAIL;
}

export type PostsActions =
  | GetAllPostsAction
  | GetAllPostsActionSuccess
  | GetAllPostsActionFail
  | GetPostByIdAction
  | GetPostByIdActionSuccess
  | GetPostByIdActionFail
  | CloseDialogAction
  | SearchPostsAction
  | SearchPostsActionSuccess
  | SearchPostsActionFail;
