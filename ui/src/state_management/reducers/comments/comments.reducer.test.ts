import CommentsReducer, { initialState } from './comments.reducer';

// TODO

describe('Comments reducer', () => {
  test('default', () => {
    expect(CommentsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(CommentsReducer(undefined, {} as never)).toEqual(initialState);
  });
});
