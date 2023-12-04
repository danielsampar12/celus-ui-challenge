import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import CommentsList from './CommentsList';
import { commentsListMock } from 'mocks/comments.mock';

describe('CommentsList', () => {
  test('renders CommentsList', () => {
    render(
      <Provider store={store}>
        <CommentsList comments={commentsListMock} />
      </Provider>,
    );
    expect(screen.getByText(`Comments (${commentsListMock.length})`)).toBeInTheDocument();

    if (commentsListMock.length) {
      expect(screen.getByText(commentsListMock[0].text)).toBeInTheDocument();
    }
  });
});
