import { commentsListMock } from 'mocks/comments.mock';
import { CommentsActionsTypes } from './actionTypes';
import { createComment, getCommentsByPostId, selectComment } from './comments.actions';

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
    expect(createComment(commentsListMock[0])).toEqual({
      newComment: commentsListMock[0],
      type: CommentsActionsTypes.GET_COMMENT_BY_POST_ID,
    });
    expect(selectComment(commentsListMock[0])).toEqual({
      selectComment: commentsListMock[0],
      type: CommentsActionsTypes.SELECT_COMMENT,
    });
  });
});
