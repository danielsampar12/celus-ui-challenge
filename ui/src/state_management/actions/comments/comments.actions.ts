import { CommentsActionsTypes, GetCommentsByPostIdAction } from './actionTypes';

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
