import { CommentsActionsTypes } from 'state_management/actions/comments/actionTypes';
import CommentsReducer, { initialState } from './comments.reducer';
import {
  closeEditCommentDialog,
  selectComment,
  unselectComment,
} from 'state_management/actions/comments/comments.actions';
import { commentsListMock } from 'mocks/comments.mock';

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
      isEditing: false,
    });
  });

  test(CommentsActionsTypes.UNSELECT_COMMENT, () => {
    const action = unselectComment();
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
