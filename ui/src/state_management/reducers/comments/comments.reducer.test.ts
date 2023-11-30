import { CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';
import CommentsReducer, { initialState } from './comments.reducer';
import { getCommentsByPostId } from 'state_management/actions/comments/comments.actions';
import { commentsListMock } from 'mocks/comments.mock';

describe('Comments reducer', () => {
  test('default', () => {
    expect(CommentsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(CommentsReducer(undefined, {} as never)).toEqual(initialState);
  });

  test(CommentsActionsTypes.GET_COMMENT_BY_POST_ID_SUCCESS, () => {
    const action = getCommentsByPostId('3747f14a-083c-467c-af4c-48a29fc965fe');

    expect(CommentsReducer(initialState, action)).toEqual({
      ...initialState,
      comments: commentsListMock,
    });
  });

  test(CommentsActionsTypes.GET_COMMENT_BY_POST_ID_FAIL, () => {
    const action = getCommentsByPostId('blablabla');

    expect(CommentsReducer(initialState, action)).toEqual(initialState);
  });
});
