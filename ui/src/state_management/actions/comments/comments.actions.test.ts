import { CommentsActionsTypes } from './actionTypes';
import { getCommentsByPostId } from './comments.actions';

describe('Comments actions', () => {
  test('getCommentsByPostId', () => {
    expect(getCommentsByPostId('3747f14a-083c-467c-af4c-48a29fc965fe')).toEqual({
      payload: {
        request: {
          method: 'get',
          url: '/comments?postId=3747f14a-083c-467c-af4c-48a29fc965fe',
        },
      },
      type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID,
    });
  });
});
