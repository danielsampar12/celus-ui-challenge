import { commentsListMock } from 'mocks/comments.mock';
import { CommentsActionsTypes } from './actionTypes';
import { createComment, deleteComment, editComment, getCommentsByPostId, selectComment } from './comments.actions';

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
    expect(editComment(commentsListMock[0].id, 'teste')).toEqual({
      comments: commentsListMock.map((comment) =>
        comment.id === commentsListMock[0].id ? { ...comment, text: 'teste' } : comment,
      ),
      type: CommentsActionsTypes.EDIT_COMMENT,
    });
    expect(deleteComment(commentsListMock[0].id)).toEqual({
      comments: commentsListMock.filter((comment) => comment.id !== commentsListMock[0].id),
      type: CommentsActionsTypes.DELETE_COMMENT,
    });
  });
});
