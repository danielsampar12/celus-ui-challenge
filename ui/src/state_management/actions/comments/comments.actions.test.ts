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
  });

  test('createComment', () => {
    expect(createComment(commentsListMock[0])).toEqual({
      newComment: commentsListMock[0],
      type: CommentsActionsTypes.CREATE_COMMENT,
    });
  });

  test('selectComment', () => {
    expect(selectComment(commentsListMock[0])).toEqual({
      selectedComment: commentsListMock[0],
      type: CommentsActionsTypes.SELECT_COMMENT,
    });
  });

  test('editComment', () => {
    expect(editComment(commentsListMock[0].id, 'teste')).toEqual({
      commentId: commentsListMock[0].id,
      commentReplyId: undefined,
      newText: 'teste',
      type: CommentsActionsTypes.EDIT_COMMENT,
    });
  });

  test('deleteComment', () => {
    expect(deleteComment(commentsListMock[0].id)).toEqual({
      commentId: commentsListMock[0].id,
      commentReplyId: undefined,
      type: CommentsActionsTypes.DELETE_COMMENT,
    });
  });
});
