import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import Comment from './Comment';
import { commentsListMock } from 'mocks/comments.mock';

describe('Comment', () => {
  test('renders Comment', () => {
    render(
      <Provider store={store}>
        <Comment comment={commentsListMock[0]} />
      </Provider>,
    );

    expect(screen.getByText(commentsListMock[0].text)).toBeInTheDocument();
    expect(screen.getByText(commentsListMock[0].username)).toBeInTheDocument();
  });
});
