import { CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';
import CommentsReducer, { initialState } from './comments.reducer';
import { closeEditCommentDialog, selectComment } from 'state_management/actions/comments/comments.actions';
import { commentsListMock } from 'mocks/comments.mock';

// TODO

describe('Comments reducer', () => {
  test('default', () => {
    expect(CommentsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(CommentsReducer(undefined, {} as never)).toEqual(initialState);
  });

  test(CommentsActionsTypes.CLOSE_EDIT_COMMENT_DIALOG, () => {
    const action = closeEditCommentDialog();
    expect(CommentsReducer(initialState, action)).toEqual({
      ...initialState,
      selectedComment: null,
    });
  });
  test(CommentsActionsTypes.SELECT_COMMENT, () => {
    const action = selectComment(commentsListMock[0]);
    expect(CommentsReducer(initialState, action)).toEqual({
      ...initialState,
      selectedComment: commentsListMock[0],
    });
  });
});
