import { IComment } from 'modals/comments/Modals';
import { CommentsActionsTypes, CreateCommentAction, GetCommentsByPostIdAction } from './actionTypes';

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
